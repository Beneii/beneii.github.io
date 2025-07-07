---
layout: page
title: "Sixes Machine"
permalink: /projects/sixes-machine/
---

{% include navbar.html %}
{% include page-hero.html %}
<div class="page-content-container">
  <div class="project-detail">
    <div class="details">
      <div style="display:flex;flex-wrap:wrap;gap:2rem;align-items:center;justify-content:center;">
        <figure style="flex:1;min-width:250px;text-align:center;">
          <video controls style="max-width:100%;border-radius:8px;">
            <source src="/assets/images/Screen Recording 2025-05-22 105303.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <figcaption>Automated 'Sixes' Machine in action (screen recording)</figcaption>
        </figure>
      </div>
      <h2>Project Overview</h2>
      <p>The <strong>Sixes Machine</strong> is a custom automation tool designed to streamline a repetitive task at work: filling the job column of every shop sale in MYOB with the number '6'. The script uses recorded mouse positions, clipboard checks, and row counting to automate the process, looping through each transaction until completion. It dramatically reduces manual effort and error, making a tedious process fast and reliable.</p>
      <h2>How It Works</h2>
      <ul>
        <li>Records mouse positions for key UI elements in MYOB.</li>
        <li>Counts rows in each transaction by copying cell data to the clipboard.</li>
        <li>Automatically enters '6' in the job column for each row.</li>
        <li>Loops through all transactions, pausing or stopping as needed.</li>
      </ul>
      <h2>Case Study Coming Soon</h2>
      <p>This page will soon feature a full case study, technical reflection, and screenshots of the Sixes Machine in action.</p>
      <div style="text-align:center;margin:2rem 0;">
        <a href="/projects/" class="btn">← Back to all projects</a>
      </div>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/dark-mode.js' | relative_url }}" defer></script>

{% include footer.html %} 