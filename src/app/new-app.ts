import { BadRequestException } from '@src/errors/bad-request-exception';
import { Message } from '@src/server/config';
import { AppService } from '@src/services';

export async function newApp(message: Message): Promise<void> {
  const service = new AppService();

  try {
    service.sendMessage(message.chat.id, 'Criando app');

    await service.create(message);

    service.sendMessage(message.chat.id, 'Criado com sucesso');
  } catch (error) {
    console.log(error);

    if (error instanceof BadRequestException) {
      const err = error.message === 'The name is missing' ? 'Falta o nome' : 'Falta a url';

      return service.sendMessage(message.chat.id, err);
    }

    const err = 'Este nome já existe';

    return service.sendMessage(message.chat.id, err);
  }
}
