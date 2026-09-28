import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { experience, education, skills } from "../data/profile.js";

const Timeline = ({ items }) => (
  <div className="timeline-roles">
    {items.map((item, index) => (
      <Fragment key={index}>
        <div className="timeline-role">
          <div className="timeline-left">
            <p className="timeline-title">{item.title}</p>
            <p className="timeline-dates">{item.dates}</p>
          </div>
          <span className="timeline-marker"></span>
          <p className="timeline-desc">{item.place}</p>
        </div>
        {index < items.length - 1 && <div className="timeline-connector"></div>}
      </Fragment>
    ))}
  </div>
);

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

      <div className="divider"></div>

      <section className="section">
        <div className="section-top section-top--center">
          <span className="eyebrow">Education</span>
          <h2 className="section-heading center">Where I studied</h2>
        </div>
        <div className="timeline-card">
          <Timeline items={education} />
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        <div className="section-top">
          <span className="eyebrow">Skills</span>
          <h2 className="toolkits-heading">
            Creative ability/Developing on. Equipped with a range of technical skills, I'm proficient in tools and technologies that drive impactful solutions.
          </h2>
        </div>
        <div className="toolkits-grid">
          {skills.map((s, idx) => (
            <div className="tool-card" key={idx}>
              <div className="tool-left">
                <span className="tool-logo">{s.abbr}</span>
                <div className="tool-text">
                  <p className="tool-name">{s.name}</p>
                  <div className="tool-bar">
                    <span style={{ width: `${s.level}%` }}></span>
                  </div>
                </div>
              </div>
              <span className="tool-level">{s.level}%</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
