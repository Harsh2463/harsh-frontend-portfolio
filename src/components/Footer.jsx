import React from "react";
import { navLinks } from "../data";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "40px 5%",
        borderTop: "1px solid",
        borderImage:
          "linear-gradient(90deg,transparent,var(--accent),var(--accent2),transparent) 1",
        background: "var(--bg-secondary)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            fontFamily: "Syne,sans-serif",
            fontWeight: 800,
            fontSize: "1.4rem",
          }}
          className="grad-text"
        >
          Harsh Mishra
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.88rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
            >
              {l}
            </a>
          ))}
        </div>
        <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
          Closing the tag on another successful project.
        </div>
        <div
          style={{
            color: "var(--text-muted)",
            fontSize: "0.78rem",
            opacity: 0.6,
          }}
        >
          © 2026 Harsh Mishra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
