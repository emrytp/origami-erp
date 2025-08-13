"use client";

import { useEffect, useRef, useState } from "react";
import { annotate } from "rough-notation";
import type React from "react";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;

  /** Ekstra özellikler */
  triggerInView?: boolean; // ekranda görünce çalışsın
  replayOnHover?: boolean; // hover'da tekrar etsin
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  triggerInView = false,
  replayOnHover = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(!triggerInView); // triggerInView false ise direkt başlasın

  useEffect(() => {
    if (triggerInView && elementRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(elementRef.current);
      return () => observer.disconnect();
    }
  }, [triggerInView]);

  const runAnnotation = () => {
    const element = elementRef.current;
    if (!element) return;

    const annotation = annotate(element, {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    });

    annotation.show();
  };

  useEffect(() => {
    if (inView) runAnnotation();
  }, [inView]);

  return (
    <span
      ref={elementRef}
      className="relative inline-block bg-transparent"
      onMouseEnter={() => {
        if (replayOnHover) runAnnotation();
      }}
    >
      {children}
    </span>
  );
}
