import { Button } from "@/components/ui/button";
import { useState } from "react";

export const SwitchAuthButton = () => {
  const [authPage, setAuthPage] = useState<string>("login");

  const handleSwitchAuthPage = () => {
    setAuthPage(authPage === "login" ? "register" : "login");
  };

  return (
    <Button
      onClick={handleSwitchAuthPage}
      className="absolute top-7 right-7"
      variant="outline"
    >
      {authPage === "login" ? "Register" : "Login"}
    </Button>
  );
};
