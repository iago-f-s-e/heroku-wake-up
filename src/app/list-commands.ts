import { server } from '@src/server/config';

const message = `
Comandos permitidos

/commands
/newApp
/delApp
/listApp
/wakeUp`;

export function listCommands(id: number): void {
  server.sendMessage(id, message);
}
