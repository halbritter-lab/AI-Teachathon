# Phase 5: Community & Polish - Context

**Gathered:** 2026-02-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Add the ideas page (with project ideas and pain points), resources page (curated links), enable edit-on-GitHub contribution links, and run final QA (cross-links, mobile, presentation). The ideas and resources pages are the last content pages. Polish ensures everything works together before launch.

</domain>

<decisions>
## Implementation Decisions

### Project idea cards
- KidneyQuest remains the "Featured Project" with a prominent section at the top
- 4 additional project ideas listed below as alternatives, presented as brief pitches (title + short paragraph, not structured cards)
- Ideas are based on real participant requests (anonymized):
  1. **Genomic Variant Effect Prediction with AlphaGenome** — Use Google DeepMind's AlphaGenome API to predict how patient variants affect gene expression and chromatin accessibility. Starts from a Colab notebook. Stack: Python, Google Colab, AlphaGenome API.
  2. **Research Data Management Dashboard** — Desktop app with data entry forms, SQLite database, automated analysis, and visual dashboard. Stack: Electron, Vue/Vite, SQLite.
  3. **AI-Assisted Academic Writing Pipeline** — Combine Zotero (references), QuillBot (paraphrasing), and GPTZero (AI detection) into a research writing workflow. Stack: Zotero, QuillBot, GPTZero, markdown editor.
  4. **AI-Powered RNAseq Enrichment Summarizer** — Feed enrichment results to an LLM via API, get plain-language summaries, validate with LLM-as-judge approach. Stack: Python, OpenAI/Anthropic API.

### Pain points section
- Separate "What Could AI Help With?" section on the ideas page
- Research-general pain points (not nephrology-specific): literature review, data cleaning, writing, code debugging, etc.
- Purpose: inspire participants who don't have a project idea yet

### Resource organization
- Pattern B: organized by journey timeline — Before the Event / During the Event / After the Event
- Just links with titles, no descriptions per link
- Include project-specific links in an "Explore Further" section (AlphaGenome docs, Electron/Vue tutorials, QuillBot, etc.)

### Contribution invitation
- VitePress built-in `editLink` enabled globally on all pages
- Brief one-liner on the ideas page: "Have a project idea? Add it here." with context that this is what GitHub contribution looks like
- No dedicated "Contribute" section with instructions — keep it light

### Content tone
- Same casual, friendly tone as the rest of the site ("colleague over coffee")
- Use "you" and contractions
- No jargon without inline definitions

### QA / Polish
- Use Playwright for cross-link testing and responsiveness checks
- Test all device sizes (not just 375px)
- Verify presentation works at 1024x768 fullscreen
- Check all internal and external links

### Claude's Discretion
- Exact pain points to list (choose 5-6 common research pain points)
- Number of resource links per section
- How to handle the KidneyQuest featured section layout
- Playwright test configuration and device list

</decisions>

<specifics>
## Specific Ideas

- Project ideas come from real participant emails (anonymized) — they reflect actual workshop attendee interests
- AlphaGenome has official Colab notebooks at alphagenomedocs.com/colabs/ — link to these
- The data management dashboard participant specifically mentioned Electron + SQLite + Vue/Vite stack
- The writing pipeline participant specifically mentioned Zotero + QuillBot + GPTZero combination
- The RNAseq summarizer should cover: initial prompt design, hallucination avoidance, LLM-as-judge validation, API usage

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 05-community-polish*
*Context gathered: 2026-02-17*
