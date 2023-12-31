import { useState } from "react";
import { ChatContext } from "../ChatContext";
import { Socket } from "socket.io-client";

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [roomId, setRoomId] = useState<string>(null);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const [userColor, setUserColor] = useState<string>(null);
  const [userId, setUserId] = useState<number>(null);
  const [socket, setSocket] = useState<Socket>(null);

  return (
    <ChatContext.Provider
      value={{
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
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
