import { Navigate } from "react-router-dom";

export const joinCommand = (session: string) => {
  if (!session) return `Please provide a session id.`;

  if (session === 'global') {
    return 'Global chat is disabled.'
  }

  return <Navigate to='/chat' />;
}