import { createCommand } from "./createCommand";
import { helpCommand } from "./helpCommand";
import { joinCommand } from "./joinCommand";
import { msgCommand } from "./msgCommand";

export const Commands = {
  help: () => helpCommand(),
  join: (session: string) => joinCommand(session),
  create: () => createCommand(),
  msg: (sessionId: string, message: string) => msgCommand(sessionId, message),
  whoami: `I don't know yet`,
};
