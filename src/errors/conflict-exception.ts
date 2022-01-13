import { AppError } from './types';

export class ConflictException extends Error implements AppError {
  constructor(message: string) {
    super(message);
    this.name = 'ConflictException';
  }
}
