import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Loader from "./components/Loader";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(false);

  // Cursor glow
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
          <div id="toast" className="toast">
            You’ll be redirected to WhatsApp to send your message...
          </div>
        </>
      )}
    </>
  );
};

export default App;
