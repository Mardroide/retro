import { createContext } from "react";
import { Socket } from "socket.io-client";

export interface IChatContext {
  roomId: string;
  setRoomId: (sessionId: string) => void;
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
  roomId: "XXXX-XXXX-XXXX",
  setRoomId: (sessionId: string) => '',
  onlineUsers: 0,
  setOnlineUsers: (onlineUsers: number) => 0,
  userColor: "#5DADE2",
  setUserColor: (userColor: string) => '',
  userId: 0,
  setUserId: (userId: number) => 0,
  socket: null,
  setSocket: (socket: Socket) => null,
});