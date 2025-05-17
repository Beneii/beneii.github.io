---
layout: page
title: Home
---

{% include navbar.html %}

<div class="hero-section">
  <div class="hero-image-container">
    <img src="/assets/images/heroimage.png" alt="Hero Image" class="hero-image">
  </div>
  <div class="hero-text">
    <img src="/assets/images/portfolio.gif" alt="Portfolio Title" class="hero-gif">
    <span id="hero-tagline"></span>
    <a href="#about" class="btn hero-cta">View My Work</a>
  </div>
</div>

<div class="page-content-container">
  <section id="about" class="home-section intro-section reveal">
    <h2>About Me</h2>
    <div class="about-container">
      <div class="about-text">
        <p>I'm {{ site.author }}, a passionate developer and technology enthusiast who loves turning ideas into delightful, user-focused experiences. My toolkit spans electronics, 3-D graphics, and full-stack web development.</p>
        <h3>🔨 What I do</h3>
        <ul>
          <li><strong>Software Development:</strong> Building robust apps with clean, maintainable code.</li>
          <li><strong>Web Engineering:</strong> Crafting responsive, accessible interfaces.</li>
          <li><strong>Hardware Hacks:</strong> Rapid-prototyping with Arduino &amp; sensors.</li>
        </ul>
        <a href="{{ '/about/' | relative_url }}" class="btn">Learn more&nbsp;&rarr;</a>
      </div>
      <div class="about-portrait">
        <img src="/assets/images/portrait.png" alt="Portrait of Benei" />
      </div>
    </div>
  </section>

  <section class="home-section featured-projects-section reveal">
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

<script src="{{ '/assets/js/hero-typing.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/dark-mode.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script> 