import { profile } from "../data/profile.js";

export default {
  title: "Contact",
  render() {
    return `
      <section class="section page-head">
        <div class="section-top">
          <span class="eyebrow">Contact</span>
          <h1 class="page-title">Get In Touch</h1>
          <p class="page-lead">I'm always open to new ideas and collaborations. Let's connect and make great things happen.</p>
        </div>
      </section>

      <div class="divider"></div>

      <section class="section">
        <div class="contact-cards">
          <div class="contact-tile">
            <span class="tile-icon"><svg class="icon" aria-hidden="true"><use href="#i-phone"/></svg></span>
            <div>
              <p class="info-label">Phone</p>
              <a class="info-value" href="tel:${profile.phoneHref}">${profile.phone}</a>
            </div>
          </div>
          <div class="contact-tile">
            <span class="tile-icon"><svg class="icon" aria-hidden="true"><use href="#i-mail"/></svg></span>
            <div>
              <p class="info-label">Email</p>
              <a class="info-value" href="mailto:${profile.email}">${profile.email}</a>
            </div>
          </div>
          <div class="contact-tile">
            <span class="tile-icon"><svg class="icon" aria-hidden="true"><use href="#i-pin"/></svg></span>
            <div>
              <p class="info-label">Address</p>
              <p class="info-value">${profile.address}</p>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <section class="section">
        <div class="form-card">
          <form class="contact-form" id="contactForm">
            <div class="field"><input type="text" name="name" required placeholder="Full Name *" aria-label="Full Name" /></div>
            <div class="field"><input type="email" name="email" required placeholder="Email Address *" aria-label="Email Address" /></div>
            <div class="field field--full"><input type="text" name="subject" required placeholder="Subject *" aria-label="Subject" /></div>
            <div class="field field--full"><textarea name="message" required placeholder="Your Message *" aria-label="Your Message"></textarea></div>
            <button type="submit" class="btn btn-dark btn-submit field--full">Send Message</button>
          </form>
        </div>
      </section>
    `;
  },
  /* No backend: "Send Message" opens the visitor's mail app with the message prefilled. */
  mount(root) {
    const form = root.querySelector("#contactForm");
    if (!form) return null;
    let timer = 0;
    const onSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(body)}`;
      const btn = form.querySelector(".btn-submit");
      const original = btn.textContent;
      btn.textContent = "Opening your mail app…";
      clearTimeout(timer);
      timer = setTimeout(() => (btn.textContent = original), 2500);
    };
    form.addEventListener("submit", onSubmit);
    return () => {
      clearTimeout(timer);
      form.removeEventListener("submit", onSubmit);
    };
  },
};
