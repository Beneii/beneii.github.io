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
    <select id="categoryFilter" style="padding:0.5rem 0.75rem; border:1px solid #ccc; border-radius:4px;">
      <option value="all">All Categories</option>
      <option value="code">Pure Code</option>
      <option value="hardware">Arduino / Robotics</option>
      <option value="art">Art / 3-D Design</option>
    </select>
  </div>

  <h2>Pure Code</h2>
  <div class="projects-list">
    <div class="project-card reveal" data-title="Focus+" data-category="code">
      <img src="/assets/images/focusplushero.png" alt="Focus+ Chrome Extension" class="project-card-image">
      <div class="project-card-content">
        <h3>Focus+</h3>
        <p>A Chrome extension that helps you stay focused and productive by blocking distracting websites and providing a clean, minimalist interface.</p>
        <a href="/projects/focus-plus/" class="btn">Read Case Study</a>
      </div>
    </div>
    <div class="project-card reveal" data-title="Blobby Ring Generator" data-category="code">
      <img src="/assets/images/blobbyringhero.png" alt="Blobby Ring Generator" class="project-card-image">
      <div class="project-card-content">
        <h3>Blobby Ring Generator</h3>
        <p>Draw voxels and generate a smooth or metallic 3-D ring in real-time with Three.js &amp; Marching Cubes.</p>
        <a href="/projects/blobby-ring-generator/" class="btn">Read Case Study</a>
      </div>
    </div>
    <div class="project-card reveal" data-title="Sixes Machine" data-category="code">
      <img src="/assets/images/sixes-placeholder.png" alt="Sixes Machine Automation" class="project-card-image">
      <div class="project-card-content">
        <h3>Sixes Machine</h3>
        <p>Automates filling the job column in MYOB shop sales with '6' using mouse/clipboard scripting. Saves hours of manual work!</p>
        <a href="/projects/sixes-machine/" class="btn">Read Case Study</a>
      </div>
    </div>
  </div>

  <h2>Arduino / Robotics</h2>
  <div class="projects-list">
    <div class="project-card reveal" data-title="Automated Plant Waterer" data-category="hardware">
      <img src="https://picsum.photos/seed/plantbot/600/400" alt="Automated Plant Waterer" class="project-card-image">
      <div class="project-card-content">
        <h3>Automated Plant Waterer</h3>
        <p>A smart system using Arduino and soil moisture sensors to keep your plants happy.</p>
        <a href="#" class="btn">Details &amp; Demo</a>
      </div>
    </div>
    <div class="project-card reveal" data-title="CNC Plotter Bot" data-category="hardware">
      <img src="https://picsum.photos/seed/plotterbot/600/400" alt="CNC Plotter Bot" class="project-card-image">
      <div class="project-card-content">
        <h3>CNC Plotter Bot</h3>
        <p>A custom-built 2D plotter that can draw vector graphics with precision.</p>
        <a href="#" class="btn">Details &amp; Demo</a>
      </div>
    </div>
  </div>

  <h2>Art / 3-D Design</h2>
  <div class="projects-list">
    <div class="project-card reveal" data-title="Abstract Voxel Sculptures" data-category="art">
      <img src="https://picsum.photos/seed/voxelart/600/400" alt="Abstract Voxel Sculptures" class="project-card-image">
      <div class="project-card-content">
        <h3>Abstract Voxel Sculptures</h3>
        <p>A series of generative 3D sculptures created with custom voxel tools and Blender.</p>
        <a href="#" class="btn">Details &amp; Demo</a>
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
