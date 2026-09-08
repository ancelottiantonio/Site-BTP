// src/components/ui/Container.tsx
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section";
}

export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[1600px] px-6 md:px-12", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}