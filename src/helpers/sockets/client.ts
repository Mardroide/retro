import { generateRandomSessionCode } from "../../utils/sessionCodeGenerator";
import { io } from "socket.io-client";

const socket = io();

export const createSession = async () => {
  const sessionId = generateRandomSessionCode();
  socket.emit("createSession", sessionId);
  return sessionId;
};

export const createSessionMessage = async (sessionId: string, message: string) => {
  socket.emit("createMessage", sessionId, message);
  return { sessionId, message };
};
