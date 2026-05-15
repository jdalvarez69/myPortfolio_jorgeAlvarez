# Image Guide — Jorge Alvarez Portfolio

This file documents all image slots, which files exist, and which are designed SVG visuals.

---

## Status Overview

| File | Type | Status |
|------|------|--------|
| `brand/profile.jpg` | Real photo | ✅ Exists |
| `projects/cryptography-museum.png` | Real screenshot | ✅ Exists |
| `projects/portfolio-site.svg` | Designed SVG wireframe | ✅ Created |
| `projects/team-dashboard-concept.svg` | Designed SVG schematic | ✅ Created |
| `process/workflow-map.svg` | Designed SVG diagram | ✅ Created |
| `direction/career-path.svg` | Designed SVG path diagram | ✅ Created |

---

## Projects

| File | Used in | Notes |
|------|---------|-------|
| `projects/cryptography-museum.png` | work.html — Cryptography Museum card | Real screenshot. 16:9 crop. |
| `projects/portfolio-site.svg` | work.html — Portfolio Website card | Designed wireframe schematic of the portfolio layout. Can be replaced with a real screenshot later. |
| `projects/team-dashboard-concept.svg` | work.html — Team Dashboard card | Designed schematic showing kanban columns, status badges, timeline strip, and risk marker. |

---

## Process

| File | Used in | Notes |
|------|---------|-------|
| `process/workflow-map.svg` | process.html — above the steps list | Five-step horizontal flow diagram: Research → Plan → Build → Review → Ship. Step 3 (Build) is highlighted as the active phase. |

---

## Direction

| File | Used in | Notes |
|------|---------|-------|
| `direction/career-path.svg` | direction.html — below the AFROTC path section | Four-node intended career path: BIS Student → Space Force → Acquisition/Space Ops → Civilian PM. Nodes 2–4 use dashed borders to indicate these are goals, not completed experience. |

---

## Brand

| File | Used in | Notes |
|------|---------|-------|
| `brand/profile.jpg` | index.html — hero section | Portrait photo. Displays at 200px wide, aspect-ratio 3:4, object-fit cover. |

---

## Format Guidelines

- Real photos: PNG or JPG. Export at 2× for retina (e.g., 1200px wide for a 600px slot).
- SVG diagrams: Use the site color palette. Font-family: Arial, sans-serif in SVG text elements.
- Alt text is already written in the HTML.
- Keep PNG/JPG files under 300KB; compress before adding.
- The `onerror` fallback on project figures is still active as a safety net.

---

## How fallbacks work

Until real image files are present, each `<figure>` element shows a clean labeled placeholder
(the `data-label` attribute text, centered in a light panel). This is handled entirely in CSS.
No JavaScript or build tool is needed.

When a real image is added, the fallback disappears automatically.
