document.addEventListener('DOMContentLoaded', () => {
  // ensure custom CSS is loaded
  if (!document.getElementById('custom-css')) {
    const link = document.createElement('link');
    link.id = 'custom-css';
    link.rel = 'stylesheet';
    link.href = '/assets/css/custom.css';
    document.head.appendChild(link);
  }

  const root = document.documentElement;
  const modeToggle = document.getElementById('mode-toggle');
  const heroImage = document.getElementById('hero-image');

  // Set initial mode from localStorage
  const stored = localStorage.getItem('darkMode');
  if (stored === '0') {
    root.classList.add('light');
    if (modeToggle) modeToggle.textContent = '☀️';
    if (heroImage) heroImage.src = '/assets/images/heroimagelight.jpg';
  } else {
    root.classList.remove('light');
    if (modeToggle) modeToggle.textContent = '🌙';
    if (heroImage) heroImage.src = '/assets/images/heroimage.png';
  }

  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      const isLight = root.classList.toggle('light');
      if (isLight) {
        localStorage.setItem('darkMode', '0');
        modeToggle.textContent = '☀️';
        if (heroImage) heroImage.src = '/assets/images/heroimagelight.jpg';
      } else {
        localStorage.setItem('darkMode', '1');
        modeToggle.textContent = '🌙';
        if (heroImage) heroImage.src = '/assets/images/heroimage.png';
      }
    });
  }
}); 