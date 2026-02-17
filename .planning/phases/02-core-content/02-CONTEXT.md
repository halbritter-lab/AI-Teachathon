# Phase 2: Core Content - Context

**Gathered:** 2026-02-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Write the three most critical pages: landing page, setup guide, and agenda. These are what participants see first and must be self-service. Landing page is the entry point, setup guide prepares them before the event, agenda tells them what to expect. Content creation only - no new site features or infrastructure.

</domain>

<decisions>
## Implementation Decisions

### Landing page design
- Event info first in hero - big date/time/location up top, description below. Practical, get-to-the-point.
- Three CTAs as large button cards - side-by-side cards with icon, title, and short description. Prominent and visual.
- Minimal visuals - text and icons only. Clean typographic layout, simple SVG icons for CTAs. No hero images or illustrations.
- Medium page length - hero + CTAs + a brief "What to expect" section below, then footer. Not single-screen, but not long either.
- CeRKiD / Charité / Halbritter Lab branding in footer per LAND-03.

### Setup guide structure
- All platforms visible with headings - Windows, macOS, Linux instructions listed under clear headings. Nothing hidden behind tabs.
- Link-and-verify approach - link to official installer, then a verify command. Minimal hand-holding, no screenshot-level detail.
- Verification as command output table - "Run this" → "Expect this" format. Quick self-test, scannable.
- Clean path only - no troubleshooting sections. If stuck, ask at the event.

### Agenda presentation
- Vertical timeline visual - dots/lines connecting segments, polished look showing flow.
- Title + one-liner per segment - segment name and a brief sentence. Not verbose.
- No hard breaks - the event is open and informal. People can interact and ask questions throughout. Timeline should reflect this relaxed flow, not rigid slots.
- Approximate time ranges - e.g., "~17:30" or "17:00–17:30" to signal flexibility.

### Content voice & audience
- Mixed group audience - some have basic coding experience, some don't. Explain core concepts but don't over-simplify.
- Friendly and casual tone - like a colleague explaining over coffee. Contractions, "you", light touches. "Don't worry if this seems confusing."
- No research analogies - explain things directly rather than mapping to lab concepts. Analogies can confuse if they don't map perfectly.
- English only - international research group, English is the working language.

### Claude's Discretion
- Exact icon choices for CTA cards
- Spacing and typography details
- Vertical timeline CSS implementation
- How to word the "What to expect" section
- Exact segment descriptions for the agenda

</decisions>

<specifics>
## Specific Ideas

- Landing page should feel practical and direct - researchers want to know when, where, what
- Setup guide is link → verify, not hand-holding - respects participants' intelligence
- Agenda should communicate that this is a relaxed, interactive event, not a rigid lecture series
- Tone: "Don't worry if this seems confusing" energy throughout

</specifics>

<deferred>
## Deferred Ideas

None - discussion stayed within phase scope

</deferred>

---

*Phase: 02-core-content*
*Context gathered: 2026-02-16*
