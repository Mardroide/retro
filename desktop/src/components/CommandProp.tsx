import { ReactTerminal } from "react-terminal";
import { useChatContext } from "../hooks/useChatContext";
import { Navigate } from "react-router-dom";
import { commandsInfo } from "../types/types";

export const CommandProp = () => {
  const {
    onlineUsers,
    setCurrentUsers,
    setUserRoomId,
    roomId,
    initSession,
    resetSession,
  } = useChatContext();

  const helpCommand = () => (
    <div className="flex flex-col gap-2">
      <p className="text-white">Available commands:</p>
      <ul>
        {commandsInfo.map(({ command, description }) => (
          <li key={command}>
            <p className="text-white">
              <strong className="text-yellow-200">{command}</strong> -{" "}
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );

  const createCommand = () => {
    const roomId = "XXXX-XXXX-XXXX";
    initSession(roomId);

    return (
      <p className="text-orange-300">
        Your new room code is:
        <strong className="text-orange-500">{roomId}</strong>
      </p>
    );
  };

  const joinCommand = (session: string) => {
    if (roomId !== null && roomId !== session) {
      return <p className="text-red-600">Your are already in a room.</p>;
    }

    setUserRoomId(session);
    setCurrentUsers(onlineUsers + 1);
    return <Navigate to="/chat" />;
  };

  const leaveCommand = () => {
    if (roomId === null) {
      return <p className="text-red-600">You are not in a room.</p>;
    }

    setCurrentUsers(onlineUsers - 1);

    if (onlineUsers === 0) resetSession();
    return <Navigate to="/" />;
  };

  const Commands = {
    help: helpCommand,
    create: createCommand,
    join: joinCommand,
    leave: leaveCommand,
  };

  return (
    <div>
      <ReactTerminal
        commands={Commands}
        themes={{
          "my-custom-theme": {
            themeToolbarColor: "#000000",
            themeColor: "#00FF57",
            themePromptColor: "#00FF57",
          },
        }}
        theme="my-custom-theme"
        prompt="$"
        errorMessage="Command not found."
        showControlBar={false}
        showControlButtons={false}
      />
    </div>
  );
};
