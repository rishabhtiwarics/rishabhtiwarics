import home from "./pages/home.js";
import about from "./pages/about.js";
import resume from "./pages/resume.js";
import projects from "./pages/projects.js";
import contact from "./pages/contact.js";
import notFound from "./pages/notFound.js";

const SITE = "Rishabh Tiwari";

const routes = {
  "/": home,
  "/about": about,
  "/resume": resume,
  "/projects": projects,
  "/contact": contact,
};

const normalize = (path) => path.replace(/\/+$/, "") || "/";

let outlet = null;
let cleanup = null;

function setActiveLinks(path) {
  document.querySelectorAll(".nav-link[data-route]").forEach((link) => {
    const active = link.dataset.route === path;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function render(rawPath, { scroll = true } = {}) {
  const path = normalize(rawPath);
  const page = routes[path] || notFound;

  if (cleanup) {
    cleanup();
    cleanup = null;
  }

  outlet.innerHTML = `<div class="page-view">${page.render()}</div>`;
  cleanup = (page.mount && page.mount(outlet)) || null;

  document.title = page.title ? `${page.title} | ${SITE}` : `${SITE} — Frontend Developer`;
  setActiveLinks(path);
  if (scroll) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export function navigate(path) {
  if (normalize(path) === normalize(location.pathname)) return;
  history.pushState({}, "", path);
  render(path);
}

export function initRouter(outletEl) {
  outlet = outletEl;

  // internal links (marked with data-link) navigate without a full reload
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const link = e.target.closest("a[data-link]");
    if (!link) return;
    const url = new URL(link.href, location.origin);
    if (url.origin !== location.origin) return;
    e.preventDefault();
    navigate(url.pathname);
  });

  window.addEventListener("popstate", () => render(location.pathname));
  render(location.pathname, { scroll: false });
}
