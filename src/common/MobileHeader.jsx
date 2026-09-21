import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { animate } from "motion";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  const location = useLocation();
  const mobileBarRef = useRef(null);
  const mobileBrandRef = useRef(null);
  const menuBtnRef = useRef(null);

  // Toggle body scroll lock when menu opens
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Handle outside clicks and ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1200) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Sticky Scroll Animation Logic (porting from main.js)
  useEffect(() => {
    const mobileBar = mobileBarRef.current;
    const mobileBrand = mobileBrandRef.current;
    const menuBtn = menuBtnRef.current;
    
    if (!mobileBar || !mobileBrand || !menuBtn) return;

    let stickyState = false;

    const resetStyles = () => {
      mobileBar.style.transform = "";
      mobileBrand.style.transform = "";
      mobileBrand.style.opacity = "";
      menuBtn.style.transform = "";
      menuBtn.style.opacity = "";
    };

    const handleScroll = () => {
      if (window.innerWidth >= 1200) {
        if (stickyState) {
          stickyState = false;
          setIsSticky(false);
          document.querySelector(".sidebar-wrap")?.classList.remove("is-sticky");
          resetStyles();
        }
        return;
      }

      const shouldBeSticky = stickyState ? window.scrollY > 15 : window.scrollY > 40;

      if (shouldBeSticky !== stickyState) {
        stickyState = shouldBeSticky;
        setIsSticky(shouldBeSticky);

        const sidebarWrap = document.querySelector(".sidebar-wrap");

        if (shouldBeSticky) {
          sidebarWrap?.classList.add("is-sticky");

          const a1 = animate(mobileBar, { scale: [0.94, 1], y: [-6, 0] }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });
          const a2 = animate(mobileBrand, { x: [-18, 0], opacity: [0.8, 1] }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });
          const a3 = animate(menuBtn, { x: [18, 0], opacity: [0.8, 1] }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });

          Promise.all([a1.finished, a2.finished, a3.finished]).then(resetStyles);
        } else {
          sidebarWrap?.classList.remove("is-sticky");

          const a1 = animate(mobileBar, { scale: [1.02, 1], y: [2, 0] }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });
          const a2 = animate(mobileBrand, { x: [18, 0], opacity: [0.8, 1] }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });
          const a3 = animate(menuBtn, { x: [-18, 0], opacity: [0.8, 1] }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });

          Promise.all([a1.finished, a2.finished, a3.finished]).then(resetStyles);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // init

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path ? "active" : "";
  const isAriaCurrent = (path) => location.pathname === path ? "page" : undefined;

  return (
    <div className={`mobile-header ${menuOpen ? "open" : ""}`} id="mobileHeader">
      <div className={`mobile-bar ${isSticky ? "is-sticky" : ""}`} ref={mobileBarRef}>
        <Link to="/" className="mobile-brand" ref={mobileBrandRef}>
          <span className="mobile-avatar">
            <img src="/img/rishabh.jpeg" alt="Rishabh Tiwari" />
          </span>
          <span className="mobile-brand-text">
            <span className="mobile-name">Rishabh Tiwari</span>
            <span className="mobile-role">Frontend Developer</span>
          </span>
        </Link>
        <button 
          type="button" 
          className="menu-btn" 
          id="menuBtn" 
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen(!menuOpen)}
          ref={menuBtnRef}
        >
          <span className="menu-icon"></span>
        </button>
      </div>

      {/* Backdrop overlay */}
      <div 
        className="mobile-sidebar-backdrop" 
        id="sidebarBackdrop" 
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Sliding sidebar panel */}
      <aside className="mobile-sidebar" id="mobileMenu" aria-label="Main">
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
    </div>
  );
}
