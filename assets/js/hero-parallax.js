document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.querySelector('.hero-image');
  if (!heroImage) return;

  const scale = 1.08;
  const maxScrollOffset = 60; // px downward at full scroll

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportH = window.innerHeight || 1;
    const ratio = Math.min(scrollY / viewportH, 1);
    const y = ratio * maxScrollOffset;
    heroImage.style.transform = `translateY(${y}px) scale(${scale})`;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // init

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.removeEventListener('scroll', handleScroll);
    heroImage.style.transform = `scale(1)`;
  }
}); 