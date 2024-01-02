import { wsNameEvents } from "../types/types";
import { useChatContext } from "./useChatContext";

export const useSocketsEvents = () => {
  const { socket } = useChatContext();

  const createChatRoom = () => {
    socket?.emit(wsNameEvents.CREATE_CHAT);
  };

  return {
    createChatRoom,
  };
};
