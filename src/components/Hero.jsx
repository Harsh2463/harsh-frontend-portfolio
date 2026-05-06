import { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { socials } from "../data";
import { ThemeContext } from "../context/ThemeContext";

const ROLES = [
  "Frontend Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Full-Stack Builder",
];

export default function Hero() {
  /* ── Typewriter ── */
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const target = ROLES[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          60,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1900);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  /* ── GSAP entrance ── */
  const tagRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const bioRef = useRef(null);
  const btnsRef = useRef(null);
  const socialRef = useRef(null);
  const cardRef = useRef(null);
  const orb1Ref = useRef(null);

  useEffect(() => {
    const els = [
      tagRef,
      nameRef,
      roleRef,
      bioRef,
      btnsRef,
      socialRef,
      cardRef,
    ].map((r) => r.current);
    gsap.fromTo(
      els,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.1,
      },
    );
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "950px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "120px 5% 80px",
        overflow: "hidden",
      }}
    >
      {/* Background elements */}
      <div className="dot-grid" />
      <div
        ref={orb1Ref}
        className="orb"
        style={{
          width: "500px",
          height: "500px",
          background: "var(--accent)",
          top: "-100px",
          right: "-100px",
        }}
      />
      <div
        className="orb"
        style={{
          width: "350px",
          height: "350px",
          background: "var(--accent2)",
          bottom: "-50px",
          left: "-50px",
          animationDelay: "3s",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          flexWrap: "wrap",
          gap: "60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Left copy ── */}
        <div style={{ flex: "1", minWidth: "300px", maxWidth: "580px" }}>
          {/* Greeting tag */}
          <div
            ref={tagRef}
            style={{
              fontFamily: "Fira Code, monospace",
              fontSize: "0.9rem",
              color: "var(--accent)",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ opacity: 0.5 }}>&lt;</span>
            Hello, World! 👋
            <span style={{ opacity: 0.5 }}>/&gt;</span>
          </div>

          {/* Name */}
          <h1
            ref={nameRef}
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: "16px",
              letterSpacing: "-0.03em",
            }}
          >
            I'm <span className="grad-text">Harsh Mishra</span>
          </h1>

          {/* Role typewriter */}
          <div
            ref={roleRef}
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "var(--text-muted)",
              marginBottom: "24px",
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              minHeight: "2em",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ color: "var(--text-primary)" }}>{displayed}</span>
            <span className="tw-cursor" />
          </div>

          {/* Bio */}
          <p
            ref={bioRef}
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.78,
              marginBottom: "36px",
              fontSize: "1rem",
              maxWidth: "480px",
            }}
          >
            Skilled in creating responsive website layouts and implementing
            clean, functional user interfaces, proficient in core web
            technologies and focused on usability and consistency. I craft
            high-performance, pixel-perfect web experiences using
            React,HTML,CSS, Tailwind, and modern tooling.
          </p>

          {/* CTA Buttons */}
          <div
            ref={btnsRef}
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "36px",
            }}
          >
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>
            <a
              href="/Harsh_cv.pdf"
              download="Harsh_Mishra_cv.pdf"
              className="btn-outline"
            >
              Download CV ↓
            </a>
          </div>

          {/* Socials */}
          <div ref={socialRef} style={{ display: "flex", gap: "12px" }}>
            {socials.map((s) => {
              const Icon = s.icon;

              const c = s.color;

              return (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-solid)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-solid)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon
                    style={{ color: `${theme === "dark" ? c.dark : c.light}` }}
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* ── Right — code card ── */}
        <div
          ref={cardRef}
          style={{
            flex: "1",
            minWidth: "280px",
            maxWidth: "420px",
            position: "relative",
          }}
        >
          <div
            className="glass"
            style={{
              borderRadius: "24px",
              padding: "28px",
              fontFamily: "Fira Code, monospace",
              fontSize: "0.82rem",
              lineHeight: 2,
              boxShadow: "0 0 80px var(--accent-glow)",
            }}
          >
            {/* Traffic lights */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
              {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
                <div
                  key={c}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: c,
                  }}
                />
              ))}
            </div>

            {/* Code snippet */}
            <div style={{ color: "var(--text-muted)" }}>
              <span style={{ color: "#ff79c6" }}>const</span>{" "}
              <span style={{ color: "#50fa7b" }}>developer</span>{" "}
              <span>= {"{"}</span>
            </div>
            <div style={{ paddingLeft: "20px" }}>
              <CodeLine k="name" v="Harsh Mishra" vs="#f1fa8c" />
              <CodeLine k="role" v="Frontend Dev" vs="#f1fa8c" />
              <CodeLine k="exp" v="Fresher" vs="#bd93f9" />
              <div>
                <span style={{ color: "#8be9fd" }}>stack</span>
                <span style={{ color: "var(--text-muted)" }}>: [</span>
              </div>
              <div style={{ paddingLeft: "20px" }}>
                {["React", "HTML", "CSS", "Tailwind", "Node.js"].map(
                  (s, i, a) => (
                    <span key={i}>
                      <span style={{ color: "#f1fa8c" }}>"{s}"</span>
                      {i < a.length - 1 && (
                        <span style={{ color: "var(--text-muted)" }}>, </span>
                      )}
                    </span>
                  ),
                )}
              </div>
              <div>
                <span style={{ color: "var(--text-muted)" }}>],</span>
              </div>
              <CodeLine k="coffee" v="Infinity" vs="#bd93f9" noQuotes />
            </div>
            <div>
              <span style={{ color: "var(--text-muted)" }}>{"}"}</span>
            </div>
            <div
              style={{
                marginTop: "8px",
                color: "#6272a4",
                fontSize: "0.75rem",
              }}
            >
              // Available for freelance
            </div>

            {/* Online dot */}
            <div
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 10px #4ade80",
              }}
            />
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              top: "-14px",
              right: "-14px",
              background:
                "linear-gradient(135deg, var(--accent), var(--accent2))",
              color: "#fff",
              padding: "8px 14px",
              borderRadius: "99px",
              fontSize: "0.78rem",
              fontWeight: 600,
              boxShadow: "0 4px 20px var(--accent-glow)",
            }}
          >
            🚀 Open to Work
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="bounce"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-muted)",
          fontSize: "1.6rem",
          zIndex: 1,
        }}
      >
        ↓
      </button>
    </section>
  );
}

function CodeLine({ k, v, vs, noQuotes }) {
  return (
    <div>
      <span style={{ color: "#8be9fd" }}>{k}</span>
      <span style={{ color: "var(--text-muted)" }}>: </span>
      <span style={{ color: vs }}>{noQuotes ? v : `"${v}"`}</span>
      <span style={{ color: "var(--text-muted)" }}>,</span>
    </div>
  );
}
