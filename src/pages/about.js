import { profile } from "../data/profile.js";

export default {
  title: "About",
  render() {
    return `
      <section class="section page-head">
        <div class="section-top">
          <span class="eyebrow">About Me</span>
          <h1 class="page-title">Who I Am</h1>
          <p class="page-lead">Experienced frontend developer with passion for creating attractive and interactive websites meeting customer needs and exceeding expectations. Well-versed in developing React.js and Next.js based websites and web apps.</p>
        </div>
        <div class="section-actions">
          <a href="/contact" data-link class="btn btn-dark"><svg class="icon btn-icon" aria-hidden="true"><use href="#i-send"/></svg><span>Hire Me</span></a>
        </div>
      </section>

      <div class="divider"></div>

      <section class="section">
        <div class="info-card">
          <div class="info-head">
            <h2>${profile.name}</h2>
            <p>${profile.role}</p>
          </div>
          <ul class="info-list">
            <li class="info-row"><span class="info-label">Age</span><span class="info-value">24</span></li>
            <li class="info-row"><span class="info-label">Residence</span><span class="info-value">Rewa Madhya Pradesh</span></li>
            <li class="info-row"><span class="info-label">Freelance</span><span class="info-value info-value--status"><span class="status-dot--inline"><span class="status-dot-core"></span></span>Available</span></li>
            <li class="info-row"><span class="info-label">Address</span><span class="info-value">${profile.address}</span></li>
            <li class="info-row"><span class="info-label">Phone</span><a class="info-value" href="tel:${profile.phoneHref}">${profile.phone}</a></li>
            <li class="info-row"><span class="info-label">E-mail</span><a class="info-value" href="mailto:${profile.email}">${profile.email}</a></li>
          </ul>
        </div>
      </section>

      <div class="divider"></div>

      <section class="section">
        <div class="section-top">
          <span class="eyebrow">What I Do</span>
        </div>
        <div class="cards-2">
          <div class="info-tile">
            <span class="tile-icon"><svg class="icon" aria-hidden="true"><use href="#i-monitor"/></svg></span>
            <h3>Web Development</h3>
            <p>The process of building and maintaining websites and web applications for the internet or an intranet.</p>
          </div>
          <div class="info-tile">
            <span class="tile-icon"><svg class="icon" aria-hidden="true"><use href="#i-layout"/></svg></span>
            <h3>Website Design</h3>
            <p>Website design is the process of creating a website's appearance, layout, and content.</p>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <section class="section">
        <div class="section-top">
          <span class="eyebrow">My Experience</span>
          <h2 class="toolkits-heading">Well-versed in developing React.js and Next.js based websites. Excels in JavaScript, Figma, HTML and CSS development.</h2>
        </div>
        <div class="tag-list">
          <span class="tag">HTML</span>
          <span class="tag">React</span>
          <span class="tag">Figma</span>
          <span class="tag">Bootstrap</span>
        </div>
      </section>
    `;
  },
};
