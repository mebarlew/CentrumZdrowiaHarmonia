import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function initHeaderScroll() {
  const header = document.querySelector("header");
  if (!header) return;

  ScrollTrigger.create({
    start: "top -50",
    onUpdate: (self) => {
      if (self.scroll() > 50) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    },
  });
}

function initHeroAnimations() {
  const hero = document.querySelector("[data-hero]");
  if (!hero) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  const eyebrow = hero.querySelector('[data-animate="eyebrow"]');
  const title = hero.querySelector('[data-animate="hero-title"]');
  const subtitle = hero.querySelector('[data-animate="subtitle"]');
  const ctas = hero.querySelector('[data-animate="ctas"]');

  if (eyebrow)
    tl.fromTo(
      eyebrow,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
    );
  if (title)
    tl.fromTo(
      title,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3",
    );
  if (subtitle)
    tl.fromTo(
      subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.4",
    );

  if (ctas) {
    const buttons = ctas.querySelectorAll("a, button");
    tl.fromTo(
      buttons,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
      "-=0.3",
    );
  }
}

function initSectionReveals() {
  const sections = document.querySelectorAll('[data-animate="section"]');
  sections.forEach((section) => {
    const heading = section.querySelector("h2");
    const subtitles = section.querySelectorAll(
      '[data-animate="section-subtitle"]',
    );

    if (heading) {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    subtitles.forEach((sub) => {
      gsap.fromTo(
        sub,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sub,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  });
}

function initCardAnimations() {
  const cardGroups = document.querySelectorAll('[data-animate="cards"]');
  cardGroups.forEach((group) => {
    const cards = group.querySelectorAll('[data-animate="card"]');
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: group,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  });
}

function initFadeUpAnimations() {
  const elements = document.querySelectorAll('[data-animate="fade-up"]');
  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );
  });
}

export function initAnimations() {
  document.documentElement.classList.add("js-loaded");

  if (prefersReducedMotion) {
    document.querySelectorAll("[data-animate]").forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
    });
    return;
  }

  initHeaderScroll();
  initHeroAnimations();
  initSectionReveals();
  initCardAnimations();
  initFadeUpAnimations();
}
