---
layout: page
title: Home
---

<div class="hero-section">
  <div class="hero-image-container">
    <img src="https://picsum.photos/seed/benei-portfolio-hero/1600/600" alt="Abstract Hero Image for Portfolio" class="hero-image">
    <div class="hero-overlay"></div>
  </div>
  <div class="hero-text">
    <h1>{{ site.title }}</h1>
    <p class="subtitle">{{ site.description }}</p>
    <a href="{{ '/projects/' | relative_url }}" class="btn btn-hero">View My Work</a>
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
      <img src="https://picsum.photos/seed/project-ring-thumb/600/400" alt="Three Ring Generator Thumbnail" class="project-card-image">
      <div class="project-card-content">
        <h3>Blobby Ring Generator</h3>
        <p>An interactive 2D & 3D generative art tool. Draw on a canvas and see it transformed into a dynamic 3D ring structure using Three.js and Marching Cubes.</p>
        <a href="{{ '/Projects/three-ring-generator/' | relative_url }}" class="btn">Explore Generator</a>
      </div>
    </div>
    <p style="text-align: center; margin-top: 2rem;"><a href="{{ '/projects/' | relative_url }}" class="btn btn-secondary">View All Projects</a></p>
  </section>

</div>

<script src="{{ '/assets/js/dark-mode.js' | relative_url }}" defer></script> 