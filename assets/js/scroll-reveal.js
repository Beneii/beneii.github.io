document.addEventListener('DOMContentLoaded',()=>{
  const els=document.querySelectorAll('.reveal');
  const io=new IntersectionObserver((entries)=>{
     entries.forEach(e=>{
       if(e.isIntersecting){
         e.target.classList.add('visible');
         io.unobserve(e.target);
       }
     });
  },{threshold:0.25});
  els.forEach(el=>io.observe(el));
}); 