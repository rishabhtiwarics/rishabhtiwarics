import React from "react";
import { skills } from "../data/profile.js";

const eduTimelineData = [
  { y: 2015, i: "school", t: "High School", d: "May 2015", s: "Saraswati Shishu Mandir, Rewa" },
  { y: 2017, i: "pencil", t: "Higher Secondary", d: "May 2017", s: "Umadutta Smriti Vidyalaya, Rewa" },
  { y: 2021, i: "cap", t: "Bachelor of Technology: Computer Science and Engineering", d: "May 2021", s: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Rewa" }
];

const eduTimelineIcons = {
  school: <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M12 10h.01" />,
  pencil: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />,
  cap: <path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c3 3 9 3 12 0v-5" />
};

export default function Resume() {
  return (
    <>
      <section className="section page-head">
        <div className="res-header-stage">
          <h1 className="res-header-title res-header-front" aria-label="My Resume.">
            <span className="res-header-q" aria-hidden="true">&quot;</span>
            <span className="res-header-box">My</span>
            <span>Resume</span>
            <span className="res-header-dot" aria-hidden="true">.</span>
          </h1>
          <div className="res-header-title res-header-ghost" aria-hidden="true">
            <span className="res-header-q">&quot;</span>
            <span className="res-header-box">My</span>
            <span>Resume</span>
            <span className="res-header-dot">.</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ EDUCATION TIMELINE SECTION ═══ */}
      <section className="section res-edu-wrap">
        <div className="mh">
          <div className="mh-row">
            <h2 className="mh-word">EDUCATION</h2>
            <div className="mh-desc-col">
              <p className="mh-desc">
                Academic foundation &amp; degree details from school to graduation
              </p>
              <div className="mh-desc-rule"></div>
            </div>
          </div>
          <div className="mh-bottom">
            <span className="eyebrow mh-label">Education</span>
            <h2 className="mh-word--full">ACADEMIC JOURNEY &amp; QUALIFICATIONS</h2>
          </div>
        </div>

        <div className="res-edu-stage">
          <div className="res-edu-tl">
            {eduTimelineData.map((item, idx) => {
              const isUp = idx % 2 === 0;
              return (
                <div
                  className="res-edu-entry"
                  style={{ "--z": idx + 1 }}
                  key={idx}
                >
                  <div className={`res-edu-seg ${isUp ? "res-edu-p" : "res-edu-c"}`}>
                    {item.y}
                  </div>
                  <div className={`res-edu-item ${isUp ? "res-edu-up" : "res-edu-dn"}`}>
                    <div className="res-edu-txt">
                      <h3>{item.t}</h3>
                      <p>
                        <b>{item.d}</b>
                        {item.s}
                      </p>
                    </div>
                    <div className="res-edu-ic">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {eduTimelineIcons[item.i]}
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ MY TOOLKIT / SKILLS & TOOLS ═══ */}
      <section className="section">
        <div className="mh">
          <div className="mh-row">
            <h2 className="mh-word">MY TOOLKIT</h2>
            <div className="mh-desc-col">
              <p className="mh-desc">
                Well-versed in React, Next.js, Figma, HTML &amp; CSS — these are the tools I use every day
              </p>
              <div className="mh-desc-rule"></div>
            </div>
          </div>
          <div className="mh-bottom">
            <span className="eyebrow mh-label">Tech Stack</span>
            <h2 className="mh-word--full">MODERN WEB STACK &amp; CREATIVE TOOLS</h2>
          </div>
        </div>

        <div className="chips-section">
          <div className="chip-marquee">
            <div className="chip-track">
              {skills.map((sk) => (
                <div key={sk.name} className="skill-chip">
                  <div className="skill-chip-inner">
                    <span className="dot">
                      <img src={sk.icon} alt={sk.name} />
                    </span>
                    {sk.name} <span className="pct">{sk.level}%</span>
                  </div>
                </div>
              ))}
              {skills.map((sk) => (
                <div key={`dup-${sk.name}`} className="skill-chip">
                  <div className="skill-chip-inner">
                    <span className="dot">
                      <img src={sk.icon} alt={sk.name} />
                    </span>
                    {sk.name} <span className="pct">{sk.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



