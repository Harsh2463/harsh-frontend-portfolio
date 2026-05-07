import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "../assets/png/me.png";
import aboutImg2 from "../assets/png/me-close.png";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { num: 10, suffix: "+", label: "Projects Built" },
  { num: 5, suffix: "+", label: "Core Skills" },
  { num: 100, suffix: "%", label: "Learning Commitment" },
];

const FLOATING_BADGES = [
  { text: "⚛️ React" },
  { text: "🎨 Figma" },
  { text: "⚡ Fast Learner" },
  { text: "💡 Creative" },
];

export default function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const statRefs = useRef([]);

  useEffect(() => {
    // Slide-in from sides
    gsap.fromTo(
      leftRef.current,
      { x: -70, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: leftRef.current, start: "top 78%" },
      },
    );
    gsap.fromTo(
      rightRef.current,
      { x: 70, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: rightRef.current, start: "top 78%" },
      },
    );

    // Counter animations
    statRefs.current.forEach((el, i) => {
      if (!el) return;
      const target = STATS[i].num;
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.5,
            ease: "power2.out",
            onUpdate() {
              el.textContent = Math.round(obj.val);
            },
          });
        },
      });
    });
  }, []);

  return (
    <section
      id="about"
      style={{ padding: "110px 5%", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            gap: "70px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* ── Left ── */}
          <div ref={leftRef} style={{ flex: "1", minWidth: "300px" }}>
            <span className="section-tag">// about me</span>
            <h2
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginBottom: "20px",
                letterSpacing: "-0.02em",
              }}
            >
              Crafting Interfaces
              <br />
              <span className="grad-text">People Love to Use</span>
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.85,
                marginBottom: "16px",
                fontSize: "1rem",
              }}
            >
              I'm a frontend developer with a strong interest in building clean,
              responsive, and user-friendly websites. I focus on creating
              interfaces that are not only visually structured but also easy to
              use across different devices and screen sizes. My work involves
              translating design concepts into functional web pages using core
              web technologies.
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.85,
                marginBottom: "38px",
                fontSize: "1rem",
              }}
            >
              And open to learning new tools and technologies and continuously
              improving my skills. I work well in collaborative environments and
              can coordinate with designers and developers to ensure proper
              implementation of ideas into working products.
            </p>

            {/* Stats */}
            <div
              className="stats-container"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              {STATS.map((s, i) => (
                <div key={s.label} className="stat-card">
                  <div
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "2.2rem",
                      fontWeight: 800,
                      background:
                        "linear-gradient(135deg, var(--accent), var(--accent2))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    <span ref={(el) => (statRefs.current[i] = el)}>0</span>
                    {s.suffix}
                  </div>
                  <div
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.8rem",
                      marginTop: "4px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right ── */}
          <div
            ref={rightRef}
            style={{
              flex: "1",
              minWidth: "280px",
              maxWidth: "380px",
              position: "relative",
            }}
          >
            <div
              className="avatar"
              style={{
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: "28px",
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent2))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "6rem",
                position: "relative",
                boxShadow: "0 24px 70px var(--accent-glow)",
                // overflow: "hidden",
              }}
            >
              <img
                className="open-eye absolute h-full object-cover rounded-[28px]"
                src={aboutImg}
                alt={aboutImg}
              />
              <img
                className="closed-eye absolute h-full object-cover rounded-[28px]"
                src={aboutImg2}
                alt={aboutImg}
              />

              {FLOATING_BADGES.map((b, i) => {
                const positions = [
                  { top: "20px", right: "-22px" },
                  { bottom: "30px", left: "-22px" },
                  { top: "50%", right: "-40px" },
                  { top: "-20px", left: "20%" },
                ];

                const pos = positions[i % positions.length];

                return (
                  <div
                    key={i}
                    className="floating-badge"
                    style={{
                      position: "absolute",
                      ...pos,
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-solid)",
                      borderRadius: "14px",
                      padding: "10px 16px",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                      whiteSpace: "nowrap",
                      animation: `float ${3 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  >
                    {b.text}
                  </div>
                );
              })}

              {/* Floating badge — React Expert */}
              {/* <div
                style={{
                  position: "absolute",
                  top: "22px",
                  right: "-22px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-solid)",
                  borderRadius: "14px",
                  padding: "10px 16px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  whiteSpace: "nowrap",
                }}
              >
                ⚛️ React Expert
              </div> */}
              {/* Floating badge — Figma Pro */}
              {/* <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "-22px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-solid)",
                  borderRadius: "14px",
                  padding: "10px 16px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  whiteSpace: "nowrap",
                }}
              >
                🎨 Figma Pro
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
