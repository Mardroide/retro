import { useCallback, useEffect } from "react";
import { useChatContext } from "./useChatContext";
import { io } from "socket.io-client";
import { wsNameEvents } from "../types/types";

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
    setSocket,
  } = useChatContext();

  const connectChatRoom = useCallback(() => {
    const tempSocket = io("http://localhost:3000", {
      withCredentials: true,
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true
    })

    setSocket(tempSocket);
  }, ["http://localhost:3000"]);

  const disconnectChatRoom = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    if (!socket) return;

    socket.on(wsNameEvents.CREATE_CHAT, (data: any) => {
      setUserRoomId(data.roomId);
    })

    socket.on(wsNameEvents.DELETE_CHAT, (data: any) => {
      if (data.onlineUsers === 0) {
        resetSession();
      }
    })

    socket.on(wsNameEvents.LEAVE_CHAT, (data: any) => {
      resetSession();
    })

    socket.on(wsNameEvents.CREATE_MESSAGE, (data: any) => {
      // TODO: handle create message
    })
  })

  return {
    connectChatRoom,
    disconnectChatRoom,
  }
};