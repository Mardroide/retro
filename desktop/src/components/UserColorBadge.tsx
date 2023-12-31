import { LiaUserSecretSolid } from "react-icons/lia";

interface ColorBadgeProps {
  userColor: string;
}

export const UserColorBadge: React.FC<ColorBadgeProps> = ({ userColor }) => {
  return <LiaUserSecretSolid fill={userColor} />;
};
