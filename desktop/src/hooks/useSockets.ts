import { useCallback, useEffect } from "react";
import { useChatContext } from "./useChatContext";
import { io } from "socket.io-client";
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
    setRoomSocket
  } = useChatContext();

  const connectChatRoom = useCallback(() => {
    const tempSocket = io('http://localhost:3000', {
      withCredentials: true,
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true
    })

    setRoomSocket(tempSocket);
  }, []);

  const disconnectChatRoom = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    if (!socket) return;

    socket.on(wsNameEvents.CREATE_CHAT, (data: SocketData) => {
      console.log(data);
      setUserRoomId(data.roomId);
      setCurrentUsers(data.onlineUsers);
    })

    socket.on(wsNameEvents.DELETE_CHAT, (data: SocketData) => {
      if (data.onlineUsers === 0) {
        resetSession();
      }
    })

    socket.on(wsNameEvents.LEAVE_CHAT, (data: SocketData) => {
      resetSession();
    })

    socket.on(wsNameEvents.CREATE_MESSAGE, (data: SocketData) => {
      // TODO: handle create message
    })
  }, [socket])

  return {
    connectChatRoom,
    disconnectChatRoom,
  }
};