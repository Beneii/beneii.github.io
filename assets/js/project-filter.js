document.addEventListener('DOMContentLoaded',()=>{
  const searchInput=document.getElementById('projectSearch');
  const categorySel=document.getElementById('categoryFilter');
  const cards=[...document.querySelectorAll('.project-card')];
  function filter(){
    const query=searchInput.value.toLowerCase();
    const cat=categorySel.value;
    cards.forEach(card=>{
      const title=card.dataset.title.toLowerCase();
      const cardCat=card.dataset.category;
      const matchTitle=title.includes(query);
      const matchCat=(cat==='all'||cat===cardCat);
      card.style.display=(matchTitle&&matchCat)?'block':'none';
    });
  }
  searchInput.addEventListener('input',filter);
  categorySel.addEventListener('change',filter);

  const loadBtn=document.getElementById('loadMoreBtn');
  if(loadBtn){
    let shown=6;
    const allCards=[...cards];
    function showCards(){ allCards.forEach((c,i)=>{ c.style.display = i<shown ? 'block':'none';});}
    showCards();
    loadBtn.addEventListener('click',(e)=>{e.preventDefault(); shown+=6; showCards(); if(shown>=allCards.length) loadBtn.style.display='none';});
  }
}); 