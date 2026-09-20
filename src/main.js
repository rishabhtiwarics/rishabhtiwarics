import "./app.css";
import { initRouter } from "./router.js";

/* ---------- Pages / router ---------- */
initRouter(document.getElementById("app"));

/* ---------- Mobile header / sliding sidebar (below 1200px) ---------- */
const mobileHeader = document.getElementById("mobileHeader");
const menuBtn = document.getElementById("menuBtn");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
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
