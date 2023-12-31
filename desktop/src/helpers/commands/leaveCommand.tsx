import { Navigate } from "react-router-dom";

export const leaveCommand = (session: string) => {
  //if (!session) return `You are not in a session.`;
  return <Navigate to="/" />;
};