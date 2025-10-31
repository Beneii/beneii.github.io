document.addEventListener(scroll, () => {
  const doc = document.documentElement;
  const total = doc.scrollHeight - doc.clientHeight;
  const scrolled = (doc.scrollTop / total) * 100;
  const bar = document.getElementById(progressbar);
  if (bar) bar.style.width = scrolled + %;
});
