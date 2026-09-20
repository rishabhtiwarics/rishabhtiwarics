import { projects } from "../data/projects.js";

const esc = (str = "") =>
  String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const card = (p, i) => `
        <article class="project-card">
          <div class="project-thumb">
            ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" />` : `<span class="project-index">${String(i + 1).padStart(2, "0")}</span>`}
          </div>
          <div class="project-body">
            <h3 class="project-title">${esc(p.title)}</h3>
            <p class="project-desc">${esc(p.description)}</p>
            <div class="tag-list">${(p.tags || []).map((t) => `<span class="tag tag-sm">${esc(t)}</span>`).join("")}</div>
            ${
              p.live || p.github
                ? `<div class="project-links">
              ${p.live ? `<a class="btn btn-dark btn-sm" href="${esc(p.live)}" target="_blank" rel="noopener">Live Demo</a>` : ""}
              ${p.github ? `<a class="btn btn-light btn-sm" href="${esc(p.github)}" target="_blank" rel="noopener">Code</a>` : ""}
            </div>`
                : ""
            }
          </div>
        </article>`;

export default {
  title: "Projects",
  render() {
    return `
      <section class="section page-head">
        <div class="section-top">
          <span class="eyebrow">Projects</span>
          <h1 class="page-title">My Projects</h1>
          <p class="page-lead">A collection of the websites and web apps I've built.</p>
        </div>
      </section>

      <div class="divider"></div>

      <section class="section">
        ${
          projects.length
            ? `<div class="projects-grid">${projects.map(card).join("")}
        </div>`
            : `<p class="empty-state">Projects coming soon.</p>`
        }
      </section>
    `;
  },
};
