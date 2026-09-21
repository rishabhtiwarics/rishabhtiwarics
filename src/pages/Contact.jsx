import React, { useState } from "react";
import { profile } from "../data/profile.js";

export default function Contact() {
  const [btnText, setBtnText] = useState("Send Message");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(body)}`;
    
    setBtnText("Opening your mail app…");
    setTimeout(() => {
      setBtnText("Send Message");
    }, 2500);
  };

  return (
    <>
      <section className="section page-head">
        <div className="section-top">
          <span className="eyebrow">Contact</span>
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-lead">
            I'm always open to new ideas and collaborations. Let's connect and make great things happen.
          </p>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        <div className="contact-cards">
          <div className="contact-tile">
            <span className="tile-icon">
              <svg className="icon" aria-hidden="true"><use href="#i-phone" /></svg>
            </span>
            <div>
              <p className="info-label">Phone</p>
              <a className="info-value" href={`tel:${profile.phoneHref}`}>
                {profile.phone}
              </a>
            </div>
          </div>
          <div className="contact-tile">
            <span className="tile-icon">
              <svg className="icon" aria-hidden="true"><use href="#i-mail" /></svg>
            </span>
            <div>
              <p className="info-label">Email</p>
              <a className="info-value" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          </div>
          <div className="contact-tile">
            <span className="tile-icon">
              <svg className="icon" aria-hidden="true"><use href="#i-pin" /></svg>
            </span>
            <div>
              <p className="info-label">Address</p>
              <p className="info-value">{profile.address}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        <div className="form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <input type="text" name="name" required placeholder="Full Name *" aria-label="Full Name" />
            </div>
            <div className="field">
              <input type="email" name="email" required placeholder="Email Address *" aria-label="Email Address" />
            </div>
            <div className="field field--full">
              <input type="text" name="subject" required placeholder="Subject *" aria-label="Subject" />
            </div>
            <div className="field field--full">
              <textarea name="message" required placeholder="Your Message *" aria-label="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-dark btn-submit field--full">
              {btnText}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
