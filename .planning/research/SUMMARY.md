# Research Summary

**Project:** AI Teachathon Website
**Synthesized:** 2026-02-16

## Key Decision: Technology Stack

Two strong options emerged from research. Both can work, but they optimize for different things.

### Option A: Plain HTML + Tailwind CSS v4 CDN + Reveal.js (Stack researcher recommendation)

**Strengths:**
- Zero build step = zero deployment failures
- Full creative control for modern, polished design
- Tailwind v4 CDN loads with a single script tag
- Claude Code generates HTML+Tailwind extremely well
- No Ruby/Node/npm dependency chain
- Every page is independently testable (open in browser)

**Weaknesses:**
- No built-in search (irrelevant for 8 pages)
- Navigation must be manually built (shared nav via JS include or copy-paste)
- Content written in HTML, not Markdown

### Option B: Jekyll + just-the-docs + Reveal.js standalone (Architecture researcher recommendation)

**Strengths:**
- Built-in sidebar navigation, search, dark mode
- Content in Markdown (easier to read/edit)
- Proven pattern for academic documentation sites
- GitHub Pages has native Jekyll support

**Weaknesses:**
- Build step adds failure surface
- just-the-docs looks functional but visually dated by 2026 standards
- Ruby dependency for local development
- remote_theme can fail silently (documented pitfall)
- Less creative control over layout (sidebar+content layout forced)

### Synthesis Recommendation: Option A (Plain HTML + Tailwind)

Given:
1. User explicitly asked to "rethink" and not assume Jekyll
2. User wants "modern presentation-style" — Tailwind gives full creative freedom
3. Event is TOMORROW — zero-build-step eliminates deployment risk category entirely
4. Only 8 pages — framework overhead not justified
5. Claude Code generates beautiful HTML+Tailwind rapidly

## Content Structure (Consensus)

Both researchers agree on the same page structure and content:

1. **Landing page** — event essentials, 3 CTAs (prepare, agenda, project ideas)
2. **Setup guide** — VS Code, Git, GitHub, platform-specific, verification steps
3. **Agenda** — vertical timeline, 17:00-20:00, color-coded segments
4. **Presentation** — standalone Reveal.js, 8-15 slides, dark theme, one idea per slide
5. **AI Tool Landscape** — 4-level spectrum (chat → IDE → CLI → autonomous), comparison table
6. **Hands-on guide** — step-by-step Git workflow, example AI prompts
7. **Ideas page** — starter project ideas for research, participant-editable via GitHub
8. **Resources** — curated links, post-event reference

## Critical Pitfalls to Watch

1. **Base path**: All links must account for `/AI-Teachathon/` subpath
2. **Deploy early**: Push minimal site within first 30 minutes, iterate from there
3. **GitHub Pages source**: Must be set to "GitHub Actions" in repo settings
4. **Reveal.js CDN**: Pin exact version, no Jekyll front matter on presentation.html
5. **Content level**: Write for researchers, not developers — analogies over jargon
6. **Scope creep**: Define "done" = 8 pages working. Ship MVP first, polish after.

## AI Tool Landscape (Current Feb 2026)

Detailed tool data available in FEATURES.md. Key tools to cover:
- **Level 1 (Chat):** ChatGPT, Claude.ai, Gemini
- **Level 2 (IDE):** GitHub Copilot, Cursor, Windsurf
- **Level 3 (CLI):** Claude Code, Aider, Codex CLI
- **Level 4 (Autonomous):** Copilot Coding Agent, Devin (emerging)

Workshop recommendation: Start with Copilot (free for edu), demo Claude Code live.

## Design Direction

- Dark theme (modern, matches Reveal.js presentation)
- Color palette: deep dark backgrounds, white headings, soft blue-purple accent
- Clean sans-serif typography (Inter or system fonts)
- Medical/kidney warm accent colors for CeRKiD identity
- No clip art, no stock photos, no busy backgrounds
- Professional academic tone — credible but approachable
