---
layout: page
title: "Blobby Ring Generator"
permalink: /projects/blobby-ring-generator/
---

{% include navbar.html %}
{% include page-hero.html %}
<div class="page-content-container">
  <div class="project-detail">
    <div class="details">
      <h2>Overview</h2>
      <p>The <strong>Blobby Ring Generator</strong> is an interactive art tool that lets you sketch a 2-D voxel pattern and instantly turn it into a smooth 3-D ring using <a href="https://threejs.org/" target="_blank">Three.js</a> and Marching Cubes.</p>

      <h2>Key Features</h2>
      <ul>
        <li>Draw or erase voxels with variable brush size</li>
        <li>Live-update toggle for performance-friendly editing</li>
        <li>Undo / Redo history &amp; reset grid</li>
        <li>Smooth &amp; metallic materials (OBJ export supported)</li>
        <li>Marching-Cubes isolation, resolution &amp; ring-height sliders</li>
      </ul>

      <h2>Tech Stack</h2>
      <div>
        <span class="badge">Three.js r158</span>
        <span class="badge">Marching Cubes</span>
        <span class="badge">OBJExporter</span>
        <span class="badge">HTML5 Canvas</span>
        <span class="badge">Vanilla&nbsp;JS</span>
        <span class="badge">Jekyll</span>
        <span class="badge">GitHub&nbsp;Pages</span>
      </div>
    </div>

    <div class="media">
      <img src="/assets/images/blobbyringhero.png" alt="Blobby Ring Generator hero image" />
      <div style="margin-top:1rem;">
        <a href="/Projects/three-ring-generator/" class="btn">Launch the Live Generator →</a>
      </div>
    </div>
  </div>
  <p style="text-align:center; margin-top:2rem;">
    <a href="/projects/">← Back to all projects</a>
  </p>
</div>

<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/dark-mode.js' | relative_url }}" defer></script>

{% include footer.html %} 