import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";

export default function About() {
  return (
    <>
      <section className="section page-head">
        <div className="section-top">
          <span className="eyebrow">About Me</span>
          <h1 className="page-title">Who I Am</h1>
          <p className="page-lead">
            Experienced frontend developer with passion for creating attractive and interactive websites meeting customer needs and exceeding expectations. Well-versed in developing React.js and Next.js based websites and web apps.
          </p>
        </div>
        <div className="section-actions">
          <Link to="/contact" className="btn btn-dark">
            <svg className="icon btn-icon" aria-hidden="true"><use href="#i-send" /></svg>
            <span>Hire Me</span>
          </Link>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        <div className="info-card">
          <div className="info-head">
            <h2>{profile.name}</h2>
            <p>{profile.role}</p>
          </div>
          <ul className="info-list">
            <li className="info-row">
              <span className="info-label">Age</span>
              <span className="info-value">24</span>
            </li>
            <li className="info-row">
              <span className="info-label">Residence</span>
              <span className="info-value">Rewa Madhya Pradesh</span>
            </li>
            <li className="info-row">
              <span className="info-label">Freelance</span>
              <span className="info-value info-value--status">
                <span className="status-dot--inline">
                  <span className="status-dot-core"></span>
                </span>
                Available
              </span>
            </li>
            <li className="info-row">
              <span className="info-label">Address</span>
              <span className="info-value">{profile.address}</span>
            </li>
            <li className="info-row">
              <span className="info-label">Phone</span>
              <a className="info-value" href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
            </li>
            <li className="info-row">
              <span className="info-label">E-mail</span>
              <a className="info-value" href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
          </ul>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        <div className="section-top">
          <span className="eyebrow">What I Do</span>
        </div>
        <div className="cards-2">
          <div className="info-tile">
            <span className="tile-icon">
              <svg className="icon" aria-hidden="true"><use href="#i-monitor" /></svg>
            </span>
            <h3>Web Development</h3>
            <p>The process of building and maintaining websites and web applications for the internet or an intranet.</p>
          </div>
          <div className="info-tile">
            <span className="tile-icon">
              <svg className="icon" aria-hidden="true"><use href="#i-layout" /></svg>
            </span>
            <h3>Website Design</h3>
            <p>Website design is the process of creating a website's appearance, layout, and content.</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        <div className="section-top">
          <span className="eyebrow">My Experience</span>
          <h2 className="toolkits-heading">
            Well-versed in developing React.js and Next.js based websites. Excels in JavaScript, Figma, HTML and CSS development.
          </h2>
        </div>
        <div className="tag-list">
          <span className="tag">HTML</span>
          <span className="tag">React</span>
          <span className="tag">Figma</span>
          <span className="tag">Bootstrap</span>
        </div>
      </section>
    </>
  );
}
