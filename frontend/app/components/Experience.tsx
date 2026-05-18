"use client";
import { useEffect, useRef } from "react";
import { ExperienceOut } from "@/lib/api";
import SectionWrapper from "./ui/SectionWrapper";
import RevealWrapper from "./ui/RevealWrapper";

export default function Experience({ items }: { items: ExperienceOut[] }) {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper
      sectionNum="02 / Experience"
      id="experience"
      className="bg-[var(--surface)]"
    >
      <RevealWrapper>
        <div className="sh">
          Where I&apos;ve
          <br />
          been <em>shipping.</em>
        </div>
      </RevealWrapper>

      <div className="exp-cards" ref={cardsRef}>
        {items.map((item, index) => {
          const isCurrent = item.type === "current";
          const isEdu = item.type === "education";

          return (
            <div
              key={item.id}
              className={`reveal ${index === 0 ? "d1" : index === 1 ? "d2" : "d3"} ${
                isCurrent ? "exp-c hero-exp" : "exp-c"
              }`}
            >
              <div>
                <div className="exp-header">
                  <span className="exp-co">
                    {isCurrent ? "Current" : isEdu ? "Education" : "Internship"}
                  </span>
                  <span className="exp-yr">{item.dates}</span>
                </div>
                <div className="exp-role">{item.role}</div>
                <div className="exp-place">
                  {item.company}
                  {item.location ? ` · ${item.location}` : ""}
                </div>
                <div className="exp-bullets">
                  {item.bullets.map((b, i) => (
                    <div
                      key={i}
                      className="exp-bullet"
                      dangerouslySetInnerHTML={{ __html: b }}
                    />
                  ))}
                </div>
                {item.pills && (
                  <div className="exp-pills">
                    {item.pills.map((p) => (
                      <span key={p} className="exp-pill">
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {isCurrent && <div className="exp-big">01</div>}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
