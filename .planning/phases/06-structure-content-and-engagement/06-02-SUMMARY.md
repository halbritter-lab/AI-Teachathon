---
phase: 06-structure-content-and-engagement
plan: 02
subsystem: presentation
tags: [marp, slides, education, engagement, learning-objectives]
completed: 2026-02-17
duration: 7m

requires:
  - 06-01 (restructured slides with new content)

provides:
  - Learning objectives bookend (What You'll Learn / What You Now Know)
  - Engagement prompts throughout the presentation
  - Takeaway-based slide titles

affects:
  - 07-* (visual design phase - titles are now finalized)

tech-stack:
  added: []
  patterns: [educational-framing, active-learning, outcome-based-titles]

key-files:
  created: []
  modified:
    - docs/presentation/slides.md

decisions:
  - id: OBJ-01
    what: Learning objectives as slide 2
    why: Prime audience expectations early, enable recap closure
    impact: Sets framing for entire session
  - id: ENG-01
    what: 4 engagement prompts spaced across 30-minute presentation
    why: Maintain attention, check understanding, build interaction
    impact: Transforms passive lecture into participatory experience
  - id: TITL-01
    what: Rewrite all content titles as takeaway statements
    why: Titles should state what learners gain, not just topics covered
    impact: Every slide communicates value immediately
---

# Phase 6 Plan 2: Learning Objectives, Engagement, and Takeaway Titles Summary

**One-liner:** Add educational framing with learning objectives bookends, 4 engagement prompts, and transform all 24 content slide titles into takeaway statements.

## What Was Delivered

### Learning Objectives Bookend
- **"What You'll Learn Today"** slide added as slide 2 (after title)
  - 5 objectives using action verbs (Understand, Protect, Explain, Navigate, Follow)
  - Primes audience for key outcomes
- **"What You Now Know"** recap slide added before closing (second-to-last)
  - Reinforces 5 main takeaways
  - Bridges theory to hands-on practice
  - Creates satisfying closure loop

### Engagement Moments
Added 4 ENGAGEMENT prompts in speaker notes, strategically spaced:
1. **"We've All Been Here" slide (~minute 2):** Show of hands - file version chaos
2. **"Git Is Local, GitHub Is Online" slide (~minute 8):** Quick check - laptop dies scenario
3. **"AI Coding Tools Evolved Rapidly Since 2022" slide (~minute 15):** Show of hands - AI tool experience
4. **"Five Steps from Clone to Merge" slide (~minute 25):** Turn to neighbor - predict difficulty

Added 1 dedicated question slide with large centered text:
- **Question:** "If you accidentally commit a password to GitHub, can you just delete the file?"
- **Position:** After PII management content, before branches
- **Purpose:** Test comprehension of Git history immutability
- **Format:** Uses `_class: lead` for emphasis

### Takeaway-Based Titles
Transformed 24 content slide titles from topic labels to outcome statements:

**Before → After examples:**
- "What is a Repository?" → "A Repository Tracks Your Entire Project History"
- "AI Generates Code Fast" → "AI Is Fast - Version Control Keeps You Safe"
- "Git vs GitHub" → "Git Is Local, GitHub Is Online"
- "Branches: Parallel Experiments" → "Branches Let You Experiment Without Risk"
- "Choose Your Tool" → "Choose the Tool That Fits Your Workflow"

**Unchanged (already effective):**
- "We've All Been Here" (relatable statement)
- "Experiment Freely, Fail Safely" (already takeaway)
- "Private Repos Protect Unpublished Research" (already takeaway)
- "Never Commit Patient Data or Credentials" (already imperative)

## Technical Implementation

### Slide Structure
- **Total slides:** 40 (originally 32 in 06-01)
  - Title slide (1)
  - Learning objectives slide (1)
  - Content slides (35)
  - Question slide (1)
  - Recap slide (1)
  - Closing CTA (1)

### Engagement Strategy
- **Variety:** Show of hands (2), quick check (1), pair discussion (1), dedicated question (1)
- **Timing:** Spaced approximately 5-8 minutes apart across 30-minute presentation
- **Implementation:** ENGAGEMENT prefix in speaker notes for easy identification

### Title Transformation Principles Applied
1. **Action-oriented:** Use verbs that show what learners can do
2. **Outcome-focused:** State the benefit or capability gained
3. **Concrete:** Avoid vague terms, be specific about the takeaway
4. **Concise:** Keep under 60 characters where possible
5. **No questions:** Transform "What is X?" to "X Does Y"

## Verification Results

✅ `make build-marp` succeeds without errors
✅ Learning objectives slide appears at line 23 (before "We've All Been Here" at line 37)
✅ Recap slide appears at line 478 (before "Let's Get Started!" at line 495)
✅ 4 ENGAGEMENT prompts verified with grep (all use ENGAGEMENT: prefix)
✅ 1 dedicated question slide with `_class: lead` verified
✅ All old topic-label titles removed (0 matches for "What is", "Why X Matter", etc.)
✅ All new takeaway titles present (verified with grep)
✅ `make check` passes (lint + format + build)
✅ Presentation.html rebuilt successfully

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Prettier formatting needed**
- **Found during:** Post-commit verification (make check)
- **Issue:** Layout.vue, index.ts, slides.md had formatting inconsistencies
- **Fix:** Ran `make format` to apply Prettier
- **Files modified:** docs/.vitepress/theme/Layout.vue, docs/.vitepress/theme/index.ts, docs/slides.md
- **Commit:** 20ccccb

**2. [Rule 2 - Missing Critical] Rebuild presentation.html after slide changes**
- **Found during:** make check verification
- **Issue:** Presentation.html was out of sync with updated slides.md
- **Fix:** Ran `make build-marp` to regenerate HTML from Marp source
- **Files modified:** docs/public/presentation.html
- **Commit:** 20ccccb (combined with formatting fix)

## Decisions Made

| ID | Decision | Rationale | Impact |
|----|----------|-----------|--------|
| OBJ-01 | Learning objectives as slide 2 | Educational best practice: prime expectations early, enable recap closure | Sets framing for entire session, creates bookend structure |
| OBJ-02 | Recap before closing CTA | Reinforce takeaways before transition to hands-on | Provides satisfying closure, bridges theory to practice |
| ENG-01 | 4 engagement prompts spaced 5-8 minutes apart | Attention span research: re-engage every 5-10 minutes | Maintains focus, checks understanding, builds interaction |
| ENG-02 | Dedicated question slide after PII content | Test comprehension of critical safety concept (history immutability) | Reinforces security mindset before moving to collaboration topics |
| TITL-01 | Transform all titles to takeaway statements | Outcome-based learning: titles should communicate value, not just topics | Every slide immediately communicates what learners gain |

## Metrics

**Slide count:** 40 (up from 32 in 06-01)
- Added: 2 objectives slides, 1 question slide
- Net increase: +8 slides (also includes merged Part 3 content from 06-01)

**Engagement touchpoints:** 5 total
- Speaker note prompts: 4
- Dedicated question slide: 1

**Title transformations:** 24 content slides
- Topic labels replaced: 24
- Already effective (unchanged): 4
- Section breaks (unchanged): 4
- Special slides (unchanged): 4

**Build performance:** 14.35s (VitePress build)

**Duration:** 7 minutes

## Commits

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| 1 | Add learning objectives and recap slides | 7fb6ac7 | docs/presentation/slides.md |
| 2 | Add engagement prompts and question slide | 59b8018 | docs/presentation/slides.md |
| 3 | Rewrite slide titles as takeaway statements | 44d5cb6 | docs/presentation/slides.md |
| - | Apply Prettier formatting and rebuild | 20ccccb | Layout.vue, index.ts, slides.md, presentation.html |

**Total commits:** 4 (3 feature, 1 chore)

## Next Phase Readiness

**Phase 7 prerequisites:** ✅ Complete
- Content structure finalized (06-01)
- Educational framing complete (06-02)
- Titles finalized and consistent
- Engagement strategy implemented

**Ready for Phase 7:** Visual design and Marp enhancements
- Custom theme refinements
- Visual hierarchy improvements
- Slide layout optimizations
- Image and diagram integration

**No blockers identified.**

## Key Learnings

1. **Educational framing matters:** Learning objectives and recap create psychological closure
2. **Engagement variety works:** Mix show-of-hands, questions, and pair discussions for different interaction types
3. **Takeaway titles are clearer:** "Git Is Local, GitHub Is Online" communicates more than "Git vs GitHub"
4. **Timing is strategic:** Space engagement moments 5-8 minutes apart to maintain attention
5. **Question slides reinforce:** Dedicated question slide after PII content tests critical safety concept

## References

- Plan source: `.planning/phases/06-structure-content-and-engagement/06-02-PLAN.md`
- Modified file: `docs/presentation/slides.md`
- Build output: `docs/public/presentation.html`
- Previous plan: `06-01-SUMMARY.md`
