import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { register } from "@/services/RetroApiService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(16),
  password: z.string().min(6).max(20),
  repeatPassword: z.string().min(6).max(20),
});

export const RegisterForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, username, password, repeatPassword } = values;

    if (password !== repeatPassword) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Passwords do not match. Please try again.",
      });
      return;
    }

    const { status } = await register({ email, username, password });

    if (status === 201) {
      toast({
        title: "Welcome to Retro!",
        description: "Account created successfully",
      });
      setTimeout(() => navigate("/chat"), 3000);
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "This email or username is already taken.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/5 max-sm:w-2/3 space-y-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="repeat password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};
