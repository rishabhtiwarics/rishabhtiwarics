import React from "react";
import { Link } from "react-router-dom";
import { profile, skills, experience, education } from "../data/profile.js";
import rishabhImg from "../img/aboutimges.png";
import heyImg from "../img/hey.png";

const services = [
  { icon: "💻", title: "Web Development",     desc: "Building performant React & Next.js apps that scale — from landing pages to full-featured platforms." },
  { icon: "🎨", title: "UI / UX Design",       desc: "Pixel-perfect Figma designs with sharp typography, color, and interaction principles." },
  { icon: "⚡", title: "Frontend Engineering", desc: "Clean, maintainable code using modern JS, TypeScript, Redux, and component-driven architecture." },
  { icon: "📱", title: "Responsive Layouts",   desc: "Fluid layouts on every device using CSS Grid, Flexbox, Tailwind, and Bootstrap." },
];

const techLogos = ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "Figma", "React.js", "Next.js", "Redux", "Postman", "Git"];

export default function About() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <div className="ab-hero">

        {/* Greeting */}
        <p className="ab-greeting">
          <img src={heyImg} alt="Hey" className="ab-wave-img" />
          Hi, my name is Rishabh <span className="ab-hide-mobile">and I am a freelance</span>
        </p>

        {/* Big headline — two lines */}
        <div className="ab-headline">

          {/* Line 1 — solid: "Web Designer ●" */}
          <div className="ab-line1">
            Web Designer
            <span className="ab-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </div>

          {/* Line 2 — ghost outline, smaller */}
          <div className="ab-line2">&amp; Frontend Developer</div>
        </div>

        {/* Centered floating photo — sits between line1 bottom & line2 */}
        <div className="ab-photo-wrap">
          <img src={rishabhImg} alt="Rishabh Tiwari" />
        </div>

        {/* Location + tech logos */}
        <div className="ab-info-row">
          <p className="ab-subline">based in Rewa, Madhya Pradesh.</p>
          <div className="ab-logos">
            <div className="ab-logos-track">
              {techLogos.map((tech, i) => <span key={i}>{tech}</span>)}
              {techLogos.map((tech, i) => <span key={`dup-${i}`}>{tech}</span>)}
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="ab-cta-row">
          <Link to="/contact" className="btn btn-dark">
            <svg className="icon btn-icon" aria-hidden="true"><use href="#i-send" /></svg>
            <span>Hire Me</span>
          </Link>
          <Link to="/projects" className="btn btn-light">
            <span>View Work →</span>
          </Link>
        </div>
      </div>
      <div className="divider" />

      {/* ═══ BIZ CARD ═══ */}
      <section className="section">
        <div className="biz-card">
          <div className="biz-card-id">
            <div className="biz-card-avatar">
              <svg viewBox="0 0 24 24"><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>
            </div>
            <div>
              <div className="biz-card-name">Open to freelance work</div>
              <div className="biz-card-role">Frontend development, done right</div>
            </div>
          </div>
          <div className="biz-card-contact">
            <div>Freelance: <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><span className="status-dot"><span className="status-dot-core"></span></span>Available</span></div>
            <div>Phone: <span>{profile.phone}</span></div>
            <div>Email: <span>{profile.email}</span></div>
            <div>Address: <span>{profile.address}</span></div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ WHAT I DO ═══ */}
      <section className="section">
        <div className="section-top">
          <span className="eyebrow">What I Do</span>
          <h2 className="ab-section-h2">Building great digital products<br />from concept to code.</h2>
        </div>
        <div className="ab-do-grid">
          {services.map((svc, i) => (
            <div key={i} className="ab-do-card">
              <div className="ab-do-icon">{svc.icon}</div>
              <div>
                <p className="ab-do-title">{svc.title}</p>
                <p className="ab-do-desc">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ═══ SKILLS ═══ */}
      <section className="section">
        <div className="section-top">
          <span className="eyebrow">My Toolkit</span>
          <h2 className="ab-section-h2">Well-versed in React, Next.js,<br />Figma, HTML &amp; CSS.</h2>
        </div>
        <div className="ab-skills-grid">
          {skills.map(sk => (
            <div key={sk.name} className="ab-skill-card">
              <span className="ab-skill-name">{sk.name}</span>
              <div className="ab-skill-bar">
                <div className="ab-skill-fill" style={{ width: `${sk.level}%` }} />
              </div>
              <span className="ab-skill-pct">{sk.level}%</span>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ═══ EXPERIENCE & EDUCATION ═══ */}
      <section className="section">
        <div className="ab-tl-grid">
          <div>
            <span className="eyebrow ab-tl-eyebrow">Experience</span>
            <div className="ab-timeline">
              {experience.map((ex, i) => (
                <div key={i} className="ab-tl-item">
                  <div className="ab-tl-dot" />
                  <div>
                    <p className="ab-tl-title">{ex.title}</p>
                    <p className="ab-tl-place">{ex.place}</p>
                    <p className="ab-tl-dates">{ex.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow ab-tl-eyebrow">Education</span>
            <div className="ab-timeline">
              {education.map((ed, i) => (
                <div key={i} className="ab-tl-item">
                  <div className="ab-tl-dot" />
                  <div>
                    <p className="ab-tl-title">{ed.title}</p>
                    <p className="ab-tl-place">{ed.place}</p>
                    <p className="ab-tl-dates">{ed.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="section ab-cta-section">
        <p className="ab-cta-sup">Ready to build something?</p>
        <h2 className="ab-cta-heading">
          Let's work<br />
          <span className="ab-cta-ghost">together.</span>
        </h2>
        <div className="ab-cta-btns">
          <Link to="/contact" className="btn btn-dark">
            <svg className="icon btn-icon" aria-hidden="true"><use href="#i-send" /></svg>
            <span>Send a Message</span>
          </Link>
          <a href={`mailto:${profile.email}`} className="btn btn-light">
            <span>{profile.email}</span>
          </a>
        </div>
      </section>
    </>
  );
}
