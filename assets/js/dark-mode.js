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
  const sunIcon = modeToggle.querySelector('.icon-sun');
  const moonIcon = modeToggle.querySelector('.icon-moon');

  // Only run hero image swap if on homepage (where #hero-image exists and not #page-hero-image)
  if (heroImage && !document.getElementById('page-hero-image')) {
    // Set initial mode from localStorage
    const stored = localStorage.getItem('darkMode');
    if (stored === '0') {
      root.classList.add('light');
      if (sunIcon) sunIcon.style.display = '';
      if (moonIcon) moonIcon.style.display = 'none';
      heroImage.src = '/assets/images/heroimagelight.jpg';
    } else {
      root.classList.remove('light');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = '';
      heroImage.src = '/assets/images/heroimage.png';
    }

    if (modeToggle) {
      modeToggle.addEventListener('click', () => {
        const isLight = root.classList.toggle('light');
        if (isLight) {
          localStorage.setItem('darkMode', '0');
          if (sunIcon) sunIcon.style.display = '';
          if (moonIcon) moonIcon.style.display = 'none';
          heroImage.src = '/assets/images/heroimagelight.jpg';
        } else {
          localStorage.setItem('darkMode', '1');
          if (sunIcon) sunIcon.style.display = 'none';
          if (moonIcon) moonIcon.style.display = '';
          heroImage.src = '/assets/images/heroimage.png';
        }
      });
    }
  } else {
    // Set sun/moon icon state and root class for non-home pages
    const stored = localStorage.getItem('darkMode');
    if (stored === '0') {
      root.classList.add('light');
      if (sunIcon) sunIcon.style.display = '';
      if (moonIcon) moonIcon.style.display = 'none';
    } else {
      root.classList.remove('light');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = '';
    }
    if (modeToggle) {
      modeToggle.addEventListener('click', () => {
        const isLight = root.classList.toggle('light');
        if (isLight) {
          localStorage.setItem('darkMode', '0');
          if (sunIcon) sunIcon.style.display = '';
          if (moonIcon) moonIcon.style.display = 'none';
        } else {
          localStorage.setItem('darkMode', '1');
          if (sunIcon) sunIcon.style.display = 'none';
          if (moonIcon) moonIcon.style.display = '';
        }
      });
    }
  }
}); 