---
phase: 06-structure-content-and-engagement
plan: 01
subsystem: content
tags: [marp, presentation, structure, medical-research, git-basics]
requires:
  - phase: 05-accessibility-and-quality
    provides: [polished-content, accessibility-compliance]
provides:
  - restructured-presentation
  - researcher-safety-content
  - streamlined-workflow-steps
affects:
  - phase: 06-structure-content-and-engagement
    plans: [02]
    reason: Plan 02 will add objectives, engagement prompts, and refined titles on this stable structure
tech-stack:
  added: []
  patterns: [conventional-commits, semantic-versioning]
key-files:
  created: []
  modified:
    - docs/presentation/slides.md
decisions:
  - id: STRC-01
    context: Part 3 (AI Revolution Timeline) contained only 1 slide
    decision: Merge Part 3 into Part 2, rename Part 2 to "Version Control in the AI Era"
    rationale: Single-slide sections break presentation flow; AI timeline logically fits with version control context
    impact: 4 parts instead of 5, better narrative cohesion
  - id: STRC-02
    context: Steps 1 and 2 (Clone + Branch) were separate slides with minimal content
    decision: Combine into single "Steps 1-2" slide with both commands
    rationale: Two quick commands work better as paired operation; reduces cognitive overhead
    impact: Faster hands-on setup, clearer that these are sequential prerequisites
  - id: STRC-03
    context: Step 3 (Code with AI) was sparse bullet points without concrete example
    decision: Expand with example prompt ("add scoreboard") and expected AI output
    rationale: Non-technical audience needs concrete illustration of AI-assisted coding
    impact: Shows what AI interaction looks like, sets realistic expectations
  - id: STRC-04
    context: "Choose Your Tool" appeared AFTER the 3 category detail slides
    decision: Move "Choose Your Tool" to appear immediately after overview, before category slides
    rationale: Participants need selection guidance before diving into details
    impact: Better pedagogical flow, updated speaker note to reference "details follow"
  - id: CONT-01
    context: Medical researchers work with unpublished, patient-adjacent data
    decision: Add "Private Repos Protect Unpublished Research" slide
    rationale: Default public visibility is dangerous for medical research; must establish private-first mindset
    impact: Emphasizes safety before collaboration, Charite context
  - id: CONT-02
    context: Accidental data leaks happen via Git commits
    decision: Add ".gitignore: Your First Defense Against Data Leaks" slide
    rationale: Prevention easier than cleanup; researchers need to know what NOT to commit
    impact: Proactive defense against common mistakes (CSVs, .env, patient data)
  - id: CONT-03
    context: Patient data in Git history is compliance disaster
    decision: Add "Never Commit Patient Data or Credentials" slide
    rationale: Non-negotiable for medical research; must be explicit
    impact: Sets zero-tolerance expectation, emphasizes reviewing diffs
  - id: CONT-04
    context: Commit messages need structure for automation and clarity
    decision: Add "Conventional Commits" slide immediately after commit messages slide
    rationale: KidneyQuest uses this format; participants will see it in git log
    impact: Builds on "Why Commit Messages Matter", teaches real-world format
  - id: CONT-05
    context: Reproducibility requires version tracking
    decision: Add "Semantic Versioning" slide after conventional commits
    rationale: Links commit types to version bumps (feat=MINOR, fix=PATCH); critical for citing code in papers
    impact: Connects Git workflow to research reproducibility requirements
metrics:
  tasks-completed: 2
  tasks-total: 2
  commits: 2
  files-modified: 1
  slides-added: 5
  slides-removed: 1
  slides-total: 35
  duration: "4 minutes"
completed: 2026-02-17
---

# Phase 6 Plan 01: Restructure Presentation and Add Essential Content Summary

**One-liner:** Merged AI timeline into Part 2, added 5 researcher safety slides (private repos, .gitignore, PII, conventional commits, semver), combined Steps 1-2, expanded Step 3 with concrete example

## What Was Done

### Structural Improvements

1. **Merged Part 3 into Part 2** - Eliminated single-slide Part 3 (AI Revolution Timeline) by merging into Part 2 and renaming to "Version Control in the AI Era"
2. **Renumbered parts** - 4 parts instead of 5 (Git Basics, Version Control in AI Era, Tool Landscape, What We'll Do Today)
3. **Reordered tool section** - Moved "Choose Your Tool" to appear before category detail slides (Chat, IDE, CLI)
4. **Streamlined hands-on steps** - Combined Steps 1-2 (Clone + Branch) into single slide
5. **Expanded Step 3** - Added concrete example: "Add a scoreboard to KidneyQuest" prompt with expected AI output (HTML, JS, CSS)

### Content Additions

Added 5 essential slides for medical researchers in Part 1 (after commit messages, before branches):

1. **Conventional Commits** - Structured message format (type:scope), common types (feat, fix, docs, refactor, test)
2. **Semantic Versioning** - MAJOR.MINOR.PATCH explained, linked to reproducibility and citing specific versions in papers
3. **Private Repos** - Public vs private, default private for medical research until publication
4. **\.gitignore** - First defense against data leaks, what to ignore (CSVs, .env, binaries, OS artifacts)
5. **PII Management** - Never commit patient data or credentials, prevention is everything, review diffs

All new slides include speaker notes tailored for non-technical medical researchers.

## Task Breakdown

| Task | Name                                            | Commit  | Files                       |
| ---- | ----------------------------------------------- | ------- | --------------------------- |
| 1    | Restructure sections and reorder tool slides    | d461f91 | docs/presentation/slides.md |
| 2    | Add 5 essential researcher content slides       | 84e6bba | docs/presentation/slides.md |

## Verification Results

- ✓ `make build-marp` succeeds without errors
- ✓ Part 3 (AI Revolution Timeline) section break removed
- ✓ Exactly 4 part section breaks (Part 1-4)
- ✓ All 5 new topics present: Conventional Commits, Semantic Versioning, Private Repos, .gitignore, Patient Data
- ✓ "Choose Your Tool" appears before "Chat-Based Tools" (line 299 < 313)
- ✓ "Steps 1-2" combined (1 match), separate "Step 1: Clone" gone (0 matches)
- ✓ Step 3 includes "scoreboard" example prompt (2 matches)
- ✓ Total slides: 35 (was 31, added 5, removed 1 from merge)

## Deviations from Plan

None - plan executed exactly as written.

## Decisions Made

See frontmatter decisions section for full rationale. Key decisions:

- **STRC-01:** Merge single-slide Part 3 into Part 2 for better flow
- **STRC-02:** Combine Steps 1-2 to reduce cognitive overhead
- **STRC-03:** Expand Step 3 with concrete scoreboard example
- **STRC-04:** Reorder "Choose Your Tool" before category details
- **CONT-01:** Add private repos slide (Charite context, unpublished research)
- **CONT-02:** Add .gitignore slide (proactive defense against leaks)
- **CONT-03:** Add PII management slide (zero-tolerance for patient data)
- **CONT-04:** Add conventional commits slide (KidneyQuest uses this format)
- **CONT-05:** Add semantic versioning slide (reproducibility, citing versions in papers)

## Technical Details

### Slide Flow (Part 1)

**Before:**
Repository -> Commits -> Commit Messages -> Branches -> Pull Requests -> Git vs GitHub

**After:**
Repository -> Commits -> Commit Messages -> **Conventional Commits -> Semantic Versioning -> Private Repos -> .gitignore -> PII Management** -> Branches -> Pull Requests -> Git vs GitHub

This creates a logical progression: basic concepts -> structured workflows -> safety practices -> collaboration.

### Tool Section Reorder

**Before:**
Spectrum overview -> Chat-Based -> IDE Sidebar -> CLI Agents -> Choose Your Tool -> Where to Learn More

**After:**
Spectrum overview -> **Choose Your Tool** -> Chat-Based -> IDE Sidebar -> CLI Agents -> Where to Learn More

Participants get selection guidance before diving into category details.

### Speaker Notes

All new slides include speaker notes with:
- Context for non-technical researchers
- Real-world examples (Charite, KidneyQuest, medical research)
- Connections to other slides (conventional commits -> semver)
- Emphasis on prevention (PII, .gitignore)

## Validation

Marp build successful:
```
[  INFO ] Converting 1 markdown...
[  INFO ] docs\presentation\slides.md => docs\public\presentation.html
```

Part structure confirmed:
```
# Part 1: Git Basics
# Part 2: Version Control in the AI Era
# Part 3: The Tool Landscape
# Part 4: What We'll Do Today
```

## Next Phase Readiness

**Phase 6 Plan 02** can now add:
- Learning objectives slides (start of each part)
- Engagement prompts (strategic pause points)
- Refined slide titles (active voice, benefit-focused)

The structure is stable, content is complete, and slide order is finalized.

**Blockers/Concerns:** None

## Output Artifacts

- `.planning/phases/06-structure-content-and-engagement/06-01-SUMMARY.md` (this file)
- Modified: `docs/presentation/slides.md` (restructured, 35 slides)
- Generated: `docs/public/presentation.html` (via Marp build)

## Commit History

```
d461f91 refactor(06-01): restructure presentation to 4 parts and reorder tool slides
84e6bba feat(06-01): add 5 essential researcher content slides to Part 1
```

Total impact: -7 lines (structural consolidation), +79 lines (new content) = +72 lines net
