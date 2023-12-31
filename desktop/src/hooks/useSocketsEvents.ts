import { wsNameEvents } from "../types/types";
import { useChatContext } from "./useChatContext";

export const useSocketsEvents = () => {
  const { socket } = useChatContext();

  const createChatRoom = () => {
    socket?.emit(wsNameEvents.CREATE_CHAT, { roomId: null });
  };

  const sendRoomMessage = (roomId: string, message: string, userId: number) => {
    socket?.emit(wsNameEvents.CREATE_MESSAGE, { roomId, message, userId });
  };

  const deleteChatRoom = (roomId: string) => {
    socket?.emit(wsNameEvents.DELETE_CHAT, { roomId });
  };

  const leaveChatRoom = (roomId: string) => {
    socket?.emit(wsNameEvents.LEAVE_CHAT, { roomId });
  };

  return {
    createChatRoom,
    sendRoomMessage,
    deleteChatRoom,
    leaveChatRoom,
  };
};
