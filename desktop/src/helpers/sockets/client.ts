import { generateRandomSessionCode } from "../../utils/sessionCodeGenerator";
import { useChatContext } from "../../hooks/useChatContext";
import { io } from "socket.io-client";

const socket = io('http://localhost:3000');
const context = useChatContext();

export const createSession = async () => {
  const sessionId = generateRandomSessionCode();
  socket.emit("createSession", sessionId);
  return sessionId;
};

export const createSessionMessage = async (message: string, sessionId: string) => {
  socket.emit("createSessionMessage", message, sessionId);
  return { message, sessionId };
};

export const joinSession = async (sessionId: string) => {
  socket.emit("joinSession", sessionId);
  context.setSessionIdentifier(sessionId);
  context.setCurrentUsers(1);
  return sessionId;
};

export const leaveSession = async (sessionId: string) => {
  socket.emit("leaveSession", sessionId);
  context.resetSession();
  return sessionId;
};
