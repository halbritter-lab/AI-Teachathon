# AI Teachathon Website

## What This Is

A modern, polished website for the Halbritter Lab AI Teachathon at CeRKiD (Charite Berlin). It serves dual purpose: a presentation-style introduction to AI-assisted coding for researchers, and documentation-style reference pages with setup instructions, tool overviews, timeline, and project ideas. The event runs Feb 17, 2026 starting at 17:00 (~3 hours).

## Core Value

Participants arrive prepared and leave with practical knowledge of AI coding tools, Git, and GitHub - with clear next steps to apply in their research.

## Requirements

### Validated

- VitePress + Tailwind v4 site with dark theme, search, and GitHub Pages deployment - v1.0
- Landing page with event info, CTAs, and lab branding - v1.0
- Setup guide with platform-specific instructions and verification checklist - v1.0
- Agenda timeline with 6 event segments and navigation links - v1.0
- 32-slide Marp presentation with dark theme and speaker notes - v1.0
- AI tool landscape with 4-level spectrum, 10 tool cards, and 5 tips - v1.0
- Hands-on guide with 8-step Git workflow and AI prompting principles - v1.0
- Ideas page with KidneyQuest featured, 4 alternatives, and edit-on-GitHub - v1.0
- Resources page with 60+ curated links organized by event timeline - v1.0

### Active

- [ ] Presentation v2: Add 5 missing essential topics (private repos, .gitignore, PII, conventional commits, semver)
- [ ] Presentation v2: Add visual elements (diagrams, real screenshots, split layouts)
- [ ] Presentation v2: Add learning objectives and summary/recap slides
- [ ] Presentation v2: Add engagement moments (audience questions, polls, discussion prompts)
- [ ] Presentation v2: Rebalance structure (merge thin sections, expand hands-on steps)
- [ ] Presentation v2: Improve slide titles to state takeaways, not topics
- [ ] Presentation v2: Leverage Marp features (bg images, split layouts, scoped styles)
- [ ] Recording/video embed (if event is recorded)
- [ ] Participant feedback form link
- [ ] Gallery of completed pull requests from the hands-on session

### Out of Scope

- KidneyQuest game implementation - separate repo, only referenced here
- User authentication or interactive features beyond static site
- Mobile app - web-only
- Internationalization - English-only, international research group
- Embedded AI chatbot - teach them to use their own tools instead

## Current Milestone: v1.1 Presentation Revision

**Goal:** Full revision of the 32-slide Marp presentation based on expert review (6.25/10 -> 8.5+/10), addressing content gaps, visual design, structure, engagement, and Marp feature utilization.

**Target features:**
- 5 new essential topics for researchers (private repos, .gitignore, PII, conventional commits, semver)
- Visual elements throughout (diagrams, live-captured screenshots, Marp split layouts)
- Learning objectives + recap slides bookending the presentation
- 3-4 engagement moments (audience questions, polls, discussion prompts)
- Restructured flow (merge thin sections, expand hands-on depth)
- Takeaway-style slide titles replacing topic labels
- Full use of Marp capabilities (bg images, scoped styles, fit directive)

**Review document:** `.planning/PRESENTATION-REVIEW.md`

## Context

Shipped v1.0 with ~2,562 lines across 71 files.
Tech stack: VitePress 1.6.4, Tailwind CSS v4, Marp CLI 4.2.3, Playwright.
7 content pages + 1 standalone presentation (32 slides).
13 Playwright E2E tests validating cross-links, responsive design, and presentation.
Deployed to GitHub Pages at halbritter-lab.github.io/AI-Teachathon/.

Detailed presentation review completed (`.planning/PRESENTATION-REVIEW.md`) with per-slide scores, weighted dimension ratings, and 7 priority improvement areas.

## Constraints

- **Hosting**: GitHub Pages (static site)
- **Audience**: Non-technical researchers - content must be approachable
- **Stack**: VitePress + Tailwind CSS v4 + Marp (Vite+Vue, Markdown content, built-in search)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| VitePress + Tailwind CSS v4 | Vite+Vue+Markdown with built-in search. Modern, lightweight. | Good |
| Marp CLI for presentation | Better Markdown-first workflow than Reveal.js. Dark theme, speaker notes. | Good |
| GitHub Pages via GitHub Actions | VitePress builds static output, deployed via actions/deploy-pages. | Good |
| Dark theme with purple/pink/cyan | Playful hackathon vibe, fresh identity not tied to institutional colors. | Good |
| Flat sidebar navigation | Event flow order, simpler for small site. | Good |
| 8-step Git workflow | Full GitHub Flow from fork to merge, self-service with troubleshooting. | Good |
| Marp Vite middleware | VitePress SPA router 404s static HTML; middleware serves it correctly. | Good |
| Resources by journey timeline | Before/During/After event - participants find links when they need them. | Good |

---
*Last updated: 2026-02-17 after v1.1 milestone start*
