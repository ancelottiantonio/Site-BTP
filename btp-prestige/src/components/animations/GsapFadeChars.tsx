// src/components/animations/GsapFadeChars.tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapFadeCharsProps {
  text: string;
  className?: string;
  triggerOnScroll?: boolean;
}

export function GsapFadeChars({
  text,
  className,
  triggerOnScroll = false,
}: GsapFadeCharsProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const chars = containerRef.current?.querySelectorAll(".char");
      if (!chars) return;

      // Réduction de mouvement : état final directement, aucun tween.
      if (prefersReducedMotion) {
        gsap.set(chars, { yPercent: 0, opacity: 1 });
        return;
      }

      gsap.set(chars, { yPercent: 110, opacity: 0 });

      gsap.to(chars, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.025,
        delay: triggerOnScroll ? 0 : 0.3,
        scrollTrigger: triggerOnScroll
          ? {
              trigger: containerRef.current,
              start: "top 85%",
            }
          : undefined,
      });

      // Parallaxe désactivée si réduction de mouvement demandée.
      gsap.to(containerRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [triggerOnScroll, prefersReducedMotion]);

  const words = text.split(" ");

  return (
    <h1 ref={containerRef} className={className} aria-label={text}>
      {words.map((word, wIndex) => (
        <span key={wIndex} className="inline-block overflow-hidden pb-2 align-top">
          {word.split("").map((char, cIndex) => (
            <span key={cIndex} className="char inline-block will-change-transform">
              {char}
            </span>
          ))}
          {wIndex < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </h1>
  );
}