import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { wsNameEvents } from 'src/constants/wsNameEvents';
import { generateRoomId } from 'src/utils/generateRoomId';
import { ChatUserDto } from './dto/chat-user-dto';

@Injectable()
export class ChatService {
  create(socket: Socket) {
    const roomId = generateRoomId();

    socket.join(roomId);
    socket.emit(wsNameEvents.CREATE_CHAT, { roomId, onlineUsers: 1 });
  }

  leave(socket: Socket, data: ChatUserDto) {
    socket.leave(data.roomId);
  }

  delete(socket: Socket) {
    // TODO: handle delete chat
  }

  createMessage(socket: Socket) {
    // TODO: handle create message
  }
}
