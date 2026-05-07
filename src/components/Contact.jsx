import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const headingRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: { trigger: headingRef.current, start: "top 70%" },
      },
    );

    const cards = infoRef.current.querySelectorAll(".contact-card");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
      const { name, email, message } = form;

      const text = `👋 *New Portfolio Inquiry*

👤 *Name:* ${name}
📧 *Email:* ${email}

💬 *Message:*
${message}

Sent from your portfolio website,
🚀 Please reply to this message to continue the conversation.`;

      const url = `https://wa.me/917303413312?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");

      toast.classList.remove("show");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 800);
  };

  const infoCards = [
    {
      icon: "📧",
      label: "Email",
      val: "harsh.m2463@gmail.com",
      href: "mailto:harsh.m2463@gmail.com",
    },
    {
      icon: "🐙",
      label: "GitHub",
      val: "github.com/Harsh2463",
      href: "https://github.com/Harsh2463",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      val: "linkedin.com/in/harsh2463",
      href: "https://www.linkedin.com/in/harsh2463/",
    },
    {
      icon: "📍",
      label: "Location",
      val: "Dabri, Delhi-110045 — Remote Friendly",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      style={{ padding: "100px 5%", position: "relative", overflow: "hidden" }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      ></div>
      <div
        className="orb"
        style={{
          width: "400px",
          height: "400px",
          background: "var(--accent)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.15,
        }}
      ></div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          ref={headingRef}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <div className="section-tag" style={{ textAlign: "center" }}>
            // get in touch
          </div>
          <h2
            className="gsap-init"
            style={{
              fontFamily: "Syne,sans-serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            Let's <span className="grad-text">Work Together</span>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              maxWidth: "460px",
              margin: "0 auto",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Have a project in mind or want to chat about frontend engineering?
            I'm all ears.
          </p>
        </div>

        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          {/* Info */}
          <div
            ref={infoRef}
            style={{
              flex: "1",
              minWidth: "260px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {infoCards.map((c, i) => (
              <div key={c.label} className="contact-card">
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "var(--bg-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      marginBottom: "2px",
                    }}
                  >
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      target="_blank"
                      href={c.href}
                      style={{
                        color: "var(--text-primary)",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                      }}
                    >
                      {c.val}
                    </a>
                  ) : (
                    <div
                      style={{
                        color: "var(--text-primary)",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                      }}
                    >
                      {c.val}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div
            className="glass"
            style={{
              flex: "2",
              minWidth: "300px",
              borderRadius: "24px",
              padding: "36px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    marginBottom: "8px",
                    fontWeight: 500,
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Harsh Mishra"
                  className="form-input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    marginBottom: "8px",
                    fontWeight: 500,
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="harsh.m2463@gmail.com"
                  className="form-input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    marginBottom: "8px",
                    fontWeight: 500,
                  }}
                >
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="form-input"
                  style={{ resize: "vertical" }}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="btn-primary"
                style={{
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
                disabled={loading}
              >
                {loading ? (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid rgba(255,255,255,0.4)",
                        borderTopColor: "#fff",
                        borderRadius: "50%",
                        display: "inline-block",
                        animation: "spin 0.8s linear infinite",
                      }}
                    ></span>
                    Opening Whatsapp...
                  </span>
                ) : (
                  "Send Message on Whatsapp →"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
