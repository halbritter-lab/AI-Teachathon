# AI Teachathon Website

## What This Is

A modern, polished website for the Halbritter Lab AI Teachathon at CeRKiD (Charité Berlin). It serves dual purpose: a presentation-style introduction to AI-assisted coding for researchers, and documentation-style reference pages with setup instructions, tool overviews, timeline, and project ideas. The event runs Feb 17, 2026 starting at 17:00 (~3 hours).

## Core Value

Participants arrive prepared and leave with practical knowledge of AI coding tools, Git, and GitHub — with clear next steps to apply in their research.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Modern presentation-style landing/intro (not slides-in-a-PDF, a real web experience)
- [ ] Setup/installation guide (VS Code, Git, GitHub account, etc.)
- [ ] Event timeline/agenda (17:00 start, ~3 hours)
- [ ] AI tool landscape overview (LLMs, coding assistants, CLI tools)
- [ ] Hands-on session guide with project ideas (KidneyQuest and others)
- [ ] Ideas/projects page participants can contribute to
- [ ] Resources and links page
- [ ] Deployable on GitHub Pages
- [ ] Professional look matching academic/lab context

### Out of Scope

- KidneyQuest game implementation — separate repo, just referenced here
- User authentication or interactive features beyond static site
- Mobile app — web-only

## Context

- Halbritter Lab / CeRKiD / Charité Berlin — nephrology/genetics research group
- Audience: researchers, clinicians, lab members — varying technical backgrounds
- GitHub org: berntpopp, repo: AI-Teachathon
- Must deploy to GitHub Pages (https://berntpopp.github.io/AI-Teachathon)
- Event: Feb 17, 2026, 17:00, ~3 hours
- CeRKiD mascot: zebra (rare disease symbol)
- start.md in .planning/ has initial content ideas and structure

## Constraints

- **Timeline**: Must be deployable by Feb 17, 2026 afternoon
- **Hosting**: GitHub Pages (static site)
- **Audience**: Non-technical researchers — content must be approachable
- **Stack**: VitePress + Tailwind CSS v4 + Reveal.js (Vite+Vue, Markdown content, built-in search)

## Current Milestone: v1.0 AI Teachathon Website

**Goal:** Ship a complete, modern workshop website by Feb 17 afternoon

**Target features:**
- Modern landing page with event essentials
- Setup guide for VS Code, Git, GitHub
- Event agenda/timeline (17:00-20:00)
- Reveal.js presentation (Why AI + What is Git/GitHub)
- AI tool landscape overview
- Hands-on session guide with project ideas
- Ideas page and resources page
- GitHub Pages deployment

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| VitePress + Tailwind CSS v4 + Reveal.js | Vite+Vue+Markdown with built-in search. Tailwind v4 via @tailwindcss/vite plugin. Modern, lightweight, renders from .md files. | ✓ Good |
| Reveal.js for presentation (standalone) | Full presentation mode (fullscreen, speaker notes, keyboard nav). CDN-only, no build. | ✓ Good |
| GitHub Pages via GitHub Actions | VitePress builds static output, deployed via actions/deploy-pages. | ✓ Good |

---
*Last updated: 2026-02-16 after project initialization*
