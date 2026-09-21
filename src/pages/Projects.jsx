import React from "react";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <>
      <section className="section page-head">
        <div className="section-top">
          <span className="eyebrow">Projects</span>
          <h1 className="page-title">My Projects</h1>
          <p className="page-lead">A collection of the websites and web apps I've built.</p>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        {projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={i}>
                <div className="project-thumb">
                  {p.image ? (
                    <img src={p.image} alt={p.title} loading="lazy" />
                  ) : (
                    <span className="project-index">{String(i + 1).padStart(2, "0")}</span>
                  )}
                </div>
                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.description}</p>
                  <div className="tag-list">
                    {(p.tags || []).map((t, tidx) => (
                      <span className="tag tag-sm" key={tidx}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {(p.live || p.github) && (
                    <div className="project-links">
                      {p.live && (
                        <a className="btn btn-dark btn-sm" href={p.live} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      )}
                      {p.github && (
                        <a className="btn btn-light btn-sm" href={p.github} target="_blank" rel="noopener noreferrer">
                          Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">Projects coming soon.</p>
        )}
      </section>
    </>
  );
}
