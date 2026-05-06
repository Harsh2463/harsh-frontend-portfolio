import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader({ onDone }) {
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.2 })
      .to(lineRef.current, {
        width: "180px",
        duration: 0.8,
        ease: "power2.out",
      })
      .to(wrapRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        onComplete: onDone,
      });
  }, [onDone]);

  return (
    <div
      ref={wrapRef}
      className="loader"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--bg-primary)",
      }}
    >
      <div
        ref={logoRef}
        style={{
          fontFamily: "Syne, sans-serif",
          fontWeight: 800,
          fontSize: "3rem",
          color: "var(--accent)",
          opacity: 0,
          transform: "translateY(20px)",
        }}
      >
        HR
      </div>
      <div
        ref={lineRef}
        style={{
          width: 0,
          height: "2px",
          background: "linear-gradient(90deg, var(--accent), var(--accent2))",
          borderRadius: "99px",
        }}
      />
    </div>
  );
}
