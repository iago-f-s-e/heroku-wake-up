import { NotFoundException } from '@src/errors/not-found-exception';
import { Message } from '@src/server/config';
import { AppService } from '@src/services';

export async function deleteApp(message: Message): Promise<void> {
  const service = new AppService();

  try {
    service.sendMessage(message.chat.id, 'Deletando app');

    await service.deleteApp(message);

    service.sendMessage(message.chat.id, 'Sucesso!');
  } catch (error) {
    if (error instanceof NotFoundException) {
      return service.sendMessage(message.chat.id, 'App não encontrado');
    }

    return service.sendMessage(message.chat.id, 'Falta o nome');
  }
}
