---
layout: default
title: About Me
description: "Learn more about my journey, skills, and passion for technology"
---

{% include page-hero.html %}

<section class="about-section fade-in">
  <div class="container">
    <div class="about-grid">
      <div class="about-content">
        <h2>My Journey</h2>
        <p>I'm a developer passionate about creating interactive systems that blend code, AI, and physical computing. My journey began with a curiosity about how technology can enhance human experiences, leading me to explore various domains from web development to hardware prototyping.</p>
        
        <h3>What I Do</h3>
        <div class="skills-grid">
          <div class="skill-card">
            <h4>Software Development</h4>
            <p>Building robust applications with clean, maintainable code. Specializing in full-stack web development and interactive systems.</p>
            <div class="skill-tags">
              <span class="tag">JavaScript</span>
              <span class="tag">Python</span>
              <span class="tag">React</span>
              <span class="tag">Node.js</span>
            </div>
          </div>
          
          <div class="skill-card">
            <h4>Creative Technology</h4>
            <p>Exploring the intersection of art and technology through interactive installations and generative art.</p>
            <div class="skill-tags">
              <span class="tag">Three.js</span>
              <span class="tag">Arduino</span>
              <span class="tag">Processing</span>
              <span class="tag">OpenFrameworks</span>
            </div>
          </div>
          
          <div class="skill-card">
            <h4>AI & Automation</h4>
            <p>Developing intelligent systems and tools that enhance productivity and creativity.</p>
            <div class="skill-tags">
              <span class="tag">TensorFlow</span>
              <span class="tag">PyTorch</span>
              <span class="tag">Automation</span>
              <span class="tag">ML</span>
            </div>
          </div>
        </div>
        
        <h3>Let's Connect</h3>
        <p>I'm always interested in hearing about new projects and opportunities. Whether you want to discuss a potential collaboration or just chat about technology, feel free to reach out!</p>
        
        <div class="contact-links">
          <a href="mailto:your.email@example.com" class="btn">Email Me</a>
          <a href="https://github.com/Benei" class="btn btn-outline" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/Benei" class="btn btn-outline" target="_blank">LinkedIn</a>
        </div>
      </div>
      
      <div class="about-image">
        <img src="/assets/images/portrait.png" alt="Portrait of Benei" class="portrait">
      </div>
    </div>
  </div>
</section>

<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/dark-mode.js' | relative_url }}" defer></script>

{% include footer.html %} 