import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const useChatContext = () => {
  const {
    roomId,
    setRoomId,
    onlineUsers,
    setOnlineUsers,
    userColor,
    setUserColor,
    userId,
    setUserId,
    socket,
    setSocket,
  } = useContext(ChatContext);

  function setCurrentUsers(count: number) {
    setOnlineUsers(count);
  }

  function setUserRoomId(id: string | null) {
    setRoomId(id);
  }

  function setNewUserColor(color: string | null) {
    setUserColor(color);
  }

  function setNewUserId(id: number | null) {
    setUserId(id);
  }

  function resetSession() {
    setRoomId(null);
    setOnlineUsers(0);
  }

  return {
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
  };
};
