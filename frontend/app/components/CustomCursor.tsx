"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = document.getElementById("dot");
    const ring = document.getElementById("ring");
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };
    document.addEventListener("mousemove", onMove);

    let rafId: number;
    const tick = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const grow = () => {
      dot.style.width = "5px";
      dot.style.height = "5px";
      ring.style.width = "60px";
      ring.style.height = "60px";
    };
    const shrink = () => {
      dot.style.width = "10px";
      dot.style.height = "10px";
      ring.style.width = "38px";
      ring.style.height = "38px";
    };

    const targets = document.querySelectorAll(
      "a,button,.proj-card,.exp-c,.sk-tag"
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="dot" />
      <div id="ring" />
    </>
  );
}
