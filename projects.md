---
layout: page
title: Projects
permalink: /projects/
---

{% include navbar.html %}
{% include page-hero.html %}

<div class="page-content-container">
  <div class="projects-toolbar" style="margin:1.5rem 0; display:flex; flex-wrap:wrap; gap:1rem; align-items:center;">
    <input type="text" id="projectSearch" placeholder="Search projects…" style="flex:1 1 250px; padding:0.5rem 0.75rem; border:1px solid #ccc; border-radius:4px;"/>
  </div>

  <h2>Projects</h2>
  <div class="projects-list">
    <div class="project-card reveal" data-title="Focus+" data-category="javascript">
      <img src="/assets/images/focusplushero.png" alt="Focus+ Chrome Extension" class="project-card-image">
      <div class="project-card-content">
        <h3>Focus+</h3>
        <span class="badge">JavaScript</span>
        <p>A Chrome extension that helps you stay focused and productive by blocking distracting websites and providing a clean, minimalist interface.</p>
        <a href="/projects/focus-plus/" class="btn">Read Case Study</a>
      </div>
    </div>
    <div class="project-card reveal" data-title="Blobby Ring Generator" data-category="javascript">
      <img src="/assets/images/blobbyringhero.png" alt="Blobby Ring Generator" class="project-card-image">
      <div class="project-card-content">
        <h3>Blobby Ring Generator</h3>
        <span class="badge">JavaScript</span>
        <p>Draw voxels and generate a smooth or metallic 3-D ring in real-time with Three.js &amp; Marching Cubes.</p>
        <a href="/projects/blobby-ring-generator/" class="btn">Read Case Study</a>
      </div>
    </div>
    <div class="project-card reveal" data-title="Shop Sales Automation" data-category="autohotkey">
      <img src="https://www.autohotkey.com/static/ahk_logo.png" alt="Shop Sales Automation" class="project-card-image" style="image-rendering:crisp-edges;">
      <div class="project-card-content">
        <h3>Shop Sales Automation</h3>
        <span class="badge">AutoHotkey</span>
        <p>Automates filling the job column in MYOB shop sales with '6' using mouse/clipboard scripting. Saves hours of manual work!</p>
        <a href="/projects/shop-sales-automation/" class="btn">Read Case Study</a>
      </div>
    </div>
    <div class="project-card reveal" data-title="PlanIt" data-category="swift">
      <img src="/assets/images/PlanIt1.png" alt="PlanIt iOS App" class="project-card-image">
      <div class="project-card-content">
        <h3>PlanIt</h3>
        <span class="badge">Swift</span>
        <p>Planet-themed iOS app for tasks & calendar management. Integrates with Canvas or lets you add your own tasks!</p>
        <a href="/projects/planit/" class="btn">Read Case Study</a>
      </div>
    </div>
    <div class="project-card reveal" data-title="Space Monkeys" data-category="csharp">
      <img src="/assets/images/SpaceMonkeys.png" alt="Space Monkeys Game" class="project-card-image" style="image-rendering:pixelated;image-rendering:crisp-edges;">
      <div class="project-card-content">
        <h3>Space Monkeys</h3>
        <span class="badge">C#</span>
        <p>A frantic zero-gravity multiplayer arena brawler created in Unity for a university group project.</p>
        <a href="/projects/space-monkeys/" class="btn">Read Case Study</a>
      </div>
    </div>
  </div>

  <p style="text-align:center;margin-top:2rem;"><a href="#" class="btn btn-secondary" id="loadMoreBtn">Load More Projects</a></p>
</div>

<script src="/assets/js/project-filter.js" defer></script>
<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script>
<script src="/assets/js/scroll-reveal.js" defer></script>
<script src="/assets/js/dark-mode.js" defer></script>

{% include footer.html %}
