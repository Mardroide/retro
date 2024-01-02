import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Socket } from 'socket.io';
import { wsNameEvents } from 'src/constants/wsNameEvents';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly chatService: ChatService) {}

  handleConnection(socket: Socket) {
    console.log(`Client connected: ${socket.id}`);
  }

  handleDisconnect(socket: Socket) {
    console.log(`Client disconnected: ${socket.id}`);
  }

  @SubscribeMessage(wsNameEvents.CREATE_CHAT)
  create(socket: Socket) {
    return this.chatService.create(socket);
  }

  @SubscribeMessage(wsNameEvents.LEAVE_CHAT)
  leave(socket: Socket, @MessageBody() data: any) {
    return this.chatService.leave(socket, data);
  }

  @SubscribeMessage(wsNameEvents.DELETE_CHAT)
  delete(socket: Socket) {
    return this.chatService.delete(socket);
  }

  @SubscribeMessage(wsNameEvents.CREATE_MESSAGE)
  createMessage(socket: Socket) {
    return this.chatService.createMessage(socket);
  }
}
