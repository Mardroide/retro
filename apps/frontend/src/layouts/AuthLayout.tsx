import { GithubLoginButton } from "@/components/GithubLoginButton";
import { SwitchAuthButton } from "@/components/SwicthAuthButton";
import { MdKeyboardCommandKey } from "react-icons/md";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <div className="flex w-full h-full justify-between">
        <div className="flex flex-col w-1/2 h-full bg-slate-100 p-8">
          <span className="flex items-center gap-2 text-2xl font-semibold">
            <MdKeyboardCommandKey /> Retro
          </span>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 h-full">
          <div className="flex flex-col items-center mb-5 gap-2">
            <h2 className="font-bold text-xl">{title}</h2>
            <p>{description}</p>
          </div>
          {children}
          <div className="flex flex-col items-center mt-5 gap-4">
            <span className="text-xs">OR CONTINUE WITH</span>
            <GithubLoginButton />
          </div>
        </div>
      </div>
      <SwitchAuthButton />
    </>
  );
};
