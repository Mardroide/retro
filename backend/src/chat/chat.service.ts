import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { wsNameEvents } from 'src/constants/wsNameEvents';
import { ChatDataDto } from './dto/chat.dto';
import { ChatMessageDto } from './dto/chat-message.dto';
import { ChatUserDto } from './dto/chat-user-dto';
import { generateRoomId } from 'src/utils/generateRoomId';

@Injectable()
export class ChatService {
  create(socket: Socket, data: ChatDataDto) {
    data.roomId = generateRoomId();
    data.onlineUsers = 1;

    socket.emit(wsNameEvents.CREATE_CHAT, data);
  }

  leave(socket: Socket, data: ChatUserDto) {
    socket.leave(data.roomId);
  }

  delete(socket: Socket, data: ChatDataDto) {
    if (data.onlineUsers === 0) {
      socket.disconnect();
    }
  }

  createMessage(socket: Socket, data: ChatMessageDto) {
    socket.to(data.roomId).emit(wsNameEvents.CREATE_MESSAGE, data);
  }
}
