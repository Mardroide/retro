import { ReactTerminal } from "react-terminal";
import { Commands } from "../helpers/commands/index";

export const CommandProp = () => {
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
