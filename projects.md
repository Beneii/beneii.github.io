---
layout: page
title: Projects
permalink: /projects/
---

{% include navbar.html %}

# Projects

<div class="projects-toolbar" style="margin:1.5rem 0; display:flex; flex-wrap:wrap; gap:1rem; align-items:center;">
  <input type="text" id="projectSearch" placeholder="Search projects…" style="flex:1 1 250px; padding:0.5rem 0.75rem; border:1px solid #ccc; border-radius:4px;"/>
  <select id="categoryFilter" style="padding:0.5rem 0.75rem; border:1px solid #ccc; border-radius:4px;">
    <option value="all">All Categories</option>
    <option value="code">Pure Code</option>
    <option value="hardware">Arduino / Robotics</option>
    <option value="art">Art / 3-D Design</option>
  </select>
</div>

## Pure Code
<div class="projects-list">
<div class="project-card reveal" data-title="Blobby Ring Generator" data-category="code">
  <img src="/assets/images/blobbyringhero.png" alt="Blobby Ring Generator" class="project-card-image">
  <div class="project-card-content">
    <h3>Blobby Ring Generator</h3>
    <p>Draw voxels and generate a smooth or metallic 3-D ring in real-time with Three.js &amp; Marching Cubes.</p>
    <a href="/projects/blobby-ring-generator/" class="btn">Details &amp; Demo</a>
  </div>
</div>
<!-- Add more project-card blocks here -->
</div>

<p style="text-align:center;margin-top:2rem;"><a href="#" class="btn btn-secondary" id="loadMoreBtn">Load More Projects</a></p>

<script src="/assets/js/project-filter.js" defer></script>
<script src="/assets/js/dark-mode.js" defer></script>
<script src="/assets/js/scroll-reveal.js" defer></script>
