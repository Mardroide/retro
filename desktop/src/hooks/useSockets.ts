import { useCallback, useEffect } from "react";
import { useChatContext } from "./useChatContext";
import { SocketData, wsNameEvents } from "../types/types";

export const useSockets = () => {
  const {
    roomId,
    onlineUsers,
    userColor,
    userId,
    setCurrentUsers,
    setUserRoomId,
    setNewUserColor,
    setNewUserId,
    resetSession,
    socket,
  } = useChatContext();
  console.log('socket', socket);

  const disconnectChatRoom = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    if (!socket) return;

    socket.on(wsNameEvents.CREATE_CHAT, (data: SocketData) => {
      const { roomId, onlineUsers } = data;
      setUserRoomId(roomId);
      setCurrentUsers(onlineUsers);
    })

    socket.on(wsNameEvents.DELETE_CHAT, (data: SocketData) => {
      // TODO: handle delete chat
    })

    socket.on(wsNameEvents.LEAVE_CHAT, (data: SocketData) => {
      resetSession();
    })

    socket.on(wsNameEvents.CREATE_MESSAGE, (data: SocketData) => {
      // TODO: handle create message
    })
  }, [socket])

  return {
    disconnectChatRoom,
  }
};