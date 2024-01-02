import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Socket } from 'socket.io';
import { wsNameEvents, cachePrefixes } from 'src/common/constants/constants';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { UseInterceptors } from '@nestjs/common';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly chatService: ChatService) {}

  handleConnection(socket: Socket) {
    console.log(`Client connected: ${socket.id}`);
  }

  handleDisconnect(socket: Socket) {
    console.log(`Client disconnected: ${socket.id}`);
  }

  @CacheKey(cachePrefixes.CHAT_ROOM)
  @UseInterceptors(CacheInterceptor)
  @SubscribeMessage(wsNameEvents.CREATE_CHAT)
  create(socket: Socket) {
    return this.chatService.create(socket);
  }

  @SubscribeMessage(wsNameEvents.JOIN_CHAT)
  join(socket: Socket, @MessageBody() data: any) {
    return this.chatService.join(socket, data);
  }

  @CacheKey(cachePrefixes.CHAT_ROOM)
  @UseInterceptors(CacheInterceptor)
  @SubscribeMessage(wsNameEvents.LEAVE_CHAT)
  leave(socket: Socket, @MessageBody() data: any) {
    return this.chatService.leave(socket, data);
  }
}
