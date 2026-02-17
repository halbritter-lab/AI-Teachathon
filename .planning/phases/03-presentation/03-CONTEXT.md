# Phase 3: Presentation - Context

**Gathered:** 2026-02-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the slide deck for the ~30-minute "Why & What" opening segment of the AI Teachathon workshop. Covers version control concepts, Git/GitHub basics, why VCS matters with AI, the AI tool landscape overview, and a preview of the hands-on session. The separate tool-landscape page (Phase 4) serves as the deeper reference; this presentation is the live talk.

</domain>

<decisions>
## Implementation Decisions

### Slide framework
- Use Marp (not Reveal.js) - changed from PRES-01 requirement
- Integrate with VitePress build pipeline rather than standalone HTML
- Marp generates HTML from Markdown, consistent with existing start.md prototype

### Narrative arc & flow
- Opening: combine the "final_v3_REALLY_final.docx" filename joke with a framing that Git is the key to working successfully with AI and managing projects/codebases
- Emphasis: dual focus on Git basics (commits, branches, pull requests - the essentials) and AI + VCS synergy. Keep concepts simple, don't overcomplicate
- Tool landscape: included in the presentation itself (3-4 slides), not kept separate. Show the spectrum (chat → IDE sidebar → CLI agent), emphasize participants can choose their preferred tool. The separate tool-landscape page is the detailed reference with costs, products, history
- Closing: preview KidneyQuest - show what they'll build, the workflow (clone, branch, code with AI, PR), get people excited for the hands-on

### Visual style
- Generic dark academic look - no CeRKiD-specific branding (reusable for other audiences)
- Teal/cyan accent colors on dark background
- Minimal diagrams only - simple flow diagrams, arrows, boxes. No photos, no illustrations, no icons
- One idea per slide, large text

### Tone & audience
- Casual and encouraging - like a lab meeting, not a lecture. "This is easier than it looks"
- Standard English - audience reads papers in English, no need to simplify
- Assume audience has heard of Git but never used it - skip "Git exists" but explain what commits/branches/PRs are
- Light research analogies only - 1-2 quick comparisons (repo = lab notebook, branch = parallel experiment), then use real terms. Don't overdo it

### Slide content
- Target ~25 slides (increased from 15-20 to accommodate tool landscape section)
- Version control problem: filename joke + real consequences ("What if you need to reproduce results from 6 months ago?")
- Git/GitHub basics: commits, branches, pull requests - the minimum needed for the hands-on
- AI revolution timeline: brief, 2022-2026 only (ChatGPT launch → Copilot → Claude Code → now). 1-2 slides
- Tool landscape in presentation: spectrum overview + "choose your tool" slide (chat-based, VS Code sidebar, CLI). Participants pick their preference
- KidneyQuest preview: show the game concept, the zebra, the workflow they'll follow

### Speaker notes
- Minimal notes - key reminders only, the presenter knows the material
- No detailed talking points or timing hints

### Claude's Discretion
- Exact slide ordering within sections
- Fragment animation choices
- Diagram layouts and styling details
- How to handle keyboard navigation (Marp's built-in controls)
- Exact wording of analogies
- How to integrate the "back to course" link

</decisions>

<specifics>
## Specific Ideas

- Opening hook mixes the filename joke with a framing about Git being the key to successful AI-assisted work
- The tool landscape slides should make clear that participants choose their own tool - chat, sidebar, or CLI - no single "right" answer
- The existing `.planning/start.md` is a Marp prototype with some content that can be referenced for structure
- AI timeline should show how fast things moved (emphasize acceleration, not exhaustive history)

</specifics>

<deferred>
## Deferred Ideas

- Detailed tool comparison with costs and product evolution - belongs in Phase 4 (tool-landscape page)

</deferred>

---

*Phase: 03-presentation*
*Context gathered: 2026-02-16*
