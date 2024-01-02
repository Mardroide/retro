export enum wsNameEvents {
  CREATE_CHAT = 'createChat',
  DELETE_CHAT = 'deleteChat',
  LEAVE_CHAT = 'leaveChat',
  CREATE_MESSAGE = 'createMessage',
}

export enum avaibleColors {
  PURPLE = '#A569BD',
  BLUE = '#5DADE2',
  GREEN = '#48C9B0',
  YELLOW = '#F4D03F',
  ORANGE = '#F39C12',
  GREY = '#BDC3C7',
}

export type SocketData = {
  roomId: string;
  onlineUsers: number;
}

export const commandsInfo = [
  {
    command: "help",
    description: "Display this help message",
  },
  {
    command: "join",
    description: "Join a session with a given code",
  },
  {
    command: "leave",
    description: "Leave the current session",
  },
  {
    command: "msg",
    description: "Send a message to everyone in the session",
  },
];