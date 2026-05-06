import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills, tools } from "../data";
import { ThemeContext } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const barRefs = useRef([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Heading slide-up
    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: { trigger: headingRef.current, start: "top 82%" },
      },
    );

    // Cards stagger
    const cards = gridRef.current?.querySelectorAll(".skill-card") || [];
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          onEnter: () => {
            // Animate skill bars
            barRefs.current.forEach((bar, i) => {
              if (bar) bar.style.width = skills[i].level + "%";
            });
          },
        },
      },
    );
  }, []);

  return (
    <section
      id="skills"
      style={{
        padding: "110px 5%",
        background: "var(--bg-secondary)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <div
          ref={headingRef}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <span
            className="section-tag"
            style={{ display: "block", textAlign: "center" }}
          >
            // tech stack
          </span>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Skills &amp; <span className="grad-text">Expertise</span>
          </h2>
        </div>

        {/* ── Skills Grid ── */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))",
            gap: "16px",
            marginBottom: "50px",
          }}
        >
          {skills.map((sk, i) => {
            const Icon = sk.icon;
            const c = sk.color;
            return (
              <div key={sk.name} className="skill-card">
                <div style={{ fontSize: "2.3rem", marginBottom: "10px" }}>
                  <Icon
                    style={{
                      margin: "0 auto",
                      color: `${theme === "dark" ? c.dark || c : c.light || c}`,
                    }}
                  />
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    marginBottom: "4px",
                  }}
                >
                  {sk.name}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    marginBottom: "8px",
                  }}
                >
                  {sk.level}%
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    ref={(el) => (barRefs.current[i] = el)}
                    data-level={sk.level}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Tools Row ── */}
        <div>
          <div
            style={{
              fontFamily: "Fira Code, monospace",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              marginBottom: "16px",
              letterSpacing: "0.1em",
            }}
          >
            // tools &amp; design
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {tools.map((t) => {
              const Icon = t.icon;
              return (
                <span key={t.name} className="tool-badge">
                  <Icon style={{ color: t.color }} />
                  {t.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
