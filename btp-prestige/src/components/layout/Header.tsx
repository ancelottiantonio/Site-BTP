// src/components/layout/Header.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { COMPANY, NAV_LINKS } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLanguage, type Language } from "@/lib/i18n";

const SPRING = { type: "spring" as const, stiffness: 120, damping: 20 };

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { language, setLanguage, t } = useLanguage();

  const navigationLabels: Record<string, string> = {
    Réalisations: t("projects"),
    Expertise: t("expertise"),
    Agence: t("agency"),
    Contact: t("contact"),
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);

    // Masquage intelligent : on cache au scroll down, on montre au scroll up
    if (latest > lastScrollY.current && latest > 200) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    lastScrollY.current = latest;
  });

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isHidden ? "-130%" : "0%" }}
      transition={SPRING}
      className="fixed inset-x-0 top-4 z-50 px-4 md:top-6 md:px-6"
    >
      <Container
        className={cn(
          "flex h-16 items-center justify-between rounded-full px-5 transition-all duration-500 ease-organic md:h-20 md:px-8",
          isScrolled
            ? "bg-cream-50/70 shadow-soft backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        {/* Logo / Wordmark */}
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-anthracite md:text-xl"
        >
          {COMPANY.name}
          <span className="text-terracotta">.</span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-sans text-sm font-medium text-anthracite-soft transition-colors duration-300 hover:bg-anthracite/5 hover:text-anthracite"
            >
              {navigationLabels[link.label] ?? link.label}
            </Link>
          ))}
        </nav>

        <LanguageSwitcher
          language={language}
          setLanguage={setLanguage}
          label={t("language")}
        />

        <Button
          variant="primary"
          href="#contact"
          className="hidden !px-6 !py-3 md:inline-flex"
        >
          {t("quote")}
        </Button>

        {/* Bouton mobile — état géré localement, reste dans ce composant feuille */}
        <MobileMenuTrigger />
      </Container>
    </motion.div>
  );
}

/**
 * Sous-composant terminal : gère l'ouverture du menu mobile.
 * Séparé pour garder Header.tsx lisible.
 */
function MobileMenuTrigger() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigationLabels: Record<string, string> = {
    Réalisations: t("projects"),
    Expertise: t("expertise"),
    Agence: t("agency"),
    Contact: t("contact"),
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-anthracite/5 md:hidden"
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
          transition={SPRING}
          className="h-[2px] w-5 rounded-full bg-anthracite"
        />
        <motion.span
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="h-[2px] w-5 rounded-full bg-anthracite"
        />
        <motion.span
          animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
          transition={SPRING}
          className="h-[2px] w-5 rounded-full bg-anthracite"
        />
      </button>

      <motion.div
        initial={false}
        animate={{
          clipPath: open ? "inset(0 0 0 0 round 2rem)" : "inset(0 0 100% 0 round 2rem)",
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-4 top-24 z-40 flex flex-col justify-between rounded-[2rem] bg-navy px-6 py-10 shadow-soft-xl md:hidden"
        style={{ maxHeight: "calc(100svh - 7rem)" }}
      >
        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -16 }}
              animate={{
                opacity: open ? 1 : 0,
                x: open ? 0 : -16,
              }}
              transition={{ ...SPRING, delay: open ? 0.1 + i * 0.05 : 0 }}
            >
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-semibold text-cream-50"
              >
                {navigationLabels[link.label] ?? link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <LanguageSwitcher
          language={language}
          setLanguage={setLanguage}
          label={t("language")}
        />
        <Button
          variant="primary"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          {t("quote")}
        </Button>
      </motion.div>
    </>
  );
}

function LanguageSwitcher({
  language,
  setLanguage,
  label,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-anthracite/5 p-1" aria-label={label}>
      {(["it", "en", "fr"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}
          className={cn(
            "rounded-full px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-wider transition-colors",
            language === option
              ? "bg-anthracite text-cream-50"
              : "text-anthracite-muted hover:text-anthracite"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
