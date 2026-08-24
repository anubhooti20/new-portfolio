import { HeroStatOut } from "@/lib/api";

export default function Hero({ stats }: { stats: HeroStatOut[] }) {
  return (
    <div className="hero">
      <div className="hero-sidebar">
        <div className="sidebar-index">Portfolio · 2025</div>
        <div className="sidebar-line" />
        <div className="sidebar-num">01</div>
      </div>

      <div className="hero-main">
        <div className="hero-top">
          <div className="hero-tag">Python Backend Developer · Jaipur, IN</div>
          <div className="hero-year">Open to remote</div>
        </div>

        {/* Split: left copy, right featured panel */}
        <div className="hero-split">
          <div className="hero-left-col">
            <div className="hero-chip">
              <span className="hero-chip-dot" />
              Available for new projects · 2025
            </div>

            <h1 className="hero-headline">
              I build <em>software</em>
              <br />
              that <span className="stroke">works.</span>
            </h1>

            <p className="hero-desc-v2">
              <strong>Python backend developer</strong> with 1+ year crafting production
              Django systems — REST APIs, async pipelines, microservices, and the database
              tuning that makes them all fast. Currently shipping at{" "}
              <strong>CreateBytes</strong>.
            </p>

            <div className="hero-actions-v2">
              <a href="#work" className="btn-primary-v2">
                See my work
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost-v2">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hero-right-col">
            {/* Glance card */}
            <div className="glance-card">
              <div className="glance-label">At a glance</div>
              <div className="glance-rows">
                {stats.map((stat) => {
                  const big = (stat.value_big ?? "").trim();
                  const text = (stat.value_text ?? "").split("\n")[0].trim();
                  const display = big || text;
                  const hasPlus = display.endsWith("+");
                  const num = hasPlus ? display.slice(0, -1) : display;
                  const isLong = display.length > 4;
                  return (
                    <div key={stat.id} className="glance-row">
                      <span
                        className={`gr-n${big ? "" : " is-text"}`}
                        style={isLong ? { fontSize: "1.35rem" } : undefined}
                      >
                        {num}
                        {hasPlus && <em>+</em>}
                      </span>
                      <span className="gr-l">{stat.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="glance-tags">
                {["Python", "FastAPI", "RAG", "Qdrant", "AWS"].map((t) => (
                  <span key={t} className="glance-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating accent card */}
            <div className="float-card fc-2">
              <div className="fc-icon">✦</div>
              <div className="fc-body">
                <div className="fc-val">Remote-ready</div>
                <div className="fc-lbl">Open to new opportunities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom info strip */}
        <div className="hero-strip">
          <div className="strip-cell">
            <div className="sc-label">Currently</div>
            <div className="sc-value">
              Software Developer
              <br />
              <em>at CreateBytes</em>
            </div>
          </div>
          <div className="strip-cell">
            <div className="sc-label">Specialty</div>
            <div className="sc-value">
              Django + DRF,
              <br />
              async &amp; <em>microservices</em>
            </div>
          </div>
          <div className="strip-cell">
            <div className="sc-label">Education</div>
            <div className="sc-value">
              B.Tech CSE Honours
              <br />
              <em>RTU Jaipur, 2025</em>
            </div>
          </div>
          <div className="strip-cell">
            <div className="sc-label">Looking for</div>
            <div className="sc-value">
              Remote backend roles
              <br />
              <em>product or service-based</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
