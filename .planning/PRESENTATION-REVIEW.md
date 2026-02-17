# AI-Teachathon Presentation Review

**Date:** 2026-02-17
**Reviewer perspective:** Senior UI/UX designer, copywriter, senior academic lecturer
**Framework:** PLOS "Ten Simple Rules" + AWSM (Applied Weighted Slide Metric) + Cognitive Load Theory + HKUST/Cornell academic rubrics
**Method:** Playwright automated capture of all 28 slides at 1920x1080, source analysis of `docs/presentation/slides.md` and `docs/.vitepress/theme/marp-theme.css`
**Sources:** See Appendix B for full bibliography

**Rating scale:** 1-3 Poor | 4-5 Below average | 6 Acceptable | 7 Good | 8 Very good | 9 Excellent | 10 Outstanding

---

## Presentation Structure Overview

| Part | Slides | Content | Duration (est.) |
|------|--------|---------|-----------------|
| Opening Hook | 1-4 | Title, filename chaos, better way, consequences | ~4 min |
| Part 1: Git Basics | 5-11 | Repos, commits, messages, branches, PRs, Git vs GitHub | ~7 min |
| Part 2: VC + AI | 12-14 | AI speed, safe experimentation | ~3 min |
| Part 3: AI Timeline | 15-16 | 2022-2026 acceleration | ~2 min |
| Part 4: Tool Landscape | 17-23 | Chat/IDE/CLI categories, tool choice, resources | ~7 min |
| Part 5: Hands-On | 24-32 | KidneyQuest, 5-step workflow, closing CTA | ~7 min |
| **Total** | **32 slides** | | **~30 min** |

---

## Per-Slide Ratings

### Opening Hook (Slides 1-4)

**Slide 1 - Title: "Git, GitHub and AI Tools"** | Score: 7.4/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 8 |
| Text Economy | 9 |
| Visual Effectiveness | 5 |
| Readability | 8 |
| Title as Takeaway | 7 |

- (+) Clean, minimal, date and event name present
- (-) No visual hook whatsoever - plain text on dark background
- (-) Subtitle "AI-Teachathon | Halbritter Lab / CeRKiD" is organizational, not a hook
- Improvement: Add a compelling subtitle/tagline ("Learn the tools that are changing how researchers code") or a simple visual element

**Slide 2 - "We've All Been Here"** | Score: 8.0/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 9 |
| Text Economy | 8 |
| Visual Effectiveness | 7 |
| Readability | 8 |
| Title as Takeaway | 8 |

- (+) Outstanding opener. The escalating filename pattern IS the visual - the audience immediately recognizes themselves
- (+) Empathetic title builds rapport with non-technical audience
- (+) Speaker notes guide the narrative perfectly
- Improvement: Could format as a mock file explorer/directory listing for slightly more visual impact

**Slide 3 - "There's a Better Way"** | Score: 6.6/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 7 |
| Text Economy | 7 |
| Visual Effectiveness | 4 |
| Readability | 8 |
| Title as Takeaway | 7 |

- (-) Three bullets making related but distinct claims - competing for attention
- (-) Pure bullet text, no visual
- (-) Title is vague - "a better way" is generic
- Improvement: Make the title the takeaway: "Version Control Unlocks AI's Potential". Consider merging with slide 4.

**Slide 4 - "Real Consequences"** | Score: 6.4/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 8 |
| Text Economy | 6 |
| Visual Effectiveness | 4 |
| Readability | 7 |
| Title as Takeaway | 7 |

- (+) Scenario-based teaching is pedagogically strong
- (-) Text-heavy: scenario + 3 questions + 2 conclusions = too much for one slide
- (-) The "Without/With" payoff at the bottom gets buried
- Improvement: Split into two slides - scenario/questions on one, payoff comparison on the next. Or use a two-column layout.

### Part 1: Git Basics (Slides 5-11)

**Slide 5 - Section Break: "Part 1: Git Basics"** | Score: 8.6/10
- (+) Clear signposting; `lead` class centers text properly
- (-) All 5 section breaks are visually identical - no differentiation
- Improvement: Add a subtle visual cue per section (icon, gradient shift, or illustration)

**Slide 6 - "What is a Repository?"** | Score: 6.0/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 7 |
| Text Economy | 6 |
| Visual Effectiveness | 4 |
| Readability | 7 |
| Title as Takeaway | 6 |

- (+) "Lab notebook for your code" is a good analogy
- (-) Title is a topic label, not a takeaway. Better: "A Repository Tracks Your Project's Entire History"
- (-) No visual representation of a repo. A folder diagram or simple illustration would transform this slide.
- (-) The `.git` directory mention is rendered in code style but could be more prominent

**Slide 7 - "Commits: Snapshots of Your Project"** | Score: 6.4/10

- (+) "Save points in a game" analogy is excellent
- (-) No timeline or checkpoint visualization - the analogy demands a visual
- Improvement: Simple horizontal timeline with numbered checkpoints

**Slide 8 - "Why Commit Messages Matter"** | Score: 6.6/10

- (+) Good/bad example contrast is an effective teaching technique
- (-) 5+ text elements compete for attention
- Improvement: Make the bad/good examples larger and more visually contrasted. Reduce the 3 bullets below to 1 sentence.

**Slide 9 - "Branches: Parallel Experiments"** | Score: 6.4/10

- (+) Branch names in code style provide some visual differentiation
- (-) **This is the single slide that most needs a diagram.** A branching tree visualization would make the concept instantly graspable.
- Improvement: Add a simple branch diagram using Marp's image capabilities or ASCII art

**Slide 10 - "Pull Requests: Proposing Changes"** | Score: 5.6/10

- (-) Most text-heavy slide in the deck: 3 + 3 bullets + closing sentence = 7 text elements
- (-) Two distinct sections (context + process) should be two slides
- (-) No visual of what a PR looks like on GitHub
- Improvement: Split into two slides. Add a screenshot of a GitHub PR interface.

**Slide 11 - "Git vs GitHub"** | Score: 6.6/10

- (+) Clear two-section comparison
- (-) No visual differentiation between the two concepts
- Improvement: Side-by-side with icons (laptop/local vs cloud/web) or a Venn diagram

### Part 2: Why Version Control Matters with AI (Slides 12-14)

**Slide 12 - Section Break** | Score: 8.6/10

**Slide 13 - "AI Generates Code Fast"** | Score: 6.2/10

- (+) Makes the case for why VC matters in the AI age
- (-) Two 3-bullet lists = 6 text elements, no visual
- Improvement: Show a before/after of a `git diff` to make the point concrete

**Slide 14 - "Experiment Freely, Fail Safely"** | Score: 7.4/10

- (+) **Best title in the entire deck** - captures the core insight perfectly
- (+) "Git + AI = you can be bold" is a memorable punchline
- (+) Code-style `git reset` provides visual variety
- This slide demonstrates what good slide design looks like: clear message, memorable takeaway

### Part 3: The AI Revolution Timeline (Slides 15-16)

**Slide 15 - Section Break** | Score: 8.6/10

**Slide 16 - "2022-2026: Rapid Acceleration"** | Score: 6.8/10

- (+) Accurately captures the pace of change
- (-) 5 bullet points of dates is the least engaging way to present temporal data
- (-) A visual timeline would be far more effective and memorable
- (-) This entire "Part" is one content slide - doesn't justify being a section
- Improvement: Use a visual timeline graphic. Consider merging this section into Part 2 or Part 4.

### Part 4: The Tool Landscape (Slides 17-23)

**Slide 17 - Section Break** | Score: 8.6/10

**Slide 18 - "The Spectrum of AI Coding Tools"** | Score: 7.0/10

- (+) Clean three-category framework
- (-) No visual spectrum (low autonomy -> high autonomy)
- Improvement: Add a visual continuum/spectrum bar

**Slides 19-21 - Chat / IDE Sidebar / CLI Agent Tools** | Score: 6.0/10 each

- (-) Three near-identical slides in a row creates visual monotony
- (-) "Examples + Good for + Limitation/Benefit/Tradeoff" template repeats without variation
- (-) No screenshots of actual tool interfaces
- (-) No visual differentiation between categories
- Improvement: Show one real screenshot per tool. Or combine into a single comparison table slide.

**Slide 22 - "Choose Your Tool"** | Score: 7.0/10

- (+) Permission-giving message reduces anxiety in non-technical audience
- (+) The repetitive "X is fine" structure is a nice rhetorical device
- (-) Still text-only

**Slide 23 - "Where to Learn More"** | Score: 7.0/10

- (+) Clickable link to course site
- (+) Good bridge between presentation and self-study resources
- (-) Could include a QR code for easy mobile access

### Part 5: What We'll Do Today (Slides 24-32)

**Slide 24 - Section Break** | Score: 8.6/10

**Slide 25 - "KidneyQuest: The Project"** | Score: 6.8/10

- (+) Clear project description
- (-) No screenshot or mock of the game - visual preview would generate excitement
- (-) "CeRKiD zebra collects genes" is evocative but unillustrated
- Improvement: Add a game screenshot or conceptual sketch

**Slide 26 - "The Workflow You'll Follow"** | Score: 7.6/10

- (+) Clean 5-step numbered list with concise descriptions
- (+) "This is easier than it looks" is reassuring for beginners
- (-) Could use step icons for visual rhythm
- This is the best-structured content slide in the deck.

**Slides 27-31 - Steps 1-5** | Score: 8.0/10 average

- (+) Very minimal - one command + one explanation each
- (+) Code blocks are well-formatted and readable
- (-) Almost too sparse - large empty areas waste screen real estate
- (-) Five slides with nearly identical sparse formatting creates monotone pacing
- (-) Step 3 ("Code with AI") is the most important step but gets the same minimal treatment as "Clone the Repo"
- Improvement: Steps 1-2 could be combined. Step 3 deserves more depth (example prompt, expected result).

**Slide 32 - "Let's Get Started!"** | Score: 7.0/10

- (+) Clear CTA with course site URL
- (-) No summary of what was just taught
- (-) No learning objectives revisited
- (-) Ends abruptly without synthesis
- Improvement: Add a "What you now know" recap before the CTA, or at minimum a QR code for the URL

---

## Overall Dimension Ratings

### 1. Content Accuracy & Depth: 6/10 (weight: 20%)

**Strengths:**
- All technical content is accurate and current (2026 tools correctly listed)
- Appropriate complexity for non-technical researchers
- Good contextual framing (reproducibility, collaboration, experimentation)
- Speaker notes complement visible content well

**Weaknesses:**
- No mention of Git installation prerequisites or GitHub account setup
- Staging area concept is skipped (changes go straight to commits)
- Part 3 (AI Timeline) is surface-level - one slide for a whole "Part"
- Tool landscape descriptions are generic - no unique insights or recommendations
- No discussion of AI limitations, hallucinations, or critical review of AI output

**Missing essential topics for researchers:**
- **Private vs public repositories** - pros/cons of each, when to use which (critical for research with unpublished data or patient-adjacent work)
- **Conventional Commits** - the structured commit message format (`feat:`, `fix:`, `docs:`, etc.) that the project itself follows. Slide 8 shows good/bad messages but doesn't teach the convention
- **Semantic versioning** - `MAJOR.MINOR.PATCH` and what it means for reproducibility (researchers need to cite specific software versions)
- **PII management** - how to avoid accidentally committing patient data, credentials, API keys, or other sensitive information to a repository (especially critical for medical/clinical research audiences)
- **.gitignore** - what it is, why it exists, and what belongs in it: large files (datasets, images), binary files (compiled code, PDFs), environment files (.env), IDE configs, OS artifacts. This is essential knowledge before the hands-on session where participants will create repos

### 2. Didactic Flow & Structure: 7/10 (weight: 20%)

**Strengths:**
- Excellent opening hook (filename chaos) that builds on universal experience
- Clear 5-part structure with consistent section breaks
- Progressive disclosure: familiar problem -> solution -> context -> tools -> practice
- Speaker notes create a cohesive narrative arc

**Weaknesses:**
- **Front-loads theory heavily**: Parts 1-4 = 23 slides of pure theory before any practice in Part 5
- **Unbalanced sections**: Part 2 has 2 content slides, Part 3 has 1, Part 1 has 6 - the "Part" label sets equal expectations
- **No interleaving of theory and practice**: Concepts are never immediately applied
- **No summary/recap** before hands-on transition - the shift is abrupt
- **Steps 3-5 are underdeveloped**: The most important parts (coding with AI, opening a PR, reviewing) get less explanation than branches or commit messages
- **Missing synthesis**: No "here's what you just learned" moment

### 3. Visual Design Quality: 5/10 (weight: 15%)

**Strengths:**
- Consistent dark theme with teal (#02c797) accent
- Consistent typography (clear hierarchy: headings, body, code)
- Clean Marp theme extends Gaia Invert appropriately
- Code blocks and inline code are well-styled

**Weaknesses:**
- **Zero diagrams, illustrations, or screenshots across all 32 slides**
- Every slide is text-only (bullets, bold, code blocks)
- No visual variety - the same layout pattern repeats for 30 minutes
- Section breaks are identical - no visual differentiation between parts
- Three tool category slides (19-21) are cookie-cutter repetitive
- Color palette is monochromatic (teal + white + gray only)
- Marp's image capabilities (`bg`, `w:`, split layouts) are completely unused
- Large amounts of dead space on sparse slides (Steps 1-5) while dense slides are overcrowded

### 4. Audience Calibration: 8/10 (weight: 15%)

**Strengths:**
- Excellent for non-technical researchers - meets them where they are
- "Lab notebook" and "parallel experiments" analogies are well-chosen
- "Save points in a game" is universally understood
- "You are the pilot. AI is the copilot" is memorable and empowering
- "We've All Been Here" opener creates immediate rapport
- No unnecessary jargon; technical terms are introduced gradually

**Weaknesses:**
- No explicit acknowledgment of different skill levels in the audience
- Assumes all audience members are familiar with the command line
- No guidance on what to do if you get stuck during hands-on

### 5. Engagement & Interactivity: 4/10 (weight: 10%)

**Strengths:**
- Opening filename slide creates a laugh/recognition moment
- Speaker notes contain conversational asides
- "You are the pilot" metaphor is engaging

**Weaknesses:**
- **No questions posed to the audience** at any point
- No polls, show-of-hands, or turn-to-your-neighbor prompts
- No reflection pauses
- No humor or surprise beyond the opening filename joke
- Pure lecture format for ~30 minutes with no audience participation
- No "try this now" micro-exercises between theory sections
- Monotone energy level - every slide has the same pacing

### 6. Clarity of Learning Objectives: 5/10 (weight: 10%)

**Strengths:**
- Part 5 clearly outlines the 5-step workflow to follow
- The 5-part structure implicitly communicates scope

**Weaknesses:**
- **No explicit learning objectives** ("By the end of this talk, you'll be able to...")
- No recap/summary slide before hands-on transition
- Objectives are never articulated or revisited
- No "check your understanding" moments
- Audience leaves without a clear mental model of what they learned vs. what they'll learn by doing

### 7. Technical Execution: 8/10 (weight: 10%)

**Strengths:**
- Marp directives used correctly (`theme`, `paginate`, `class: lead/invert`)
- Speaker notes on every substantive slide
- Header/footer consistent across all slides
- Pagination works and renders cleanly
- HTML export is clean and functional
- Code blocks render with proper highlighting and border

**Weaknesses:**
- No background images or Marp `bg` directive used anywhere
- No split-layout slides (`bg right`, `bg left`) despite Marp supporting them
- No `<style scoped>` blocks for per-slide tweaks
- Marp's auto-scaling for images not utilized
- No `<!-- fit -->` for headline auto-sizing on section breaks

---

## Weighted Overall Score

| Dimension | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| Content Accuracy & Depth | 6 | 20% | 1.20 |
| Didactic Flow & Structure | 7 | 20% | 1.40 |
| Visual Design Quality | 5 | 15% | 0.75 |
| Audience Calibration | 8 | 15% | 1.20 |
| Engagement & Interactivity | 4 | 10% | 0.40 |
| Clarity of Learning Objectives | 5 | 10% | 0.50 |
| Technical Execution | 8 | 10% | 0.80 |
| **TOTAL** | | | **6.25/10** |

---

## Length & Pacing Assessment

- **32 slides / ~30 minutes = ~0.94 min/slide** - Within the PLOS guideline of ~1 min/slide
- **6 structural slides** (title + 5 section breaks) take ~15s each = ~1.5 min
- **26 content slides / ~28.5 min = ~1.1 min/slide** - Appropriate
- **Pacing is uneven**: Steps 1-2 will take <30s each while Pull Requests (slide 10) or Real Consequences (slide 4) need >2 min
- **Theory-heavy front half**: 23 slides of theory before 9 slides of practice - the cognitive load accumulates without relief

**Verdict:** Length is appropriate for 30 minutes. Pacing needs rebalancing.

---

## Priority Improvements (to reach 9+/10)

### Priority 1: Add Missing Essential Content (Impact: +1.5 points)

Five topics that researchers must understand before the hands-on session are completely absent:

**1. Private vs Public Repositories** (new slide after Git vs GitHub)
- Public: visible to everyone, good for open-source, collaboration, portfolio
- Private: restricted access, required for unpublished research, patient-adjacent data, pre-publication code
- When to use which: default to private for research until ready to share
- This is especially relevant for a medical research audience at Charite

**2. .gitignore - What Not to Track** (new slide after Repositories or Branches)
- What it is: a file that tells Git which files to ignore
- Why it matters: prevents accidentally committing things that should not be in a repo
- What to ignore: large data files (CSVs, FASTQs), binary files (compiled code, PDFs, images), environment/config files (.env, API keys), IDE settings, OS artifacts (.DS_Store)
- Tie to PII management: .gitignore is your first line of defense

**3. PII Management - Protecting Sensitive Data** (new slide, pair with .gitignore)
- Never commit patient data, even anonymized, to a public repo
- Never commit API keys, passwords, or tokens
- What to do if you accidentally commit sensitive data (it's in the history forever - rewriting history is painful)
- Best practices: use .env files + .gitignore, use environment variables, review diffs before committing
- Critical for Charite/medical research context

**4. Conventional Commits** (expand or replace slide 8)
- Slide 8 already covers good vs bad commit messages but doesn't teach the convention
- Format: `type(scope): description` - e.g., `feat: add gene search`, `fix: correct variant filter`, `docs: update README`
- Common types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`
- Why: enables automated changelogs, clear project history, team consistency
- The project's own git log uses this convention - show real examples from KidneyQuest

**5. Semantic Versioning** (new slide, can pair with conventional commits)
- Format: `MAJOR.MINOR.PATCH` (e.g., v1.2.3)
- MAJOR = breaking changes, MINOR = new features, PATCH = bug fixes
- Why researchers care: citing software versions in papers, reproducibility, knowing when updates break things
- Connection to conventional commits: `feat:` bumps MINOR, `fix:` bumps PATCH, `BREAKING CHANGE:` bumps MAJOR

**Placement suggestion:** These 5 topics naturally fit into Part 1 (Git Basics), expanding it from 6 to ~10 content slides. This rebalances the presentation - Part 1 becomes the substantial foundation it should be, while the thin Parts 2-3 can be merged. Net slide count increase: ~4-5 slides (some can be combined), adjusting total from 32 to ~36 slides. At 1 min/slide this extends the talk to ~36 minutes, which may require trimming the tool landscape section (slides 19-21 are repetitive and could be condensed).

### Priority 2: Add Visual Elements (Impact: +2.0 points)

**The single biggest weakness is that all 32 slides are text-only.**

Must-have visuals:
1. **Slide 9 (Branches)**: Simple branch/merge diagram - this concept is inherently visual
2. **Slide 16 (Timeline)**: Visual timeline with icons for each milestone year
3. **Slides 19-21 (Tool categories)**: One screenshot per category (ChatGPT interface, Copilot in VS Code, Claude Code terminal)
4. **Slide 25 (KidneyQuest)**: Game screenshot or conceptual preview
5. **Slide 26 (Workflow)**: 5-step flow diagram with icons

Nice-to-have visuals:
6. **Slide 7 (Commits)**: Horizontal timeline with checkpoint markers
7. **Slide 11 (Git vs GitHub)**: Laptop/cloud comparison icons
8. **Slide 18 (AI Spectrum)**: Horizontal spectrum bar (manual -> autonomous)
9. **Section breaks**: Unique icon or subtle color per part

Implementation: Use Marp's `![bg right w:500](image.png)` syntax for split-layout slides. Store images in `docs/presentation/images/`. Use simple diagrams (Excalidraw, Mermaid, or hand-drawn style) to match the approachable tone.

### Priority 3: Add Learning Objectives & Summary (Impact: +1.0 point)

Add two new slides:
1. **After slide 1 (new slide 2)**: "What You'll Learn Today"
   - Understand Git basics: repos, commits, branches, PRs
   - Protect your data: .gitignore, PII management, private repos
   - Know why version control matters when using AI tools
   - Navigate the AI tool landscape
   - Follow the Git workflow hands-on with KidneyQuest
2. **Before final slide (new penultimate)**: "What You Now Know"
   - Recap the 4 key concepts
   - Bridge to hands-on: "Now you'll practice all of this"

### Priority 4: Add Engagement Moments (Impact: +1.5 points)

Insert 3-4 interaction points:
1. **After slide 2** (filename chaos): "Show of hands - who has more than 5 versions of a file right now?" (speaker note prompt)
2. **After slide 11** (Git vs GitHub): "Quick check: if your laptop dies, is your Git history lost? What about GitHub?" (audience question)
3. **After slide 16** (AI Timeline): "Who here has used ChatGPT for work in the last month?" (poll/show of hands)
4. **After slide 22** (Choose Your Tool): "What tool sounds most interesting to you? Chat with your neighbor for 30 seconds." (pair discussion)

These don't require new slides - they can be speaker note prompts with a brief pause. But adding 1-2 dedicated "question slides" with just a question in large text would be more effective.

### Priority 5: Rebalance Structure (Impact: +0.5 points)

- **Merge Part 3 into Part 2**: "Why Version Control Matters with AI" + "The AI Revolution Timeline" are naturally one section. Part 3 (one content slide) doesn't justify its own section break.
- **Expand Step 3 ("Code with AI")**: This is the core activity but gets the same sparse treatment as "Clone the Repo". Add an example prompt and expected output.
- **Combine Steps 1-2**: Cloning and branching are quick commands that could share a slide, freeing space for more depth on Steps 3-5.
- **Move "Choose Your Tool" (slide 22) earlier**: Before the detailed tool breakdown, not after. This removes pressure to "pick the right one" while they're still learning about options.

### Priority 6: Improve Slide Titles (Impact: +0.3 points)

Titles should state the takeaway, not the topic:

| Current (Topic) | Improved (Takeaway) |
|------------------|---------------------|
| "What is a Repository?" | "A Repository Tracks Your Entire Project History" |
| "Commits: Snapshots of Your Project" | "Commits Let You Save and Rewind" |
| "Why Commit Messages Matter" | "Good Commit Messages Tell the Story" |
| "Branches: Parallel Experiments" | "Branches Let You Experiment Without Risk" |
| "Pull Requests: Proposing Changes" | "Pull Requests Are How Teams Collaborate" |
| "Git vs GitHub" | "Git Is Local, GitHub Is Online" |
| "AI Generates Code Fast" | "AI Is Fast - Version Control Keeps You Safe" |
| "The Spectrum of AI Coding Tools" | "Three Kinds of AI Coding Tools" |
| "Where to Learn More" | "Everything Is on the Course Site" |

### Priority 7: Leverage Marp Features (Impact: +0.5 points)

Currently unused Marp capabilities that would improve the deck:
- `![bg right:40%](image.png)` - Split-layout slides with text on one side, visual on the other
- `<!-- fit -->` - Auto-scale section break titles for maximum impact
- `![bg brightness:0.3](image.png)` - Subtle background images for atmosphere
- `<style scoped>` blocks for per-slide tweaks (e.g., larger code blocks on command slides)
- Two-column layouts via CSS grid or `bg` splits for comparison slides (Git vs GitHub, good vs bad commits)

---

## Projected Score After Improvements

| Dimension | Current | After P1-P7 | Change |
|-----------|---------|-------------|--------|
| Content Accuracy & Depth | 6 | 9 | +3 |
| Didactic Flow & Structure | 7 | 9 | +2 |
| Visual Design Quality | 5 | 8 | +3 |
| Audience Calibration | 8 | 9 | +1 |
| Engagement & Interactivity | 4 | 7 | +3 |
| Clarity of Learning Objectives | 5 | 8 | +3 |
| Technical Execution | 8 | 9 | +1 |
| **Weighted Total** | **6.25** | **8.55** | **+2.30** |

To push beyond 8.5 toward 9+, the remaining gap is in:
- **Engagement**: Would need live demo or embedded interactive element
- **Visual Design**: Would need professionally designed diagrams or consistent illustration style
- **Content**: Would need domain-specific depth (e.g., real examples of AI-generated genomics code, not just generic "hundreds of lines")

---

## Appendix A: Slide Score Summary

| # | Title | Score |
|---|-------|-------|
| 1 | Title: Git, GitHub and AI Tools | 7.4 |
| 2 | We've All Been Here | 8.0 |
| 3 | There's a Better Way | 6.6 |
| 4 | Real Consequences | 6.4 |
| 5 | Part 1: Git Basics | 8.6 |
| 6 | What is a Repository? | 6.0 |
| 7 | Commits: Snapshots of Your Project | 6.4 |
| 8 | Why Commit Messages Matter | 6.6 |
| 9 | Branches: Parallel Experiments | 6.4 |
| 10 | Pull Requests: Proposing Changes | 5.6 |
| 11 | Git vs GitHub | 6.6 |
| 12 | Part 2: VC + AI | 8.6 |
| 13 | AI Generates Code Fast | 6.2 |
| 14 | Experiment Freely, Fail Safely | 7.4 |
| 15 | Part 3: AI Revolution Timeline | 8.6 |
| 16 | 2022-2026: Rapid Acceleration | 6.8 |
| 17 | Part 4: The Tool Landscape | 8.6 |
| 18 | The Spectrum of AI Coding Tools | 7.0 |
| 19 | Chat-Based Tools | 6.0 |
| 20 | IDE Sidebar Tools | 6.0 |
| 21 | CLI Agent Tools | 6.0 |
| 22 | Choose Your Tool | 7.0 |
| 23 | Where to Learn More | 7.0 |
| 24 | Part 5: What We'll Do Today | 8.6 |
| 25 | KidneyQuest: The Project | 6.8 |
| 26 | The Workflow You'll Follow | 7.6 |
| 27-31 | Steps 1-5 | 8.0 avg |
| 32 | Let's Get Started! | 7.0 |
| | **Average** | **7.0** |

## Appendix B: Review Framework Sources

- [Ten Simple Rules for Effective Presentation Slides - PLOS Computational Biology](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009554)
- [The Applied Weighted Slide Metric (AWSM) Tool - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9005758/)
- [Using Cognitive Load Theory to Improve Slideshow Presentations - Chartered College](https://my.chartered.college/impact_article/using-cognitive-load-theory-to-improve-slideshow-presentations/)
- [Death to Weak PowerPoint - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC4189377/)
- [Evaluation Rubric for Presentation Slides - CSUSM](https://www.csusm.edu/iits/services/ats/idesign/toolkits/documents/rubric_presentationslides.pdf)
- [Assessment Rubric for Presentations - HKUST](https://cei.hkust.edu.hk/sites/default/files/content/assessment_rubric_for_presentation.pdf)
- [Scoring Rubrics for Academic Presentations - Cornell](https://yoon.human.cornell.edu/AcadmicComm/Rubric_Presentation.pdf)
- [Oral Presentation Criteria - Penn State](https://montalto.psu.edu/academics/festival/presentation)
- [Fundamentals of Slide Design - Harvard Writing Center](https://writingcenter.catalyst.harvard.edu/fundamentals-slide-design)
- [Marp Official Documentation](https://marp.app/)
- [Seven Tips for Marp - HashBang Code](https://www.hashbangcode.com/article/seven-tips-getting-most-out-marp)
