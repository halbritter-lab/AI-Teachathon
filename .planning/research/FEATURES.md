# Feature Landscape

**Domain:** Academic workshop / teachathon website for AI-assisted coding
**Context:** Halbritter Lab (CeRKiD, Charite Berlin), nephrology/genetics researchers
**Audience:** Researchers, clinicians, lab members with varying technical backgrounds
**Event:** Feb 17, 2026, 17:00, ~3 hours
**Researched:** 2026-02-16

---

## Table Stakes

Features users expect from a workshop/teaching website. Missing any of these and the site feels incomplete or unprofessional.

### 1. Clear Landing Page with Event Essentials

| Aspect | Recommendation |
|--------|---------------|
| **Why expected** | Participants need to immediately understand what, when, where, and why |
| **Complexity** | Low |
| **Confidence** | HIGH |

**Specific content:**
- Event title: "AI Teachathon" with subtitle "Halbritter Lab Workshop on AI-Assisted Coding, Git & GitHub"
- Date/time/location block (prominent, not buried): Feb 17, 2026, 17:00
- One-paragraph description: what participants will learn and why it matters for their research
- Three clear calls to action: "Prepare" (setup page), "See the agenda" (timeline), "Our project" (KidneyQuest)
- Lab branding: CeRKiD / Charite Berlin affiliation, zebra mascot reference

**Inspiration:** The Carpentries workshop template (carpentries.org) uses a simple, scannable landing page with date, location, instructors, schedule, and setup link all visible without scrolling. This is the gold standard for academic workshop sites.

---

### 2. Pre-Event Setup Instructions

| Aspect | Recommendation |
|--------|---------------|
| **Why expected** | Participants must arrive with tools installed; troubleshooting during the event wastes precious time |
| **Complexity** | Low-Medium |
| **Confidence** | HIGH |

**Specific content for each tool:**

**VS Code:**
- Download link (platform-detected or all three: Windows, macOS, Linux)
- Why VS Code specifically (free, extensions, AI tool integration)
- 2-3 recommended extensions to pre-install: Python, GitLens, GitHub Copilot

**Git:**
- Platform-specific installation (Windows: Git for Windows with Git Bash; macOS: `xcode-select --install` or Homebrew; Linux: `apt install git`)
- Post-install configuration block:
  ```
  git config --global user.name "Your Name"
  git config --global user.email "your.email@charite.de"
  ```
- Verification command: `git --version`

**GitHub Account:**
- Link to github.com/signup
- Instruction: "Send your GitHub username to [organizer] so we can add you to the repository"
- Mention GitHub Education pack for free Copilot access (students/educators)

**Node.js (optional):**
- Only needed for Claude Code CLI
- Link to nodejs.org LTS download
- Mark as "optional -- install if you want to try Claude Code"

**Best practices for setup pages (from Carpentries and workshop research):**
- Platform-specific tabs or sections (not one-size-fits-all)
- Verification steps after each install ("you should see this output")
- Troubleshooting accordion/details sections for common issues
- Encouraging tone: "If you get stuck, do not worry -- we will help at the start of the event"
- Completion checklist at the bottom with markdown checkboxes
- Time estimate: "This should take 15-20 minutes"

---

### 3. Event Agenda / Timeline

| Aspect | Recommendation |
|--------|---------------|
| **Why expected** | Participants need to know the structure, pace, and what to expect |
| **Complexity** | Low |
| **Confidence** | HIGH |

**Recommended structure for a 3-hour evening workshop (17:00-20:00):**

```
17:00 - 17:10  Welcome & Setup Check (10 min)
               Settle in, verify everyone has tools installed, quick fixes

17:10 - 17:40  Part 1: "Why & What" Presentation (30 min)
               The version control problem, Git/GitHub basics, AI revolution in coding
               [Link to Reveal.js presentation]

17:40 - 18:00  Part 2: AI Tool Landscape (20 min)
               What tools exist, how they work, what we'll use today
               [Link to tool landscape page]

18:00 - 18:10  Break (10 min)
               Stretch, coffee, questions

18:10 - 20:00  Part 3: Hands-On Session (110 min)
               KidneyQuest collaborative coding
               - 18:10 - 18:25  Clone repo, pick an issue, create a branch
               - 18:25 - 19:30  Code with AI assistance
               - 19:30 - 19:50  Submit pull requests, review each other's work
               - 19:50 - 20:00  Wrap-up, next steps, feedback

~20:00         Social time (optional)
```

**Design recommendations:**
- Use a vertical timeline format (not a table) -- more scannable and visually engaging
- Color-code segments: presentation (blue), hands-on (green), breaks (gray)
- Show duration for each segment
- Link each segment to its relevant page/resource
- Mark current segment during the live event (if using JS to detect time)

**Research basis:** Workshop design best practices recommend varying activities every 20-30 minutes to prevent attention loss (Community Tool Box, KU). The 3-hour format benefits from one meaningful break and a shift from passive (presentation) to active (hands-on) learning.

---

### 4. Presentation Slides (Web-Based)

| Aspect | Recommendation |
|--------|---------------|
| **Why expected** | The introductory presentation is the "hook" -- it must engage and not feel like a lecture |
| **Complexity** | Medium |
| **Confidence** | HIGH |

**Recommended approach: Reveal.js standalone HTML file**

Why Reveal.js over alternatives:
- No build step required (loads from CDN)
- Works as a raw HTML file alongside Jekyll -- no front matter needed
- Dark theme options (black, night) match the site aesthetic
- Fragment animations for progressive reveal of concepts
- Speaker notes for the presenter
- Keyboard navigation (arrows, spacebar)
- PDF export capability

**Slide content structure (from research on technical presentation best practices):**

1. **Title slide** -- "Why & What" with CeRKiD branding, zebra mascot
2. **The version control problem** -- the "final_v3_REALLY_final.docx" joke (universally relatable for researchers)
3. **What is Git** -- visual metaphor: timeline of snapshots, not diffs
4. **What is GitHub** -- repos, issues, pull requests explained with research analogies (repo = lab notebook, issue = experiment question, PR = peer review)
5. **Why version control matters MORE with AI** -- AI generates code fast, tracking what it generates is critical
6. **The AI revolution in coding** -- brief 2022-2026 timeline showing rapid acceleration
7. **What we will do today** -- preview of KidneyQuest hands-on session
8. **Let us begin** -- transition slide back to main site

**Design principles (from 2025 presentation research):**
- One concept per slide
- Large text (minimum 30pt equivalent)
- Minimum 4.5:1 contrast ratio
- Dark background with light text for code
- Syntax-highlighted code blocks (Reveal.js supports highlight.js)
- Progressive reveal with fragments (builds understanding step by step)
- Maximum 8-10 slides for a 30-minute segment

---

### 5. Navigation and Site Structure

| Aspect | Recommendation |
|--------|---------------|
| **Why expected** | Participants must find content quickly during a live event -- fumbling with navigation wastes time |
| **Complexity** | Low |
| **Confidence** | HIGH |

**Recommended nav order:**
1. Home (landing page)
2. Setup (pre-event)
3. Agenda (day-of reference)
4. Presentation (link to Reveal.js, or opens in new tab)
5. AI Tool Landscape (reference documentation)
6. Hands-On Guide (step-by-step for the coding session)
7. Ideas (participant-editable)
8. Resources (links and references)

**Requirements:**
- Search functionality (just-the-docs provides this out of the box)
- Sidebar navigation always visible
- "Back to top" or sticky header for long pages
- External links clearly marked (GitHub repo, KidneyQuest)
- "Edit this page" link on each page (for ideas page especially)

---

### 6. Resources and References Page

| Aspect | Recommendation |
|--------|---------------|
| **Why expected** | Participants need post-event references; the workshop is a starting point, not the entire journey |
| **Complexity** | Low |
| **Confidence** | HIGH |

**Specific content sections:**

- **Git & GitHub:** Git cheat sheet (PDF link), GitHub Skills interactive courses, "Oh Shit, Git!?" quick fixes, Pro Git book (free online)
- **AI Coding Tools:** GitHub Copilot docs, Claude Code docs, Cursor getting started, DeepLearning.AI courses
- **For Our Research:** Links to bioinformatics-relevant AI applications, variant annotation tools
- **Community:** Lab Slack/Teams channel, GitHub Discussions in the repo
- **Recommended reading:** 2-3 articles on AI in scientific computing

---

## Differentiators

Features that elevate the site from "adequate" to "excellent." Not strictly expected, but create a notably better experience.

### 7. AI Tool Landscape Page (Current as of Early 2026)

| Aspect | Recommendation |
|--------|---------------|
| **Value proposition** | This is the unique content -- a curated, researcher-friendly overview of a fast-moving space |
| **Complexity** | Medium |
| **Confidence** | HIGH (verified with multiple 2026 sources) |

**Content structure: "The AI Coding Tool Spectrum"**

Frame tools by autonomy level (this resonates with researchers who understand spectra):

**Level 1 -- Chat Interfaces (Browser-based)**
- ChatGPT (OpenAI), Claude.ai (Anthropic), Gemini (Google)
- Use case: Ask coding questions, generate snippets, explain code
- Analogy: "Like asking a knowledgeable colleague"
- Access: Free tiers available, browser-based

**Level 2 -- IDE-Integrated Assistants (Autocomplete + Chat)**
- GitHub Copilot: inline suggestions in VS Code, supports multiple models (GPT-4o, Claude Sonnet, Gemini), agent mode for multi-file changes. $10/month individual, free for students/educators via GitHub Education
- Cursor: VS Code fork with deep AI integration, Composer mode for multi-file edits, agent mode with browser testing. $20/month Pro
- Windsurf (formerly Codeium): Cascade agentic assistant, free tier with your own API keys, Tab + Supercomplete autocomplete
- Sourcegraph Cody: strong codebase understanding, choose-your-model approach, VS Code and JetBrains support

**Level 3 -- CLI Agentic Tools (Terminal-based)**
- Claude Code (Anthropic): agentic terminal tool, 200K token context, reads entire codebases, plans and executes multi-step changes, Git-native workflow, VS Code/JetBrains extensions. Token-based pricing
- Aider: open-source CLI pair programmer, auto-commits with descriptive messages, supports 100+ languages, works with any LLM provider. Free (token costs only)
- OpenAI Codex CLI: open-source Rust-based terminal agent, interactive TUI, multi-agent support, MCP integration. Free (token costs only)

**Level 4 -- Autonomous Agents (Future / Emerging)**
- GitHub Copilot Coding Agent ("Project Padawan"): assign issues, AI completes entire tasks autonomously
- Devin AI: fully autonomous software engineer agent
- Note: These are emerging and not yet mainstream for daily research use

**Comparison table for the page:**

| Tool | Type | Best For | Cost | Our Pick |
|------|------|----------|------|----------|
| GitHub Copilot | IDE extension | Daily coding in VS Code | Free (edu) / $10/mo | Yes -- start here |
| Cursor | Full IDE | Deep AI integration | $20/mo | Try if interested |
| Claude Code | Terminal agent | Complex refactoring | Token-based | Demo in workshop |
| Aider | Terminal agent | Open-source, Git-native | Token-based | Alternative to Claude Code |
| ChatGPT / Claude.ai | Browser chat | Quick questions | Free tier | Always available |

**5 Practical Tips for Working with AI Coding Tools:**
1. Be specific in your prompts -- "Add a score counter to the top-right of the canvas using HTML5 Canvas fillText" beats "add scoring"
2. Always review AI-generated code before committing -- AI makes plausible-looking mistakes
3. Use Git branches -- if AI generates something broken, you can discard the branch
4. Start with small tasks -- one function, one feature, one bug fix at a time
5. Learn to read code, not just generate it -- AI accelerates you only if you understand what it produces

---

### 8. Hands-On Session Guide with Step-by-Step Workflow

| Aspect | Recommendation |
|--------|---------------|
| **Value proposition** | Transforms abstract Git/AI knowledge into muscle memory through guided practice |
| **Complexity** | Medium |
| **Confidence** | HIGH |

**Content structure:**

**What is KidneyQuest:**
- A simple HTML5 Canvas browser game (no build tools, no framework -- just HTML/JS)
- A zebra (CeRKiD mascot) runs through a kidney-tubule landscape collecting rare disease gene items
- Why a game: visual, immediate feedback, fun, low-stakes mistakes
- Link to the live game and the repository

**Step-by-step workflow (the core teaching content):**

```
Step 1: Clone the repository
  $ git clone https://github.com/berntpopp/KidneyQuest.git
  $ cd KidneyQuest

Step 2: Open in VS Code
  $ code .

Step 3: Pick an issue from GitHub Issues
  (list of 12 pre-created issues with difficulty labels)

Step 4: Create a branch
  $ git checkout -b feature/add-score-display

Step 5: Code with AI assistance
  - Use Copilot for inline suggestions
  - Use Claude Code for complex features
  - Example prompts provided for each issue

Step 6: Test locally
  - Open index.html in browser
  - Verify your feature works

Step 7: Commit and push
  $ git add .
  $ git commit -m "Add score display to top-right corner"
  $ git push -u origin feature/add-score-display

Step 8: Create a pull request
  - Go to GitHub, click "Compare & pull request"
  - Describe what you changed and why

Step 9: Code review and merge
  - Review a teammate's PR
  - Merge when approved
```

**Example AI prompts for each issue (crucial for non-technical audience):**
- "Add scrolling background": "Write JavaScript to scroll a kidney-tubule background pattern from right to left on an HTML5 Canvas. The pattern should tile seamlessly."
- "Add gene collectible items": "Add randomly spawning collectible items to the canvas game. Items should be labeled with gene names: PKD1, PKD2, UMOD, COL4A5, HNF1B, NPHP1. They should appear at random positions and the player should collect them by touching."
- "Add score display": "Add a score counter to the top-right of the HTML5 Canvas. Increment the score by 10 when the player collects a gene item. Use white text with a dark shadow for readability."

---

### 9. Participant-Editable Ideas Page

| Aspect | Recommendation |
|--------|---------------|
| **Value proposition** | Extends the workshop beyond 3 hours; creates a living document of research-relevant AI project ideas |
| **Complexity** | Low |
| **Confidence** | MEDIUM |

**Content structure:**

- Brief intro explaining that anyone can edit this page via GitHub (link to "edit this page on GitHub" URL)
- Alternative: create GitHub Issues in the repo for discussion-style ideas

**Starter sections:**
- "Project Ideas" with 3-4 seeds:
  - Automate variant annotation pipeline with AI-generated scripts
  - Build a patient phenotype parser using NLP
  - Create a lab website (generated with AI)
  - Batch-rename and organize sequencing data files

- "Research Pain Points" (things AI could help with):
  - Converting between data formats (VCF, BED, FASTA)
  - Generating boilerplate analysis scripts
  - Writing documentation for existing code
  - Creating figures for publications

- Template entry people can copy-paste to add their own

---

### 10. Professional Visual Design Matching Academic Context

| Aspect | Recommendation |
|--------|---------------|
| **Value proposition** | Credibility signal -- a polished site signals that the content is worth participants' time |
| **Complexity** | Low-Medium |
| **Confidence** | HIGH |

**Design recommendations:**

- Use just-the-docs dark theme as base (matches Reveal.js dark presentation)
- Accent color: kidney/medical-themed -- warm coral/pink (#E07A5F) or CeRKiD brand color
- Zebra motif: subtle stripes or zebra icon in header/footer (not overwhelming)
- Clean typography: system fonts or well-known sans-serif (Inter, Source Sans)
- Code blocks: syntax-highlighted with a distinct background
- Footer: "Halbritter Lab Nephrogenetik / CeRKiD -- Charite Berlin"
- Favicon: zebra icon or CeRKiD logo

**What NOT to do:**
- No clip art or stock photos
- No busy backgrounds
- No animations that distract from content
- No rainbow gradients -- this is an academic site, not a startup landing page

---

### 11. Search Functionality

| Aspect | Recommendation |
|--------|---------------|
| **Value proposition** | During the live event, participants can quickly find specific instructions |
| **Complexity** | Low (built into just-the-docs) |
| **Confidence** | HIGH |

just-the-docs provides client-side search out of the box with `search_enabled: true`. This indexes all page content and provides instant results. No backend needed.

---

## Anti-Features

Features to explicitly NOT build. These are common in workshop/hackathon sites but wrong for this specific context.

### Anti-Feature 1: Registration System / Login

| Aspect | Detail |
|--------|--------|
| **Why avoid** | Only ~15-20 lab members attending; registration is handled via email/lab communication |
| **What people build** | Google Forms, Eventbrite integration, custom sign-up |
| **What to do instead** | Put "Contact [organizer email] to RSVP" on the landing page |

### Anti-Feature 2: Backend-Dependent Interactive Features

| Aspect | Detail |
|--------|--------|
| **Why avoid** | GitHub Pages is static-only; adding a backend adds deployment complexity for zero benefit at this scale |
| **What people build** | Live polls, real-time leaderboards, collaborative editors |
| **What to do instead** | Use GitHub Issues for async collaboration, use simple client-side JS for any interactivity (quizzes, checklists with localStorage) |

### Anti-Feature 3: Video Hosting / Streaming

| Aspect | Detail |
|--------|--------|
| **Why avoid** | This is an in-person event; video adds storage/bandwidth costs and is not needed for a 3-hour workshop |
| **What people build** | Embedded YouTube streams, video recordings |
| **What to do instead** | If recording is desired, upload to YouTube separately and link from resources page post-event |

### Anti-Feature 4: Complex Multi-Page Navigation with Nested Hierarchies

| Aspect | Detail |
|--------|--------|
| **Why avoid** | Only 7-8 pages; deep nesting makes content harder to find during a live event |
| **What people build** | Categorized documentation with 3+ levels of hierarchy |
| **What to do instead** | Flat navigation: one level, 7-8 items, all visible in the sidebar |

### Anti-Feature 5: Internationalization (i18n)

| Aspect | Detail |
|--------|--------|
| **Why avoid** | The lab communicates in English; adding German doubles the content maintenance burden for one event |
| **What people build** | Language switchers, translated content |
| **What to do instead** | Write everything in English. Use simple vocabulary appropriate for non-native speakers (the audience is international researchers) |

### Anti-Feature 6: Gamification / Badges / Points Systems

| Aspect | Detail |
|--------|--------|
| **Why avoid** | Researchers are intrinsically motivated by learning and relevance to their work; extrinsic rewards feel patronizing for PhD-level adults |
| **What people build** | Achievement badges, completion certificates, leaderboards |
| **What to do instead** | The hands-on project IS the motivation. Seeing your pull request merged into a real game is more rewarding than any badge |

### Anti-Feature 7: Slides-in-a-PDF

| Aspect | Detail |
|--------|--------|
| **Why avoid** | Static PDFs feel dated, cannot be navigated smoothly during a live presentation, and lack progressive reveal |
| **What people build** | PowerPoint exported to PDF, embedded in an iframe |
| **What to do instead** | Use Reveal.js for a native web presentation experience with animations, speaker notes, and keyboard navigation |

### Anti-Feature 8: Chatbot / AI Assistant Embedded in the Site

| Aspect | Detail |
|--------|--------|
| **Why avoid** | Requires API keys, costs money per query, adds complexity, and the whole point is teaching people to use THEIR OWN AI tools |
| **What people build** | Embedded ChatGPT widget, custom chatbot |
| **What to do instead** | Teach participants to use Claude.ai, ChatGPT, and Copilot directly -- which they can use forever, not just during the event |

---

## Feature Dependencies

```
Setup Instructions  (must be ready FIRST -- sent to participants before event)
     |
     v
Landing Page + Agenda  (ready before event for reference)
     |
     v
Presentation (Reveal.js)  (used during Part 1 of the event)
     |
     v
AI Tool Landscape Page  (used during Part 2)
     |
     v
Hands-On Guide  (used during Part 3)
     |
     v
Ideas Page + Resources  (used during and after the event)
```

**Critical path:** Setup instructions must be sent to participants at least 2-3 days before the event (by Feb 14-15). Everything else can be finalized closer to the event, but setup page is the hard deadline.

---

## MVP Recommendation

For the Feb 17 deadline, prioritize in this order:

### Must Ship (blocks the event):
1. **Setup page** -- participants need this days before the event
2. **Landing page** -- the entry point; event essentials
3. **Agenda page** -- so participants know the structure
4. **Presentation (Reveal.js)** -- the opening 30-minute segment
5. **Hands-on guide** -- the core 2-hour activity
6. **AI tool landscape** -- the 20-minute segment content

### Should Ship (enhances the event):
7. **Resources page** -- post-event reference value
8. **Ideas page** -- participant engagement beyond the event
9. **Custom CSS / visual polish** -- professional appearance

### Can Defer (nice-to-have):
10. Progressive enhancement: time-aware agenda highlighting
11. Client-side completion tracking on setup page (localStorage)
12. Print-friendly stylesheet for handouts

---

## Content Depth Guidance by Page

| Page | Depth | Rationale |
|------|-------|-----------|
| Landing | Shallow -- scan in 30 seconds | First impression, action-oriented |
| Setup | Deep -- step-by-step with screenshots | Must be self-service; no help available at home |
| Agenda | Shallow -- visual timeline | Quick reference during event |
| Presentation | Visual -- minimal text per slide | Presentation, not documentation |
| Tool Landscape | Medium -- overview not tutorial | Awareness building, not mastery |
| Hands-On | Deep -- every command spelled out | Participants follow along live; copy-paste commands |
| Ideas | Shallow -- template-driven | Participants fill in the depth themselves |
| Resources | Shallow -- curated links with one-liners | Springboard for self-directed learning |

---

## AI Tool Landscape: Detailed Current State (Early 2026)

This section provides the raw research for the AI Tool Landscape page content.

### The Big Picture (February 2026)

The AI coding tool ecosystem has consolidated around a few major players while simultaneously fragmenting into specialized tiers. Key trends:

1. **Multi-model access is standard.** Every major tool now lets users switch between models (Claude, GPT, Gemini). The tool is the interface; the model is swappable.

2. **Agent mode is the new frontier.** All major IDE tools (Copilot, Cursor, Windsurf) now have "agent mode" where the AI can autonomously plan, edit multiple files, run terminal commands, and test results.

3. **CLI agents are maturing.** Claude Code, Aider, and Codex CLI are powerful terminal-based agents that appeal to experienced developers but have a steeper learning curve.

4. **Free access paths exist.** GitHub Copilot is free for educators/students. Aider and Codex CLI are open-source (pay only for API tokens). ChatGPT and Claude.ai have free tiers for browser-based use.

### Tool Details (Verified February 2026)

**GitHub Copilot** (Confidence: HIGH)
- Owned by GitHub/Microsoft
- Works inside VS Code, JetBrains, Neovim, Eclipse, Xcode
- Features: inline code suggestions, chat, agent mode (multi-file), next edit suggestions
- Models: GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro (user-selectable)
- Agent mode: autonomously edits files, runs terminal commands, self-heals errors
- Coding agent ("Project Padawan"): assign GitHub Issues and Copilot works on them autonomously
- Pricing: Free for verified students/teachers; $10/month individual; $19/month business
- Best for: daily coding, especially for teams using GitHub
- Source: [GitHub Copilot Features](https://docs.github.com/en/copilot/get-started/features)

**Cursor** (Confidence: HIGH)
- Built by Anysphere, Inc.
- Full IDE (VS Code fork) -- 100% compatible with VS Code extensions
- Features: Tab autocomplete (Supermaven-powered), Composer mode (multi-file), Agent mode (autonomous with browser testing), "@" context mentions for files/folders/docs
- Models: Claude 4.5 Sonnet, GPT-5.2, Gemini 3 Flash, proprietary models (user-selectable)
- Agent mode: accesses terminal, launches Chromium for testing web apps, delegates to sub-agents
- Privacy Mode: zero data retention
- Pricing: Free tier; $20/month Pro; $40/month Business
- Best for: developers who want deep AI integration in every part of their workflow
- Source: [Cursor AI Review](https://prismic.io/blog/cursor-ai), [Cursor Review NxCode](https://www.nxcode.io/resources/news/cursor-review-2026)

**Claude Code** (Confidence: HIGH)
- Built by Anthropic
- Terminal/CLI-based agentic coding tool
- Features: 200K token context, reads entire codebases, plans/executes/verifies multi-step changes, Git-native workflow, memory system, multi-agent collaboration (research preview)
- Runs in terminal; also has VS Code, Cursor, Windsurf, and JetBrains extensions
- Session portability: start on web, continue in terminal, hand off to desktop app
- Pricing: token-based (no subscription; pay per usage via Anthropic API)
- Best for: complex refactoring, large codebase understanding, issue-to-PR pipelines
- Source: [Claude Code Overview](https://code.claude.com/docs/en/overview), [Claude Code GitHub](https://github.com/anthropics/claude-code)

**Windsurf** (Confidence: HIGH)
- Built by Codeium (rebranded to Windsurf)
- Full IDE with AI integration
- Features: Cascade (agentic assistant with deep repo context), Tab + Supercomplete, in-editor web previews, Netlify deployment integration
- Models: GPT-5.1, Gemini 3 Pro, Claude models (user-selectable)
- Pricing: Free tier; $15/month Pro
- Best for: budget-conscious developers wanting a full AI IDE experience
- Source: [Windsurf Editor](https://windsurf.com/editor)

**Aider** (Confidence: HIGH)
- Open-source CLI tool (by Paul Gauthier / Aider-AI)
- Terminal-based AI pair programming
- Features: automatic Git commits with descriptive messages, voice coding, supports 100+ languages, works with any LLM provider (OpenAI, Anthropic, Google, local via Ollama), auto-runs linters and tests
- Pricing: free (open-source); pay only for API tokens
- Best for: command-line developers who want Git-native AI assistance without vendor lock-in
- Source: [Aider Chat](https://aider.chat/), [Aider GitHub](https://github.com/Aider-AI/aider)

**OpenAI Codex CLI** (Confidence: HIGH)
- Built by OpenAI, open-source (Rust-based)
- Terminal agent with full-screen TUI
- Features: interactive terminal interface, MCP protocol integration, multi-agent support (parallel agents on same repo), code review by separate agent, web search
- Models: GPT-5-Codex (optimized for coding)
- Pricing: free (open-source); pay for API tokens
- Best for: OpenAI-ecosystem developers wanting a terminal-native agent
- Source: [Codex CLI](https://developers.openai.com/codex/cli/), [Codex GitHub](https://github.com/openai/codex)

**Sourcegraph Cody** (Confidence: MEDIUM)
- Built by Sourcegraph
- VS Code and JetBrains extension + web app
- Features: code search, chat, inline edits, batch changes, documentation generation, choose-your-LLM
- Sourcegraph also offers "Amp" -- a separate agentic coding tool
- Enterprise-focused: SOC 2, GDPR, SSO, BYOK
- Pricing: free tier; enterprise plans
- Best for: large codebases with need for deep code search and enterprise compliance
- Source: [Sourcegraph Cody](https://sourcegraph.com/cody)

### Recommendation for Workshop Participants

For researchers new to AI coding tools, the recommended starting path is:

1. **Start with ChatGPT / Claude.ai** -- zero setup, immediate value, learn to write good prompts
2. **Install GitHub Copilot in VS Code** -- free for educators, inline suggestions while coding
3. **Try Claude Code or Aider** (optional) -- for participants comfortable with the terminal
4. **Explore Cursor** (optional) -- for participants who want the deepest AI integration

This progression matches the "crawl, walk, run" learning model and ensures nobody is overwhelmed.

---

## Workshop Content Structure Best Practices

Research-backed recommendations for the 3-hour format.

### From the Community Tool Box (KU)
- Vary activities every 20-30 minutes to prevent attention loss
- Prepare 1.5x more material than needed (have backup content ready)
- Allow ample time for reflection and discussion between activities
- Position the facilitator as a guide, not an authority figure
- Overprepare rather than underpreparate

### From SERC/Carleton (Effective Workshop Design)
- Use backward design: define what participants should know and be able to do, then design activities
- Balance theory with practical application
- Include time for participants to plan how they will use what they learned
- Use active learning strategies: think-pair-share, gallery walks, case studies

### From Software Carpentry / The Carpentries
- Pre-event setup is critical -- most troubleshooting happens before the workshop
- Use platform-specific installation instructions (not one-size-fits-all)
- Include verification steps ("you should see this output")
- Provide a schedule page that is customizable and clear
- The Carpentries workshop template is the gold standard for academic workshop sites

### For This Specific Audience (Researchers, Evening Event)
- Keep the presentation short (30 minutes max) -- people are tired after a workday
- Get to hands-on as fast as possible -- researchers learn by doing
- Use research analogies: repo = lab notebook, issue = experiment question, PR = peer review, branch = "trying something without messing up the main data"
- Make errors safe and reversible -- Git branches are the safety net
- End with concrete next steps: "Here is how you use this in your actual research starting tomorrow"

---

## Real-World Inspirations

| Site | What They Do Well | Relevant For |
|------|-------------------|-------------|
| [The Carpentries Workshop Template](https://github.com/carpentries/workshop-template) | Clean structure, setup instructions, schedule, learner-focused | Overall site structure |
| [Software Carpentry Lessons](https://software-carpentry.org/lessons/) | Step-by-step Git and Shell lessons for non-programmers | Hands-on guide format |
| [GitHub Skills](https://skills.github.com/) | Interactive, hands-on learning with real repos | Hands-on session concept |
| [Reveal.js Demo](https://revealjs.com/) | Modern web-based presentations with code highlighting | Presentation approach |
| [UMich Bioinformatics Workshops](https://medresearch.umich.edu/office-research/about-office-research/biomedical-research-core-facilities/bioinformatics-core/bioinformatics-workshops-training) | Academic medical context, reproducible computing | Audience alignment |

---

## Sources

### Teaching & Workshop Design
- [Community Tool Box: Conducting a Workshop](https://ctb.ku.edu/en/table-of-contents/structure/training-and-technical-assistance/workshops/main) -- Confidence: HIGH
- [SERC: Principles of Effective Workshop Design](https://serc.carleton.edu/sage2yc/workshop_design.html) -- Confidence: HIGH
- [The Carpentries Workshop Template](https://github.com/carpentries/workshop-template) -- Confidence: HIGH
- [Carpentries Workshop Checklists](https://docs.carpentries.org/topic_folders/hosts_instructors/hosts_instructors_checklist.html) -- Confidence: HIGH

### AI Tool Landscape
- [Pragmatic Coders: Best AI Tools for Coding 2026](https://www.pragmaticcoders.com/resources/ai-developer-tools) -- Confidence: HIGH
- [Seedium: AI Coding Assistants Comparison 2026](https://seedium.io/blog/comparison-of-best-ai-coding-assistants/) -- Confidence: MEDIUM
- [GitHub Copilot Features](https://docs.github.com/en/copilot/get-started/features) -- Confidence: HIGH
- [Claude Code Overview](https://code.claude.com/docs/en/overview) -- Confidence: HIGH
- [Claude Code GitHub](https://github.com/anthropics/claude-code) -- Confidence: HIGH
- [Cursor AI Review 2026](https://prismic.io/blog/cursor-ai) -- Confidence: MEDIUM
- [Windsurf Editor](https://windsurf.com/editor) -- Confidence: HIGH
- [Aider](https://aider.chat/) -- Confidence: HIGH
- [OpenAI Codex CLI](https://developers.openai.com/codex/cli/) -- Confidence: HIGH
- [Sourcegraph Cody](https://sourcegraph.com/cody) -- Confidence: MEDIUM

### Presentation Design
- [SlidesAI: Presentation Design Rules](https://www.slidesai.io/blog/presentation-design-rules) -- Confidence: MEDIUM
- [Reveal.js](https://revealjs.com/) -- Confidence: HIGH

### Schedule/Timeline Design
- [Social Tables: Event Agenda Design Tips](https://www.socialtables.com/blog/event-planning/event-agenda-design/) -- Confidence: MEDIUM
- [CodyHouse: Schedule Template CSS](https://codyhouse.co/gem/schedule-template) -- Confidence: MEDIUM
