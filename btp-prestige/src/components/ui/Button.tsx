// src/components/ui/Button.tsx
"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

const SPRING = { type: "spring" as const, stiffness: 300, damping: 24 };

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-cream-50 shadow-soft hover:bg-terracotta-dark hover:shadow-soft-lg",
  outline:
    "bg-cream-50/60 text-anthracite border border-anthracite/15 backdrop-blur-sm shadow-soft hover:bg-cream-50 hover:border-anthracite/25",
  ghost:
    "bg-transparent text-anthracite hover:bg-anthracite/5",
};

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "onClick"> {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", href, className, children, onClick, ...props }, ref) => {
    const classNames = cn(
      "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4",
      "font-display text-sm font-semibold tracking-tight",
      "transition-colors duration-300 ease-organic",
      VARIANT_STYLES[variant],
      className
    );

    if (href) {
      return (
        <motion.a
          href={href}
          onClick={onClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={SPRING}
          className={classNames}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={SPRING}
        className={classNames}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
