---
layout: page
title: Home
---

{% include navbar.html %}

<div class="hero-section">
  <div class="hero-image-container">
    <img src="/assets/images/heroimage.png" alt="Hero Image" class="hero-image" id="hero-image">
    <div class="hero-gradient-overlay"></div>
  </div>
  <div class="hero-text">
    <img src="/assets/images/portfolio.gif" alt="Portfolio Title" class="hero-gif">
    <span id="hero-tagline">Building interactive systems that blend code, AI, and physical computing</span>
    <div class="hero-cta-container">
      <a href="#featured-projects" class="btn hero-cta">View My Work</a>
      <a href="#contact" class="btn hero-cta-secondary">Get in Touch</a>
    </div>
  </div>
</div>

<div class="page-content-container">
  <section id="about" class="home-section intro-section reveal">
    <h2>About Me</h2>
    <div class="about-container">
      <div class="about-text">
        <p class="about-intro">I'm {{ site.author }}, a developer who bridges the gap between digital and physical worlds. My journey in tech has led me from building interactive web experiences to creating hardware prototypes that respond to human interaction.</p>
        
        <div class="expertise-grid">
          <div class="expertise-item">
            <h3>🔨 Software Development</h3>
            <p>Building robust applications with clean, maintainable code. Specializing in full-stack development and interactive systems.</p>
          </div>
          <div class="expertise-item">
            <h3>🌐 Web Engineering</h3>
            <p>Crafting responsive, accessible interfaces that delight users. From simple landing pages to complex web applications.</p>
          </div>
          <div class="expertise-item">
            <h3>⚡ Hardware Hacks</h3>
            <p>Rapid-prototyping with Arduino & sensors. Creating tangible interfaces that bridge the digital and physical worlds.</p>
          </div>
        </div>
        
        <a href="{{ '/about/' | relative_url }}" class="btn">Learn more&nbsp;&rarr;</a>
      </div>
    </div>
  </section>

  <section id="featured-projects" class="home-section featured-projects-section reveal">
    <h2>Featured Projects</h2>
    <div class="featured-projects-grid">
      <div class="project-card">
        <div class="project-card-image-container">
          <img src="/assets/images/blobbyringhero.png" alt="Blobby Ring Generator hero image" class="project-card-image">
          <div class="project-card-overlay">
            <span class="project-tech">Three.js • WebGL • Marching Cubes</span>
          </div>
        </div>
        <div class="project-card-content">
          <h3>Blobby Ring Generator</h3>
          <p>An interactive 2D & 3D generative art tool that transforms your drawings into dynamic 3D ring structures. Experience the magic of real-time 3D visualization.</p>
          <div class="project-card-actions">
            <a href="{{ '/projects/blobby-ring-generator/' | relative_url }}" class="btn">Explore Project</a>
          </div>
        </div>
      </div>
      
      <!-- Add more featured projects here -->
    </div>
    <div class="view-all-projects">
      <a href="{{ '/projects/' | relative_url }}" class="btn btn-large">View All Projects</a>
    </div>
  </section>

  <section id="contact" class="home-section contact-section reveal">
    <h2>Contact</h2>
    <div class="contact-container" style="display:flex;flex-direction:column;align-items:center;gap:1.5rem;max-width:400px;margin:0 auto;">
      <div class="contact-method">
        <strong>Email:</strong> <a href="mailto:ben.eifion.jones@gmail.com">ben.eifion.jones@gmail.com</a>
      </div>
      <div class="contact-method">
        <strong>GitHub:</strong> <a href="https://github.com/beneii" target="_blank">github.com/beneii</a>
      </div>
      <div class="contact-method">
        <strong>Phone:</strong> <a href="tel:0451662807">0451 662 807</a>
      </div>
      <div class="contact-method">
        <strong>Discord:</strong> <span style="background:#23272a;color:#fff;padding:2px 8px;border-radius:6px;">Ben</span>
      </div>
    </div>
  </section>

</div>

<script src="{{ '/assets/js/hero-typing.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/dark-mode.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/hero-parallax.js' | relative_url }}" defer></script>

{% include footer.html %} 