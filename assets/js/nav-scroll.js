document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.getElementById('mainNav');
  const setScrolled=()=>{
    if(window.scrollY>60){
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  setScrolled();
  window.addEventListener('scroll',setScrolled);

  // active link highlight
  const links=document.querySelectorAll('.nav-link');
  const path=window.location.pathname;
  links.forEach(l=>{
    const target=l.dataset.path;
    if(path===target||path.startsWith(target)&&target!='/'){
      l.classList.add('active');
    }
  });
}); 