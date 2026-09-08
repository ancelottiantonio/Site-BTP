// src/components/ui/ContactForm.tsx
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useLanguage } from "@/lib/i18n";

const initialState: ContactFormState = { success: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useLanguage();

  return (
    <motion.button
      type="submit"
      disabled={pending}
      whileHover={{ scale: pending ? 1 : 1.02 }}
      whileTap={{ scale: pending ? 1 : 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 font-display text-sm font-semibold text-cream-50 shadow-soft transition-colors duration-300 ease-organic hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? t("sending") : t("sendRequest")}
    </motion.button>
  );
}

// Champs sur fond bleu nuit : verre dépoli clair au lieu du fond crème par défaut
const darkFieldClassName =
  "border-cream-50/15 bg-cream-50/[0.06] text-cream-50 placeholder:text-cream-300/50 focus:ring-terracotta-light/50 focus:border-terracotta-light/40";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { language, t } = useLanguage();

  return (
    <form action={formAction} className="flex flex-col gap-6" noValidate>
      <input type="hidden" name="language" value={language} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input
          name="name"
          label={t("fullName")}
          placeholder="Jean Dupont"
          error={state.errors?.name}
          className={darkFieldClassName}
        />
        <Input
          name="email"
          type="email"
          label={t("email")}
          placeholder={t("emailPlaceholder")}
          error={state.errors?.email}
          className={darkFieldClassName}
        />
      </div>

      <Input
        name="phone"
        type="tel"
        label={t("optionalPhone")}
        placeholder="06 12 34 56 78"
        error={state.errors?.phone}
        className={darkFieldClassName}
      />

      <Textarea
        name="message"
        label={t("yourProject")}
        placeholder={t("projectPlaceholder")}
        error={state.errors?.message}
        className={darkFieldClassName}
      />

      <SubmitButton />

      <AnimatePresence mode="wait">
        {state.message && (
          <motion.p
            key={state.message}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className={`font-sans text-sm ${
              state.success ? "text-green-400" : "text-red-400"
            }`}
            role="status"
          >
            {state.message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
