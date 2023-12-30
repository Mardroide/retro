import { generateRandomSessionCode } from "../../utils/sessionCodeGenerator";
import { io } from "socket.io-client";

const socket = io('http://localhost:3000');

export const createSession = async () => {
  const sessionId = generateRandomSessionCode();
  socket.emit("createSession", sessionId);
  return sessionId;
};

export const createSessionMessage = async (message: string, sessionId: string) => {
  socket.emit("createSessionMessage", message, sessionId);
  return { message, sessionId };
};
