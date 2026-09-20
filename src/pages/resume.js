import { experience, education, skills } from "../data/profile.js";

const timeline = (items) =>
  items
    .map(
      (item) => `
            <div class="timeline-role">
              <div class="timeline-left">
                <p class="timeline-title">${item.title}</p>
                <p class="timeline-dates">${item.dates}</p>
              </div>
              <span class="timeline-marker"></span>
              <p class="timeline-desc">${item.place}</p>
            </div>`
    )
    .join('\n            <div class="timeline-connector"></div>');

const skillCards = skills
  .map(
    (s) => `
          <div class="tool-card">
            <div class="tool-left">
              <span class="tool-logo">${s.abbr}</span>
              <div class="tool-text">
                <p class="tool-name">${s.name}</p>
                <div class="tool-bar"><span style="width:${s.level}%"></span></div>
              </div>
            </div>
            <span class="tool-level">${s.level}%</span>
          </div>`
  )
  .join("");

export default {
  title: "Resume",
  render() {
    return `
      <section class="section page-head">
        <div class="section-top">
          <span class="eyebrow">Resume</span>
          <h1 class="page-title">My Resume</h1>
        </div>
      </section>

      <div class="divider"></div>

      <section class="section">
        <div class="section-top section-top--center">
          <span class="eyebrow">Experience</span>
          <h2 class="section-heading center">Where I've worked</h2>
        </div>
        <div class="timeline-card">
          <div class="timeline-roles">${timeline(experience)}
          </div>
          <a href="/contact" data-link class="btn btn-dark btn-timeline"><svg class="icon btn-icon" aria-hidden="true"><use href="#i-send"/></svg><span>Hire Me</span></a>
        </div>
      </section>

      <div class="divider"></div>

      <section class="section">
        <div class="section-top section-top--center">
          <span class="eyebrow">Education</span>
          <h2 class="section-heading center">Where I studied</h2>
        </div>
        <div class="timeline-card">
          <div class="timeline-roles">${timeline(education)}
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <section class="section">
        <div class="section-top">
          <span class="eyebrow">Skills</span>
          <h2 class="toolkits-heading">Creative ability/Developing on. Equipped with a range of technical skills, I'm proficient in tools and technologies that drive impactful solutions.</h2>
        </div>
        <div class="toolkits-grid">${skillCards}
        </div>
      </section>
    `;
  },
};
