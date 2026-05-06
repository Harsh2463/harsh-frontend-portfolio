import { useState, useEffect, useContext } from "react";
import { navLinks } from "../data";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      // Active section tracking
      const sections = navLinks.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (link) => {
    document
      .getElementById(link.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Desktop / Main Navbar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          padding: scrolled ? "0 3%" : "0 5%",
          transition: "padding 0.3s ease",
        }}
      >
        <div
          className="glass"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 24px",
            borderRadius: "16px",
            margin: "12px 0",
            transition: "all 0.3s",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "1.3rem",
              background:
                "linear-gradient(135deg, var(--accent), var(--accent2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
              cursor: "pointer",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            &lt;HR /&gt;
          </div>

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex gap-10"
            style={{ alignItems: "center", gap: "28px" }}
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`nav-link ${activeSection === link.toLowerCase() ? "active" : ""}`}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={toggleTheme}
              title="Toggle theme"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-solid)",
                borderRadius: "10px",
                padding: "8px 12px",
                cursor: "pointer",
                color: "var(--text-primary)",
                fontSize: "1.1rem",
                transition: "all 0.2s",
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Hamburger (mobile) */}
            <button
              className="flex md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-solid)",
                borderRadius: "10px",
                padding: "8px 12px",
                cursor: "pointer",
                color: "var(--text-primary)",
                fontSize: "1.1rem",
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "Syne, sans-serif",
                fontSize: "1.6rem",
                fontWeight: 700,
                color:
                  activeSection === link.toLowerCase()
                    ? "var(--accent)"
                    : "var(--text-primary)",
                transition: "color 0.2s",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
