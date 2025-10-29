document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.querySelector('.hero-image');
  if (!heroImage) return;

  // Static hero image with slight scale for coverage
  const scale = 1.08;
  heroImage.style.transform = `scale(${scale})`;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroImage.style.transform = `scale(1)`;
  }
}); 