import "./app.css";
import { initRouter } from "./router.js";
import { animate } from "motion";

/* ---------- Pages / router ---------- */
initRouter(document.getElementById("app"));

/* ---------- Mobile header / sliding sidebar (below 1200px) ---------- */
const mobileHeader = document.getElementById("mobileHeader");
const menuBtn = document.getElementById("menuBtn");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const sidebarWrap = document.querySelector(".sidebar-wrap");
const mobileBar = document.querySelector(".mobile-bar");
const mobileBrand = document.querySelector(".mobile-brand");

if (mobileHeader && menuBtn) {
  const setMenu = (open) => {
    mobileHeader.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  };
  menuBtn.addEventListener("click", () => setMenu(!mobileHeader.classList.contains("open")));
  mobileHeader.querySelectorAll("#mobileMenu a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  if (sidebarBackdrop) sidebarBackdrop.addEventListener("click", () => setMenu(false));
  document.addEventListener("click", (e) => {
    if (!mobileHeader.contains(e.target)) setMenu(false);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  window.matchMedia("(min-width: 1200px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });
}

/* ---------- Framer Motion Sticky Mobile Bar Animation (< 1200px) ---------- */
if (mobileBar && mobileBrand && menuBtn && sidebarWrap) {
  let isSticky = false;

  const resetStyles = () => {
    mobileBar.style.transform = "";
    mobileBrand.style.transform = "";
    mobileBrand.style.opacity = "";
    menuBtn.style.transform = "";
    menuBtn.style.opacity = "";
  };

  const handleScroll = () => {
    if (window.innerWidth >= 1200) {
      if (isSticky) {
        isSticky = false;
        mobileBar.classList.remove("is-sticky");
        sidebarWrap.classList.remove("is-sticky");
        resetStyles();
      }
      return;
    }

    // Hysteresis threshold to prevent flickering around scroll position
    const shouldBeSticky = isSticky ? window.scrollY > 15 : window.scrollY > 40;

    if (shouldBeSticky !== isSticky) {
      isSticky = shouldBeSticky;

      if (isSticky) {
        mobileBar.classList.add("is-sticky");
        sidebarWrap.classList.add("is-sticky");

        // Framer Motion smooth entrance for sticky card mode
        const a1 = animate(mobileBar, { scale: [0.94, 1], y: [-6, 0] }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });
        const a2 = animate(mobileBrand, { x: [-18, 0], opacity: [0.8, 1] }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });
        const a3 = animate(menuBtn, { x: [18, 0], opacity: [0.8, 1] }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });

        Promise.all([a1.finished, a2.finished, a3.finished]).then(resetStyles);
      } else {
        mobileBar.classList.remove("is-sticky");
        sidebarWrap.classList.remove("is-sticky");

        // Framer Motion smooth reset back to wide split mode
        const a1 = animate(mobileBar, { scale: [1.02, 1], y: [2, 0] }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });
        const a2 = animate(mobileBrand, { x: [18, 0], opacity: [0.8, 1] }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });
        const a3 = animate(menuBtn, { x: [-18, 0], opacity: [0.8, 1] }, { duration: 0.35, ease: [0.16, 1, 0.3, 1] });

        Promise.all([a1.finished, a2.finished, a3.finished]).then(resetStyles);
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll, { passive: true });
  handleScroll();
}

