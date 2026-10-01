import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects.js";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 100% Untouched Orbit Hero Images Array
const orbitImages = [
  "https://lordoffragrance.vercel.app/assets/logo-bhOzWs4J.png",
  "https://scentofsurrender.vercel.app/assets/SOS_Logo_main-Ct7QDk5D.png",
  "https://tutorialforgeeks.com/assets/image/WhatsApp_Image_2026-01-19_at_9.42.46_PM_1_-removebg-preview-removebg-preview.png",
  "https://aromus.vercel.app/img/logo.png",
  "https://paramayu.vercel.app/logo-paramayu.jpeg",
  "https://ministryperfume.vercel.app/assets/ministry_black_logo-DgPjcI0a.png",
  "https://avenlora.vercel.app/assets/avenlora-main-logo-C5wd2QJt.png",
  "https://pulpayurveda.vercel.app/img/logo.png",
  "https://www.intunefoods.ca/shared/images/INTUNE-FOODS-Logo.svg",
  "https://astonreed.vercel.app/assets/logo-D89ihoBm.png",
  "https://www.nirogyamwellness.com/Images/logo.png",
  "https://www.thirdeyescent.com/img/logo/logo.png",
  "https://elvare-paris-frontend.vercel.app/assets/logo.png",
  "https://venotineperfume.vercel.app/assets/img/logo.png",
  // Repeated to reduce gaps
  "https://lordoffragrance.vercel.app/assets/logo-bhOzWs4J.png",
  "https://scentofsurrender.vercel.app/assets/SOS_Logo_main-Ct7QDk5D.png",
  "https://tutorialforgeeks.com/assets/image/WhatsApp_Image_2026-01-19_at_9.42.46_PM_1_-removebg-preview-removebg-preview.png",
  "https://aromus.vercel.app/img/logo.png",
  "https://paramayu.vercel.app/logo-paramayu.jpeg",
  "https://ministryperfume.vercel.app/assets/ministry_black_logo-DgPjcI0a.png",
  "https://avenlora.vercel.app/assets/avenlora-main-logo-C5wd2QJt.png",
  "https://pulpayurveda.vercel.app/img/logo.png",
  "https://www.intunefoods.ca/shared/images/INTUNE-FOODS-Logo.svg",
  "https://astonreed.vercel.app/assets/logo-D89ihoBm.png",
  "https://www.nirogyamwellness.com/Images/logo.png",
  "https://www.thirdeyescent.com/img/logo/logo.png",
  "https://elvare-paris-frontend.vercel.app/assets/logo.png",
  "https://venotineperfume.vercel.app/assets/img/logo.png"
];

// Helper to map project titles to high quality brand logos if custom screenshot image is missing
function getProjectLogo(title, customImage) {
  if (customImage) return { src: customImage, isInvert: false };

  const t = title.toLowerCase();
  if (t.includes("venotine")) return { src: "https://venotineperfume.vercel.app/assets/img/logo.png", isInvert: true };
  if (t.includes("scent of surrender")) return { src: "https://scentofsurrender.vercel.app/assets/SOS_Logo_main-Ct7QDk5D.png", isInvert: false };
  if (t.includes("paramayu")) return { src: "https://paramayu.vercel.app/logo-paramayu.jpeg", isInvert: false };
  if (t.includes("nirogyam")) return { src: "https://www.nirogyamwellness.com/Images/logo.png", isInvert: false };
  if (t.includes("pulp ayurveda")) return { src: "https://pulpayurveda.vercel.app/img/logo.png", isInvert: true };
  if (t.includes("aromus")) return { src: "https://aromus.vercel.app/img/logo.png", isInvert: false };
  if (t.includes("aston reed")) return { src: "https://astonreed.vercel.app/assets/logo-D89ihoBm.png", isInvert: false };
  if (t.includes("tutorial for geeks")) return { src: "https://tutorialforgeeks.com/assets/image/WhatsApp_Image_2026-01-19_at_9.42.46_PM_1_-removebg-preview-removebg-preview.png", isInvert: false };
  if (t.includes("intune")) return { src: "https://www.intunefoods.ca/shared/images/INTUNE-FOODS-Logo.svg", isInvert: false };
  if (t.includes("avenlora")) return { src: "https://avenlora.vercel.app/assets/avenlora-main-logo-C5wd2QJt.png", isInvert: false };
  if (t.includes("ministry")) return { src: "https://ministryperfume.vercel.app/assets/ministry_black_logo-DgPjcI0a.png", isInvert: false };
  if (t.includes("third eye")) return { src: "https://www.thirdeyescent.com/img/logo/logo.png", isInvert: false };
  if (t.includes("elvare")) return { src: "https://elvare-paris-frontend.vercel.app/assets/logo.png", isInvert: false };
  if (t.includes("lord of fragrance")) return { src: "https://lordoffragrance.vercel.app/assets/logo-Dcgxcov7.png", isInvert: true };

  return null;
}

// Background Particle Canvas
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || window.innerHeight);

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      color: Math.random() > 0.5 ? "rgba(9, 9, 11, 0.08)" : "rgba(82, 82, 91, 0.12)",
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="prj-stack-canvas"
      aria-hidden="true"
    />
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Smooth GSAP ScrollTrigger Card Stacking & Active Border Highlight Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const ctx = gsap.context(() => {
      // Set first card active by default
      if (cardsRef.current[0]) {
        cardsRef.current[0].classList.add("is-active");
      }

      cardsRef.current.forEach((cardWrap, index) => {
        if (!cardWrap) return;

        // Active border shine toggles ONLY when card is the active top card
        ScrollTrigger.create({
          trigger: cardWrap,
          start: "top 140px",
          end: "bottom 220px",
          onEnter: () => {
            cardsRef.current.forEach((c) => c?.classList.remove("is-active"));
            cardWrap.classList.add("is-active");
          },
          onEnterBack: () => {
            cardsRef.current.forEach((c) => c?.classList.remove("is-active"));
            cardWrap.classList.add("is-active");
          },
        });

        if (index < projects.length - 1) {
          const nextCardWrap = cardsRef.current[index + 1];
          const innerCard = cardWrap.querySelector(".prj-stack-card");

          if (nextCardWrap && innerCard) {
            // As next card scrolls up, previous card scales to 0.96 & dims smoothly so no rear shadow accumulation occurs
            gsap.to(innerCard, {
              scale: 0.96,
              backgroundColor: "#f4f4f5",
              transformOrigin: "top center",
              ease: "none",
              scrollTrigger: {
                trigger: nextCardWrap,
                start: "top 95%",
                end: "top 110px",
                scrub: true,
                invalidateOnRefresh: true,
              },
            });
          }
        }
      });
    }, sectionRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* 100% UNTOUCHED ORIGINAL ORBIT HERO BANNER */}
      <section className="orbit-hero-section">
        <div className="orbit-hero">
          <div className="orbit-ring-container">
            <div className="orbit-ring-spin">
              {orbitImages.map((src, i) => {
                const needsInvert =
                  src.includes("pulpayurveda.vercel.app") ||
                  src.includes("lordoffragrance.vercel.app") ||
                  src.includes("venotineperfume.vercel.app");
                return (
                  <div
                    key={i}
                    className="orbit-item"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * (360 / orbitImages.length)
                        }deg) translateY(-45.5cqmin)`,
                    }}
                  >
                    <div className="orbit-item-inner">
                      <img
                        src={src}
                        alt=""
                        draggable="false"
                        style={needsInvert ? { filter: "invert(1)" } : {}}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="orbit-center-text">
            <span className="eyebrow">Projects</span>
            <h2>
              <span className="orbit-text-full">
                A collection of websites, web apps, and digital experiences I've built.
              </span>
              <span className="orbit-text-short">
                Featured Projects<br />&amp; Digital Work
              </span>
            </h2>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* HIGH-PERFORMANCE MODERN PROJECTS STACK */}
      <div className="prj-stack-wrap">
        <style>{`
          .prj-stack-wrap {
            width: 100%;
            font-family: var(--font, "Plus Jakarta Sans", sans-serif);
          }

          .prj-stack-section {
            position: relative;
            width: 100%;
            padding: 40px 0;
            background: transparent;
            overflow: visible !important;
          }

          .prj-stack-canvas {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
          }

          .prj-stack-container {
            position: relative;
            z-index: 2;
            width: 100%;
            max-width: 1140px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .prj-stack-title-block {
            text-align: center;
            margin-bottom: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }

          .prj-stack-eyebrow-wrap {
            display: inline-flex;
          }

          .prj-stack-heading {
            font-size: clamp(18px, 2.5vw, 30px);
            font-weight: 700;
            letter-spacing: -0.03em;
            line-height: 1.12;
            color: var(--ink, #09090b);
            max-width: 760px;
          }

          .prj-stack-cards-list {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 20px;
            overflow: visible !important;
          }

          @property --angle {
            syntax: '<angle>';
            inherits: false;
            initial-value: 0deg;
          }

          @keyframes spin {
            to {
              --angle: 360deg;
            }
          }

          /* Card Wrapper - Unified sticky position */
          .prj-stack-card-wrap {
            position: sticky !important;
            top: clamp(80px, 12vh, 110px) !important;
            width: 100%;
            will-change: transform, opacity;
            border-radius: var(--radius-l, 28px);
            padding: 2px;
            isolation: isolate;
          }



          /* Clean card - zero shadow bleed, crisp borders */
          .prj-stack-card {
            position: relative;
            z-index: 2;
            background: var(--paper, #ffffff);
            border: 1px solid var(--line, #e4e4e7);
            border-radius: var(--radius-l, 28px);
            padding: 40px;
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 32px;
            align-items: center;
            will-change: transform, opacity, background-color;
            overflow: hidden;
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }

          .prj-stack-card-left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            gap: 20px;
          }

          .prj-stack-card-number {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.1em;
            color: var(--ink-faint, #a1a1aa);
            text-transform: uppercase;
          }

          .prj-stack-card-text {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .prj-stack-card-title {
            font-size: clamp(22px, 2.8vw, 34px);
            font-weight: 700;
            letter-spacing: -0.025em;
            color: var(--ink, #09090b);
            line-height: 1.18;
            margin: 0;
          }

          .prj-stack-card-desc {
            font-size: 14.5px;
            line-height: 1.6;
            color: var(--ink-soft, #52525b);
            margin: 0;
          }

          .prj-stack-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 4px;
          }

          .prj-stack-tag {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 5px 12px;
            border-radius: 100px;
            background: var(--chip, #eeeef0);
            color: var(--ink, #09090b);
            font-size: 12px;
            font-weight: 500;
          }

          .prj-stack-tag-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: var(--dark, #111112);
          }

          .prj-stack-card-btns {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            padding-top: 6px;
          }

          .prj-stack-card-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            height: 40px;
            padding: 0 18px;
            border-radius: var(--radius-xs, 10px);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: -0.01em;
            text-decoration: none;
            transition: all 0.2s ease;
            cursor: pointer;
          }

          .btn-live {
            background: var(--dark, #111112);
            color: #ffffff;
            box-shadow: inset 0 2px 1px rgba(255, 255, 255, 0.15);
          }

          .btn-live:hover {
            opacity: 0.9;
            transform: translateY(-1px);
          }

          .btn-code {
            background: var(--chip, #eeeef0);
            color: var(--ink, #09090b);
            border: 1px solid var(--line, #e4e4e7);
          }

          .btn-code:hover {
            background: #e4e4e7;
            transform: translateY(-1px);
          }

          .prj-stack-btn-icon {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .prj-stack-card-image-wrap {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 10;
            border-radius: var(--radius-m, 20px);
            overflow: hidden;
            background: var(--panel, #f4f4f5);
            border: 1px solid var(--line, #e4e4e7);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .prj-stack-card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .prj-stack-logo-preview {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 14px;
            background: linear-gradient(135deg, #111112 0%, #1c1c1e 100%);
            padding: 32px;
            position: relative;
          }

          .prj-stack-logo-img {
            max-width: 160px;
            max-height: 70px;
            object-fit: contain;
            filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
          }

          .prj-stack-logo-title {
            color: rgba(255, 255, 255, 0.9);
            font-size: 15px;
            font-weight: 700;
            letter-spacing: -0.01em;
          }

          .prj-stack-img-placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: linear-gradient(135deg, #111112 0%, #27272a 100%);
            color: #ffffff;
            padding: 24px;
            text-align: center;
          }

          .prj-stack-img-index {
            font-size: 40px;
            font-weight: 800;
            letter-spacing: -0.04em;
            opacity: 0.2;
          }

          @media (max-width: 900px) {
            .prj-stack-card {
              grid-template-columns: 1fr;
              padding: 24px;
              gap: 20px;
            }
            .prj-stack-card-image-wrap {
              order: -1;
              aspect-ratio: 16 / 9;
            }
          }

          @media (max-width: 640px) {
            .prj-stack-section {
              padding: 20px 0 60px;
            }
            .prj-stack-card {
              padding: 20px;
              border-radius: 20px;
            }
          }
        `}</style>

        <section
          ref={sectionRef}
          className="prj-stack-section"
        >
          {/* Background Particle Canvas */}
          <ParticleCanvas />

          <div className="prj-stack-container">
            {/* Title Block with Framer Motion reveal */}
            <motion.div
              className="prj-stack-title-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="prj-stack-eyebrow-wrap">
                <span className="eyebrow">PORTFOLIO WORK</span>
              </div>
              <h2 className="prj-stack-heading">
                Crafted Websites, Applications &amp; Brand Systems
              </h2>
            </motion.div>

            {/* Stacking Cards List */}
            <div className="prj-stack-cards-list">
              {projects.map((project, index) => {
                const logoInfo = getProjectLogo(project.title, project.image);

                return (
                  <motion.div
                    key={project.title + index}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="prj-stack-card-wrap"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      zIndex: index + 1,
                      "--card-i": index,
                    }}
                  >
                    <div className="prj-stack-card">
                      {/* Left Content Area */}
                      <div className="prj-stack-card-left">
                        <div className="prj-stack-card-text">
                          <span className="prj-stack-card-number">
                            PROJECT {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="prj-stack-card-title">{project.title}</h3>
                          <p className="prj-stack-card-desc">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Tags */}
                        {project.tags && project.tags.length > 0 && (
                          <div className="prj-stack-tags">
                            {project.tags.map((tag, tagIdx) => (
                              <span key={tagIdx} className="prj-stack-tag">
                                <span className="prj-stack-tag-dot" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* CTA Buttons — Live Demo + Code */}
                        <div className="prj-stack-card-btns">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="prj-stack-card-btn btn-live"
                              aria-label={`Live Demo - ${project.title}`}
                            >
                              <span className="prj-stack-btn-icon">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.4"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                              </span>
                              <span>Live Demo</span>
                            </a>
                          )}

                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="prj-stack-card-btn btn-code"
                              aria-label={`Code Repository - ${project.title}`}
                            >
                              <span className="prj-stack-btn-icon">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.4"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="16 18 22 12 16 6" />
                                  <polyline points="8 6 2 12 8 18" />
                                </svg>
                              </span>
                              <span>Code</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right Image / Logo Area */}
                      <div className="prj-stack-card-image-wrap">
                        {project.image ? (
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="prj-stack-card-img"
                            loading="lazy"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          />
                        ) : logoInfo ? (
                          <div className="prj-stack-logo-preview">
                            <img
                              src={logoInfo.src}
                              alt={project.title}
                              className="prj-stack-logo-img"
                              style={logoInfo.isInvert ? { filter: "invert(1) drop-shadow(0 4px 12px rgba(255,255,255,0.3))" } : {}}
                            />
                            <span className="prj-stack-logo-title">{project.title}</span>
                          </div>
                        ) : (
                          <div className="prj-stack-img-placeholder">
                            <span className="prj-stack-img-index">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span style={{ fontSize: "14px", fontWeight: 600 }}>
                              {project.title}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
