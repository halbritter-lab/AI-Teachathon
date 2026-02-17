# AI-Teachathon Presentation Review (v2.1)

**Date:** 2026-02-17
**Reviewer perspective:** Senior UI/UX designer, copywriter, senior academic lecturer
**Framework:** PLOS "Ten Simple Rules" + AWSM (Applied Weighted Slide Metric) + Cognitive Load Theory + HKUST/Cornell academic rubrics
**Method:** Source analysis of `docs/presentation/slides.md`, `docs/.vitepress/theme/marp-theme.css`, and all assets in `docs/presentation/images/`
**Previous review:** v1 (2026-02-17) reviewed the 32-slide version. v2 covered the revised 38-slide version after Phases 6-7. This v2.1 update reflects the title slide redesign and URL fixes.
**Sources:** See Appendix B for full bibliography

**Rating scale:** 1-3 Poor | 4-5 Below average | 6 Acceptable | 7 Good | 8 Very good | 9 Excellent | 10 Outstanding

---

## What Changed Since v1

The presentation underwent a substantial revision addressing all 7 priority areas from the v1 review:

| Priority | v1 Recommendation | Status |
|----------|-------------------|--------|
| P1: Missing content | Add private repos, .gitignore, PII, conventional commits, semver | Done - 5 new slides (10-14) |
| P2: Visual elements | Add diagrams, screenshots, split layouts | Done - 5 SVGs, 3 screenshots, 8 split-layout slides |
| P3: Learning objectives | Add objectives + recap bookends | Done - slides 2 and 37 |
| P4: Engagement | Add audience interaction points | Done - 4 prompts in speaker notes + 1 question slide (15) |
| P5: Rebalance structure | Merge thin sections, expand Step 3, combine Steps 1-2 | Done - 4 parts instead of 5, Steps 1-2 combined |
| P6: Improve titles | Takeaway-driven titles | Done - all titles rewritten |
| P7: Leverage Marp features | Split layouts, scoped styles, fit, gradients | Done - all features now used |

**Net result:** 32 slides -> 38 slides, 0 visuals -> 8 visuals, 0 engagement moments -> 5 engagement moments.

**v2.1 updates:** Title slide redesigned with gradient background, tagline, and radial glow effects. Course site URLs corrected across all slides. All `berntpopp/AI-Teachathon` references updated to `halbritter-lab/AI-Teachathon`.

---

## Presentation Structure Overview

| Part | Slides | Content | Duration (est.) |
|------|--------|---------|-----------------|
| Opening | 1-5 | Title, objectives, filename chaos, hook, reproducibility | ~5 min |
| Part 1: Git Basics | 6-18 | Repos, commits, messages, conventional commits, semver, private repos, .gitignore, PII, question, branches, PRs, Git vs GitHub | ~13 min |
| Part 2: VC in the AI Era | 19-22 | AI speed, safe experimentation, AI timeline | ~4 min |
| Part 3: Tool Landscape | 23-29 | Categories, tool choice, chat/sidebar/CLI with screenshots, course site | ~6 min |
| Part 4: Hands-On | 30-38 | KidneyQuest, 5-step workflow, steps 1-5, recap, CTA | ~8 min |
| **Total** | **38 slides** | | **~36 min** |

---

## Per-Slide Ratings

### Opening (Slides 1-5)

**Slide 1 - Title: "Git, GitHub and AI Tools"** | Score: 8.6/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 9 |
| Text Economy | 9 |
| Visual Effectiveness | 8 |
| Readability | 9 |
| Title as Takeaway | 8 |

- (+) **Redesigned in v2.1.** Navy-to-teal gradient background with radial glow effects
- (+) New tagline: "Learn the tools that are changing how researchers code" - hooks the audience
- (+) White title with teal text-shadow creates luminosity
- (+) Header hidden on this slide for cleaner layout
- (+) Visual energy now matches the section break slides
- (-) Could still benefit from a subtle icon or motif (e.g., Git branch symbol)

**Slide 2 - "What You'll Learn Today"** | Score: 8.4/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 9 |
| Text Economy | 8 |
| Visual Effectiveness | 7 |
| Readability | 9 |
| Title as Takeaway | 9 |

- (+) **New in v2.** Addresses the #1 structural gap from v1 - explicit learning objectives
- (+) 5 objectives using action verbs (Understand, Protect, Explain, Navigate, Follow)
- (+) Maps directly to the 4 parts of the presentation
- (-) No visual differentiation between the 5 objectives (all plain bullets)
- Improvement: Could use numbered items or icons per objective to add visual rhythm

**Slide 3 - "We've All Been Here"** | Score: 8.0/10

- (+) Outstanding opener, unchanged and still effective
- (+) The escalating filename pattern IS the visual

**Slide 4 - "Version Control Unlocks AI's Potential"** | Score: 7.4/10

- (+) **Title improved from v1** ("There's a Better Way" -> takeaway-driven)
- (-) Still three bullets with no visual, but the stronger title compensates

**Slide 5 - "Reproducibility Requires Version Control"** | Score: 7.6/10

- (+) **Title improved** ("Real Consequences" -> takeaway-driven)
- (+) Scenario-based teaching remains pedagogically strong
- (+) "Without/With" payoff is effective
- (-) Still text-heavy for a single slide

### Part 1: Git Basics (Slides 6-18)

**Slide 6 - Section Break: "Part 1: Git Basics"** | Score: 9.0/10

- (+) Now uses `<!-- fit -->` for auto-scaled title
- (+) **Gradient background** (blue-to-teal) differentiates from other sections
- (+) Each section break now has a unique gradient, solving the v1 monotony issue

**Slide 7 - "A Repository Tracks Your Entire Project History"** | Score: 7.0/10

- (+) **Title rewritten** as takeaway (was "What is a Repository?")
- (+) "Lab notebook for your code" analogy retained
- (-) Still no visual representation of a repo

**Slide 8 - "Every Commit Is a Safe Restore Point"** | Score: 7.0/10

- (+) **Title rewritten** as takeaway (was "Commits: Snapshots")
- (-) Still no timeline/checkpoint visualization

**Slide 9 - "Good Commit Messages Tell Your Project's Story"** | Score: 7.2/10

- (+) **Title rewritten** as takeaway
- (+) Good/bad example contrast remains effective

**Slide 10 - "Conventional Commits Make History Machine-Readable"** | Score: 8.6/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 9 |
| Text Economy | 8 |
| Visual Effectiveness | 9 |
| Readability | 8 |
| Title as Takeaway | 9 |

- (+) **New in v2.** Addresses P1 gap - teaches the commit convention
- (+) **SVG diagram** on left using split layout - first visual in the deck
- (+) `<style scoped>` adjusts typography for the split layout
- (+) Common types listed concisely with examples
- (-) Slightly dense - 6 type examples + format + example could be trimmed to 4

**Slide 11 - "Semantic Versioning Tells You What Changed"** | Score: 7.8/10

- (+) **New in v2.** Addresses P1 gap
- (+) Clear MAJOR.MINOR.PATCH breakdown
- (+) Ties back to reproducibility ("cite specific versions in papers")
- (-) No visual (a version number diagram would help)

**Slide 12 - "Private Repos Protect Unpublished Research"** | Score: 8.0/10

- (+) **New in v2.** Critical for medical research audience
- (+) Clear public/private comparison
- (+) Strong default recommendation: "Start private, make public when ready"

**Slide 13 - ".gitignore Prevents Accidents Before They Happen"** | Score: 7.8/10

- (+) **New in v2.** Essential pre-hands-on knowledge
- (+) Concrete examples (CSVs, FASTQs, .env, .DS_Store)
- (-) No visual example of a .gitignore file

**Slide 14 - "Never Commit Patient Data or Credentials"** | Score: 8.2/10

- (+) **New in v2.** Non-negotiable for Charite audience
- (+) Strong, direct messaging ("It's in the history forever")
- (+) Pairs naturally with .gitignore as defense-in-depth

**Slide 15 - Question: "If you accidentally commit a password..."** | Score: 8.8/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 10 |
| Text Economy | 10 |
| Visual Effectiveness | 7 |
| Readability | 9 |
| Title as Takeaway | 8 |

- (+) **New in v2.** Best engagement moment in the deck
- (+) Single question, large text, forces the audience to think
- (+) Speaker notes guide a 10-second pause then answer
- (+) Reinforces the previous 3 slides (private repos, .gitignore, PII)

**Slide 16 - "Branches Let You Experiment Without Risk"** | Score: 8.8/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 9 |
| Text Economy | 8 |
| Visual Effectiveness | 9 |
| Readability | 9 |
| Title as Takeaway | 9 |

- (+) **SVG diagram** on left makes the branching concept instantly graspable
- (+) Split layout with scoped typography
- (+) Title rewritten as takeaway (was "Branches: Parallel Experiments")
- This was the #1 slide that needed a diagram in v1 - now delivered

**Slide 17 - "Pull Requests Are Where Collaboration Happens"** | Score: 8.4/10

- (+) **SVG diagram** (pr-workflow) on left with split layout
- (+) Clear 3-step process (review -> discuss -> merge)
- (+) Title rewritten as takeaway

**Slide 18 - "Git Is Local, GitHub Is Online"** | Score: 7.0/10

- (+) Title rewritten as takeaway
- (-) Still text-only, no icons/visuals for local vs cloud distinction
- Improvement: Simple laptop/cloud icons would complete this slide

### Part 2: Version Control in the AI Era (Slides 19-22)

**Slide 19 - Section Break** | Score: 9.0/10

- (+) Purple-to-teal gradient distinguishes from Part 1's blue-to-teal

**Slide 20 - "AI Is Fast - Version Control Keeps You Safe"** | Score: 7.2/10

- (+) Title rewritten as takeaway (was "AI Generates Code Fast")
- (-) Still two bullet lists with no visual

**Slide 21 - "Experiment Freely, Fail Safely"** | Score: 7.6/10

- (+) Still the most memorable title/punchline in the deck
- (-) Unchanged from v1 - could benefit from a before/after visual

**Slide 22 - "AI Coding Tools Evolved Rapidly Since 2022"** | Score: 8.4/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 9 |
| Text Economy | 7 |
| Visual Effectiveness | 9 |
| Readability | 8 |
| Title as Takeaway | 9 |

- (+) **SVG timeline diagram** on left with split layout
- (+) Title rewritten as takeaway
- (+) Engagement prompt in speaker notes (show of hands: who has used AI tools?)
- (-) 5 timeline entries are still dense for one slide half

### Part 3: The Tool Landscape (Slides 23-29)

**Slide 23 - Section Break** | Score: 9.0/10

- (+) Dark-to-teal gradient (GitHub-inspired palette) distinguishes from other sections

**Slide 24 - "Three Categories of AI Coding Tools"** | Score: 7.2/10

- (+) Clean three-category framework
- (-) Still no visual spectrum or diagram

**Slide 25 - "Choose the Tool That Fits Your Workflow"** | Score: 7.2/10

- (+) Permission-giving message reduces anxiety
- (-) Still text-only

**Slide 26 - "Chat Tools Are Best for Learning and Quick Questions"** | Score: 8.4/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 9 |
| Text Economy | 8 |
| Visual Effectiveness | 8 |
| Readability | 8 |
| Title as Takeaway | 9 |

- (+) **Screenshot** (chatgpt-interface.png) on left with split layout
- (+) Title rewritten as takeaway
- (+) Scoped typography for split layout
- This was a text-only slide in v1 - major improvement

**Slide 27 - "Sidebar Tools Integrate AI Into Your Editor"** | Score: 8.4/10

- (+) **Screenshot** (copilot-vscode-sidebar.png) with split layout
- (+) Title rewritten as takeaway

**Slide 28 - "CLI Agents Automate Entire Tasks"** | Score: 8.4/10

- (+) **Screenshot** (claude-code-terminal.png) with split layout
- (+) Title rewritten as takeaway

**Slide 29 - "The Course Site Has Everything You Need"** | Score: 7.0/10

- (+) Clear bridge to self-study
- (-) No QR code for mobile access
- URL corrected in v2.1

### Part 4: What We'll Do Today (Slides 30-38)

**Slide 30 - Section Break** | Score: 9.0/10

- (+) Orange-to-teal gradient creates energy for the hands-on transition

**Slide 31 - "KidneyQuest Teaches the Full Git Workflow"** | Score: 7.0/10

- (-) Still no game screenshot or preview image
- Improvement: A screenshot or mockup would generate excitement

**Slide 32 - "Five Steps from Clone to Merge"** | Score: 8.8/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 9 |
| Text Economy | 9 |
| Visual Effectiveness | 9 |
| Readability | 8 |
| Title as Takeaway | 9 |

- (+) **SVG workflow diagram** on left with split layout
- (+) Clean 5-step numbered list
- (+) Engagement prompt: turn to your neighbor
- Best-structured content slide in the deck

**Slide 33 - "Steps 1-2: Get the Code and Create Your Branch"** | Score: 8.2/10

- (+) **Combined from two separate slides in v1** - addresses pacing issue
- (+) Scoped large code blocks for readability
- (+) Two commands + one explanation = right density

**Slide 34 - "Step 3: Let AI Write Code While You Steer"** | Score: 8.6/10

| Criterion | Score |
|-----------|-------|
| Single Message Clarity | 9 |
| Text Economy | 8 |
| Visual Effectiveness | 8 |
| Readability | 9 |
| Title as Takeaway | 9 |

- (+) **Expanded from v1** - now includes a concrete prompt example in a styled blockquote
- (+) "You are the pilot. AI is the copilot." remains a strong closer
- (+) Scoped blockquote styling with teal accent
- This was the most underdeveloped step in v1 - now the strongest

**Slide 35 - "Step 4: Propose Your Changes with a Pull Request"** | Score: 7.0/10

- (-) Still sparse - 3 bullets + 1 sentence
- Improvement: Could show a screenshot of the GitHub PR creation page

**Slide 36 - "Step 5: Review, Discuss, and Merge"** | Score: 7.0/10

- (-) Still sparse - 3 bullets + 1 sentence
- (-) "Congratulations" closer feels premature (they haven't done it yet)

**Slide 37 - "What You Now Know"** | Score: 8.4/10

- (+) **New in v2.** Closes the learning objectives loop from slide 2
- (+) 5 recap bullets map to the 5 objectives
- (+) Clear bridge: "Next up: Apply all of this hands-on"
- This was the most-requested addition in the v1 review

**Slide 38 - "Let's Get Started!"** | Score: 7.2/10

- (+) Clear CTA
- (-) No QR code

---

## Overall Dimension Ratings

### 1. Content Accuracy & Depth: 8/10 (weight: 20%)

**Strengths:**
- All 5 missing topics from v1 now covered (private repos, .gitignore, PII, conventional commits, semver)
- Technical content is accurate and current
- Appropriate depth for non-technical researchers
- New content slides are well-placed in the flow

**Weaknesses:**
- No discussion of AI limitations or hallucination risks
- Staging area concept still skipped
- Tool descriptions remain somewhat generic

**Fixed in v2.1:**
- Course site URLs on slides 29 and 38 corrected to `halbritter-lab.github.io`

### 2. Didactic Flow & Structure: 8/10 (weight: 20%)

**Strengths:**
- Learning objectives bookend (slides 2 + 37) creates a complete arc
- 4-part structure is better balanced than the old 5-part
- Progressive disclosure works: problem -> solution -> context -> tools -> practice
- Steps 1-2 combined, Step 3 expanded - fixes the v1 pacing problem
- Question slide (15) breaks up the theory block

**Weaknesses:**
- Part 1 is now 12 content slides (7-18) - the heaviest section by far. Could benefit from a mid-section visual break
- Steps 4-5 remain underdeveloped relative to their importance
- ~36 min estimated runtime may run tight for a 30-min slot

### 3. Visual Design Quality: 8/10 (weight: 15%)

**Strengths:**
- **Title slide** now has a gradient background with radial glow effects, matching section break energy
- **5 SVG diagrams** (git-branching, conventional-commit, ai-timeline, pr-workflow, workflow-5-step) - massive improvement from 0
- **3 tool screenshots** break up the tool section monotony
- **8 split-layout slides** using `bg left fit` create visual variety
- **4 unique gradient section breaks** (blue, purple, dark, orange - all to teal)
- `<style scoped>` blocks tune typography per slide
- `<!-- fit -->` on section break titles

**Weaknesses:**
- Slides 2-5 (opening) and 37-38 (closing) are still text-only after the title slide
- Git vs GitHub (slide 18) is one of the most important conceptual slides but has no visual
- KidneyQuest (slide 31) has no preview image
- No QR codes on course-site or CTA slides
- Slides 7, 8, 11, 13 in Part 1 remain text-only - visual variety drops in mid-section

### 4. Audience Calibration: 8.5/10 (weight: 15%)

**Strengths:**
- Excellent for non-technical researchers
- New PII/private repos content is directly relevant to Charite medical research context
- Analogies are well-chosen and sparingly used
- Permission-giving language throughout ("No single right answer", "don't worry")

**Weaknesses:**
- No explicit acknowledgment of mixed skill levels
- Command-line comfort still assumed

### 5. Engagement & Interactivity: 7/10 (weight: 10%)

**Strengths:**
- **Question slide (15)** is the best engagement moment - forces audience to think
- **4 engagement prompts** in speaker notes (show of hands on slide 3, laptop question on slide 18, AI tools poll on slide 22, neighbor discussion on slide 32)
- Varied prompt types: show of hands, quick check, poll, pair discussion

**Weaknesses:**
- All engagement prompts except slide 15 are in speaker notes only - no visual cue for the audience
- No micro-exercises between theory sections
- Still a lecture format with brief interaction points rather than a participatory structure

### 6. Clarity of Learning Objectives: 8/10 (weight: 10%)

**Strengths:**
- **Explicit objectives** on slide 2 with action verbs (Bloom's taxonomy)
- **Full recap** on slide 37 mapping back to objectives
- Clear "next up" bridge to hands-on

**Weaknesses:**
- No mid-presentation check-ins ("We've covered objectives 1-3, now let's move to...")
- Objectives could link more explicitly to each Part

### 7. Technical Execution: 9/10 (weight: 10%)

**Strengths:**
- All Marp features now leveraged: `bg left fit`, `<!-- fit -->`, `<style scoped>`, gradient section classes
- Custom theme with 4 gradient section variants
- Split layouts with per-slide typography tuning
- Speaker notes on every substantive slide
- Utility classes for content density (`.tight-spacing`, `.compact`, `.large-code`)
- Proper image pipeline (`copy:marp-assets` script)

**Weaknesses:**
- No `bg brightness` or background image effects on title/CTA slides
- `copilot-vscode-autocomplete.png` exists but is unused in the presentation

---

## Weighted Overall Score

| Dimension | v1 Score | v2 Score | Weight | Weighted |
|-----------|----------|----------|--------|----------|
| Content Accuracy & Depth | 6 | 8 | 20% | 1.60 |
| Didactic Flow & Structure | 7 | 8 | 20% | 1.60 |
| Visual Design Quality | 5 | 8 | 15% | 1.20 |
| Audience Calibration | 8 | 8.5 | 15% | 1.28 |
| Engagement & Interactivity | 4 | 7 | 10% | 0.70 |
| Clarity of Learning Objectives | 5 | 8 | 10% | 0.80 |
| Technical Execution | 8 | 9 | 10% | 0.90 |
| **TOTAL** | **6.25** | | | **8.08/10** |

**Improvement: +1.83 points** (6.25 -> 8.08)

---

## Bugs to Fix

1. ~~**Wrong course site URL** (slides 29 and 38)~~ - Fixed in v2.1
2. **Unused screenshot**: `copilot-vscode-autocomplete.png` exists in the screenshots directory but is not referenced in any slide

---

## Remaining Improvements (to reach 9+/10)

### Priority A: Quick Fixes (30 min effort, +0.3 points)

1. ~~Fix the two URL bugs~~ - Done
2. Add `copilot-vscode-autocomplete.png` to the sidebar tools slide (slide 27) as a secondary image, or remove it from the repo

### Priority B: Visual Polish (2-3 hr effort, +0.5 points)

1. **KidneyQuest preview** (slide 31): Add a game screenshot or conceptual mockup
2. **Git vs GitHub** (slide 18): Add laptop/cloud icons or a simple comparison diagram
3. **QR codes** on slides 29 and 38 for easy mobile access to the course site
4. ~~**Title slide** (slide 1): Add gradient background~~ - Done in v2.1
5. **Slides 7-8** (repos, commits): Add simple diagrams (folder icon, timeline checkpoints)

### Priority C: Structural Polish (1-2 hr effort, +0.3 points)

1. **Part 1 pacing**: Insert a brief visual break or recap around slide 12-13 (halfway through the 12-slide block)
2. **Steps 4-5** (slides 35-36): Expand slightly - a PR creation screenshot for step 4, or combine into one slide with more concrete guidance
3. **Timing**: At ~36 min estimated, the deck may run over a 30-min slot. Consider trimming slide 25 (Choose Your Tool) which is somewhat redundant with slide 24 (Three Categories)

### Priority D: Advanced Engagement (2-3 hr effort, +0.4 points)

1. **Visible engagement cues**: Add 1-2 dedicated "question slides" (like slide 15) for the currently speaker-note-only prompts
2. **Live demo callout**: Add a slide noting where a live demo could be inserted (e.g., after slide 9, show the KidneyQuest git log with real conventional commits)
3. **AI limitations**: Add a brief slide on AI hallucinations/review before the hands-on to set expectations

### Projected Score After All Improvements

| Dimension | Current | After A-D | Change |
|-----------|---------|-----------|--------|
| Content Accuracy & Depth | 8 | 9 | +1 |
| Didactic Flow & Structure | 8 | 9 | +1 |
| Visual Design Quality | 8 | 9 | +1 |
| Audience Calibration | 8.5 | 9 | +0.5 |
| Engagement & Interactivity | 7 | 8.5 | +1.5 |
| Clarity of Learning Objectives | 8 | 8.5 | +0.5 |
| Technical Execution | 9 | 9.5 | +0.5 |
| **Weighted Total** | **8.08** | **8.93** | **+0.85** |

---

## Appendix A: Slide Score Summary

| # | Title | Score | Visual |
|---|-------|-------|--------|
| 1 | Title: Git, GitHub and AI Tools | 8.6 | gradient + glow |
| 2 | What You'll Learn Today | 8.4 | - |
| 3 | We've All Been Here | 8.0 | - |
| 4 | Version Control Unlocks AI's Potential | 7.4 | - |
| 5 | Reproducibility Requires Version Control | 7.6 | - |
| 6 | Part 1: Git Basics (section break) | 9.0 | gradient |
| 7 | A Repository Tracks Your Entire Project History | 7.0 | - |
| 8 | Every Commit Is a Safe Restore Point | 7.0 | - |
| 9 | Good Commit Messages Tell Your Project's Story | 7.2 | - |
| 10 | Conventional Commits Make History Machine-Readable | 8.6 | SVG + split |
| 11 | Semantic Versioning Tells You What Changed | 7.8 | - |
| 12 | Private Repos Protect Unpublished Research | 8.0 | - |
| 13 | .gitignore Prevents Accidents Before They Happen | 7.8 | - |
| 14 | Never Commit Patient Data or Credentials | 8.2 | - |
| 15 | Question: accidentally commit a password? | 8.8 | - |
| 16 | Branches Let You Experiment Without Risk | 8.8 | SVG + split |
| 17 | Pull Requests Are Where Collaboration Happens | 8.4 | SVG + split |
| 18 | Git Is Local, GitHub Is Online | 7.0 | - |
| 19 | Part 2: VC in the AI Era (section break) | 9.0 | gradient |
| 20 | AI Is Fast - Version Control Keeps You Safe | 7.2 | - |
| 21 | Experiment Freely, Fail Safely | 7.6 | - |
| 22 | AI Coding Tools Evolved Rapidly Since 2022 | 8.4 | SVG + split |
| 23 | Part 3: The Tool Landscape (section break) | 9.0 | gradient |
| 24 | Three Categories of AI Coding Tools | 7.2 | - |
| 25 | Choose the Tool That Fits Your Workflow | 7.2 | - |
| 26 | Chat Tools Are Best for Learning | 8.4 | screenshot + split |
| 27 | Sidebar Tools Integrate AI Into Your Editor | 8.4 | screenshot + split |
| 28 | CLI Agents Automate Entire Tasks | 8.4 | screenshot + split |
| 29 | The Course Site Has Everything You Need | 7.0 | - |
| 30 | Part 4: What We'll Do Today (section break) | 9.0 | gradient |
| 31 | KidneyQuest Teaches the Full Git Workflow | 7.0 | - |
| 32 | Five Steps from Clone to Merge | 8.8 | SVG + split |
| 33 | Steps 1-2: Get the Code and Create Your Branch | 8.2 | - |
| 34 | Step 3: Let AI Write Code While You Steer | 8.6 | - |
| 35 | Step 4: Propose Your Changes with a Pull Request | 7.0 | - |
| 36 | Step 5: Review, Discuss, and Merge | 7.0 | - |
| 37 | What You Now Know | 8.4 | - |
| 38 | Let's Get Started! | 7.2 | - |
| | **Average** | **8.0** | |

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
