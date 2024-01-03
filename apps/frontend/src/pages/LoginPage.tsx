import { AuthLayout } from "@/layouts/AuthLayout";
import { LoginForm } from "@/components/LoginForm";

export const LoginPage = () => {
  return (
    <AuthLayout
      title="Login into Retro"
      description="Enter you username and password"
    >
      <LoginForm />
    </AuthLayout>
  );
};
