import { RegisterForm } from "@/components/RegisterForm";
import { AuthLayout } from "@/layouts/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register a new Retro account" description="A new adventure begins">
      <RegisterForm />
    </AuthLayout>
  )
};