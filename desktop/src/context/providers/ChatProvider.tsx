import { useState } from "react";
import { ChatContext } from "../ChatContext";

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [sessionId, setSessionId] = useState<string>("");
  const [onlineUsers, setOnlineUsers] = useState<number>(0);

  return (
    <ChatContext.Provider
      value={{ sessionId, setSessionId, onlineUsers, setOnlineUsers }}
    >
      {children}
    </ChatContext.Provider>
  );
};
