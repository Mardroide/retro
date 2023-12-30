import { TerminalContextProvider } from "react-terminal";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export default function App() {
  return (
    <BrowserRouter>
      <TerminalContextProvider>
        <AppRouter />
      </TerminalContextProvider>
    </BrowserRouter>
  );
}
