import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { SessionsService } from './sessions.service';
import { OnModuleInit } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class SessionsGateway implements OnModuleInit {
  constructor(private readonly sessionsService: SessionsService) {}

  @WebSocketServer()
  public server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('Socket connected: ' + socket.id);

      socket.on('disconnect', () => {
        console.log('Socket disconnected: ' + socket.id);
      });
    });
  }

  @SubscribeMessage('createSession')
  create(@MessageBody() sessionId: string, @ConnectedSocket() socket: Socket) {
    socket.join(sessionId);
    socket.to(sessionId).emit('createSession', sessionId);
    return this.server.listenerCount;
  }

  @SubscribeMessage('findAllSessions')
  findAll() {
    return this.sessionsService.findAll();
  }

  @SubscribeMessage('findSession')
  findOne(@MessageBody() id: number) {
    return this.sessionsService.findOne(id);
  }

  @SubscribeMessage('updateSession')
  update(@MessageBody() sessionId: string, @ConnectedSocket() socket: Socket) {
    return this.sessionsService.update(sessionId, socket);
  }

  @SubscribeMessage('removeSession')
  remove(@MessageBody() id: number) {
    return this.sessionsService.remove(id);
  }
}
