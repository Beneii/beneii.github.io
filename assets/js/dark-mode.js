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
  const sunIcon = modeToggle ? modeToggle.querySelector('.icon-sun') : null;
  const moonIcon = modeToggle ? modeToggle.querySelector('.icon-moon') : null;

  // read stored pref; default to light when not set
  let stored = localStorage.getItem('darkMode');
  if (stored === null) {
    localStorage.setItem('darkMode', '0'); // default light
    stored = '0';
  }

  const applyMode = (isLight) => {
    if (isLight) {
      root.classList.add('light');
      if (sunIcon) sunIcon.style.display = '';
      if (moonIcon) moonIcon.style.display = 'none';
      if (heroImage) heroImage.src = '/assets/images/heroimagelight.jpg';
    } else {
      root.classList.remove('light');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = '';
      if (heroImage) heroImage.src = '/assets/images/heroimage.png';
    }
  };

  // initial apply
  applyMode(stored === '0');

  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      const nowLight = !root.classList.contains('light');
      // toggling means if was dark, go light; if was light, go dark
      applyMode(nowLight);
      localStorage.setItem('darkMode', nowLight ? '0' : '1');
    });
  }
}); 