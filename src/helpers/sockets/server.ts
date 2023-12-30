import { Server } from "socket.io";
import { createServer } from "node:http";

export const startSocketServer = () => {
  const server = createServer();
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("createSession", (sessionId) => {
      console.log(sessionId);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  server.listen(5173, () => console.log("Socket server started!"));
};
