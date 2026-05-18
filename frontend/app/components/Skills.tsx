"use client";
import { useEffect, useRef } from "react";
import { SkillsResponse } from "@/lib/api";
import SectionWrapper from "./ui/SectionWrapper";

export default function Skills({ data }: { data: SkillsResponse }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tags = container.querySelectorAll<HTMLElement>(".sk-tag");
    const rows = container.querySelectorAll<HTMLElement>(".skv-row");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          tags.forEach((tag, i) =>
            setTimeout(() => tag.classList.add("in"), i * 50)
          );
          rows.forEach((row, i) =>
            setTimeout(() => row.classList.add("in"), i * 60)
          );
          observer.disconnect();
        });
      },
      { threshold: 0.08 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper sectionNum="03 / Skills" id="skills">
      <div className="sh reveal">
        Tools in my
        <br />
        daily <em>rotation.</em>
      </div>
      <div className="skills-layout" ref={containerRef}>
        <div>
          {Object.entries(data.groups).map(([category, skills]) => (
            <div key={category} className="sk-group">
              <div className="sk-group-name">{category}</div>
              <div className="sk-tags">
                {skills.map((skill) => (
                  <span key={skill} className="sk-tag">
                    <span className="sk-pip" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="sk-visual">
          {data.visuals.map((v) => (
            <div key={v.id} className="skv-row">
              <div className="skv-icon">{v.icon}</div>
              <div className="skv-name">{v.name}</div>
              <div className="skv-cat">{v.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
