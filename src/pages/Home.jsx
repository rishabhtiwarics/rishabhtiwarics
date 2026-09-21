import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const tiles = [
  { name: "HTML", src: "/tech/html.png", bg: "#e34f26" },
  { name: "React", src: "/tech/react.png", bg: "#20232a" },
  { name: "Figma", src: "/tech/figma.png", bg: "#1e1e1e" },
  { name: "Bootstrap", src: "/tech/bootstrap.png", bg: "#7952b3" },
  { name: "Postman", src: "/tech/postman.png", bg: "#ff6c37" },
  { name: "JavaScript", src: "/tech/js.png", bg: "#f7df1e" },
  { name: "Git", src: "/tech/git.png", bg: "#f05032" },
  { name: "CSS", src: "/tech/css.png", bg: "#1572b6" },
  { name: "Tailwind CSS", src: "/tech/tailwind.png", bg: "#0ea5e9" },
];

export default function Home() {
  const trackRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    // Ticker logic
    let frame = null;
    const track = trackRef.current;
    
    if (track) {
      let offset = 0;
      const speed = 0.15;
      const tick = () => {
        offset += speed;
        const resetPoint = track.scrollWidth / 2;
        if (offset >= resetPoint) offset = 0;
        track.style.transform = `translateX(-${offset}px)`;
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    // Typewriter logic
    const typedEl = typedRef.current;
    let typeTimer = null;
    
    if (typedEl) {
      const phrases = ["Frontend Developer", "Rishabh Tiwari", "Web Developer"];
      const TYPE_SPEED = 150;
      const DELETE_SPEED = 90;
      const HOLD_TIME = 2200;
      const GAP_TIME = 600;

      let wordIndex = 0;
      let charIndex = 0;
      let deleting = false;

      const tick = () => {
        const current = phrases[wordIndex % phrases.length];

        if (!deleting) {
          charIndex++;
          typedEl.textContent = current.slice(0, charIndex);
          if (charIndex === current.length) {
            deleting = true;
            typeTimer = setTimeout(tick, HOLD_TIME);
            return;
          }
          typeTimer = setTimeout(tick, TYPE_SPEED);
        } else {
          charIndex--;
          typedEl.textContent = current.slice(0, charIndex);
          if (charIndex === 0) {
            deleting = false;
            wordIndex++;
            typeTimer = setTimeout(tick, GAP_TIME);
            return;
          }
          typeTimer = setTimeout(tick, DELETE_SPEED);
        }
      };
      typeTimer = setTimeout(tick, 600);
    }

    return () => {
      if (typeTimer) clearTimeout(typeTimer);
    };
  }, []);

  return (
    <section className="hero">
      <Link to="/about" className="hero-pill">
        <span className="hero-pill-avatar">
          <img src="/img/rishabh.jpeg" alt="Rishabh Tiwari" />
        </span>
        <span>Rishabh Tiwari</span>
      </Link>

      <div className="hero-heading">
        <h1 className="hero-greeting">
          Hello! <img src="/hello.png" alt="Hello" className="hello-img-animated" /> I Am
        </h1>
        <div className="hero-heading-row">
          <h1>
            <span className="typed-text" id="heroTyped" ref={typedRef}></span>
            <span className="typed-cursor" aria-hidden="true"></span>
          </h1>
        </div>
      </div>

      <p className="hero-desc">
        Passionate web developer skilled in React.js, Next.js, HTML, CSS, and JavaScript. Experienced in creating responsive, user-centric websites and delivering tailored solutions. Focused on enhancing web performance and providing engaging user experiences.
      </p>

      <Link to="/contact" className="btn btn-dark hero-cta">
        <svg className="icon btn-icon" aria-hidden="true"><use href="#i-send" /></svg>
        <span>Hire Me</span>
      </Link>

      <div className="hero-strip" aria-hidden="true">
        <ul className="hero-strip-track" id="heroStripTrack" ref={trackRef}>
          {tiles.map((t, i) => (
            <li key={i} className="strip-tile" style={{ background: t.bg }}>
              <img src={t.src} alt={t.name} className="strip-tile-img" />
              <span className="strip-tile-name">{t.name}</span>
            </li>
          ))}
          {/* Duplicate set for continuous loop */}
          {tiles.map((t, i) => (
            <li key={`dup-${i}`} className="strip-tile" style={{ background: t.bg }}>
              <img src={t.src} alt={t.name} className="strip-tile-img" />
              <span className="strip-tile-name">{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
