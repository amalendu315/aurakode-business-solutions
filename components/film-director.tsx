"use client";

import { useEffect } from "react";

export function FilmDirector() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sections = document.querySelectorAll<HTMLElement>(
      ".cinematic-site main > .section",
    );
    const cards = document.querySelectorAll<HTMLElement>(
      ".cinematic-site .bento-card, .cinematic-site .pillar, .cinematic-site .work-card",
    );
    const cleanups: Array<() => void> = [];
    if (window.matchMedia("(pointer: fine)").matches)
      cards.forEach((card) => {
        const move = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          card.style.setProperty("--rx", `${(-y * 4).toFixed(2)}deg`);
          card.style.setProperty("--ry", `${(x * 4).toFixed(2)}deg`);
          card.style.setProperty("--px", `${((x + 0.5) * 100).toFixed(1)}%`);
          card.style.setProperty("--py", `${((y + 0.5) * 100).toFixed(1)}%`);
        };
        const leave = () => {
          card.style.setProperty("--rx", "0deg");
          card.style.setProperty("--ry", "0deg");
        };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
        });
      });
    if (!("IntersectionObserver" in window))
      return () => cleanups.forEach((cleanup) => cleanup());
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("chapter-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    sections.forEach((section) => {
      section.classList.add("chapter-ready");
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
  return null;
}
