// src/components/ui/Input.tsx
import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={inputId}
          className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-anthracite-muted"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "rounded-2xl border border-anthracite/10 bg-cream-50/70 px-5 py-3.5 font-sans text-sm text-anthracite backdrop-blur-sm",
            "placeholder:text-anthracite-muted/60 focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta/40",
            "shadow-soft transition-all duration-300 ease-organic",
            error && "border-red-400 focus:ring-red-300",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <span id={`${inputId}-error`} className="font-sans text-xs text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
