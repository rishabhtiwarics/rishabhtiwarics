import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="eyebrow footer-eyebrow">
          <span className="status-dot--inline">
            <span className="status-dot-core"></span>
          </span>
          Available for Work
        </span>
        <h2 className="footer-heading">Let's build something great together</h2>
        <p className="footer-subtext">
          Have a project in mind or looking for a skilled developer? Let's get in touch.
        </p>

        <div className="footer-actions">
          <a href="mailto:rishabhtiwarics@gmail.com" className="btn btn-light footer-btn">
            <svg className="icon" aria-hidden="true"><use href="#i-mail" /></svg>
            <span>rishabhtiwarics@gmail.com</span>
          </a>
          <a href="tel:+917974842788" className="btn btn-light footer-btn">
            <svg className="icon" aria-hidden="true"><use href="#i-phone" /></svg>
            <span>+91-797-484-2788</span>
          </a>
          <Link to="/contact" className="btn btn-dark footer-btn">
            <svg className="icon btn-icon" aria-hidden="true"><use href="#i-send" /></svg>
            <span>Hire Me</span>
          </Link>
        </div>
      </div>

      <div className="footer-copyright-card">
        <p className="copyright">&copy; 2026 Rishabh Tiwari. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
