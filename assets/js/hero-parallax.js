document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.querySelector('.hero-image');
  if (!heroImage) return;

  const maxOffset = 10; // mouse move
  const scale = 1.08;   // cover edges

  const handleMouseMove = (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    const offsetX = (mouseX - 0.5) * maxOffset;
    const offsetY = (mouseY - 0.5) * maxOffset;
    heroImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
  };

  window.addEventListener('mousemove', handleMouseMove);

  // Scroll parallax: subtle vertical translate
  const maxScrollOffset = 40; // px at bottom of viewport
  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportH = window.innerHeight || 1;
    const ratio = Math.min(scrollY / viewportH, 1);
    const y = ratio * maxScrollOffset;
    heroImage.style.transform = `translateY(${y}px) scale(${scale})`;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('scroll', handleScroll);
    heroImage.style.transform = `scale(1)`;
  }
}); 