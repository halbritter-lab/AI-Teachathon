# Phase 7: Visual Elements and Marp Features - Context

**Gathered:** 2026-02-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Add visual richness to the presentation using Marp's capabilities: split layouts with diagrams and screenshots, auto-sized section titles, scoped per-slide styles, and visually differentiated section breaks. Content and structure are stable from Phase 6 - this phase only adds visual layers.

</domain>

<decisions>
## Implementation Decisions

### Diagram & image style
- Clean vector/SVG style for all diagrams - polished, minimal line art, professional and modern
- Mix of diagrams (for concepts like branching, workflows) and real tool screenshots (for GitHub UI, AI tools)
- Diagram colors must match the existing Gaia invert theme palette - integrated, not clashing
- All diagrams created as SVG files committed to the repo - version controlled, editable, no external tools needed
- Screenshots will be captured separately (user available to help with captures as needed)

### Split layout strategy
- 50/50 even split ratio for all split layouts - text and image carry equal weight
- Image placement (left vs right): Claude's discretion based on researched presentation design best practices and community standards
- Split layouts for both concept slides (branching, Git workflow) and tool demo slides (GitHub, AI tools) - mix of both types
- User's intuition leans toward no inline images on non-split slides; Claude to validate against best practices. Default: split layouts for visuals, text-only for everything else

### Section break look & feel
- Bold and distinct section breaks - large text, color shift, clearly signals "new topic starting"
- Unique color per section - each major section (Git basics, GitHub, AI tools) gets its own color identity
- Title + subtitle format on section breaks - large auto-sized section title with a one-line subtitle describing what's coming
- Section color on break slide only - content slides within a section return to the normal theme (no carry-through)

### Scoped styling approach
- Both code readability tweaks (larger code blocks, monospace emphasis) AND content density adjustments (custom spacing/font for crowded slides), plus any additional per-slide needs Claude identifies
- Scoped style visibility: Claude's discretion based on researched best practices - whether tweaks should be invisible or intentionally contrasting
- Claude to audit the deck and identify which slides are candidates for scoped styling (no specific slides flagged by user)
- Extend the Marp theme CSS with reusable utility classes; reserve scoped style blocks for truly one-off per-slide cases

### Claude's Discretion
- Exact image placement per split slide (left vs right) - research best practices
- Whether scoped styles should be visible or invisible per slide - research best practices
- Which specific slides need scoped styling - audit the deck
- Whether inline images add value on non-split slides - validate against best practices (user leans no)
- Specific SVG diagram designs and compositions
- Screenshot selection and cropping

</decisions>

<specifics>
## Specific Ideas

- User wants Claude to act as a senior designer and lecturer when making visual decisions - research community standards, best practices, and professional presentation design patterns using web search
- User is available to help capture tool screenshots if needed
- Diagrams should be SVG code committed to the repo, not exported from external tools

</specifics>

<deferred>
## Deferred Ideas

None - discussion stayed within phase scope

</deferred>

---

*Phase: 07-visual-elements-and-marp-features*
*Context gathered: 2026-02-17*
