// Mark that JS is running — CSS only hides .reveal elements under html.js,
// so content stays visible without JavaScript.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => {
    // Sections taller than the viewport can never hit a percentage
    // threshold, and anything already on screen should show immediately.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      el.classList.add('visible');
    } else {
      io.observe(el);
    }
  });
});
