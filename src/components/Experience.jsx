import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    // Heading
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

    // Timeline line draw
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.8,
        ease: "power2.out",
        transformOrigin: "top center",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
      },
    );

    // Timeline items
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const isRight = timeline[i].side === "right";
      gsap.fromTo(
        el,
        { x: isRight ? 60 : -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%" },
        },
      );
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: "110px 5%",
        background: "var(--bg-secondary)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Heading */}
        <div
          ref={headingRef}
          style={{ textAlign: "center", marginBottom: "70px" }}
        >
          <span
            className="section-tag"
            style={{ display: "block", textAlign: "center" }}
          >
            // journey
          </span>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            My <span className="grad-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            paddingBottom: "20px",
            overflow: "hidden",
          }}
        >
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="tl-line"
            style={{
              position: "absolute",
              // left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(180deg, var(--accent), var(--accent2))",
              transformOrigin: "top",
              transform: "scaleY(0) translateX(-50%)",
              borderRadius: "2px",
            }}
          />

          {timeline.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="tl-item"
              style={{
                display: "flex",
                justifyContent:
                  item.side === "right" ? "flex-end" : "flex-start",
                paddingBottom: "40px",
                position: "relative",
              }}
            >
              {/* Dot */}
              <div
                className="line-dot"
                style={{
                  position: "absolute",
                  // left: "calc(50% - 7px)",
                  top: "28px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  border: "3px solid var(--bg-secondary)",
                  boxShadow: "0 0 16px var(--accent-glow)",
                  zIndex: 2,
                }}
              />

              {/* Card */}
              <div
                className="exp-card"
                style={{
                  width: "44%",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-solid)",
                  borderRadius: "18px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "Fira Code, monospace",
                    fontSize: "0.78rem",
                    color: "var(--accent)",
                    marginBottom: "8px",
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "4px",
                  }}
                >
                  {item.role}
                </div>
                <div
                  style={{
                    color: "var(--accent2)",
                    fontSize: "0.85rem",
                    marginBottom: "12px",
                    fontWeight: 500,
                  }}
                >
                  {item.org}
                </div>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
