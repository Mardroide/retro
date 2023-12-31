import { TerminalContextProvider } from "react-terminal";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { ChatProvider } from "./context/providers/ChatProvider";
import { useSockets } from "./hooks/useSockets";
import { useEffect } from "react";

export default function App() {
  const { connectChatRoom } = useSockets();

  useEffect(() => {
    connectChatRoom();
  }, []);

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
