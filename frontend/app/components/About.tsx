import { AboutParagraphOut } from "@/lib/api";
import SectionWrapper from "./ui/SectionWrapper";
import RevealWrapper from "./ui/RevealWrapper";

export default function About({ paragraphs }: { paragraphs: AboutParagraphOut[] }) {
  return (
    <SectionWrapper sectionNum="01 / About" id="about">
      <RevealWrapper>
        <div className="sh">
          Engineering is a craft,
          <br />
          not a <em>commodity.</em>
        </div>
      </RevealWrapper>

      <div className="about-layout">
        <RevealWrapper>
          <div className="portrait-wrap">
            <div className="portrait-box">
              <svg
                viewBox="0 0 300 400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <rect width="300" height="400" fill="#1a1a16" />
                <ellipse cx="150" cy="180" rx="130" ry="110" fill="#d4f53c" opacity=".04" />
                <rect x="0" y="296" width="300" height="104" fill="#111110" />
                <line x1="0" y1="296" x2="300" y2="296" stroke="#d4f53c" strokeWidth="1" opacity=".5" />
                <rect x="128" y="266" width="44" height="32" fill="#1e1e1a" />
                <rect x="104" y="295" width="92" height="5" rx="2" fill="#1e1e1a" />
                <rect x="38" y="96" width="224" height="168" rx="6" fill="#0d0d0b" />
                <rect x="38" y="96" width="224" height="168" rx="6" stroke="#2a2a26" strokeWidth="1.5" />
                <rect x="47" y="104" width="206" height="152" rx="3" fill="#111110" />
                <rect x="60" y="118" width="34" height="5" rx="2" fill="#d4f53c" opacity=".9" />
                <rect x="98" y="118" width="58" height="5" rx="2" fill="#7c93ff" opacity=".7" />
                <rect x="160" y="118" width="35" height="5" rx="2" fill="#e8d5a3" opacity=".5" />
                <rect x="70" y="131" width="50" height="5" rx="2" fill="#4ade80" opacity=".6" />
                <rect x="124" y="131" width="80" height="5" rx="2" fill="#e8d5a3" opacity=".5" />
                <rect x="60" y="144" width="42" height="5" rx="2" fill="#d4f53c" opacity=".8" />
                <rect x="106" y="144" width="70" height="5" rx="2" fill="#7c93ff" opacity=".6" />
                <rect x="70" y="157" width="90" height="5" rx="2" fill="#4ade80" opacity=".5" />
                <rect x="60" y="170" width="55" height="5" rx="2" fill="#e8d5a3" opacity=".45" />
                <rect x="119" y="170" width="65" height="5" rx="2" fill="#7c93ff" opacity=".55" />
                <rect x="60" y="183" width="38" height="5" rx="2" fill="#d4f53c" opacity=".7" />
                <rect x="70" y="196" width="100" height="5" rx="2" fill="#7c93ff" opacity=".6" />
                <rect x="60" y="209" width="78" height="5" rx="2" fill="#4ade80" opacity=".5" />
                <rect x="60" y="222" width="9" height="10" rx="1" fill="#e8d5a3" opacity=".9">
                  <animate attributeName="opacity" values=".9;0;.9" dur="1.1s" repeatCount="indefinite" />
                </rect>
                <ellipse cx="150" cy="62" rx="28" ry="32" fill="#3a2a25" />
                <path d="M118 50 Q118 90 110 130 L138 130 Q140 100 140 70 Z" fill="#1a1008" />
                <path d="M182 50 Q182 90 190 130 L162 130 Q160 100 160 70 Z" fill="#1a1008" />
                <ellipse cx="150" cy="44" rx="30" ry="22" fill="#1a1008" />
                <rect x="120" y="42" width="60" height="20" fill="#1a1008" />
                <rect x="140" y="92" width="20" height="18" rx="4" fill="#3a2a25" />
                <path d="M100 296 Q112 240 128 224 Q139 214 150 212 Q161 214 172 224 Q188 240 200 296 Z" fill="#3a2a4a" />
                <path d="M128 224 Q139 237 150 240 Q161 237 172 224" stroke="#4a3a5e" strokeWidth="1.5" fill="none" />
                <path d="M100 296 Q86 276 80 308 L155 308" fill="#3a2a4a" />
                <path d="M200 296 Q214 276 220 308 L145 308" fill="#3a2a4a" />
                <ellipse cx="87" cy="308" rx="15" ry="8" fill="#3a2a25" />
                <ellipse cx="213" cy="308" rx="15" ry="8" fill="#3a2a25" />
                <rect x="132" y="61" width="18" height="12" rx="4" fill="none" stroke="#d4f53c" strokeWidth="1.5" opacity=".9" />
                <rect x="152" y="61" width="18" height="12" rx="4" fill="none" stroke="#d4f53c" strokeWidth="1.5" opacity=".9" />
                <line x1="150" y1="67" x2="152" y2="67" stroke="#d4f53c" strokeWidth="1.5" opacity=".9" />
                <rect x="136" y="64" width="4" height="3" rx="1" fill="#d4f53c" opacity=".4" />
                <rect x="156" y="64" width="4" height="3" rx="1" fill="#d4f53c" opacity=".4" />
                <circle cx="120" cy="76" r="2" fill="#d4f53c" opacity=".7" />
                <circle cx="180" cy="76" r="2" fill="#d4f53c" opacity=".7" />
                <rect x="72" y="305" width="156" height="26" rx="3" fill="#181816" />
                <rect x="72" y="305" width="156" height="26" rx="3" stroke="#2a2a26" strokeWidth="1" />
                <rect x="79" y="310" width="142" height="5" rx="2" fill="#222220" />
                <rect x="79" y="319" width="142" height="5" rx="2" fill="#222220" />
                <rect x="112" y="319" width="76" height="5" rx="2" fill="#d4f53c" opacity=".2" />
                <rect x="240" y="294" width="32" height="38" rx="4" fill="#1e1e1a" />
                <rect x="240" y="294" width="32" height="38" rx="4" stroke="#2a2a26" strokeWidth="1" />
                <rect x="246" y="301" width="20" height="8" rx="2" fill="#d4f53c" opacity=".5" />
                <path d="M272 303 Q282 303 282 313 Q282 323 272 323" stroke="#2a2a26" strokeWidth="2" fill="none" />
                <path d="M250 291 Q252 284 250 277" stroke="#6e6b62" strokeWidth="1.5" fill="none" opacity=".5">
                  <animate attributeName="d" values="M250 291 Q252 284 250 277;M250 291 Q248 284 250 277;M250 291 Q252 284 250 277" dur="2s" repeatCount="indefinite" />
                </path>
                <rect x="20" y="300" width="16" height="20" rx="2" fill="#1e1e1a" />
                <ellipse cx="28" cy="298" rx="13" ry="10" fill="#142a1a" />
                <ellipse cx="20" cy="293" rx="8" ry="7" fill="#183820" />
                <ellipse cx="36" cy="293" rx="8" ry="7" fill="#183820" />
                <ellipse cx="150" cy="168" rx="80" ry="60" fill="#d4f53c" opacity=".03" />
              </svg>
              <div className="portrait-label">Anubhooti · Jaipur · Available now</div>
            </div>
          </div>
        </RevealWrapper>

        <div className="about-copy">
          {paragraphs.map((p, i) => (
            <RevealWrapper key={p.id} delay={i < 2 ? "d1" : "d2"}>
              <p dangerouslySetInnerHTML={{ __html: p.content }} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
