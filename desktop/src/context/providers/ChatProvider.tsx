import { useEffect, useState } from "react";
import { ChatContext } from "../ChatContext";
import { Socket, io } from "socket.io-client";

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [roomId, setRoomId] = useState<string>(null);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const [userColor, setUserColor] = useState<string>(null);
  const [userId, setUserId] = useState<number>(null);
  const [socket, setSocket] = useState<Socket>(null);

  useEffect(() => {
    const tempSocket = io('http://localhost:3000', {
      withCredentials: true,
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true
    })

    setSocket(tempSocket);
  }, [])

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
