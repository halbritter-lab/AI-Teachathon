# Phase 4: Knowledge Pages - Context

**Gathered:** 2026-02-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Write two reference pages used during the workshop: (1) AI tool landscape overview for the 20-min segment, and (2) hands-on coding guide for the 2-hour session. These pages are read and referenced live during the event.

</domain>

<decisions>
## Implementation Decisions

### Tool spectrum & landscape
- 4-level evolution spectrum: Copy-paste chat (2023-24) -> IDE-integrated (2024-25) -> CLI agents (2025-26) -> Autonomous agents / orchestration plugins (emerging)
- Comprehensive landscape: ~8-10 tools as compact cards with icon, 2-3 bullet points, recommendation tag
- Highlighted/recommended tools: GitHub Copilot, browser chatbots (ChatGPT/Claude.ai/Gemini), Claude Code, Gemini CLI
- Each card includes: type, best for, cost/month, and what you get
- Pricing must be accurate as of Feb 2026:
  - Claude Code: available on Pro plan ($20/mo, ~45 prompts/5hr) - Max $100-200/mo for heavy use
  - Codex CLI: available with ChatGPT Plus ($20/mo) - temporarily free tier too
  - Gemini CLI: free with Google account
  - GitHub Copilot: free for students (GitHub Education); Pro $10/mo; free tier (2k completions)
  - Cursor: free tier; Pro $20/mo
  - Windsurf: free tier; Pro $15/mo
- Level 4 (autonomous) includes orchestration plugins like GSD alongside tools like Devin and plan-mode features

### Hands-on guide structure
- Two-phase approach: (1) "Follow along" using the AI-Teachathon repo itself, (2) "On your own" graduating to KidneyQuest or personal repos
- Full GitHub Flow: Clone -> Branch -> Edit -> Stage -> Commit -> Push -> Open PR -> Review -> Merge
- Each step: copy-paste command block + 1-2 sentences explaining what it does and why
- Inline collapsible troubleshooting tips after each step ("If something went wrong")
- Platform-specific notes where commands differ (Windows vs macOS/Linux)
- Continuous flow pacing - participants work at their own pace, instructors float around

### AI prompt examples
- Both workflow prompts (for Git steps) and project-building prompts (for KidneyQuest phase)
- Teach generic pattern first, then show KidneyQuest-specific application
- 1 well-crafted example prompt per workflow step
- Dedicated "How to prompt effectively" section teaching key principles:
  - Be specific about what you want
  - Give context (project, language, goal)
  - Specify the output format
  - Iterate on results
- Reference Claude best practices (4-block pattern: Instructions/Context/Task/Output format)
- Reference Gemini best practices (direct, concise, one-sentence tasks)

### KidneyQuest framing
- Minimal context introduction: "KidneyQuest is a browser game starring the CeRKiD zebra. Here's what we'll build."
- CeRKiD = Center for Rare Kidney Diseases at Charite (Halbritter Lab); zebra = rare disease mascot
- Chrome-dino-style jump-and-run side-scroller in a kidney-themed world
- Tech stack: vanilla HTML5 Canvas - zero dependencies, just open index.html
- Repo will be created before the workshop (doesn't exist yet - use placeholder references in guide)
- Participants build with AI coding tools during the session

### Claude's Discretion
- Exact number and selection of tools for the landscape cards (~8-10)
- Visual layout of the spectrum diagram
- Specific troubleshooting scenarios to include per Git step
- How to structure the "How to prompt effectively" section
- Depth of KidneyQuest game description

</decisions>

<specifics>
## Specific Ideas

- Tool spectrum should show evolution over time (2023->2026), not just categories - participants should see how fast this field moves
- "Like the Chrome dino game but with a zebra" - the game reference for KidneyQuest's style
- Pricing is important for researcher audience - they need to know what's free, what's student-discounted, what costs real money
- The hands-on guide starts with this repo (AI-Teachathon) so participants work on something they've already seen on the website
- Prompting tips should reference official Claude and Gemini documentation best practices (2025-2026 era)

</specifics>

<deferred>
## Deferred Ideas

None - discussion stayed within phase scope

</deferred>

---

*Phase: 04-knowledge-pages*
*Context gathered: 2026-02-17*
