const commandsInfo = [
  {
    command: "help",
    description: "Display this help message",
  },
  {
    command: "join",
    description: "Join a session with a given code",
  },
  {
    command: "leave",
    description: "Leave the current session",
  },
  {
    command: "msg",
    description: "Send a message to everyone in the session",
  },
];

export const helpCommand = () => {
  const info = commandsInfo.map(({ command, description }) => (
    <li key={command}>
      <p className="text-white">
        <strong className="text-yellow-200">{command}</strong> - {description}
      </p>
    </li>
  ));

  return (
    <div className="flex flex-col gap-2">
      <p className="text-white">Available commands:</p>
      <ul>{info}</ul>
    </div>
  );
};