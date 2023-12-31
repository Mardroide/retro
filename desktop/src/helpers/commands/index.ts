import { createCommand } from "./createCommand";
import { helpCommand } from "./helpCommand";
import { joinCommand } from "./joinCommand";
import { leaveCommand } from "./leaveCommand";
import { msgCommand } from "./msgCommand";

export const Commands = {
  help: () => helpCommand(),
  join: (session: string) => joinCommand(session),
  leave: (session: string) => leaveCommand(session),
  create: () => createCommand(),
  msg: (roomId: string, message: string, userId: number) =>
    msgCommand(roomId, message, userId),
  whoami: `I don't know yet`,
};
