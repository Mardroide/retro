import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class SessionsService {
  create(sessionId: string, socket: Socket) {
    console.log('createSession', sessionId, socket.id);
    return `This action adds a new ${sessionId} socket ${socket}`;
  }

  createMessage(sessionId: string, socket: Socket) {
    console.log('createSessionMessage', sessionId, socket.id);
    return `This action adds a new ${sessionId} socket ${socket}`;
  }

  findAll() {
    return `This action returns all sockets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socket`;
  }

  update(sessionId: string, socket: Socket) {
    return `This action updates a #${sessionId} socket ${socket}`;
  }

  remove(id: number) {
    return `This action removes a #${id} socket`;
  }
}
