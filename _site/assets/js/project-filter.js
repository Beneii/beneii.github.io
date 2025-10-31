document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('projectSearch');
  const categorySel = document.getElementById('categoryFilter');
  const projectLists = [...document.querySelectorAll('.projects-list')];
  const allCards = [...document.querySelectorAll('.project-card')];

  function filterAndToggleSections() {
    const query = searchInput.value.toLowerCase();
    const selectedCategory = categorySel.value;
    let anyCardShownOverall = false;

    projectLists.forEach(list => {
      const categoryTitle = list.previousElementSibling; // Assumes H2 is right before .projects-list
      let cardsInThisList = list.querySelectorAll('.project-card');
      let hasVisibleCardInList = false;

      cardsInThisList.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        const cardCat = card.dataset.category;
        const matchesQuery = title.includes(query);
        const matchesCategory = (selectedCategory === 'all' || selectedCategory === cardCat);

        if (matchesQuery && matchesCategory) {
          card.style.display = 'block';
          hasVisibleCardInList = true;
          anyCardShownOverall = true;
        } else {
          card.style.display = 'none';
        }
      });

      // Toggle section title visibility based on cards in *this* list
      if (categoryTitle && categoryTitle.tagName === 'H2') {
        categoryTitle.style.display = hasVisibleCardInList ? 'block' : 'none';
      }
      // Also hide/show the list container itself if it might have padding/margin
      list.style.display = hasVisibleCardInList ? 'grid' : 'none'; 
    });
    
    // Handle "Load More" button visibility based on overall visible cards
    // (This part of the logic remains similar, but consider if it needs adjustment
    // based on potentially all cards being hidden by filters)
  }

  if (searchInput) searchInput.addEventListener('input', filterAndToggleSections);
  if (categorySel) categorySel.addEventListener('change', filterAndToggleSections);

  const loadBtn = document.getElementById('loadMoreBtn');
  if (loadBtn) {
    let shownCount = 6; // Initial number of cards to show per page/load
    
    function applyLoadMore() {
      const visibleCards = allCards.filter(card => card.style.display !== 'none');
      visibleCards.forEach((card, index) => {
        card.style.display = index < shownCount ? 'block' : 'none';
      });
      loadBtn.style.display = shownCount < visibleCards.length ? 'block' : 'none';
    }

    function resetAndFilter() {
        shownCount = 6; // Reset for new filter
        filterAndToggleSections(); // Apply text/category filters first
        applyLoadMore(); // Then apply pagination to the filtered set
    }

    if (searchInput) searchInput.addEventListener('input', resetAndFilter);
    if (categorySel) categorySel.addEventListener('change', resetAndFilter);

    loadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      shownCount += 6;
      applyLoadMore();
    });

    resetAndFilter(); // Initial setup
  }
}); 