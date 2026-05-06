import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
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

    const cards = gridRef.current?.querySelectorAll(".proj-card") || [];
    gsap.fromTo(
      cards,
      { y: 70, opacity: 0, rotationX: 14 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 78%" },
      },
    );
  }, []);

  return (
    <section
      id="projects"
      style={{ padding: "110px 5%", position: "relative" }}
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
            // my work
          </span>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            Featured <span className="grad-text">Projects</span>
            <span
              style={{
                display: "inline-block",
                marginLeft: "12px",
                verticalAlign: "middle",
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent2))",
                color: "#fff",
                fontSize: "0.9rem",
                padding: "4px 12px",
                borderRadius: "99px",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 600,
              }}
            >
              {projects.length}
            </span>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              maxWidth: "460px",
              margin: "0 auto",
            }}
          >
            Real-world projects built with care, shipped with confidence.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }) {
  return (
    <div className="proj-card">
      {/* Banner */}
      <div className="proj-banner" style={{ background: p.color }}>
        <img
          className=""
          src={`https://api.microlink.io/?url=${p.live}&screenshot=true&meta=false&embed=screenshot.url`}
          alt={p.title}
        />
      </div>

      {/* Body */}
      <div style={{ padding: "24px" }}>
        <h3
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            marginBottom: "8px",
          }}
        >
          {p.title}
        </h3>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.88rem",
            lineHeight: 1.72,
            marginBottom: "16px",
          }}
        >
          {p.desc}
        </p>

        {/* Stack tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          {p.stack.map((t) => (
            <span
              key={t}
              style={{
                padding: "4px 10px",
                borderRadius: "99px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-solid)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                fontWeight: 500,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{
              padding: "9px 18px",
              fontSize: "0.82rem",
              flex: 1,
              justifyContent: "center",
            }}
            onClick={(e) => {
              if (window.innerWidth < 768) {
                e.preventDefault();
                alert("⚠️ This project is best viewed on desktop.");
              }
            }}
          >
            Live Demo ↗
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{
              padding: "8px 16px",
              fontSize: "0.82rem",
              flex: 1,
              justifyContent: "center",
            }}
          >
            GitHub ⌥
          </a>
        </div>
      </div>
    </div>
  );
}
