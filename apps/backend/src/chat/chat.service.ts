import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { cachePrefixes, wsNameEvents } from 'src/common/constants/constants';
import { generateRoomId } from 'src/common/utils/generateRoomId';
import { chooseRandomColor } from 'src/common/utils/chooseRandomColor';
import { CachingService } from 'src/caching/caching.service';

@Injectable()
export class ChatService {
  constructor(private readonly cachingService: CachingService) {}

  async create(socket: Socket) {
    const roomId = generateRoomId();

    await this.cachingService.setCacheValue(
      `${cachePrefixes.CHAT_ROOM}:${roomId}`,
      roomId,
    );

    socket.join(roomId);
    socket.emit(wsNameEvents.CREATE_CHAT, { roomId, onlineUsers: 1 });
  }

  async join(socket: Socket, data: any) {
    const { roomId } = data;
    const room = await this.cachingService.getCacheValue(
      `${cachePrefixes.CHAT_ROOM}:${roomId}`,
    );

    if (!room) {
      return socket.emit(wsNameEvents.JOIN_CHAT, { error: 'Room not found!' });
    }

    const userColor = chooseRandomColor().color;
    socket.emit(wsNameEvents.JOIN_CHAT, { userColor });
  }

  async leave(socket: Socket, data: any) {
    const { roomId, onlineUsers } = data;

    if (onlineUsers === 0) {
      await this.cachingService.getCacheValue(
        `${cachePrefixes.CHAT_ROOM}:${roomId}`,
      );
      socket.leave(roomId);
    }
  }
}
