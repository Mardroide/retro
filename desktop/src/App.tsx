import { TerminalContextProvider } from "react-terminal";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { ChatProvider } from "./context/providers/ChatProvider";

export default function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <TerminalContextProvider>
          <AppRouter />
        </TerminalContextProvider>
      </ChatProvider>
    </BrowserRouter>
  );
}
