import { createContext } from "react";

export interface IChatContext {
  sessionId: string;
  setSessionId: (sessionId: string) => void;
  onlineUsers: number;
  setOnlineUsers: (onlineUsers: number) => void;
}

export const ChatContext = createContext<IChatContext>({
  sessionId: "",
  setSessionId: (sessionId: string) => 'XXXX-XXXX-XXXX',
  onlineUsers: 0,
  setOnlineUsers: (onlineUsers: number) => 0,
});