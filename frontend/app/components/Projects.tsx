"use client";
import { useEffect, useRef } from "react";
import { ProjectOut } from "@/lib/api";
import SectionWrapper from "./ui/SectionWrapper";
import RevealWrapper from "./ui/RevealWrapper";

const PROJECT_SVGS: Record<string, React.ReactNode> = {
  "Enterprise AI Assistant": (
    <svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid slice">
      <rect width="460" height="220" fill="#0d0e0b"/>
      <rect x="20" y="18" width="200" height="184" rx="6" fill="#111110" stroke="#222220"/>
      <rect x="32" y="30" width="70" height="6" rx="2" fill="#d4f53c" opacity=".85"/>
      <rect x="32" y="42" width="110" height="3" rx="1" fill="#4a4a46" opacity=".45"/>
      <rect x="32" y="62" width="168" height="28" rx="4" fill="#0a0c08"/>
      <circle cx="46" cy="76" r="5" fill="#d4f53c" opacity=".9"/>
      <rect x="58" y="70" width="120" height="3" rx="1" fill="#e8d5a3" opacity=".7"/>
      <rect x="58" y="78" width="90" height="2" rx="1" fill="#4a4a46" opacity=".4"/>
      <rect x="56" y="100" width="120" height="22" rx="10" fill="#181816" stroke="#d4f53c" strokeOpacity=".35"/>
      <rect x="68" y="108" width="80" height="6" rx="2" fill="#d4f53c" opacity=".75"/>
      <rect x="32" y="132" width="168" height="22" rx="4" fill="#0a0c08"/>
      <rect x="40" y="140" width="50" height="6" rx="2" fill="#7c93ff" opacity=".7"/>
      <rect x="96" y="141" width="90" height="4" rx="1" fill="#4a4a46" opacity=".4"/>
      <rect x="32" y="160" width="168" height="22" rx="4" fill="#0a0c08"/>
      <rect x="40" y="168" width="40" height="6" rx="2" fill="#4ade80" opacity=".7"/>
      <rect x="86" y="169" width="100" height="4" rx="1" fill="#4a4a46" opacity=".4"/>
      <rect x="240" y="18" width="200" height="184" rx="6" fill="#111110" stroke="#222220"/>
      <rect x="252" y="30" width="80" height="6" rx="2" fill="#d4f53c" opacity=".8"/>
      <circle cx="280" cy="78" r="22" fill="#d4f53c" opacity=".12" stroke="#d4f53c" strokeOpacity=".5"/>
      <circle cx="340" cy="70" r="16" fill="#7c93ff" opacity=".12" stroke="#7c93ff" strokeOpacity=".5"/>
      <circle cx="320" cy="118" r="20" fill="#4ade80" opacity=".12" stroke="#4ade80" strokeOpacity=".5"/>
      <circle cx="380" cy="108" r="14" fill="#f59e0b" opacity=".12" stroke="#f59e0b" strokeOpacity=".5"/>
      <line x1="298" y1="86" x2="326" y2="108" stroke="#4a4a46" strokeWidth="1"/>
      <line x1="300" y1="74" x2="326" y2="72" stroke="#4a4a46" strokeWidth="1"/>
      <line x1="338" y1="86" x2="332" y2="102" stroke="#4a4a46" strokeWidth="1"/>
      <line x1="336" y1="122" x2="368" y2="112" stroke="#4a4a46" strokeWidth="1"/>
      <rect x="252" y="154" width="176" height="8" rx="2" fill="#181816"/>
      <rect x="252" y="154" width="110" height="8" rx="2" fill="#d4f53c" opacity=".7">
        <animate attributeName="width" values="40;160;110" dur="3.2s" repeatCount="indefinite"/>
      </rect>
      <rect x="252" y="172" width="176" height="8" rx="2" fill="#181816"/>
      <rect x="252" y="172" width="70" height="8" rx="2" fill="#7c93ff" opacity=".65">
        <animate attributeName="width" values="90;50;70" dur="2.6s" repeatCount="indefinite"/>
      </rect>
    </svg>
  ),
  "Yugyog.ai": (
    <svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid slice">
      <rect width="460" height="220" fill="#0d0e0b"/>
      <rect x="20" y="20" width="100" height="60" rx="4" fill="#151614" stroke="#222220"/>
      <rect x="28" y="28" width="84" height="40" rx="2" fill="#0a0c08"/>
      <circle cx="40" cy="38" r="3" fill="#d4f53c" opacity=".9"><animate attributeName="opacity" values=".9;.3;.9" dur="1.4s" repeatCount="indefinite"/></circle>
      <rect x="50" y="35" width="30" height="3" rx="1" fill="#4a4a46" opacity=".5"/>
      <rect x="32" y="46" width="76" height="2" rx="1" fill="#4a4a46" opacity=".3"/>
      <rect x="32" y="52" width="60" height="2" rx="1" fill="#4a4a46" opacity=".25"/>
      <rect x="32" y="72" width="40" height="3" rx="1" fill="#d4f53c" opacity=".7"/>
      <rect x="80" y="72" width="30" height="3" rx="1" fill="#4ade80" opacity=".5"/>
      <rect x="130" y="20" width="100" height="60" rx="4" fill="#151614" stroke="#222220"/>
      <rect x="138" y="28" width="84" height="40" rx="2" fill="#0a0c08"/>
      <circle cx="150" cy="38" r="3" fill="#4ade80" opacity=".9"><animate attributeName="opacity" values=".9;.3;.9" dur="1.7s" repeatCount="indefinite"/></circle>
      <rect x="160" y="35" width="30" height="3" rx="1" fill="#4a4a46" opacity=".5"/>
      <rect x="142" y="46" width="76" height="2" rx="1" fill="#4a4a46" opacity=".3"/>
      <rect x="142" y="52" width="60" height="2" rx="1" fill="#4a4a46" opacity=".25"/>
      <rect x="142" y="72" width="40" height="3" rx="1" fill="#d4f53c" opacity=".7"/>
      <rect x="190" y="72" width="30" height="3" rx="1" fill="#4ade80" opacity=".5"/>
      <rect x="240" y="20" width="100" height="60" rx="4" fill="#151614" stroke="#222220"/>
      <rect x="248" y="28" width="84" height="40" rx="2" fill="#0a0c08"/>
      <circle cx="260" cy="38" r="3" fill="#f59e0b" opacity=".9"><animate attributeName="opacity" values=".9;.3;.9" dur="2.1s" repeatCount="indefinite"/></circle>
      <rect x="270" y="35" width="30" height="3" rx="1" fill="#4a4a46" opacity=".5"/>
      <rect x="252" y="46" width="76" height="2" rx="1" fill="#4a4a46" opacity=".3"/>
      <rect x="252" y="52" width="60" height="2" rx="1" fill="#4a4a46" opacity=".25"/>
      <rect x="252" y="72" width="40" height="3" rx="1" fill="#f59e0b" opacity=".7"/>
      <rect x="350" y="20" width="90" height="60" rx="4" fill="#151614" stroke="#222220"/>
      <rect x="358" y="28" width="74" height="40" rx="2" fill="#0a0c08"/>
      <circle cx="370" cy="38" r="3" fill="#d4f53c" opacity=".9"><animate attributeName="opacity" values=".9;.3;.9" dur="1.3s" repeatCount="indefinite"/></circle>
      <rect x="380" y="35" width="30" height="3" rx="1" fill="#4a4a46" opacity=".5"/>
      <rect x="362" y="46" width="66" height="2" rx="1" fill="#4a4a46" opacity=".3"/>
      <rect x="362" y="72" width="40" height="3" rx="1" fill="#d4f53c" opacity=".7"/>
      <rect x="20" y="100" width="420" height="100" rx="4" fill="#0f100e" stroke="#222220"/>
      <rect x="28" y="108" width="60" height="6" rx="2" fill="#d4f53c" opacity=".8"/>
      <rect x="28" y="120" width="100" height="3" rx="1" fill="#4a4a46" opacity=".4"/>
      <rect x="28" y="135" width="200" height="50" rx="3" fill="#0a0c08"/>
      <rect x="34" y="142" width="6" height="6" rx="3" fill="#d4f53c"><animate attributeName="opacity" values="1;.2;1" dur="1.2s" repeatCount="indefinite"/></rect>
      <rect x="44" y="143" width="100" height="3" rx="1" fill="#d4f53c" opacity=".7"/>
      <rect x="44" y="150" width="160" height="2" rx="1" fill="#4a4a46" opacity=".4"/>
      <rect x="34" y="160" width="6" height="6" rx="3" fill="#4ade80"/>
      <rect x="44" y="161" width="80" height="3" rx="1" fill="#4ade80" opacity=".6"/>
      <rect x="44" y="168" width="150" height="2" rx="1" fill="#4a4a46" opacity=".3"/>
      <rect x="34" y="178" width="6" height="6" rx="3" fill="#7c93ff"/>
      <rect x="44" y="179" width="120" height="3" rx="1" fill="#7c93ff" opacity=".6"/>
      <rect x="240" y="135" width="200" height="50" rx="3" fill="#0a0c08"/>
      <rect x="248" y="142" width="50" height="3" rx="1" fill="#4a4a46" opacity=".5"/>
      <rect x="248" y="150" width="40" height="8" rx="1" fill="#d4f53c" opacity=".8"/>
      <rect x="248" y="162" width="60" height="2" rx="1" fill="#4a4a46" opacity=".4"/>
      <rect x="320" y="142" width="50" height="3" rx="1" fill="#4a4a46" opacity=".5"/>
      <rect x="320" y="150" width="40" height="8" rx="1" fill="#4ade80" opacity=".8"/>
      <rect x="320" y="162" width="60" height="2" rx="1" fill="#4a4a46" opacity=".4"/>
    </svg>
  ),
  "Spolto": (
    <svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid slice">
      <rect width="460" height="220" fill="#0b0c0a"/>
      <rect x="30" y="20" width="160" height="180" rx="12" fill="#111110" stroke="#222220"/>
      <rect x="38" y="32" width="144" height="14" rx="4" fill="#1a1a16"/>
      <rect x="44" y="36" width="40" height="6" rx="2" fill="#d4f53c" opacity=".8"/>
      <rect x="160" y="36" width="18" height="6" rx="2" fill="#4a4a46" opacity=".5"/>
      <rect x="38" y="54" width="144" height="50" rx="6" fill="#1a1a16"/>
      <circle cx="58" cy="79" r="14" fill="#d4f53c" opacity=".25"/>
      <circle cx="58" cy="79" r="10" fill="#d4f53c" opacity=".8"/>
      <rect x="80" y="68" width="80" height="6" rx="2" fill="#e8d5a3" opacity=".7"/>
      <rect x="80" y="80" width="60" height="4" rx="1" fill="#4a4a46" opacity=".5"/>
      <rect x="80" y="90" width="50" height="3" rx="1" fill="#4ade80" opacity=".6"/>
      <rect x="38" y="112" width="144" height="30" rx="6" fill="#1a1a16"/>
      <rect x="44" y="118" width="50" height="4" rx="1" fill="#4a4a46" opacity=".5"/>
      <rect x="44" y="126" width="20" height="10" rx="2" fill="#d4f53c" opacity=".2" stroke="#d4f53c" strokeWidth="1"/>
      <rect x="68" y="126" width="20" height="10" rx="2" fill="#d4f53c" opacity=".2" stroke="#d4f53c" strokeWidth="1"/>
      <rect x="92" y="126" width="20" height="10" rx="2" fill="#d4f53c" opacity=".2" stroke="#d4f53c" strokeWidth="1"/>
      <rect x="116" y="126" width="20" height="10" rx="2" fill="transparent" stroke="#4a4a46" strokeWidth="1"/>
      <rect x="38" y="150" width="144" height="32" rx="6" fill="#d4f53c"/>
      <rect x="62" y="161" width="96" height="10" rx="2" fill="#0d0e0b" opacity=".7"/>
      <rect x="210" y="20" width="220" height="180" rx="8" fill="#111110" stroke="#222220"/>
      <rect x="220" y="30" width="100" height="6" rx="2" fill="#d4f53c" opacity=".8"/>
      <rect x="220" y="42" width="160" height="3" rx="1" fill="#4a4a46" opacity=".4"/>
      <rect x="220" y="60" width="200" height="22" rx="3" fill="#181816"/>
      <rect x="226" y="68" width="30" height="6" rx="3" fill="#4ade80" opacity=".8"/>
      <rect x="262" y="68" width="120" height="4" rx="1" fill="#7c93ff" opacity=".6"/>
      <rect x="220" y="88" width="200" height="22" rx="3" fill="#181816"/>
      <rect x="226" y="96" width="30" height="6" rx="3" fill="#d4f53c" opacity=".8"/>
      <rect x="262" y="96" width="140" height="4" rx="1" fill="#7c93ff" opacity=".6"/>
      <rect x="220" y="116" width="200" height="22" rx="3" fill="#181816"/>
      <rect x="226" y="124" width="30" height="6" rx="3" fill="#f59e0b" opacity=".8"/>
      <rect x="262" y="124" width="110" height="4" rx="1" fill="#7c93ff" opacity=".6"/>
      <rect x="220" y="144" width="200" height="22" rx="3" fill="#181816"/>
      <rect x="226" y="152" width="30" height="6" rx="3" fill="#4ade80" opacity=".8"/>
      <rect x="262" y="152" width="130" height="4" rx="1" fill="#7c93ff" opacity=".6"/>
      <rect x="220" y="178" width="120" height="5" rx="1" fill="#4a4a46" opacity=".5"/>
      <rect x="220" y="188" width="80" height="4" rx="1" fill="#d4f53c" opacity=".6"/>
    </svg>
  ),
  "Loan Prediction Model": (
    <svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid slice">
      <rect width="460" height="220" fill="#0d0e0b"/>
      <rect x="30" y="30" width="240" height="160" rx="6" fill="#111110" stroke="#222220"/>
      <rect x="40" y="42" width="80" height="5" rx="2" fill="#d4f53c" opacity=".8"/>
      <rect x="40" y="54" width="120" height="3" rx="1" fill="#4a4a46" opacity=".4"/>
      <rect x="50" y="160" width="20" height="20" rx="2" fill="#d4f53c" opacity=".8"/>
      <rect x="78" y="135" width="20" height="45" rx="2" fill="#d4f53c" opacity=".7"/>
      <rect x="106" y="110" width="20" height="70" rx="2" fill="#d4f53c" opacity=".9"/>
      <rect x="134" y="125" width="20" height="55" rx="2" fill="#d4f53c" opacity=".7"/>
      <rect x="162" y="100" width="20" height="80" rx="2" fill="#d4f53c"/>
      <rect x="190" y="80" width="20" height="100" rx="2" fill="#4ade80" opacity=".9"/>
      <rect x="218" y="95" width="20" height="85" rx="2" fill="#4ade80" opacity=".8"/>
      <line x1="40" y1="185" x2="260" y2="185" stroke="#4a4a46" strokeWidth="1" opacity=".5"/>
      <line x1="40" y1="80" x2="40" y2="185" stroke="#4a4a46" strokeWidth="1" opacity=".5"/>
      <rect x="290" y="30" width="140" height="75" rx="6" fill="#111110" stroke="#222220"/>
      <rect x="300" y="40" width="60" height="4" rx="1" fill="#4a4a46" opacity=".5"/>
      <rect x="300" y="52" width="40" height="14" rx="1" fill="#d4f53c" opacity=".9"/>
      <rect x="300" y="72" width="90" height="3" rx="1" fill="#4a4a46" opacity=".4"/>
      <rect x="300" y="82" width="60" height="3" rx="1" fill="#4ade80" opacity=".6"/>
      <rect x="300" y="91" width="45" height="3" rx="1" fill="#4ade80" opacity=".5"/>
      <rect x="290" y="115" width="140" height="75" rx="6" fill="#111110" stroke="#222220"/>
      <rect x="300" y="125" width="60" height="4" rx="1" fill="#4a4a46" opacity=".5"/>
      <rect x="300" y="137" width="40" height="14" rx="1" fill="#4ade80" opacity=".9"/>
      <rect x="300" y="157" width="90" height="3" rx="1" fill="#4a4a46" opacity=".4"/>
      <rect x="300" y="167" width="55" height="3" rx="1" fill="#d4f53c" opacity=".6"/>
      <rect x="300" y="176" width="70" height="3" rx="1" fill="#d4f53c" opacity=".5"/>
    </svg>
  ),
};

function ProjectCard({ project, index }: { project: ProjectOut; index: number }) {
  const delay = index === 0 ? undefined : index === 1 ? "d1" as const : "d2" as const;
  return (
    <RevealWrapper delay={delay} className="proj-card">
      <div className="proj-img">
        {PROJECT_SVGS[project.name] ?? (
          <div style={{ width: "100%", height: "100%", background: "var(--surface)" }} />
        )}
      </div>
      <div className="proj-body">
        <div className="proj-header">
          <span className="proj-num">0{index + 1}</span>
          <span className="proj-badge">{project.badge}</span>
        </div>
        <div className="proj-name">{project.name}</div>
        <div className="proj-desc">{project.description}</div>
        <div className="proj-features">
          {project.features.map((f, i) => (
            <div
              key={i}
              className="proj-feat"
              dangerouslySetInnerHTML={{ __html: f }}
            />
          ))}
        </div>
        <div className="proj-tags">
          {project.tags.map((t) => (
            <span key={t} className="proj-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </RevealWrapper>
  );
}

export default function Projects({ items }: { items: ProjectOut[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector(".proj-card") as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 360) + 24;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    if ((e.target as HTMLElement).closest("a,button")) return;
    let isDown = true;
    const startX = e.pageX;
    const sLeft = el.scrollLeft;

    const onMove = (ev: MouseEvent) => {
      if (!isDown) return;
      ev.preventDefault();
      el.scrollLeft = sLeft - (ev.pageX - startX);
    };
    const onUp = () => {
      isDown = false;
      el.style.cursor = "grab";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    el.style.cursor = "grabbing";
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <SectionWrapper
      sectionNum="04 / Work"
      id="work"
      className="bg-[var(--surface)]"
      bodyClassName="pr-0 projects-body"
    >
      <RevealWrapper className="pr-12">
        <div className="sh">
          Selected
          <br />
          <em>work</em> →
        </div>
      </RevealWrapper>
      <div className="projects-toolbar">
        <p className="projects-hint">Scroll or use arrows · swipe on mobile</p>
        <div className="projects-nav">
          <button type="button" aria-label="Previous project" onClick={() => scrollByCard(-1)}>
            ←
          </button>
          <button type="button" aria-label="Next project" onClick={() => scrollByCard(1)}>
            →
          </button>
        </div>
      </div>
      <div className="projects-scroll-wrap">
        <div
          className="projects-scroll"
          ref={scrollRef}
          onMouseDown={onMouseDown}
        >
          {items.map((item, i) => (
            <ProjectCard key={item.id} project={item} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
