import { BadRequestException } from '@src/errors/bad-request-exception';
import { NotFoundException } from '@src/errors/not-found-exception';
import { Message } from '@src/server/config';
import { AppService } from '@src/services';

export async function wakeUp(message: Message): Promise<void> {
  const service = new AppService();

  try {
    service.sendMessage(message.chat.id, 'Acordando app');

    await service.wakeUp(message);

    service.sendMessage(message.chat.id, 'Sucesso!');
  } catch (error) {
    if (error instanceof NotFoundException) {
      return service.sendMessage(message.chat.id, 'App não encontrado');
    }

    if (error instanceof BadRequestException) {
      return service.sendMessage(message.chat.id, 'Falta o nome');
    }

    return service.sendMessage(message.chat.id, 'Seu app está fora do ar');
  }
}
