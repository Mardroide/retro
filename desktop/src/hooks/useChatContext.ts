import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const useChatContext = () => {
  const { sessionId, setSessionId, onlineUsers, setOnlineUsers } =
    useContext(ChatContext);

  const setCurrentUsers = () => {
    setOnlineUsers(onlineUsers);
  };

  const setSessionIdentifier = () => {
    setSessionId(sessionId);
  };

  return {
    sessionId,
    onlineUsers,
    setCurrentUsers,
    setSessionIdentifier,
  };
};
