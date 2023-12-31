import { useChatContext } from "../hooks/useChatContext";
import { CommandProp } from "../components/CommandProp";
import { UserColorBadge } from "../components/UserColorBadge";

export const ChatPage = () => {
  const chat = useChatContext();
  console.log(chat)

  return (
    <div className="flex justify-between w-full h-full gap-4">
      <div className="flex flex-col w-3/4 h-full justify-between pr-4 border-r-2 border-green-800">
        <div className="flex flex-col mb-5">
          <h1 className="text-4xl font-bold">{chat.roomId}</h1>
          <div className="flex items-center gap-2 text-green-700 fill-green-700">
            <UserColorBadge userColor={chat.userColor} />
            <p>Current users: {chat.onlineUsers}/5</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse w-1/4 h-full justify-between">
        <CommandProp />
      </div>
    </div>
  );
};
