import { Message } from '@src/server/config';
import { deleteApp } from './delete-app';
import { listApp } from './list-app';
import { listCommands } from './list-commands';
import { newApp } from './new-app';
import { wakeUp } from './wake-up';

export type Commands = 'commands' | 'newApp' | 'wakeUp' | 'listApp' | 'delApp';

const app: { [key in Commands]: (message: Message) => void } = {
  commands: (message: Message) => listCommands(message.chat.id),
  newApp: (message: Message) => newApp(message),
  delApp: (message: Message) => deleteApp(message),
  listApp: (message: Message) => listApp(message),
  wakeUp: (message: Message) => wakeUp(message)
};

export function App(command: Commands, message: Message): void {
  return app[command](message);
}
