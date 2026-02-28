import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  ScrollTrigger.create({
    start: 'top -50',
    onUpdate: (self) => {
      if (self.scroll() > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    },
  });
}

function initHeroLineart() {
  const svg = document.querySelector('.hero-lineart');
  if (!svg) return;

  // Gentle floating after lines are drawn (CSS handles the drawing)
  gsap.to(svg, {
    y: 12,
    duration: 5,
    delay: 3,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  });
}

function initHeroAnimations() {
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  const eyebrow = hero.querySelector('[data-animate="eyebrow"]');
  const title = hero.querySelector('[data-animate="hero-title"]');
  const subtitle = hero.querySelector('[data-animate="subtitle"]');
  const ctas = hero.querySelector('[data-animate="ctas"]');
  const counters = hero.querySelectorAll('[data-animate="counter"]');

  if (eyebrow) {
    tl.fromTo(eyebrow, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
  }

  if (title) {
    tl.fromTo(
      title,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.3'
    );
  }

  if (subtitle) {
    tl.fromTo(
      subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.4'
    );
  }

  if (ctas) {
    const buttons = ctas.querySelectorAll('a, button');
    tl.fromTo(
      buttons,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
      '-=0.3'
    );
  }

  if (counters.length) {
    tl.fromTo(
      counters,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
      '-=0.2'
    );

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-count') || '0', 10);
      const numEl = counter.querySelector('.counter-number');
      if (numEl && target) {
        gsap.fromTo(
          { val: 0 },
          { val: target },
          {
            val: target,
            duration: 1.5,
            ease: 'power2.out',
            delay: 0.8,
            onUpdate: function () {
              numEl.textContent = Math.round(this.targets()[0].val).toString();
            },
          }
        );
      }
    });
  }

}

function initSectionReveals() {
  const sections = document.querySelectorAll('[data-animate="section"]');
  sections.forEach((section) => {
    const heading = section.querySelector('h2');
    const subtitle = section.querySelector('[data-animate="section-subtitle"]');

    if (heading) {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (subtitle) {
      gsap.fromTo(
        subtitle,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subtitle,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
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
        ease: 'power3.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
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
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

function initSectionLineart() {
  const allLines = document.querySelectorAll('.section-line') as NodeListOf<SVGPathElement>;
  const svgSet = new Set<SVGSVGElement>();
  allLines.forEach((line) => {
    const svg = line.closest('svg');
    if (svg) svgSet.add(svg as SVGSVGElement);
  });

  svgSet.forEach((svg) => {
    const lines = svg.querySelectorAll('.section-line') as NodeListOf<SVGPathElement>;
    lines.forEach((el) => {
      const length = el.getTotalLength();
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
    });

    gsap.to(lines, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power2.inOut',
      stagger: 0.15,
      scrollTrigger: {
        trigger: svg,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });
}

function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax-float]');
  parallaxElements.forEach((el) => {
    const speed = parseFloat(el.getAttribute('data-parallax-float') || '0.3');
    gsap.to(el, {
      y: `${speed * 100}%`,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

export function initAnimations() {
  document.documentElement.classList.add('js-loaded');

  if (prefersReducedMotion) {
    document.querySelectorAll('[data-animate]').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
    });
    document.querySelectorAll('.section-line').forEach((el) => {
      (el as SVGPathElement).style.strokeDasharray = 'none';
      (el as SVGPathElement).style.strokeDashoffset = '0';
    });
    return;
  }

  initHeaderScroll();
  initHeroLineart();
  initHeroAnimations();
  initSectionReveals();
  initCardAnimations();
  initFadeUpAnimations();
  initSectionLineart();
  initParallax();
}
