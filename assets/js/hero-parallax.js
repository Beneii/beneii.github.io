document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.querySelector('.hero-image');
  const heroSection = document.querySelector('.hero-section');
  const heroImageContainer = document.querySelector('.hero-image-container');
  
  if (!heroImage || !heroSection || !heroImageContainer) return;

  // Static hero image with slight scale for coverage
  const scale = 1.08;
  heroImage.style.transform = `scale(${scale})`;

  // Clip the fixed hero image to hero section bounds
  const updateClip = () => {
    const heroHeight = heroSection.offsetHeight;
    heroImageContainer.style.clipPath = `inset(0 0 calc(100vh - ${heroHeight}px) 0)`;
  };

  updateClip();
  window.addEventListener('resize', updateClip);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroImage.style.transform = `scale(1)`;
  }
}); 