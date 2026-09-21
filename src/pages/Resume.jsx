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
        <div className="section-top">
          <span className="eyebrow">Resume</span>
          <h1 className="page-title">My Resume</h1>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        <div className="section-top section-top--center">
          <span className="eyebrow">Experience</span>
          <h2 className="section-heading center">Where I've worked</h2>
        </div>
        <div className="timeline-card">
          <Timeline items={experience} />
          <Link to="/contact" className="btn btn-dark btn-timeline">
            <svg className="icon btn-icon" aria-hidden="true"><use href="#i-send" /></svg>
            <span>Hire Me</span>
          </Link>
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
