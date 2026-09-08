// src/app/actions/contact.ts
"use server";

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
}

type FormLanguage = "fr" | "en" | "it";

const messages: Record<FormLanguage, Record<string, string>> = {
  fr: {
    name: "Merci d'indiquer votre nom complet.",
    email: "Adresse email invalide.",
    phone: "Numéro de téléphone invalide.",
    project: "Merci de décrire votre projet (10 caractères min).",
    invalid: "Merci de corriger les champs indiqués.",
    success: "Votre demande a bien été envoyée. Nous revenons vers vous sous 48h.",
  },
  en: {
    name: "Please enter your full name.",
    email: "Invalid email address.",
    phone: "Invalid phone number.",
    project: "Please describe your project (10 characters minimum).",
    invalid: "Please correct the highlighted fields.",
    success: "Your request has been sent. We will get back to you within 48 hours.",
  },
  it: {
    name: "Inserisci il tuo nome e cognome.",
    email: "Indirizzo email non valido.",
    phone: "Numero di telefono non valido.",
    project: "Descrivi il tuo progetto (almeno 10 caratteri).",
    invalid: "Correggi i campi indicati.",
    success: "La tua richiesta è stata inviata. Ti ricontatteremo entro 48 ore.",
  },
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const languageValue = String(formData.get("language") ?? "fr");
  const language: FormLanguage = languageValue === "en" || languageValue === "it" ? languageValue : "fr";
  const localizedMessages = messages[language];

  const errors: ContactFormState["errors"] = {};

  if (name.length < 2) {
    errors.name = localizedMessages.name;
  }
  if (!isValidEmail(email)) {
    errors.email = localizedMessages.email;
  }
  if (phone.length > 0 && phone.length < 8) {
    errors.phone = localizedMessages.phone;
  }
  if (message.length < 10) {
    errors.message = localizedMessages.project;
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: localizedMessages.invalid,
      errors,
    };
  }

  // TODO: brancher un vrai provider (Resend, SendGrid, CRM interne...)
  // await sendContactEmail({ name, email, phone, message });

  console.log("Nouvelle demande de devis :", { name, email, phone, message });

  return {
    success: true,
    message: localizedMessages.success,
  };
}