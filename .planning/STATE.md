# State

## Current Position

Phase: 3 of 5 (Presentation)
Plan: 2 of 2 in phase (checkpoint review in progress)
Status: In progress
Last activity: 2026-02-17 — 03-02 slides written, checkpoint fixes applied (theme, 404, emojis, fragments)

Progress: [████████░░] 46% (6/13 plans complete across all phases)

## Project Reference

See: .planning/PROJECT.md (updated 2026-02-16)

**Core value:** Participants arrive prepared and leave with practical knowledge
**Current focus:** Phase 3 in progress — Slide deck written (32 slides), checkpoint fixes applied, awaiting final approval

## What's Been Built

- VitePress 1.6.4 + Tailwind CSS v4 (CSS-first, no config files)
- Dark theme with purple/pink/cyan gradient
- Landing page (docs/index.md) with event info hero, three CTA feature cards, What to Expect section
- Complete setup guide (docs/setup.md) with platform-specific instructions and verification checklist
- Agenda timeline (docs/agenda.md) with 6 event segments and navigation links
- Reusable Timeline.vue component with dark/light mode support
- Prominent CSS card styling with borders and hover effects
- Sidebar navigation in event flow order
- GitHub Actions deployment workflow (.github/workflows/deploy.yml)
- Modern dev server config (auto-open, HMR overlay, lastUpdated, metaChunk)
- Makefile with build/lint/format/check targets
- Prettier + markdownlint-cli2 for code quality
- Marp CLI 4.2.3 with custom dark theme (teal accents on dark background)
- Presentation build pipeline integrated into npm and Make workflows
- 32-slide presentation covering full workshop narrative arc
- Custom Vite middleware to serve presentation.html (VitePress SPA router workaround)
- Redirect page (docs/slides.md) for sidebar navigation to presentation
- Emojis removed from homepage feature cards for professional tone

## Decisions

| ID | Phase | Decision | Rationale | Date |
|----|-------|----------|-----------|------|
| color-scheme | 01-01 | Purple (#7c3aed) primary with pink-purple-cyan gradient | Playful-energetic hackathon vibe, fresh identity not tied to institutional colors | 2026-02-16 |
| nav-structure | 01-01 | Sidebar-only navigation, flat list following event flow | Simpler for small site, natural reading order for event schedule | 2026-02-16 |
| tailwind-integration | 01-01 | Tailwind v4 CSS-first via @tailwindcss/vite plugin | Modern approach, no config files needed, cleaner project structure | 2026-02-16 |
| dx-tooling | 01-02 | Makefile + Prettier + markdownlint-cli2 | Best-practice DX: consistent formatting, markdown quality, single `make check` command | 2026-02-16 |
| dev-config | 01-02 | Auto-open, HMR overlay, lastUpdated, metaChunk | Modern Vite best practices for dev experience and build performance | 2026-02-16 |
| landing-structure | 02-01 | VitePress layout: home with hero and features frontmatter | Leverages framework capabilities, keeps implementation simple | 2026-02-16 |
| event-info-placement | 02-01 | Event date/time/location in hero tagline field | Makes critical event details immediately visible above the fold | 2026-02-16 |
| icon-strategy | 02-01 | Emoji icons instead of icon library | Avoid dependency for just 3 icons, cleaner dependency tree | 2026-02-16 |
| card-styling | 02-01 | CSS-only hover effects for feature cards | Prominent appearance without JavaScript or animation libraries | 2026-02-16 |
| content-tone | 02-01 | Friendly, casual tone ("like a colleague explaining over coffee") | Use "you" and contractions, no research analogies, reduces intimidation | 2026-02-16 |
| link-and-verify | 02-02 | Official download link + verify command pattern for setup instructions | Self-service approach — users validate their own setup without screenshots | 2026-02-16 |
| platform-visibility | 02-02 | Use H3 headings for Windows/macOS/Linux (not tabs) | All platforms visible at once for easier scanning | 2026-02-16 |
| content-voice | 02-02 | Friendly and casual tone with brief inline jargon definitions | Reduces intimidation for non-technical participants | 2026-02-16 |
| timeline-styling | 02-03 | VitePress CSS variables for theme compatibility | Ensures Timeline works in both light and dark modes without hardcoded colors | 2026-02-16 |
| component-registration | 02-03 | Global component registration via theme enhanceApp | Allows Timeline to be used in markdown without imports | 2026-02-16 |
| marp-theme-base | 03-01 | Extend Gaia invert theme | Gaia provides professional baseline, invert gives dark mode, custom vars add project identity | 2026-02-16 |
| theme-colors | 03-01 | Dark background (#1a1a1a) with teal accents (#02c797) | Matches site's dark aesthetic, teal differentiates from purple site branding | 2026-02-16 |
| build-coordination | 03-01 | Run marp before vitepress in docs:build | Presentation HTML must exist before VitePress copies public/ directory | 2026-02-16 |
| lint-exclusion | 03-01 | Exclude docs/presentation/ from markdownlint | Marp slides have different markdown conventions (multiple H1s, special directives) | 2026-02-16 |
| no-fragments | 03-02 | Use `-` bullets instead of `*` (no fragment animations) | `*` hides content until clicked — looks broken in static view, unprofessional | 2026-02-17 |
| theme-selector | 03-02 | Use `section` selector instead of `:root.invert` in Marp CSS | Marp renders in SVG foreignObject, `:root.invert` never matches | 2026-02-17 |
| presentation-routing | 03-02 | Vite middleware + redirect page for presentation.html | VitePress SPA router 404s static HTML from public/ (known issue #360) | 2026-02-17 |
| no-emojis-homepage | 03-02 | Remove emoji icons from index.md feature cards | User feedback: emojis look unprofessional | 2026-02-17 |

## Blockers & Concerns

None

## Session Continuity

Last session: 2026-02-17
Stopped at: 03-02 checkpoint review — fixes applied, awaiting final approval
Resume file: None
