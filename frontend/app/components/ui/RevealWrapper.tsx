"use client";
import { useEffect, useRef } from "react";

interface RevealWrapperProps {
  className?: string;
  delay?: "d1" | "d2" | "d3" | "d4";
  children: React.ReactNode;
}

export default function RevealWrapper({
  className = "",
  delay,
  children,
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${delay ?? ""} ${className}`}
    >
      {children}
    </div>
  );
}
