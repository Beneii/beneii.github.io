---
layout: page
title: "Blobby Ring Generator"
permalink: /projects/blobby-ring-generator/
---

<img src="/assets/images/blobbyringhero.png" alt="Blobby Ring Generator hero image" style="max-width:100%; border:2px solid #ccc; margin-bottom:1.5rem;" />

## Overview
The **Blobby Ring Generator** is an interactive art tool that lets you sketch a 2-D voxel pattern and instantly turn it into a smooth 3-D ring using [Three.js](https://threejs.org/) and Marching Cubes.

## Key Features
* Draw or erase voxels with variable brush size
* Live-update toggle for performance-friendly editing
* Undo / Redo history & reset grid
* Smooth vs. metallic materials (OBJ export supported)
* Marching-Cubes isolation, resolution & ring-height sliders

## Technology Stack
| Layer | Tech |
|-------|------|
| 3-D Graphics | Three.js (r158) |
| Iso-Surface | MarchingCubes helper (Three.js examples) |
| Export | OBJExporter |
| UI | Vanilla JS + HTML5 Canvas |
| Build/Host | Jekyll + GitHub Pages |

## Try it out
<div style="text-align:center;margin:2rem 0;">
  <a href="/Projects/three-ring-generator/" class="btn btn-hero" style="padding:12px 24px;">Launch the Live Generator →</a>
</div>

---

Want to see more projects? <a href="/projects/">Back to Projects</a>.

<script src="/assets/js/dark-mode.js" defer></script> 