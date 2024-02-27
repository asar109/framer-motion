"use client";
import CardProvider from "@/components/ui/auth/card-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { login } from "@/actions/login";
import ErrorMessage from "@/components/error-message";
import SuccessMessage from "@/components/success-message";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginSchema } from "@/schema/login-schema";

const LoginForm = () => {
  const [isPending, startTransaction] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  // define form
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Define submit handler.
  function onSubmit(values: z.infer<typeof loginSchema>) {
    startTransaction(() => {
      login(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  }

  return (
    <CardProvider
      backbuttonHref="/auth/register"
      backbuttonLabel="Don t have an account? Create one"
      headerLabel="Login"
      welcomeBack={true}
      social={true}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-gray-600">Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Enter your email"
                    {...field}
                  />
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
                <FormLabel className="text-xs text-gray-600">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    type="password"
                    placeholder="Enter you password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ErrorMessage message={error} />
          <SuccessMessage message={success} />
          <Button
            disabled={isPending}
            variant={"gradient"}
            className="w-full"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Form>
    </CardProvider>
  );
};

export default LoginForm;
