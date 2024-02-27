"use client";
import React from "react";
import { Button } from "../button";
import { useRouter } from "next/navigation";
interface BackButtonProps {
  backButtonLabel: string;
  backButtonHref: string;
}

const BackButton = ({ backButtonLabel, backButtonHref }: BackButtonProps) => {
  const router = useRouter();
  return (
    <Button
      variant={"link"}
      className="text-xs w-full"
      onClick={() => {
        router.push(backButtonHref);
      }}
    >
      {backButtonLabel}
    </Button>
  );
};

export default BackButton;
