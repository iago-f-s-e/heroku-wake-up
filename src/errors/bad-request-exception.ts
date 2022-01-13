import { AppError } from './types';

export class BadRequestException extends Error implements AppError {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequestException';
  }
}
