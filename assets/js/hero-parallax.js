document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.querySelector('.hero-image');
  const heroContainer = document.querySelector('.hero-image-container');
  
  if (!heroImage || !heroContainer) return;

  // Parallax effect settings
  const parallaxStrength = 0.05; // Adjust this value to control the movement intensity
  const maxOffset = 20; // Maximum pixel offset

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    // Get mouse position relative to the viewport
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    // Calculate the offset (centered around 0)
    const offsetX = (mouseX - 0.5) * maxOffset;
    const offsetY = (mouseY - 0.5) * maxOffset;

    // Apply the transform with a slight scale effect
    heroImage.style.transform = `
      translate(${offsetX}px, ${offsetY}px)
      scale(1.05)
    `;
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    heroImage.style.transform = 'translate(0, 0) scale(1)';
  };

  // Add event listeners
  heroContainer.addEventListener('mousemove', handleMouseMove);
  heroContainer.addEventListener('mouseleave', handleMouseLeave);

  // Handle reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroContainer.removeEventListener('mousemove', handleMouseMove);
    heroContainer.removeEventListener('mouseleave', handleMouseLeave);
  }
}); 