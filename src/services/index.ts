import axios from 'axios';
import { BadRequestException } from '@src/errors/bad-request-exception';
import { ConflictException } from '@src/errors/conflict-exception';
import { ExternalException } from '@src/errors/external-exceptions';
import { AppRepository } from '@src/repositories';
import { Message, server } from '@src/server/config';
import { NotFoundException } from '@src/errors/not-found-exception';

export class AppService {
  private readonly repository: AppRepository;

  constructor() {
    this.repository = new AppRepository();
  }

  private async execWakeUp(url: string): Promise<'OK' | 'FAIL'> {
    try {
      const results = await axios.request({
        method: 'GET',
        url,
        timeout: 30000
      });

      if (results.status !== 200) return 'FAIL';

      return 'OK';
    } catch (error) {
      throw new ExternalException(error);
    }
  }

  public sendMessage(id: number, message: string): void {
    if (!message.trim()) return;

    server.sendMessage(id, message);
  }

  public async listAll({ chat }: Message): Promise<void> {
    const message = (await this.repository.find()).map(({ name }) => name).join(', ');

    return this.sendMessage(chat.id, message);
  }

  public async wakeUp({ text }: Message): Promise<void> {
    const [_, name] = text.split(' ');

    if (!name) throw new BadRequestException('The name is missing');

    const app = await this.repository.findByName(name);

    if (!app) throw new NotFoundException('App is not found');

    const results = await this.execWakeUp(app.url);

    if (results !== 'OK') throw new ExternalException('App error');
  }

  public async deleteApp({ text }: Message): Promise<void> {
    const [_, name] = text.split(' ');

    if (!name) throw new BadRequestException('The name is missing');

    const app = await this.repository.findByName(name);

    if (!app) throw new NotFoundException('App is not found');

    await this.repository.delete(name);
  }

  public async create(message: Message) {
    const [_, name, url] = message.text.split(' ');

    if (!name || !url) {
      const missing = !name ? 'name' : 'url';

      throw new BadRequestException(`The ${missing} is missing`);
    }

    const exists = await this.repository.findByName(name.toLowerCase());

    if (exists) throw new ConflictException(`${name} already exists`);

    await this.execWakeUp(url);

    return this.repository.insert(name, url);
  }
}
