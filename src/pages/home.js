const tiles = [
  { name: "HTML", src: "/tech/html.png", bg: "#e34f26" },
  { name: "React", src: "/tech/react.png", bg: "#20232a" },
  { name: "Figma", src: "/tech/figma.png", bg: "#1e1e1e" },
  { name: "Bootstrap", src: "/tech/bootstrap.png", bg: "#7952b3" },
  { name: "Postman", src: "/tech/postman.png", bg: "#ff6c37" },
  { name: "JavaScript", src: "/tech/js.png", bg: "#f7df1e" },
  { name: "Git", src: "/tech/git.png", bg: "#f05032" },
  { name: "CSS", src: "/tech/css.png", bg: "#1572b6" },
  { name: "Tailwind CSS", src: "/tech/tailwind.png", bg: "#0ea5e9" },
];

export default {
  title: "",
  render() {
    return `
      <section class="hero">
        <a href="/about" data-link class="hero-pill">
          <span class="hero-pill-avatar"><img src="/avatar.svg" alt="" /></span>
          <span>Rishabh Tiwari</span>
          <span class="hero-pill-arrow">&rarr;</span>
        </a>

        <div class="hero-heading">
          <h1 class="hero-greeting">Hello! <img src="/hello.png" alt="Hello" class="hello-img-animated" /> I Am</h1>
          <div class="hero-heading-row">
            <h1><span class="typed-text" id="heroTyped"></span><span class="typed-cursor" aria-hidden="true"></span></h1>
          </div>
        </div>

        <p class="hero-desc">Passionate web developer skilled in React.js, Next.js, HTML, CSS, and JavaScript. Experienced in creating responsive, user-centric websites and delivering tailored solutions. Focused on enhancing web performance and providing engaging user experiences.</p>

        <a href="/contact" data-link class="btn btn-dark hero-cta"><svg class="icon btn-icon" aria-hidden="true"><use href="#i-send"/></svg><span>Hire Me</span></a>

        <div class="hero-strip" aria-hidden="true">
          <ul class="hero-strip-track" id="heroStripTrack"></ul>
        </div>
      </section>
    `;
  },
  /* Hero tech-tile ticker + typing headline. Returns a cleanup so both
     loops stop when leaving the page. */
  mount(root) {
    const track = root.querySelector("#heroStripTrack");
    let frame = null;
    if (track) {
      const set = () =>
        tiles
          .map(
            (t) => `
            <li class="strip-tile" style="background:${t.bg}">
              <img src="${t.src}" alt="${t.name}" class="strip-tile-img" />
              <span class="strip-tile-name">${t.name}</span>
            </li>`
          )
          .join("");
      // duplicate the set so the loop feels continuous
      track.innerHTML = set() + set();

      let offset = 0;
      const speed = 0.15; // px per frame (slowed down for smooth gentle motion)
      const tick = () => {
        offset += speed;
        const resetPoint = track.scrollWidth / 2;
        if (offset >= resetPoint) offset = 0;
        track.style.transform = `translateX(-${offset}px)`;
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }

    /* Typewriter effect: types each phrase letter by letter, pauses,
       deletes it letter by letter, then moves to the next - on repeat. */
    const typedEl = root.querySelector("#heroTyped");
    let typeTimer = null;
    if (typedEl) {
      const phrases = ["Frontend Developer", "Rishabh Tiwari", "Web Developer"];
      const TYPE_SPEED = 150;
      const DELETE_SPEED = 90;
      const HOLD_TIME = 2200;
      const GAP_TIME = 600;

      let wordIndex = 0;
      let charIndex = 0;
      let deleting = false;

      const tick = () => {
        const current = phrases[wordIndex % phrases.length];

        if (!deleting) {
          charIndex++;
          typedEl.textContent = current.slice(0, charIndex);
          if (charIndex === current.length) {
            deleting = true;
            typeTimer = setTimeout(tick, HOLD_TIME);
            return;
          }
          typeTimer = setTimeout(tick, TYPE_SPEED);
        } else {
          charIndex--;
          typedEl.textContent = current.slice(0, charIndex);
          if (charIndex === 0) {
            deleting = false;
            wordIndex++;
            typeTimer = setTimeout(tick, GAP_TIME);
            return;
          }
          typeTimer = setTimeout(tick, DELETE_SPEED);
        }
      };
      typeTimer = setTimeout(tick, 600);
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (typeTimer) clearTimeout(typeTimer);
    };
  },
};
