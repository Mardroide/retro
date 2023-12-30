import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionsService {
  create() {
    return 'This action adds a new session';
  }

  findSession() {
    return `This action returns all sessions`;
  }

  findAll() {
    return `This action returns all sessions`;
  }

  update(id: string) {
    return `This action updates a #${id} session`;
  }

  remove(id: string) {
    return `This action removes a #${id} session`;
  }
}
