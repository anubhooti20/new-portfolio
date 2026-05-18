"use client";
import { MarqueeItemOut } from "@/lib/api";

export default function Marquee({ items }: { items: MarqueeItemOut[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-outer">
      <div className="marquee-side" />
      <div className="marquee-wrap">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="msep">◆</span>
              {item.text}
            </span>
          ))}
          {doubled.map((item, i) => (
            <span key={`b${i}`} className="marquee-item">
              <span className="msep">◆</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
