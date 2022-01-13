import 'dotenv/config';
import 'reflect-metadata';

import { App } from './app';
import { listCommands } from './app/list-commands';
import { authMessage } from './auth';
import * as database from './database';
import { Message, server } from './server/config';

database
  .connect()
  .then(() => {
    server.on('message', mes => {
      const message = mes as Message;

      try {
        const command = authMessage(message);

        return App(command, message);
      } catch (err) {
        return listCommands(message.chat.id);
      }
    });
  })
  .catch(err => console.log(err));
