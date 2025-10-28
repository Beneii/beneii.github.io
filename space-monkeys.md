---
layout: page
title: "Space Monkeys"
permalink: /projects/space-monkeys/
---

{% include head.html %}
{% include navbar.html %}
{% include page-hero.html %}
<main class="page-content-container">
  <div class="project-detail">
    <div class="details">
      <div style="display:flex;flex-wrap:wrap;gap:2rem;align-items:center;justify-content:center;">
        <figure style="flex:1;min-width:250px;text-align:center;">
          <img src="/assets/images/SpaceMonkeys.png" alt="Space Monkeys pixel art hero image" style="max-width:100%;border-radius:8px;image-rendering:pixelated;image-rendering:crisp-edges;" loading="lazy" width="800" height="500"/>
          <figcaption>Space Monkeys – Group Game Project</figcaption>
        </figure>
      </div>
      <h2>Game Overview</h2>
      <p><strong>Space Monkey, you're our last hope!</strong> Our spaceship has run out of fuel and the only way home is to gather elemental resources from Earth across multiple eras.  Guide our brave simian hero through <strong>4 challenging levels (plus a tutorial)</strong>, each built around a unique elemental power.</p>

      <p>Dash, jump, and unleash <em>Fire, Water, Earth, and Air</em> abilities to collect every element, appease the Monkey King, and blast the crew back into orbit. Levels intentionally feature tight jumps and tricky puzzles—keep trying, mastery is rewarded!</p>

      <h3>Controls</h3>
      <ul>
        <li><kbd>A</kbd> / <kbd>←</kbd> — Move Left</li>
        <li><kbd>D</kbd> / <kbd>→</kbd> — Move Right</li>
        <li><kbd>W</kbd> / <kbd>Space</kbd> — Jump</li>
        <li><kbd>1-4</kbd> — Switch Elemental Powers</li>
        <li><kbd>Esc</kbd> — Main Menu</li>
      </ul>

      <h3>Teamwork & Recognition</h3>
      <p>Working on <strong>Space Monkeys</strong> taught our team the value of clear communication, tight iteration loops, and collective ownership of game feel. These lessons have strengthened my collaboration skills for future projects.</p>

      <p class="badge" style="display:inline-block;margin-bottom:1rem;background-color:#ff8800;color:#000;padding:4px 10px;border-radius:999px;font-weight:600;">2025 UTS Student Games Showcase Nominee</p>
      <p>Our Subject Coordinator hand-picked Space Monkeys for the <em>2025 UTS Student Games Showcase</em>.  At the event I presented the game, gathered focused feedback, explored other standout projects, and spoke with industry guests from Riot Games and MSI—an invaluable chance to network and refine our craft.</p>

      <p style="margin-top:1rem;font-style:italic;">Game Design Methodologies Assessment #2 — Group Cozy: Liam Skinner, James Kirwan, Ben Jones, Maia Nixon</p>

      <h3>Tech Stack</h3>
      <ul>
        <li>Unity 2022 (URP)</li>
        <li>C# gameplay scripting & network-ready architecture</li>
        <li>Custom ragdoll & thruster physics</li>
        <li>GitHub Projects for agile task tracking</li>
      </ul>

      <div style="display:flex;flex-wrap:wrap;gap:1rem;margin:2rem 0;">
        <a href="https://liamdskinner.itch.io/space-monkeys" class="btn" target="_blank">Play on itch.io</a>
        <a href="https://github.com/JamesKirwanUTS/Cozy" class="btn btn-secondary" target="_blank">View Source Code</a>
      </div>

      <div style="text-align:center;margin:2rem 0;">
        <a href="/projects/" class="btn">← Back to all projects</a>
      </div>
    </div>
  </div>
</main>

<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>

{% include footer.html %} 