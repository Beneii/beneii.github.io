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

  const button = document.createElement('button');
  button.id = 'mode-toggle';
  button.title = 'Toggle dark / light mode';
  button.innerHTML = stored ? '☀️' : '🌙';
  document.body.appendChild(button);

  button.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark ? '1' : '0');
    button.innerHTML = isDark ? '☀️' : '🌙';
  });
}); 