import { Button } from "@/components/ui/button";
import { TbBrandGithub } from "react-icons/tb";

export const GithubLoginButton = () => {
  return (
    <Button className="flex items-center gap-2 w-full" variant='outline'>
      <TbBrandGithub /> Login with Github
    </Button>
  )
};