document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.querySelector('.hero-image');
  if (!heroImage) return;

  // Parallax effect settings
  const maxOffset = 10; // Reduce max offset to prevent gaps
  const scale = 1.08; // Slightly enlarge image to cover edges

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    const offsetX = (mouseX - 0.5) * maxOffset;
    const offsetY = (mouseY - 0.5) * maxOffset;
    heroImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
  };

  // Reset on mouse leave (optional, but not needed if always tracking)
  // window.addEventListener('mouseout', () => {
  //   heroImage.style.transform = `translate(0, 0) scale(${scale})`;
  // });

  window.addEventListener('mousemove', handleMouseMove);

  // Handle reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.removeEventListener('mousemove', handleMouseMove);
    heroImage.style.transform = `scale(1)`;
  }
}); 