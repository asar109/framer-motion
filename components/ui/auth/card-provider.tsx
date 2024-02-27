import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../card";
import BackButton from "./back-button";
import SocialButtons from "./social-buttons";

interface CardProviderProps {
  headerLabel: string;
  backbuttonHref: string;
  backbuttonLabel: string;
  welcomeBack?: boolean;
  social?: boolean;
  children: React.ReactNode;
}

const CardProvider = ({
  headerLabel,
  backbuttonHref,
  backbuttonLabel,
  welcomeBack,
  social,
  children,
}: CardProviderProps) => {
  return (
    <Card className="p-8 box-border max-w-96 w-full  ">
      <CardHeader className="text-center tracking-wider p-2 font-semibold text-xl">
        {headerLabel}
        <span className="text-xs text-slate-600 tracking-wider my-2">
          {welcomeBack ? "Welcome back!" : "Create an account"}
        </span>
      </CardHeader>
      <CardContent className="p-0">{children}</CardContent>
      {social && (
        <CardFooter className="p-0">
          <SocialButtons />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          backButtonHref={backbuttonHref}
          backButtonLabel={backbuttonLabel}
        />
      </CardFooter>
    </Card>
  );
};

export default CardProvider;
