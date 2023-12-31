import { useChatContext } from "../hooks/useChatContext";
import { CommandProp } from "../components/CommandProp";

export const ChatPage = () => {
  const chat = useChatContext();

  return (
    <div className="flex justify-between w-full h-full gap-4">
      <div className="flex flex-col w-3/4 h-full justify-between pr-4 border-r-2 border-green-800">
        <div className="flex flex-col mb-5">
          <h1 className="text-4xl font-bold">{chat.sessionId}</h1>
          <p className="text-green-700">People online: {chat.onlineUsers}/5</p>
        </div>
      </div>
      <div className="flex flex-col-reverse w-1/4 h-full justify-between">
        <CommandProp />
      </div>
    </div>
  );
};
