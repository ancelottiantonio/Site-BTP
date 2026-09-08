// src/components/animations/AnimatedCounter.tsx
"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = usePrefersReducedMotion();

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 60,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    // Réduction de mouvement : on affiche la valeur finale sans interpolation.
    if (prefersReducedMotion) {
      if (ref.current) {
        ref.current.textContent = `${value}${suffix}`;
      }
      return;
    }

    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, suffix, prefersReducedMotion, value]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}