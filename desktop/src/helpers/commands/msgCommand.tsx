import { useSocketsEvents } from "../../hooks/useSocketsEvents";

export const msgCommand = (
  roomId: string,
  message: string,
  userId: number,
) => {
  const { sendRoomMessage } = useSocketsEvents();

  if (!roomId) return `You must be in a room to send a message!`;
  sendRoomMessage(roomId, message, userId);
  return `Message sent!`;
};