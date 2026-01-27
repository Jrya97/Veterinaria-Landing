import anime from 'animejs';

function createScrollObserver(selector: string, callback: () => void, threshold = 0.20) {
  const element = document.querySelector(selector);
  if (!element) return;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      callback();
      observer.disconnect();
    }
  }, { threshold });
  observer.observe(element);
}

export function setupHeroTimeline() {
  const tl = anime.timeline({ easing: 'easeOutExpo', duration: 1200 });
  tl.add({
    targets: '.hero-animate-element',
    translateX: [-30, 0],
    opacity: [0, 1],
    delay: anime.stagger(200),
  }).add({
    targets: '.hero-blob',
    opacity: [0, 0.3],
    duration: 2500,
    delay: anime.stagger(350),
  }, '-=800');
}

export function animateServices() {
  anime({
    targets: '.service-card',
    translateY: [60, 0],
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(200),
    easing: 'easeOutCubic',
  });
}

export function animateAbout() {
  const tl = anime.timeline({ easing: 'easeOutCubic', duration: 1000 });
  tl.add({
    targets: '.about-image-content',
    translateX: [-60, 0],
    opacity: [0, 1],
  }).add({
    targets: '.about-text-content',
    translateX: [60, 0],
    opacity: [0, 1],
  }, '-=700');
}

export function animateTeam() {
  anime({
    targets: '.team-member',
    scale: [0.92, 1],
    opacity: [0, 1],
    translateY: [24, 0],
    duration: 5500,
    delay: anime.stagger(220),
    easing: 'easeOutElastic(1, .7)',
  });
}

export function animateTestimonials() {
  anime({
    targets: '.testimonial-card',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 700,
    delay: anime.stagger(220),
    easing: 'easeOutCubic',
  });
}

export function animateContact() {
  const tl = anime.timeline({ easing: 'easeOutCubic', duration: 1100 });
  tl.add({
    targets: '.contact-left',
    translateX: [-50, 0],
    opacity: [0, 1],
  }).add({
    targets: '.contact-form',
    translateX: [50, 0],
    opacity: [0, 1],
  }, '-=700');
}

export function animateFooter() {
  anime({
    targets: '.footer-content',
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 900,
    easing: 'easeOutCubic',
  });
}

export function setupScrollAnimations() {
  createScrollObserver('#servicios', animateServices);
  createScrollObserver('#nosotros', animateAbout);
  createScrollObserver('#equipo', animateTeam);
  createScrollObserver('#testimonios', animateTestimonials);
  createScrollObserver('#contacto', animateContact);
  createScrollObserver('#footer', animateFooter, 0.10);
}
