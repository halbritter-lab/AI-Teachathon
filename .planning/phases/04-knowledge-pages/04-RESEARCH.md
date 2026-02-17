# Phase 4: Knowledge Pages - Research

**Researched:** 2026-02-17
**Domain:** Educational content writing, AI tool ecosystem (2026), Git workflow pedagogy
**Confidence:** HIGH

## Summary

This research investigated how to create two reference pages for a workshop: (1) an AI tool landscape overview covering the 2023-2026 evolution of coding tools, and (2) a hands-on Git workflow guide for beginners using AI assistants. The primary challenge is presenting current, accurate information about a rapidly evolving tool ecosystem while teaching Git fundamentals to researchers.

The standard approach combines verified pricing data from official sources, official prompting best practices from Claude and Gemini documentation, and established Git workflow patterns adapted for teaching contexts. VitePress provides the necessary markdown extensions (custom containers, collapsible sections, code groups) to create structured educational content.

**Primary recommendation:** Use official documentation as the authoritative source for tool pricing and prompting best practices, structure the hands-on guide using progressive disclosure (collapsible troubleshooting), and verify all tool claims against current (Feb 2026) sources before publication.

## Standard Stack

### Core Content Technologies

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| VitePress | 1.6.4 | Static site generator | Already deployed, supports educational markdown extensions |
| Markdown | GFM + VitePress | Content format | Native to VitePress, accessible to contributors |
| Tailwind CSS | v4 | Styling | Already deployed, enables custom card layouts |

### Supporting Tools

| Tool | Purpose | When to Use |
|------|---------|-------------|
| Custom containers | Callouts (info, tip, warning, danger) | Highlighting important information in guides |
| Details containers | Collapsible troubleshooting sections | Progressive disclosure for error handling |
| Code groups | Multi-language examples | Showing platform-specific commands (Windows/macOS/Linux) |
| Line highlighting | Emphasize specific lines | Drawing attention to key parts of commands |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| VitePress markdown | MDX (React) | More powerful but adds complexity, breaks contributor accessibility |
| Static tables | Interactive filters | Better UX but requires JavaScript, harder to maintain |
| Inline troubleshooting | Separate troubleshooting page | Cleaner main guide but breaks flow, forces context switching |

**Installation:**
Already installed. No additional dependencies needed.

## Architecture Patterns

### Educational Content Structure

**Recommended approach:** Progressive disclosure with inline troubleshooting

```
## Step N: [Action]

[Brief context: what and why]

```bash
# Command to copy-paste
command --flags arguments
```

[1-2 sentence explanation of what the command does]

::: details If something went wrong
**Problem:** [specific error message or symptom]

**Solution:** [concrete fix with commands if applicable]
:::

[Transition sentence: what you accomplished, what's next]
```

**Why this pattern:**
- Copy-paste commands reduce typos for beginners
- Inline troubleshooting keeps users in flow rather than forcing navigation
- Transition sentences provide narrative continuity
- Details containers hide complexity until needed

### Tool Comparison Structure

**Pattern 1: Evolution Timeline**

Show progression over time to demonstrate rapid ecosystem change:

```markdown
## The Evolution of AI Coding Tools

### 2023-2024: Chat Interfaces
Copy-paste between chatbot and editor
- ChatGPT, Claude.ai, Gemini

### 2024-2025: IDE Integration
AI suggestions while you type
- GitHub Copilot, Cursor, Windsurf

### 2025-2026: CLI Agents
AI works in your terminal
- Claude Code, Gemini CLI, Aider

### 2026+: Autonomous Agents
AI builds entire features independently
- Devin, orchestration plugins (GSD)
```

**Pattern 2: Compact Comparison Cards**

For 8-10 tools, use consistent card structure:

```markdown
### [Tool Name]

**Type:** [Chat / IDE / CLI / Autonomous]
**Best for:** [specific use case]
**Cost:** [pricing with tier breakdown]
**What you get:** [2-3 bullet points of capabilities]

[Recommendation badge: "Recommended for researchers" / "Free tier available" / "Student discount"]
```

### Prompting Best Practices Structure

**Pattern: Generic principle → Specific application**

```markdown
## How to Prompt Effectively

### Principle 1: Be Specific
Generic prompt: "Make this better"
Better: "Refactor this function to handle ENSG gene ID format"

### Applied to KidneyQuest
Generic: "Add a jump feature"
Specific: "Add jump mechanic: player presses spacebar, character rises 150px over 300ms with gravity, like Chrome dino game"
```

**Why this pattern:**
- Teaches transferable skill first
- Shows concrete application second
- Learners can apply pattern to their own projects

### Anti-Patterns to Avoid

- **Speculation without verification:** Never state tool capabilities without checking official docs (pricing changes frequently)
- **Overwhelming options:** Don't present 20 tools; curate 8-10 with clear recommendations
- **Platform assumptions:** Always provide Windows/macOS/Linux variations for commands
- **Hidden errors:** Don't wait until end to address troubleshooting; inline it at each step
- **Technical jargon without context:** Define terms first time used (e.g., "repository (or 'repo')")

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Pricing verification | Manual research | Official pricing pages + WebFetch | Pricing changes monthly; manual data goes stale |
| Git command explanations | Custom descriptions | Official Git docs references | Canonical source prevents misinterpretation |
| Tool capabilities | Training data memory | Context7 + official docs | Tool features change post-training cutoff |
| Prompting best practices | Generic advice | Claude/Gemini official docs | Vendors update recommendations for new models |
| Code syntax highlighting | Custom CSS | VitePress Shiki built-in | Already configured, supports 100+ languages |

**Key insight:** The AI tool ecosystem changes so rapidly (monthly updates, new pricing tiers, feature releases) that static research goes stale within weeks. Always link to authoritative sources and verify claims against current documentation (Feb 2026).

## Common Pitfalls

### Pitfall 1: Stale Pricing Information

**What goes wrong:** Tool pricing changes frequently (e.g., Devin dropped from $500/mo to $20/mo in April 2025). Stating outdated prices damages credibility with researcher audience.

**Why it happens:** WebSearch results mix old and new information; blogs from 2024-2025 appear in results but have outdated data.

**How to avoid:**
1. Always check official pricing page directly (WebFetch)
2. Include "as of [date]" qualifier for all pricing claims
3. Cross-reference multiple sources for critical claims
4. Verify student/academic discounts separately (often underdocumented)

**Warning signs:** Search results from 2024-2025, blog posts without publication dates, conflicting prices across sources

### Pitfall 2: Git Workflow Assumptions

**What goes wrong:** Beginners get stuck on simple issues (Git not in PATH, wrong branch, authentication failures) that tutorials skip as "obvious."

**Why it happens:** Tutorial authors forget beginner mental model; they've internalized troubleshooting patterns.

**How to avoid:**
- Test every command on fresh machine (or with beginner)
- Include verification steps after each major action ("Run `git status` to verify")
- Provide platform-specific notes where commands differ
- Add collapsible troubleshooting for most common errors (not in PATH, authentication, merge conflicts)

**Warning signs:** Steps that say "just run X" without explaining output, missing verification commands, no troubleshooting sections

### Pitfall 3: Prompting Advice Disconnected from Official Sources

**What goes wrong:** Generic prompting advice ("be specific") doesn't match vendor recommendations; users miss model-specific patterns (e.g., Claude's XML tags, Gemini's temperature=1.0 default).

**Why it happens:** Training data contains general prompting advice but may miss recent vendor-specific updates (Claude 4.x guidelines, Gemini 3 changes).

**How to avoid:**
- Always reference official documentation (not blogs)
- Link to specific vendor best practice pages
- Include model-specific patterns (Claude: XML structure; Gemini: direct, concise)
- Update when new model versions release (Opus 4.6 adaptive thinking, Gemini 3 verbosity control)

**Warning signs:** Advice that sounds generic ("give context"), not citing official docs, missing model version specifics

### Pitfall 4: Chrome Dino Game Mechanics Assumptions

**What goes wrong:** Stating "participants will build X feature" without understanding HTML5 Canvas complexity; oversimplifying game mechanics leads to unrealistic expectations.

**Why it happens:** Chrome dino game looks simple but involves collision detection, physics, animation loops, sprite rendering.

**How to avoid:**
- Scope KidneyQuest description to what's achievable in 2-hour session
- Focus on learning workflow (Git + AI tools), not perfect game
- Provide fallback if complex features stall: "AI can help scaffold structure even if you don't finish rendering"
- Set expectation: "You'll learn the process more than build a complete game"

**Warning signs:** Promising "build a complete game in 2 hours," not mentioning scaffolding vs. polish tradeoff

### Pitfall 5: Tool Card Overload

**What goes wrong:** Presenting 15-20 tools overwhelms readers; they disengage rather than choose.

**Why it happens:** Comprehensive coverage impulse; wanting to show ecosystem breadth.

**How to avoid:**
- Curate to 8-10 tools max (2-3 per category)
- Add clear recommendation badges ("Best for researchers," "Free tier," "Student discount")
- Provide decision guidance: "If you're a student, start with Copilot (free). If you want CLI, try Gemini (free) or Claude Code (Pro plan)."
- Link to "Resources" page for comprehensive list if needed

**Warning signs:** More than 3 tools per category without clear differentiation, no recommendation guidance

## Code Examples

Verified patterns from official sources and existing setup.md:

### Git Workflow Step (from Atlassian Git Tutorial)

```markdown
## Step 3: Create a Feature Branch

Before making changes, create a new branch. This keeps your work separate from the main codebase until it's ready.

```bash
git checkout -b feature/add-game-instructions
```

This command creates a new branch called `feature/add-game-instructions` and switches to it. The `-b` flag means "create and switch."

**Verify it worked:**
```bash
git branch
```

You should see `* feature/add-game-instructions` (the asterisk shows your current branch).

::: details If something went wrong

**Problem:** Error: "pathspec 'feature/add-game-instructions' did not match any file(s) known to git"

**Solution:** This usually means you're in the wrong directory. Run `pwd` (macOS/Linux) or `cd` (Windows) to see where you are. Navigate to your repository folder first.

**Problem:** Branch name has spaces and Git complains

**Solution:** Branch names can't have spaces. Use hyphens: `feature/add-game-instructions` not `feature/add game instructions`

:::

Next, you'll make changes to files using VS Code and your AI assistant.
```

**Source:** [Atlassian Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

### Claude Prompting Best Practice (from official docs)

```markdown
## Prompting Claude Effectively

Claude responds best to explicit, structured prompts. Here's the pattern:

**Structure your prompt:**
1. **Context:** What are you working on? (Project, language, goal)
2. **Task:** What specific thing do you want done?
3. **Constraints:** Any limitations or requirements?
4. **Output format:** How should the result look?

**Example for KidneyQuest:**

```
I'm building a browser game called KidneyQuest using vanilla JavaScript and HTML5 Canvas. It's a side-scrolling jump game like Chrome's dino game, with a zebra character.

Create a jump mechanic function. When the player presses spacebar:
- Character rises 150px over 300ms
- Gravity brings character back down
- Character can't double-jump (must touch ground first)

Return the function with clear comments explaining each part.
```

**Why this works:**
- Context helps Claude understand constraints (vanilla JS, no frameworks)
- Specific task with measurable criteria (150px, 300ms)
- Clear output request (function with comments)

**Learn more:** [Claude 4.x Prompting Best Practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-4-best-practices)
```

**Source:** [Claude 4 Best Practices (official)](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-4-best-practices)

### Gemini Prompting Best Practice (from official docs)

```markdown
## Prompting Gemini Effectively

Gemini models respond best to direct, concise instructions. Keep it simple:

**Good Gemini prompt:**
```
Add jump physics to the character. Press spacebar to jump 150px, gravity pulls down. Prevent double-jump.
```

**Why this works:**
- Direct statement of goal
- Key constraints in one sentence
- No unnecessary persuasive language

**For Gemini 3 models specifically:**
- Use default temperature (1.0) - don't change it
- Put constraints at the beginning
- Use XML tags or markdown for structure if needed

**Learn more:** [Gemini API Prompting Strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies)
```

**Source:** [Gemini API Prompting Strategies (official)](https://ai.google.dev/gemini-api/docs/prompting-strategies)

### VitePress Custom Container (existing pattern in setup.md)

```markdown
::: info Before You Start
You'll need administrator access on your computer to install some of these tools. If you're using a work laptop with restrictions, ask your IT department for help.
:::

::: tip Optional
Node.js is only needed if you want to try Claude Code during the workshop. You can skip this if you're not sure.
:::

::: details If something went wrong
**Problem:** Command not found

**Solution:** Close and reopen your terminal. New installations need a fresh terminal session.
:::
```

**Source:** Existing setup.md file, pattern from [VitePress Markdown Extensions](https://vitepress.dev/guide/markdown)

### Platform-Specific Commands (from setup.md pattern)

```markdown
### Windows

```bash
# Windows Command Prompt or PowerShell
git clone https://github.com/your-username/AI-Teachathon.git
cd AI-Teachathon
```

### macOS / Linux

```bash
# Terminal
git clone https://github.com/your-username/AI-Teachathon.git
cd AI-Teachathon
```

**Note:** The commands are identical, but Windows users might need to run as Administrator for some operations.
```

## State of the Art

| Old Approach (2023-2024) | Current Approach (2026) | When Changed | Impact |
|--------------------------|-------------------------|--------------|--------|
| Copy-paste chat (ChatGPT web) | CLI agents (Claude Code, Gemini CLI) | Mid-2025 | AI now works in terminal, integrated with Git workflow |
| GitHub Copilot $10/mo | Free tier (2k completions) + student free | Jan 2026 | Accessible to researchers/students |
| Devin $500/mo | Devin Core $20/mo | April 2025 | Autonomous agents now affordable |
| IDE-only AI (Cursor, Windsurf) | Multi-platform (CLI, IDE, web) | 2025-2026 | Same tool across environments |
| Chat-based prompting | Model-specific patterns (Claude XML, Gemini directness) | Late 2025 | Vendor docs now prescriptive |
| Extended thinking budget_tokens | Adaptive thinking + effort param (Claude Opus 4.6) | Dec 2025 | Simplified thinking configuration |
| Prefilled responses | Structured outputs + direct instructions | Claude 4.6+ | Migration needed for Claude 4.6 users |

**Deprecated/outdated:**
- **GitHub Copilot without free tier:** As of Jan 2026, free tier exists (2k completions/month) + student access through Education Pack
- **Claude Code as API-only:** Now available via Pro plan ($20/mo) with ~45 prompts per 5hr window
- **Cursor $40/mo Pro as entry point:** June 2025 pricing change; actual costs can exceed monthly subscription based on usage
- **Extended thinking with budget_tokens:** Claude Opus 4.6 uses adaptive thinking with effort parameter instead
- **Generic prompting advice:** Replaced by model-specific vendor documentation (Claude 4.x, Gemini 3)

## Open Questions

### 1. Exact tool count for landscape section

**What we know:**
- User decided ~8-10 tools
- Should cover 4 evolution levels
- Must include: GitHub Copilot, browser chatbots, Claude Code, Gemini CLI

**What's unclear:**
- Exact breakdown per level (2-3 per level? Or weighted toward recent tools?)
- Whether to include Aider (popular open-source CLI) or focus on tools with web interfaces
- Should Devin be included despite $20/mo cost (expensive for researchers)?

**Recommendation:** Start with 10 tools (2-3 per level), weighted toward free/student-accessible options. Include Aider as "open-source option." Include Devin to show autonomous category but flag cost. Adjust during planning if 10 feels overwhelming.

### 2. KidneyQuest repo creation timing

**What we know:**
- Repo will be created before workshop
- Doesn't exist yet
- Participants use it during "On your own" phase

**What's unclear:**
- Should the guide reference specific issues/starter code?
- How much scaffolding will exist (just README vs. partial game structure)?

**Recommendation:** Write guide with placeholder references: "Pick an issue from the KidneyQuest repository (we'll walk through available issues during the session)." Add specific examples during Phase 5 once repo structure is finalized.

### 3. Depth of troubleshooting coverage

**What we know:**
- Each Git step should have inline troubleshooting
- Collapsible details containers hide complexity

**What's unclear:**
- How deep to go? (E.g., SSH vs. HTTPS authentication, credential managers, firewall issues)
- Platform-specific edge cases (Windows PATH issues, macOS Gatekeeper, Linux permissions)

**Recommendation:** Cover top 2-3 issues per step based on common beginner problems:
- Clone: Authentication (SSH vs. HTTPS quick fix)
- Branch: "Not a git repository" error
- Commit: "Nothing to commit" (forgot `git add`)
- Push: "Rejected" (pull first), authentication
- PR: "No changes" (pushed to wrong branch)

Link to setup.md or external Git troubleshooting for deep dives.

### 4. Prompt example specificity

**What we know:**
- 1 example prompt per workflow step
- Both generic pattern and KidneyQuest application
- Reference Claude 4-block and Gemini directness patterns

**What's unclear:**
- Should examples show full prompts or just structure?
- Include example AI responses or just prompts?

**Recommendation:** Show full prompts (not just structure) so participants can copy-adapt. Skip AI responses (keeps page scannable). Format as code blocks for easy copying.

## Sources

### Primary (HIGH confidence)

- [Claude 4.x Best Practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-4-best-practices) - Official Anthropic docs, verified Feb 2026
- [Gemini API Prompting Strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies) - Official Google docs, current
- [GitHub Copilot Pricing](https://docs.github.com/en/copilot/get-started/plans) - Official GitHub docs, Feb 2026
- [VitePress Markdown Extensions](https://vitepress.dev/guide/markdown) - Official VitePress docs
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials) - Authoritative Git workflow patterns
- [GitHub Docs: Resolving Merge Conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) - Official troubleshooting

### Secondary (MEDIUM confidence)

- [Cursor Pricing Explained](https://www.vantage.sh/blog/cursor-pricing-explained) - Third-party but verified against official Cursor pricing page
- [Windsurf Pricing](https://windsurf.com/pricing) - Official pricing page verified
- [Devin Pricing](https://devin.ai/pricing/) - Official pricing page, includes April 2025 price drop
- [ChatGPT Plans](https://chatgpt.com/pricing) - Official OpenAI pricing for Codex CLI access
- [DigitalOcean Technical Writing Guidelines](https://www.digitalocean.com/community/tutorials/digitalocean-s-technical-writing-guidelines) - Industry best practice for tutorials
- [NN/g Comparison Tables](https://www.nngroup.com/articles/comparison-tables/) - UX research on table design
- [Smashing Magazine Feature Comparison Tables](https://www.smashingmagazine.com/2017/08/designing-perfect-feature-comparison-table/) - Design patterns for comparison

### Tertiary (LOW confidence - marked for validation)

- [Medium: AI Coding Trends 2026](https://medium.com/ai-software-engineer/12-ai-coding-emerging-trends-that-will-dominate-2026-dont-miss-out-dae9f4a76592) - Community perspective on timeline, corroborated by official tool releases
- [MIT Tech Review: AI Coding 2026](https://www.technologyreview.com/2025/12/15/1128352/rise-of-ai-coding-developers-2026/) - Industry analysis, not pricing source
- [Chrome Dino GitHub repos](https://github.com/abhijeetps/Chrome-Dino-Game) - Example implementations for mechanics reference (not authoritative)

## Metadata

**Confidence breakdown:**
- Tool pricing (Feb 2026): HIGH - verified with official pricing pages for all mentioned tools
- Prompting best practices: HIGH - sourced from official Claude and Gemini documentation
- Git workflow patterns: HIGH - based on Atlassian/GitHub official tutorials
- VitePress capabilities: HIGH - official documentation + existing setup.md pattern
- HTML5 Canvas game mechanics: MEDIUM - based on community examples, not official tutorial
- Troubleshooting coverage: MEDIUM - common patterns identified but not exhaustively tested
- Tool ecosystem timeline: MEDIUM - synthesized from multiple sources including official releases and industry analysis

**Research date:** 2026-02-17
**Valid until:** Pricing/tool features: 30 days (tools update monthly); Git workflow patterns: 365 days (stable); VitePress patterns: 180 days (framework stable); Prompting practices: 90 days (vendor docs update with new models)

**Critical verification needs before publication:**
- Re-check all pricing within 1 week of workshop (Feb 2026)
- Verify Claude Code prompt limits (stated as ~45 prompts/5hr but should confirm with official source)
- Test all Git commands on fresh Windows/macOS/Linux environments if possible
- Confirm GitHub Copilot free tier details haven't changed (2k completions confirmed as of Feb 2026)
