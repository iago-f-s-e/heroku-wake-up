import { AppError } from './types';

export class NotFoundException extends Error implements AppError {
  constructor(entity: string) {
    super(`${entity} is not found`);
    this.name = 'NotFoundException';
  }
}
