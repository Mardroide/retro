import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { ChatPage } from "../pages/ChatPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/chat"
        element={<ChatPage sessionId={"XXXX-XXXX-XXXX"} onlineUsers={1} />}
      />
    </Routes>
  );
};
