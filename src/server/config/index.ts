import TelegramBot from 'node-telegram-bot-api';

import * as Settings from '../settings';

type From = {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name: string;
  language_code: string;
};

type Chat = {
  id: number;
  first_name: string;
  last_name: string;
  type: 'private' | 'public';
};

type Entity = {
  offset: number;
  length: number;
  type: 'bot_command' | 'hashtag' | 'mention' | 'pre' | 'code';
};

export type Message = {
  message_id: number;
  from: From;
  chat: Chat;
  date: number;
  text: string;
  entities?: Entity[];
};

export const server = new TelegramBot(Settings.AUTH_KEY_SECURITY, { polling: true });
