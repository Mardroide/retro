import { createContext } from "react";
import { Socket } from "socket.io-client";

export interface IChatContext {
  roomId: string;
  setRoomId: (roomId: string) => void;
  onlineUsers: number;
  setOnlineUsers: (onlineUsers: number) => void;
  userColor: string;
  setUserColor: (userColor: string) => void;
  userId: number;
  setUserId: (userId: number) => void;
  socket: Socket;
  setSocket: (socket: Socket) => void;
}

export const ChatContext = createContext<IChatContext>({
  roomId: null,
  setRoomId: (roomId: string) => roomId,
  onlineUsers: 0,
  setOnlineUsers: (onlineUsers: number) => onlineUsers,
  userColor: null,
  setUserColor: (userColor: string) => userColor,
  userId: 0,
  setUserId: (userId: number) => userId,
  socket: null,
  setSocket: (socket: Socket) => socket,
});
