import { Message } from '@src/server/config';
import { AppService } from '@src/services';

export async function listApp(message: Message): Promise<void> {
  const service = new AppService();

  try {
    service.sendMessage(message.chat.id, 'Todos os app cadastrados:');

    await service.listAll(message);
  } catch (err) {
    service.sendMessage(message.chat.id, 'Algo de errado aconteceu');
  }
}
