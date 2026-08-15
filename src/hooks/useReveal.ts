import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` to elements matching `.reveal` inside the returned ref
 * once they scroll into view. Respects prefers-reduced-motion by simply
 * relying on the CSS rule that removes the transition/opacity change.
 */
export function useReveal<T extends HTMLElement>(selector = ".reveal") {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const targets = root.matches(selector) ? [root] : Array.from(root.querySelectorAll<HTMLElement>(selector));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);

  return containerRef;
}
