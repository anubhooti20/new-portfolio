"use client";

export default function Header() {
  return (
    <header>
      <a href="#" className="logo">
        <div className="logo-mark">
          <svg viewBox="0 0 12 12">
            <polygon points="6,1 11,10 1,10" />
          </svg>
        </div>
        Anubhooti Nagar
      </a>
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#contact" className="nav-cta">
        Hire me
      </a>
    </header>
  );
}
