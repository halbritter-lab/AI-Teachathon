# Roadmap: AI Teachathon Website

## Milestones

- **v1.0 MVP** - Phases 1-5 (shipped 2026-02-17)
- **v1.1 Presentation Revision** - Phases 6-7 (in progress)

## Phases

<details>
<summary>v1.0 MVP (Phases 1-5) - SHIPPED 2026-02-17</summary>

Phases 1-5 delivered the complete VitePress site with 7 content pages,
32-slide Marp presentation, GitHub Pages deployment, and 13 E2E tests.

</details>

### v1.1 Presentation Revision (In Progress)

**Milestone Goal:** Full revision of the 32-slide Marp presentation based on
expert review (6.25/10 -> 8.5+/10), addressing content gaps, structure,
engagement, learning objectives, visual design, and Marp feature utilization.

**Phase Numbering:**
- Integer phases (6, 7): Planned milestone work
- Decimal phases (6.1, 6.2): Urgent insertions if needed (marked with INSERTED)

- [x] **Phase 6: Structure, Content, and Engagement** - Reorganize sections, add 5 new topics, bookend with learning objectives, add engagement moments, rewrite titles as takeaways
- [ ] **Phase 7: Visual Elements and Marp Features** - Add diagrams, screenshots, and images; apply split layouts, fit directive, scoped styles, and section differentiation

## Phase Details

### Phase 6: Structure, Content, and Engagement

**Goal**: The presentation has a coherent restructured flow with all essential
researcher topics covered, clear learning objectives, audience interaction
moments, and takeaway-driven slide titles.

**Depends on**: Phase 5 (v1.0 complete)

**Requirements**: STRC-01, STRC-02, STRC-03, STRC-04, CONT-01, CONT-02,
CONT-03, CONT-04, CONT-05, OBJ-01, OBJ-02, ENG-01, ENG-02, TITL-01

**Success Criteria** (what must be TRUE):
  1. Part 3 (AI Timeline) no longer exists as a separate section - its content is merged into Part 2, and the presentation has one fewer section break
  2. The presentation includes slides covering private vs public repos, .gitignore, PII management, conventional commits, and semantic versioning - each with content appropriate for non-technical researchers
  3. A "What You'll Learn Today" slide appears early in the deck (after the title) and a "What You Now Know" recap slide appears before the closing CTA
  4. At least 3 engagement prompts exist in speaker notes (show of hands, audience questions, pair discussion) and at least 1 dedicated question slide with large text exists in the deck
  5. Slide titles throughout the deck state takeaways rather than topics (e.g., "Branches Let You Experiment Without Risk" instead of "Branches: Parallel Experiments")

**Plans:** 2 plans

Plans:
- [x] 06-01-PLAN.md - Restructure sections, reorder tools, add 5 essential researcher content slides
- [x] 06-02-PLAN.md - Add learning objectives bookends, engagement prompts, and takeaway slide titles

### Phase 7: Visual Elements and Marp Features

**Goal**: The presentation uses Marp's visual capabilities throughout - split
layouts with diagrams and screenshots, auto-sized section titles, scoped
per-slide styles, and visually differentiated section breaks.

**Depends on**: Phase 6 (content and structure stable)

**Requirements**: VIS-01, VIS-02, VIS-03, VIS-04, VIS-05, MARP-01, MARP-02,
MARP-03, MARP-04

**Success Criteria** (what must be TRUE):
  1. The branches slide uses a split layout with a branch/merge diagram on one side and text on the other
  2. At least 3 slides use Marp `bg right` or `bg left` split layouts with images (branch diagram, AI timeline, workflow diagram, or tool screenshots)
  3. All presentation images are stored in `docs/presentation/images/` and referenced from slides.md with relative paths
  4. Section break slides use `<!-- fit -->` for auto-sized titles and each section break is visually differentiated (unique color, icon, or styling)
  5. At least 2 slides use `<style scoped>` blocks for per-slide adjustments (e.g., larger code blocks, custom spacing)

**Plans:** 3 plans

Plans:
- [ ] 07-01-PLAN.md - Theme utility classes (section colors, code readability, density) and section break restyling with fit directive
- [ ] 07-02-PLAN.md - SVG diagrams (branching, workflow, timeline), split layouts on 3+ slides, scoped styles on 2+ slides
- [ ] 07-03-PLAN.md - Tool screenshot capture (user checkpoint) and embedding in tool category slides

## Progress

**Execution Order:**
Phases execute in numeric order: 6 -> 6.x (if inserted) -> 7

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 6. Structure, Content, and Engagement | v1.1 | 2/2 | ✓ Complete | 2026-02-17 |
| 7. Visual Elements and Marp Features | v1.1 | 0/3 | Not started | - |

---
*Roadmap created: 2026-02-17*
*Last updated: 2026-02-17 - Phase 7 planned (3 plans in 3 waves)*
