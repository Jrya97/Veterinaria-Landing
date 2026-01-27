import Lenis from 'lenis';

export function initLenis() {
  const lenis = new Lenis({
    duration: 2.5,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (anchor) {
      const href = anchor.getAttribute('href') || '';
      if (href.startsWith('#')) {
        e.preventDefault();
        lenis.scrollTo(href, { duration: 2.2 });
      }
    }
  });

  return lenis;
}
