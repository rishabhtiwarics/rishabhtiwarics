import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const isAriaCurrent = (path) => {
    return location.pathname === path ? "page" : undefined;
  };

  return (
    <>
      <aside className="sidebar" id="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-top">
            <div className="sidebar-banner">
              <img src="/img/rishbh_bannerimg.jpeg" alt="" className="sidebar-banner-img" loading="lazy" />
            </div>
            <div className="sidebar-profile">
              <div className="sidebar-avatar">
                <img src="/img/rishabh.jpeg" alt="Rishabh Tiwari" />
              </div>
              <div className="sidebar-info">
                <p className="sidebar-name">Rishabh Tiwari</p>
                <span className="role-badge">Frontend Developer</span>
              </div>
            </div>
          </div>

          <div className="sidebar-body">
            <p className="sidebar-bio">
              Passionate web developer skilled in React.js, Next.js, HTML, CSS, and JavaScript.
            </p>

            <nav className="sidebar-nav" aria-label="Main">
              <Link to="/" className={`nav-link ${isActive("/")}`} aria-current={isAriaCurrent("/")}>
                <span className="nav-link-left">
                  <svg className="icon nav-icon" aria-hidden="true"><use href="#i-home" /></svg>
                  Home
                </span>
                <span className="nav-arrow" aria-hidden="true">&rarr;</span>
              </Link>
              <Link to="/about" className={`nav-link ${isActive("/about")}`} aria-current={isAriaCurrent("/about")}>
                <span className="nav-link-left">
                  <svg className="icon nav-icon" aria-hidden="true"><use href="#i-user" /></svg>
                  About
                </span>
                <span className="nav-arrow" aria-hidden="true">&rarr;</span>
              </Link>
              <Link to="/resume" className={`nav-link ${isActive("/resume")}`} aria-current={isAriaCurrent("/resume")}>
                <span className="nav-link-left">
                  <svg className="icon nav-icon" aria-hidden="true"><use href="#i-file" /></svg>
                  Resume
                </span>
                <span className="nav-arrow" aria-hidden="true">&rarr;</span>
              </Link>
              <Link to="/projects" className={`nav-link ${isActive("/projects")}`} aria-current={isAriaCurrent("/projects")}>
                <span className="nav-link-left">
                  <svg className="icon nav-icon" aria-hidden="true"><use href="#i-folder" /></svg>
                  Projects
                </span>
                <span className="nav-arrow" aria-hidden="true">&rarr;</span>
              </Link>
              <Link to="/contact" className={`nav-link ${isActive("/contact")}`} aria-current={isAriaCurrent("/contact")}>
                <span className="nav-link-left">
                  <svg className="icon nav-icon" aria-hidden="true"><use href="#i-mail" /></svg>
                  Contact
                </span>
                <span className="nav-arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </nav>
          </div>

          <div className="sidebar-bottom">
            <div className="socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                <svg className="icon" aria-hidden="true"><use href="#i-facebook" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                <svg className="icon" aria-hidden="true"><use href="#i-instagram" /></svg>
              </a>
              <a href="mailto:rishabhtiwarics@gmail.com" className="social-btn" aria-label="Gmail">
                <svg className="icon" aria-hidden="true"><use href="#i-mail" /></svg>
              </a>
              <a href="https://wa.me/917974842788" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
                <svg className="icon" aria-hidden="true"><use href="#i-whatsapp" /></svg>
              </a>
            </div>
            <Link to="/contact" className="btn btn-dark btn-book">
              <svg className="icon btn-icon" aria-hidden="true"><use href="#i-send" /></svg>
              <span>Hire Me</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
