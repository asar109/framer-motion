"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode: "redirect" | "popup";
  asChild?: boolean;
}

const LoginButton = ({ children, mode, asChild }: LoginButtonProps) => {
  const router = useRouter();

  if (mode === "popup") {
    // DOTO: Implement popup mode
  }

  const clickHandler = async (e: React.MouseEvent) => {
    router.push("/auth/login");
  };

  return (
    <span className="cursor-pointer" onClick={clickHandler}>
      {children}
    </span>
  );
};

export default LoginButton;
