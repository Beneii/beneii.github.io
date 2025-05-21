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
  const stored = localStorage.getItem('darkMode') === '1';
  if (stored) root.classList.add('dark');

}); 