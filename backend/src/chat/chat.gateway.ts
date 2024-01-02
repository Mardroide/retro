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
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { ChatDataDto } from './dto/chat.dto';
import { ChatUserDto } from './dto/chat-user-dto';
import { ChatMessageDto } from './dto/chat-message.dto';

@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
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
  create(socket: Socket, @MessageBody() data: ChatDataDto) {
    console.log('HEllo');
    return this.chatService.create(socket, data);
  }

  @SubscribeMessage(wsNameEvents.LEAVE_CHAT)
  leave(socket: Socket, @MessageBody() data: ChatUserDto) {
    return this.chatService.leave(socket, data);
  }

  @SubscribeMessage(wsNameEvents.DELETE_CHAT)
  delete(socket: Socket, @MessageBody() data: ChatDataDto) {
    return this.chatService.delete(socket, data);
  }

  @SubscribeMessage(wsNameEvents.CREATE_MESSAGE)
  createMessage(socket: Socket, @MessageBody() data: ChatMessageDto) {
    return this.chatService.createMessage(socket, data);
  }
}
