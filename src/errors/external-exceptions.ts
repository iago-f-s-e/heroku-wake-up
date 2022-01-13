import { AppError } from './types';

export class ExternalException extends Error implements AppError {
  constructor(err: unknown) {
    super(`${err}`);
    this.name = 'ExternalException';
  }
}
