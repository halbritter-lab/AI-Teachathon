# Phase 1: Scaffold & Deploy - Context

**Gathered:** 2026-02-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Get a working VitePress + Tailwind CSS v4 site live on GitHub Pages with dark theme, search, navigation, and placeholder pages for all content. No real content — just the infrastructure pipeline and visual foundation.

</domain>

<decisions>
## Implementation Decisions

### Color scheme & theme
- Playful-energetic vibe — hackathon energy, inviting, not intimidating
- Fresh accent palette — not tied to CeRKiD teal or Charite blue. New vibrant colors that give the event its own identity
- Medium dark background (#2d2d3f range) — dark but not pitch, like GitHub dark mode
- No zebra mascot on the site — keep it clean, text-only branding

### Navigation & page structure
- Sidebar follows the event flow: Setup > Agenda > AI Tools > Hands-On > Ideas > Resources
- Flat list in sidebar, no nested groups — ordered by when you'd use each page during the workshop
- Sidebar only — no top navigation bar. Top bar shows site title only
- Reveal.js presentation is NOT in the sidebar — it's a standalone HTML file linked from the Agenda page
- Landing page uses VitePress hero layout with big title, tagline, and CTA buttons (no sidebar on index)

### Site identity & branding
- Site title: "AI-Teachathon | Halbritter Lab"
- Hero tagline: "Learn Git, GitHub & AI Tools — Hands On"
- Text-only — no logo, no icon, no emoji in title
- Footer: lab/institution attribution ("Halbritter Lab · CeRKiD · Charite Berlin") plus GitHub repo link

### Claude's Discretion
- Specific accent color values (within playful-energetic constraint)
- Tailwind CSS configuration approach
- Exact placeholder content in .md files
- Search configuration details
- GitHub Actions workflow specifics
- Favicon design (simple, text-based or generic)

</decisions>

<specifics>
## Specific Ideas

- Hero layout like vitepress.dev itself — full-width hero with title, tagline, action buttons, then sidebar appears on subpages
- Footer should encourage contributions via GitHub link
- Dark theme should feel more "hackathon" than "corporate" — vibrant accents against medium-dark background

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-scaffold-deploy*
*Context gathered: 2026-02-16*
