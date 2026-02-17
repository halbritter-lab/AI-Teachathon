---
phase: 04-knowledge-pages
plan: 02
subsystem: docs
tags: [vitepress, markdown, git, github, ai-prompting, workshop-guide]

# Dependency graph
requires:
  - phase: 02-core-content
    provides: Setup guide with friendly tone and verification pattern
  - phase: 01-scaffold-deploy
    provides: VitePress site structure with sidebar navigation
provides:
  - Complete hands-on coding guide for 90-minute workshop session
  - Two-phase workshop structure (Follow Along → On Your Own)
  - 8-step Git workflow with troubleshooting
  - AI prompting guide with model-specific tips
  - 6 ready-to-use example prompts
affects: [05-community-polish]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Collapsible troubleshooting using VitePress details containers"
    - "Copy-paste command blocks with verification steps"
    - "Two-phase learning progression (guided → autonomous)"

key-files:
  created: []
  modified:
    - docs/hands-on.md

key-decisions:
  - "8-step Git workflow covers full GitHub Flow (fork to merge)"
  - "Troubleshooting inline after each step for self-service learning"
  - "Phase 1 uses AI-Teachathon repo itself (familiar environment)"
  - "KidneyQuest introduced with minimal context (CeRKiD zebra, Chrome dino style)"
  - "Prompting guide teaches 4 generic principles before model-specific application"
  - "Example prompts cover both workflow tasks and project-building tasks"

patterns-established:
  - "Step pattern: command block → explanation → verify → troubleshoot"
  - "Platform notes appear where commands differ (Windows/macOS/Linux)"
  - "AI prompt examples integrated into workflow steps"

# Metrics
duration: 5min
completed: 2026-02-17
---

# Phase 04 Plan 02: Hands-On Coding Guide Summary

**Complete self-service workshop guide with 8-step Git workflow, collapsible troubleshooting, KidneyQuest framing, and AI prompting principles for Claude and Gemini**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-17T08:23:37Z
- **Completed:** 2026-02-17T08:28:08Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments

- Written complete hands-on guide (460+ lines) replacing placeholder content
- 8-step Git workflow with copy-paste commands, verification, and troubleshooting at each step
- Two-phase structure: Follow Along (AI-Teachathon repo) then On Your Own (KidneyQuest/personal projects)
- KidneyQuest framed as CeRKiD zebra Chrome-dino-style game with vanilla HTML5 Canvas
- AI prompting guide with 4 core principles and model-specific tips for Claude (4-block pattern) and Gemini (concise direct)
- 6 ready-to-use example prompts covering understanding codebases, writing commits, fixing errors, adding features, documentation, and code review

## Task Commits

Each task was committed atomically:

1. **Task 1-2: Write complete hands-on guide** - `b679db5` (feat)

**Note:** Both tasks were written in a single efficient pass since the content is a cohesive whole.

## Files Created/Modified

- `docs/hands-on.md` - Complete hands-on coding guide for 90-minute workshop session with Git workflow and AI prompting tips

## Decisions Made

1. **Step 4 troubleshooting added** - Added collapsible troubleshooting section for VS Code opening, file navigation, and AI response issues (Rule 3 - required for self-service goal)
2. **Unified task execution** - Wrote both Phase 1 and Phase 2 sections in one pass for content cohesion
3. **KidneyQuest context minimal** - Brief introduction per user decision from CONTEXT.md discussion
4. **Official docs links** - Linked Claude and Gemini prompting best practices from official documentation

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Missing Critical] Added Step 4 troubleshooting section**

- **Found during:** Task 1 verification (counted only 7 troubleshooting sections, need 8)
- **Issue:** Step 4 (Make a Change with AI Help) lacked troubleshooting section
- **Fix:** Added details container with 3 common problems: VS Code won't open, can't find file, AI suggested wrong format
- **Files modified:** docs/hands-on.md
- **Verification:** grep count shows 8 troubleshooting sections, one per Git step
- **Committed in:** b679db5 (via Edit tool before final commit)

---

**Total deviations:** 1 auto-fixed (Rule 3 - blocking/missing critical)
**Impact on plan:** Essential for meeting "each step has troubleshooting" requirement. No scope creep.

## Issues Encountered

None - content written to spec, build succeeded on first attempt.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Hands-on guide complete and ready for workshop
- Page matches established site tone (friendly, casual, no jargon without definition)
- All VitePress containers render correctly (info, tip, details)
- Links to /setup and /ai-tools are present
- Phase 04 complete (both plans done) - ready for Phase 05 (Community Polish)

---

_Phase: 04-knowledge-pages_
_Completed: 2026-02-17_
