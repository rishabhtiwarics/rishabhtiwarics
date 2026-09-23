import React from "react";
import { projects } from "../data/projects.js";

const orbitImages = [
  "https://lordoffragrance.vercel.app/assets/logo-bhOzWs4J.png",
  "https://scentofsurrender.vercel.app/assets/SOS_Logo_main-Ct7QDk5D.png",
  "https://tutorialforgeeks.com/assets/image/WhatsApp_Image_2026-01-19_at_9.42.46_PM_1_-removebg-preview-removebg-preview.png",
  "https://aromus.vercel.app/img/logo.png",
  "https://paramayu.vercel.app/logo-paramayu.jpeg",
  "https://ministryperfume.vercel.app/assets/ministry_black_logo-DgPjcI0a.png",
  "https://avenlora.vercel.app/assets/avenlora-main-logo-C5wd2QJt.png",
  "https://pulpayurveda.vercel.app/img/logo.png",
  "https://www.intunefoods.ca/shared/images/INTUNE-FOODS-Logo.svg",
  "https://astonreed.vercel.app/assets/logo-D89ihoBm.png",
  "https://www.nirogyamwellness.com/Images/logo.png",
  "https://www.thirdeyescent.com/img/logo/logo.png",
  "https://elvare-paris-frontend.vercel.app/assets/logo.png",
  // Repeated to reduce gaps
  "https://lordoffragrance.vercel.app/assets/logo-bhOzWs4J.png",
  "https://scentofsurrender.vercel.app/assets/SOS_Logo_main-Ct7QDk5D.png",
  "https://tutorialforgeeks.com/assets/image/WhatsApp_Image_2026-01-19_at_9.42.46_PM_1_-removebg-preview-removebg-preview.png",
  "https://aromus.vercel.app/img/logo.png",
  "https://paramayu.vercel.app/logo-paramayu.jpeg",
  "https://ministryperfume.vercel.app/assets/ministry_black_logo-DgPjcI0a.png",
  "https://avenlora.vercel.app/assets/avenlora-main-logo-C5wd2QJt.png",
  "https://pulpayurveda.vercel.app/img/logo.png",
  "https://www.intunefoods.ca/shared/images/INTUNE-FOODS-Logo.svg",
  "https://astonreed.vercel.app/assets/logo-D89ihoBm.png",
  "https://www.nirogyamwellness.com/Images/logo.png",
  "https://www.thirdeyescent.com/img/logo/logo.png",
  "https://elvare-paris-frontend.vercel.app/assets/logo.png"
];

export default function Projects() {
  return (
    <>
      <section className="orbit-hero-section">
        <div className="orbit-hero">
          
          <div className="orbit-ring-container">
            <div className="orbit-ring-spin">
              {orbitImages.map((src, i) => {
                const needsInvert = src.includes("pulpayurveda.vercel.app") || src.includes("lordoffragrance.vercel.app");
                return (
                  <div 
                    key={i} 
                    className="orbit-item"
                    style={{ transform: `translate(-50%, -50%) rotate(${i * (360 / orbitImages.length)}deg) translateY(-45.5cqmin)` }}
                  >
                    <div className="orbit-item-inner">
                      <img 
                        src={src} 
                        alt="" 
                        draggable="false" 
                        style={needsInvert ? { filter: 'invert(1)' } : {}}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="orbit-center-text">
            <span className="eyebrow">Projects</span>
            <h2>
              <span className="orbit-text-full">A collection of websites, web apps, and digital experiences I've built.</span>
              <span className="orbit-text-short">Featured Projects<br />&amp; Digital Work</span>
            </h2>
          </div>

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
