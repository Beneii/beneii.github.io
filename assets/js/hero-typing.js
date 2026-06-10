document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('hero-typed');
  if (!el) return;
  const text = el.dataset.text || 'Creative Developer';
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 90);
    } else {
      el.classList.add('done');
    }
  }
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      type();
      io.disconnect();
    }
  }, { threshold: 0.5 });
  io.observe(el);
});
