---
phase: 03-presentation
plan: 01
type: summary
subsystem: build-toolchain
tags: [marp, presentation, build-pipeline, css-theme, devtools]
dependencies:
  requires:
    - 01-01-SUMMARY (VitePress + Tailwind foundation)
    - 01-02-SUMMARY (Makefile and dev tooling)
  provides:
    - Marp CLI toolchain
    - Custom dark theme with teal accents
    - Presentation build pipeline
    - VitePress sidebar integration
  affects:
    - 03-02 (will write slide content using this infrastructure)
tech-stack:
  added:
    - "@marp-team/marp-cli@4.2.3"
  patterns:
    - Custom Marp theme extending Gaia invert
    - Coordinated build pipeline (marp → vitepress)
    - Test-driven infrastructure (test slides verify build)
key-files:
  created:
    - docs/.vitepress/theme/marp-theme.css
    - docs/presentation/slides.md
    - docs/public/presentation.html
  modified:
    - package.json
    - package-lock.json
    - Makefile
    - docs/.vitepress/config.mts
    - .prettierignore
    - .markdownlint-cli2.jsonc
decisions:
  - id: marp-theme-base
    choice: Extend Gaia invert theme
    rationale: Gaia provides professional presentation baseline, invert class gives dark mode, custom vars add project identity
    date: 2026-02-16
  - id: theme-colors
    choice: Dark background (#1a1a1a) with teal accents (#02c797)
    rationale: Matches site's dark academic aesthetic, teal differentiates from purple site branding
    date: 2026-02-16
  - id: build-coordination
    choice: Run marp before vitepress in docs:build script
    rationale: Presentation HTML must exist before VitePress copies public/ directory to dist/
    date: 2026-02-16
  - id: lint-exclusion
    choice: Exclude docs/presentation/ from markdownlint
    rationale: Marp slide markdown has different conventions (multiple H1s per file, special directives)
    date: 2026-02-16
metrics:
  tasks: 2
  commits: 2
  files-modified: 12
  duration: 5min
  completed: 2026-02-16
---

# Phase 03 Plan 01: Marp Toolchain Summary

**One-liner:** Marp CLI with custom dark theme (teal #02c797 accents on #1a1a1a background) extending Gaia invert, integrated into npm and Make build pipelines

## What Was Built

Established the complete Marp presentation infrastructure:

1. **Marp CLI Integration**
   - Installed @marp-team/marp-cli@4.2.3 as dev dependency
   - Verified installation with `npx marp --version`

2. **Custom Dark Theme**
   - Created `docs/.vitepress/theme/marp-theme.css` extending Gaia invert
   - Registered as `teachathon` theme via `/* @theme teachathon */` comment
   - Dark background (#1a1a1a) with teal highlight (#02c797) and hover (#04e6af)
   - Styled headers, links, code blocks, and pagination with theme colors

3. **Build Pipeline**
   - Added `build:marp` and `dev:marp` scripts to package.json
   - Updated `docs:build` to run Marp before VitePress
   - Added `build-marp` target to Makefile
   - Updated `clean` target to remove generated presentation.html

4. **VitePress Integration**
   - Added "Slides" link to sidebar navigation (after Agenda)
   - Links to `/presentation.html` (served from docs/public/)

5. **Test Infrastructure**
   - Created minimal test slides at `docs/presentation/slides.md`
   - Generated `docs/public/presentation.html` (70KB) with themed output
   - Verified full build pipeline works end-to-end

6. **Quality Tooling**
   - Excluded `docs/public/presentation.html` from Prettier (generated output)
   - Excluded `docs/presentation/slides.md` from Prettier (Marp syntax conflicts)
   - Excluded `docs/presentation/` from markdownlint (different markdown conventions)

## Tasks Completed

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| 1 | Install Marp CLI and create custom dark theme | 714fbce | package.json, package-lock.json, marp-theme.css |
| 2 | Wire build scripts and add presentation link | 145e5fa | package.json, Makefile, config.mts, .prettierignore, .markdownlint-cli2.jsonc, slides.md, presentation.html, agenda.md, setup.md |

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed markdownlint errors in existing content**
- **Found during:** Task 2 (make check revealed pre-existing errors)
- **Issues:**
  - `docs/agenda.md`: Redundant H1 heading (duplicated frontmatter title)
  - `docs/agenda.md`: Table formatting inconsistency (pipe spacing)
  - `docs/setup.md`: Table column alignment issues
  - `docs/setup.md`: Trailing punctuation in heading ("Ready to Go!")
- **Fix:**
  - Removed redundant H1 from agenda.md
  - Reformatted tables with consistent column widths
  - Removed trailing exclamation mark from heading
- **Files modified:** docs/agenda.md, docs/setup.md
- **Commit:** 145e5fa (included in Task 2)
- **Rationale:** Lint errors block `make check` which is part of task verification. These were bugs from Phase 2 that needed fixing to complete the task.

**2. [Rule 3 - Missing Critical] Exclude presentation files from linters**
- **Found during:** Task 2 (lint failed on slides.md)
- **Issue:** Marp slides have different markdown conventions (multiple H1s, frontmatter directives) that conflict with standard markdown linting
- **Fix:**
  - Added `docs/presentation/` to `.markdownlint-cli2.jsonc` ignores
  - Added `docs/presentation/slides.md` to `.prettierignore`
  - Added `docs/public/presentation.html` to `.prettierignore`
- **Files modified:** .markdownlint-cli2.jsonc, .prettierignore
- **Commit:** 145e5fa (included in Task 2)
- **Rationale:** Blocking issue - can't run `make check` without excluding Marp files from incompatible linters

## Technical Decisions

### 1. Theme Architecture
**Decision:** Extend Gaia invert base theme with CSS variable overrides
**Rationale:**
- Gaia provides professional presentation foundation
- Invert class gives dark mode baseline
- CSS variables allow surgical customization without reimplementing full theme
- `@theme teachathon` comment registers custom theme for frontmatter use

### 2. Color Scheme
**Decision:** Dark background (#1a1a1a) with teal accents (#02c797)
**Rationale:**
- Matches site's dark academic aesthetic
- Teal differentiates presentation branding from purple site colors
- High contrast (#02c797 on #1a1a1a) ensures readability
- Hover state (#04e6af) provides interactive feedback

### 3. Build Order
**Decision:** Run `npm run build:marp` before VitePress in `docs:build` script
**Rationale:**
- VitePress copies `docs/public/` to `dist/` during build
- Presentation HTML must exist before VitePress runs
- Sequential execution (`&&`) ensures Marp completes before VitePress starts

### 4. Lint Configuration
**Decision:** Exclude `docs/presentation/` from markdownlint
**Rationale:**
- Marp slides use different markdown conventions than documentation
- Multiple H1 headings per file are normal (one per slide)
- Marp frontmatter directives trigger false positives
- Prettier's markdown formatting conflicts with Marp's slide separator syntax (`---`)

## Verification Results

All success criteria met:

- ✅ `npx marp --version` returns 4.2.3
- ✅ `npm run build:marp` generates 70KB presentation.html
- ✅ `npm run docs:build` completes without errors
- ✅ `make check` passes (lint + format + build)
- ✅ Generated HTML contains custom theme colors (#02c797, #1a1a1a)
- ✅ VitePress sidebar shows "Slides" link after "Agenda"

## Next Phase Readiness

**Ready for 03-02 (Slide Content):** YES

Infrastructure is fully operational:
- `npm run dev:marp` for live slide development
- `npm run build:marp` for production HTML
- `make check` verifies build works
- Test slides confirm theme renders correctly

**Phase 03 Status:** 1/2 plans complete

## Known Issues / Tech Debt

None. All tooling integrated cleanly.

## Files Changed

### Created (3)
- `docs/.vitepress/theme/marp-theme.css` — Custom Marp theme extending Gaia invert
- `docs/presentation/slides.md` — Test slides for build verification
- `docs/public/presentation.html` — Generated presentation (70KB)

### Modified (9)
- `package.json` — Added marp-cli dependency and build scripts
- `package-lock.json` — Dependency lockfile updated
- `Makefile` — Added build-marp target, updated clean target
- `docs/.vitepress/config.mts` — Added Slides link to sidebar
- `.prettierignore` — Excluded generated HTML and Marp slides
- `.markdownlint-cli2.jsonc` — Excluded presentation directory
- `docs/agenda.md` — Fixed lint errors (redundant H1, table formatting)
- `docs/setup.md` — Fixed lint errors (table alignment, heading punctuation)
- `docs/.vitepress/theme/index.ts` — Reformatted by Prettier
- `docs/.vitepress/theme/style.css` — Reformatted by Prettier
- `docs/.vitepress/theme/marp-theme.css` — Reformatted by Prettier

## Commit History

```
145e5fa feat(03-01): wire build scripts and add presentation link
714fbce chore(03-01): install marp-cli and create custom dark theme
```

## Impact Assessment

**Build Process:** Low risk
- Marp runs independently before VitePress
- Failure in marp build fails overall build (early detection)
- No changes to VitePress build itself

**Dev Experience:** Positive
- `npm run dev:marp --watch` enables live slide editing
- `make build-marp` provides standalone build target
- `make check` validates presentation builds correctly

**Maintenance:** Low
- Marp CLI is stable (v4.2.3)
- Theme is pure CSS (no complex dependencies)
- Test slides serve as documentation/smoke test

## Related Documentation

- Marp CLI: https://github.com/marp-team/marp-cli
- Gaia theme: https://github.com/marp-team/marp-core/tree/main/themes
- Custom Marp themes: https://marpit.marp.app/theme-css
