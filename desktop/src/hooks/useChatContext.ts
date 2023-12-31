import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const useChatContext = () => {
  const { sessionId, setSessionId, onlineUsers, setOnlineUsers } =
    useContext(ChatContext);

  function setCurrentUsers(count: number) {
    setOnlineUsers(count);
  }

  function setSessionIdentifier(id: string | null) {
    setSessionId(id);
  }

  function resetSession() {
    setSessionId(null);
    setOnlineUsers(0);
  }

  return {
    sessionId,
    onlineUsers,
    setCurrentUsers,
    setSessionIdentifier,
    resetSession,
  };
};
