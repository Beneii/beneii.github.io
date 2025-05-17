---
layout: page
title: Home
---

{% include navbar.html %}

<div class="hero-section">
  <div class="hero-image-container">
    <img src="https://picsum.photos/seed/benei-portfolio-hero/1600/600" alt="Abstract Hero Image for Portfolio" class="hero-image">
    <div class="hero-overlay"></div>
  </div>
  <div class="hero-text">
    <img src="/assets/images/pixel-title.gif" alt="Portfolio Title" class="hero-gif">
  </div>
</div>

<div class="page-content-container">
  <section class="home-section intro-section">
    <h2>Welcome!</h2>
    <p>I'm {{ site.author }}, a passionate developer and technology enthusiast. This is my personal space to showcase projects, share insights, and document my journey in the world of tech. </p>
    <p><a href="{{ '/about/' | relative_url }}" class="link-highlight">Learn more about me &rarr;</a></p>
  </section>

  <section class="home-section featured-projects-section">
    <h2>Featured Projects</h2>
    <div class="project-card">
      <img src="/assets/images/blobbyringhero.png" alt="Blobby Ring Generator hero image" class="project-card-image">
      <div class="project-card-content">
        <h3>Blobby Ring Generator</h3>
        <p>An interactive 2D & 3D generative art tool. Draw on a canvas and see it transformed into a dynamic 3D ring structure using Three.js and Marching Cubes.</p>
        <a href="{{ '/projects/blobby-ring-generator/' | relative_url }}" class="btn">Explore Project</a>
      </div>
    </div>
    <p style="text-align: center; margin-top: 2rem;"><a href="{{ '/projects/' | relative_url }}" class="btn btn-secondary">View All Projects</a></p>
  </section>

</div>

<script src="{{ '/assets/js/dark-mode.js' | relative_url }}" defer></script> 