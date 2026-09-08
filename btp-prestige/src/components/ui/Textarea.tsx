// src/components/ui/Textarea.tsx
import { cn } from "@/lib/utils";
import { forwardRef, type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id ?? props.name;

    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={textareaId}
          className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-anthracite-muted"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={5}
          className={cn(
            "resize-none rounded-2xl border border-anthracite/10 bg-cream-50/70 px-5 py-3.5 font-sans text-sm text-anthracite backdrop-blur-sm",
            "placeholder:text-anthracite-muted/60 focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta/40",
            "shadow-soft transition-all duration-300 ease-organic",
            error && "border-red-400 focus:ring-red-300",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <span id={`${textareaId}-error`} className="font-sans text-xs text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
