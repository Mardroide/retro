import { GithubLoginButton } from "@/components/GithubLoginButton";
import { SwitchAuthButton } from "@/components/SwicthAuthButton";
import { MdKeyboardCommandKey } from "react-icons/md";
import { Link } from "react-router-dom";

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
        <div
          className="flex flex-col h-full p-8 lg:w-[40%] xl:w-1/2 max-lg:hidden"
          id="auth-image"
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-semibold text-white"
          >
            <MdKeyboardCommandKey /> Retro
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center h-full w-full lg:w-[60%] xl:w-1/2">
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
      <Link
        to="/"
        className="absolute top-7 left-7 items-center gap-2 text-2xl font-semibold hidden max-lg:flex"
      >
        <MdKeyboardCommandKey /> Retro
      </Link>
      <SwitchAuthButton />
    </>
  );
};
