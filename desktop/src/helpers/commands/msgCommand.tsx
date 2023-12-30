import { createSessionMessage } from "../sockets/client";

export const msgCommand = async (sessionId: string, message: string) => {
  await createSessionMessage(sessionId, message);
  return `Message sent!`
};