document.addEventListener('DOMContentLoaded',()=>{
  const el=document.getElementById('hero-tagline');
  if(!el) return;
  const text='Creative Developer';
  let i=0;
  function type(){
    if(i<=text.length){
      el.textContent=text.slice(0,i);
      i++;
      setTimeout(type,110);
    } else {
      el.style.borderRight='none';
    }
  }
  const io=new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
      type();
      io.disconnect();
    }
  },{threshold:0.5});
  io.observe(el);
}); 