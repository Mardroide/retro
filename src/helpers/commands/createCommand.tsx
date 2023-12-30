import { createSession } from "../sockets/client";

export const createCommand = async () => {
  const code = await createSession();
  return `Your new session id is: ${code}`
};