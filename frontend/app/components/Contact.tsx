"use client";
import { useState } from "react";
import SectionWrapper from "./ui/SectionWrapper";
import RevealWrapper from "./ui/RevealWrapper";

const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch(`${BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper sectionNum="05 / Contact" id="contact">
      <RevealWrapper>
        <div className="sh" style={{ marginBottom: "1.5rem" }}>
          Let&apos;s make
          <br />
          something <em>great.</em>
        </div>
        <p className="ct-note">
          I&apos;m open to remote backend roles, freelance Django projects, and
          interesting problems worth solving. If it&apos;s worth building, I
          want to hear about it.
        </p>
        <div className="ct-links">
          <a
            href="mailto:anubhooti.nagar0001@gmail.com"
            className="ct-link"
          >
            anubhooti.nagar0001@gmail.com{" "}
            <span className="arr">↗</span>
          </a>
          <a
            href="https://github.com/anubhooti20"
            target="_blank"
            rel="noopener noreferrer"
            className="ct-link"
          >
            github.com/anubhooti20 <span className="arr">↗</span>
          </a>
          <a
            href="https://linkedin.com/in/anubhooti-nagar20"
            target="_blank"
            rel="noopener noreferrer"
            className="ct-link"
          >
            LinkedIn <span className="arr">↗</span>
          </a>
          <a href="#" className="ct-link">
            Download Resume <span className="arr">↓</span>
          </a>
        </div>
      </RevealWrapper>

      <RevealWrapper delay="d2">
        {submitted ? (
          <p className="cf-success">
            ✓ Message sent — I&apos;ll reply within 48 hours.
          </p>
        ) : (
          <form className="ct-form" onSubmit={handleSubmit}>
            <div className="cf-row">
              <div className="cf-g">
                <label className="cf-label">Name</label>
                <input
                  className="cf-input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="cf-g">
                <label className="cf-label">Email</label>
                <input
                  className="cf-input"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>
            <div className="cf-g">
              <label className="cf-label">Subject</label>
              <input
                className="cf-input"
                type="text"
                name="subject"
                placeholder="What's the opportunity?"
              />
            </div>
            <div className="cf-g">
              <label className="cf-label">Message</label>
              <textarea
                className="cf-textarea"
                name="message"
                placeholder="Tell me about the role, project, timeline, and anything else useful…"
                required
              />
            </div>
            <button type="submit" className="cf-submit" disabled={loading}>
              {loading ? "Sending…" : "Send message"}
              {!loading && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </form>
        )}
      </RevealWrapper>
    </SectionWrapper>
  );
}
