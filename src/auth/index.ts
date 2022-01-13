import { Commands } from '@src/app';
import { commands } from '@src/constants';
import { Message } from '@src/server/config';

export function authMessage(message: Message): Commands {
  if (!message.entities) throw new Error('Invalid command command');

  const commandTester = message.text.split(' ')[0].replace('/', '');

  const command = commands.find(command => command === commandTester);

  if (!command) throw new Error('Invalid command command');

  return command;
}
