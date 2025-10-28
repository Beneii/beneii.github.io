---
layout: page
title: Projects
permalink: /projects/
---

{% include head.html %}
{% include navbar.html %}
{% include page-hero.html %}

<main class="page-content-container">
  <div class="projects-toolbar" style="margin:1.5rem 0; display:flex; flex-wrap:wrap; gap:1rem; align-items:center;">
    <input type="text" id="projectSearch" placeholder="Search projects…" style="flex:1 1 250px; padding:0.5rem 0.75rem; border:1px solid #ccc; border-radius:4px;"/>
  </div>

  <h2>Projects</h2>
  <div class="projects-list">
    <div class="project-card reveal" data-title="Focus+" data-category="javascript">
      <img src="/assets/images/focusplushero.png" alt="Focus+ Chrome Extension" class="project-card-image" loading="lazy" width="600" height="400">
      <div class="project-card-content">
        <h3>Focus+</h3>
        <span class="badge">JavaScript</span>
        <p>A Chrome extension that helps you stay focused and productive by blocking distracting websites and providing a clean, minimalist interface.</p>
        <a href="/projects/focus-plus/" class="btn">Read Case Study</a>
      </div>
    </div>
    <div class="project-card reveal" data-title="Blobby Ring Generator" data-category="javascript">
      <img src="/assets/images/blobbyringhero.png" alt="Blobby Ring Generator" class="project-card-image" loading="lazy" width="600" height="400">
      <div class="project-card-content">
        <h3>Blobby Ring Generator</h3>
        <span class="badge">JavaScript</span>
        <p>Draw voxels and generate a smooth or metallic 3-D ring in real-time with Three.js &amp; Marching Cubes.</p>
        <a href="/projects/blobby-ring-generator/" class="btn">Read Case Study</a>
      </div>
    </div>
    <div class="project-card reveal" data-title="Shop Sales Automation" data-category="autohotkey">
      <div class="project-card-image" style="background:var(--surface-dark);display:flex;align-items:center;justify-content:center;color:var(--text);padding:2rem;">
        <div style="text-align:center;">
          <div style="font-size:3rem;margin-bottom:1rem;">⚙️</div>
          <div style="font-size:1.2rem;font-weight:600;">Shop Sales Automation</div>
          <div style="font-size:0.9rem;opacity:0.8;margin-top:0.5rem;">AutoHotkey Script</div>
        </div>
      </div>
      <div class="project-card-content">
        <h3>Shop Sales Automation</h3>
        <span class="badge">AutoHotkey</span>
        <p>Automates filling the job column in MYOB shop sales with '6' using mouse/clipboard scripting. Saves hours of manual work!</p>
        <a href="/projects/shop-sales-automation/" class="btn">Read Case Study</a>
      </div>
    </div>
    <div class="project-card reveal" data-title="PlanIt" data-category="swift">
      <img src="/assets/images/PlanIt1.png" alt="PlanIt iOS App" class="project-card-image" loading="lazy" width="600" height="400">
      <div class="project-card-content">
        <h3>PlanIt</h3>
        <span class="badge">Swift</span>
        <p>Planet-themed iOS app for tasks & calendar management. Integrates with Canvas or lets you add your own tasks!</p>
        <a href="/projects/planit/" class="btn">Read Case Study</a>
      </div>
    </div>
    <div class="project-card reveal" data-title="Space Monkeys" data-category="csharp">
      <img src="/assets/images/SpaceMonkeys.png" alt="Space Monkeys Game" class="project-card-image" style="image-rendering:pixelated;image-rendering:crisp-edges;" loading="lazy" width="600" height="400">
      <div class="project-card-content">
        <h3>Space Monkeys</h3>
        <span class="badge">C#</span>
        <p>4-level elemental platformer built in Unity. Nominated for the 2025 UTS Student Games Showcase and a showcase of strong team collaboration.</p>
        <a href="/projects/space-monkeys/" class="btn">Read Case Study</a>
      </div>
    </div>
  </div>

  <p style="text-align:center;margin-top:2rem;"><a href="#" class="btn btn-secondary" id="loadMoreBtn">Load More Projects</a></p>
</main>

<script src="/assets/js/project-filter.js" defer></script>
<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script>
<script src="/assets/js/scroll-reveal.js" defer></script>

{% include footer.html %}
