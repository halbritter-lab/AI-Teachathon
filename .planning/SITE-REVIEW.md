# AI-Teachathon Website Review

**Date:** 2026-02-17
**Reviewer perspective:** Senior UI/UX designer, copywriter, senior academic lecturer
**Framework:** Nielsen's usability heuristics + Quality Matters rubric + WCAG 2.1 AA + Merrill's First Principles of Instruction
**Method:** Playwright full-page screenshots (desktop 1440x900 + iPhone 13 mobile), content analysis of all 7 pages

**Rating scale:** 1-3 Poor | 4-5 Below average | 6 Acceptable | 7 Good | 8 Very good | 9 Excellent | 10 Outstanding

---

## Page-by-Page Review

### 1. Home Page (index.md)

**Design: 7 | Content: 7 | Combined: 7.0/10**

Strengths:

- Gradient title ("AI-Teachathon") is visually striking and memorable
- Event details (date, time, location) immediately visible in the tagline - excellent information hierarchy
- Two clear CTA buttons with proper visual weight (brand vs alt)
- Three feature cards provide clear next-step pathways
- "What to Expect" section is concise and reassuring for beginners
- Mobile layout stacks cards nicely

Issues:

- Hero area feels sparse. No hero image, illustration, or visual element. Large blank space between nav and gradient text feels empty compared to leading workshop/conference sites that use an event photo, pattern, or illustration.
- Feature cards lack visual differentiation. All three cards look identical - same border, same layout, same weight. Without icons or color accents, users scan past them. The previous emoji icons were removed for being "unprofessional" - the solution should be better icons (SVG/line icons), not no icons.
- "What to Expect" section is below the fold on most viewports. The most reassuring copy for anxious beginners ("No prior experience required") is hidden below the card grid.
- No social proof or institutional branding. No Charite logo, no lab logo, no "Organized by" section. First-time visitors lack trust signals.
- Footer is minimal. "Halbritter Lab . CeRKiD . Charite Berlin" is plain text. Feels like a placeholder.

---

### 2. Setup Guide (setup.md)

**Design: 8 | Content: 9 | Combined: 8.5/10**

Strengths:

- Excellent step-by-step structure with clear numbering (SETUP-01 through SETUP-05)
- Info callout about admin access at the top - anticipates real problems
- Platform-specific H3 headings for Windows/macOS/Linux - all visible without toggling
- "Verify" checkpoints after each tool installation - great self-service design
- Terminal commands are copy-pasteable with proper formatting
- Final checklist with checkboxes is a satisfying completion tracker
- Friendly tone throughout ("Don't worry", "you're good", "we'll help")
- Optional items clearly marked to avoid overwhelming beginners

Issues:

- Wall of text on mobile. The page is very long and all sections look the same visually. No visual rhythm breaking up the content (no illustrations, icons, or colored sections).
- "On this page" sidebar (TOC) is helpful but gets long - could benefit from section grouping.
- The verification table at SETUP-05 has small text that is hard to read on dark backgrounds.
- Missing: estimated time per step. The intro says "15-20 minutes total" but individual steps don't indicate relative effort.

---

### 3. Agenda (agenda.md)

**Design: 9 | Content: 8 | Combined: 8.5/10**

Strengths:

- The Timeline component is the best-designed element on the entire site. Purple dots for highlighted segments, gray for others - clear visual hierarchy.
- Time labels are subtly styled, titles are bold - proper typography hierarchy.
- Links on timeline items connect to relevant pages - excellent cross-linking.
- Accessibility table at the bottom provides a text alternative for the visual timeline.
- Pacing note ("Times are approximate") reduces anxiety about rigid schedules.
- Mobile layout works well - timeline reads naturally in single column.

Issues:

- The "Segments at a Glance" table feels redundant. The Timeline component already shows all the same information in a more engaging format. This table duplicates content and adds visual clutter.
- No indication of segment duration. Users have to mentally subtract times to figure out how long each block is. Adding "(15 min)", "(30 min)" etc. would help.
- Break segment is understated. In a 3-hour workshop, the break is psychologically important. It could use a visual distinction (different background, horizontal rule, or icon).

---

### 4. AI Tools (ai-tools.md)

**Design: 5 | Content: 8 | Combined: 6.5/10**

Strengths:

- Content is comprehensive and well-researched
- The 4-level spectrum framework (Chat > IDE > CLI > Autonomous) is a brilliant pedagogical tool
- "Still useful for" / "Best for" / "Limitation" pattern is consistent and scannable
- Pricing information is practical and up-to-date
- "Recommended" tip boxes help decision-making
- "5 Tips" section is actionable and well-written
- Clear CTA at the bottom directing users forward

Issues:

- This is the worst-designed page visually. It is an extremely long wall of text (240+ lines) with no visual breaks. The full-page screenshot is a tiny column of text stretching for thousands of pixels.
- Tool comparison cards lack structure. Each tool section uses markdown headings + bold text + bullet lists, but they all blend together. No visual card containers, borders, or background differentiation. Users cannot quickly scan and compare.
- No comparison table. After reading 10 individual tool descriptions, users still cannot easily compare side-by-side. A summary comparison table (tool / type / cost / best for) at the top or bottom would be enormously helpful.
- Too many "Recommended" tip boxes. Four tools have recommendation badges, diluting the concept. If everything is recommended, nothing is.
- Missing visual: the spectrum diagram. The 4-level framework cries out for a simple visual diagram showing the progression.

---

### 5. Hands-On Guide (hands-on.md)

**Design: 6 | Content: 9 | Combined: 7.5/10**

Strengths:

- Exceptional instructional design. The two-phase approach (Follow Along then On Your Own) follows Merrill's "scaffolded practice" principle perfectly.
- Every step has: command, explanation, verify, troubleshoot. This consistency is pedagogically excellent.
- Collapsible troubleshooting sections keep the page clean while providing help.
- AI prompting section with good/bad comparisons is genuinely useful.
- Model-specific tips (Claude 4-block pattern vs Gemini concise style) show real expertise.
- Ready-to-use example prompts lower the barrier to entry.
- "Congratulations" milestone marker at the end of Phase 1 provides emotional satisfaction.

Issues:

- Page is extremely long (470+ lines). This is the most content-heavy page and on mobile it scrolls forever. Participants will lose their place constantly during the live workshop.
- No progress indicator. Users following along in real-time cannot tell where they are in the 8-step sequence. A step counter, progress bar, or visual breadcrumb would help enormously.
- Phase 2 feels abrupt after Phase 1. Phase 1 has 8 detailed steps with troubleshooting. Phase 2 says "same workflow, go for it" - the transition could use more scaffolding.
- Code blocks are visually monotonous. Bash commands, text prompts, and git output all use the same dark code block styling. Differentiating them would reduce cognitive load.
- The "How to Prompt AI Effectively" section should arguably be its own page or be positioned before the hands-on steps, not after. Users need prompting skills during the exercise, not after.

---

### 6. Ideas (ideas.md)

**Design: 7 | Content: 7 | Combined: 7.0/10**

Strengths:

- KidneyQuest featured project with CeRKiD zebra context is charming and mission-connected
- Alternative projects cover diverse interests (genomics, desktop apps, writing, RNAseq)
- "What Could AI Help With?" section addresses common pain points - relatable
- "Contribute Your Ideas" CTA with direct edit link demonstrates the GitHub workflow being taught
- Each project includes stack and "Good for" annotations

Issues:

- Alternative projects are highly technical for a "no prior experience required" audience. "AlphaGenome API", "Electron/Vue/SQLite", "LLM-as-judge approach" - these assume significant background knowledge.
- No difficulty indicators. Projects should be tagged (Beginner / Intermediate / Advanced) so participants can self-select.
- KidneyQuest section lacks a visual. A screenshot, mockup, or even a simple pixel-art zebra would make the featured project far more engaging.
- "Common Research Pain Points" bullet list is dense. Could use icons or visual cards to make each pain point scannable.
- No link to the actual KidneyQuest repository on this page. Users are told to wait for the session.

---

### 7. Resources (resources.md)

**Design: 6 | Content: 7 | Combined: 6.5/10**

Strengths:

- Timeline-based organization (Before/During/After) is excellent information architecture
- Cross-links to internal pages are present
- "Explore Further" section maps to alternative project ideas - good cross-referencing
- Clean, uncluttered layout

Issues:

- Bare link lists with no descriptions. Users see "Git Cheat Sheet (GitHub Education)" but no reason to click. Even one-line descriptions would help prioritize.
- No visual hierarchy between links. All links look identical. Primary/essential resources should be visually differentiated from supplementary ones.
- "Explore Further" section is niche. AlphaGenome docs, Electron docs, Zotero docs - these only apply to the specific alternative projects. Most participants will not use them. Could be moved to the Ideas page instead.
- Page is short and feels incomplete compared to the rich content on other pages. A "Books & Courses" subsection or "Community" section would add value.
- Some links may be dead. AlphaGenome docs URL looks like it could be a placeholder. GitHub Learning Lab was deprecated.

---

### 8. Slides (redirect page)

**Not rated** - redirect only. Functions as intended.

---

## Score Summary

| Page | Design | Content | Combined |
|------|--------|---------|----------|
| Home | 7 | 7 | 7.0 |
| Setup | 8 | 9 | 8.5 |
| Agenda | 9 | 8 | 8.5 |
| AI Tools | 5 | 8 | 6.5 |
| Hands-On | 6 | 9 | 7.5 |
| Ideas | 7 | 7 | 7.0 |
| Resources | 6 | 7 | 6.5 |
| **Average** | **6.9** | **7.9** | **7.4** |

---

## Weighted Score (formal framework)

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Visual Design | 20% | 6.9 | 1.38 |
| Content Quality | 30% | 7.9 | 2.37 |
| Usability | 25% | 7.0 | 1.75 |
| Accessibility | 25% | 6.5 | 1.63 |
| **Total** | **100%** | | **7.1/10** |

**Overall: 7.1/10 - Good.** Content is genuinely strong; design and accessibility are the primary areas for improvement.

---

## Accessibility Findings (WCAG 2.1 AA)

- **--vp-c-text-3 (#6c6c80 on #1e1e2e) fails AA contrast.** Used for timeline time labels and tertiary text. Ratio ~3.2:1, needs 4.5:1. Must be fixed.
- **--vp-c-text-2 (#a6a6b8 on #1e1e2e) barely passes AA.** Ratio ~4.3:1 against 4.5:1 threshold. Should be bumped up.
- **No skip-to-content link.** VitePress does not add one by default. Screen reader and keyboard-only users must tab through the entire nav/sidebar.
- **Code blocks lack visible language labels** for screen readers.

---

## Usability Heuristic Issues

- **No visibility of system status (Heuristic 1).** On the Hands-On page, users working through 8 steps have no progress indicator.
- **Weak error recovery discoverability (Heuristic 9).** Troubleshooting sections are excellent but hidden in collapsed details - no visual cue indicating "help available."
- **Limited flexibility (Heuristic 7).** No way for advanced users to skip setup sections. Anchor links in a "quick links" box at the top of Setup and Hands-On pages would help.

---

## Quality Matters Standards

- **QM Standard 2 (Learning Objectives):** The site lacks explicit learning objectives per page. The Hands-On guide ends with "What You've Learned" - but stating objectives at the start ("By the end of this page, you will be able to...") is proven to improve learning outcomes.
- **QM Standard 5 (Learning Activities):** The Hands-On page excels here. The AI Tools page is purely informational with no activity component - even a simple "Try it now" prompt would transform it.

---

## Global Improvements (affect all pages)

1. **Add visual breaks to long pages.** AI Tools, Hands-On, and Setup are walls of text. Insert horizontal rules, colored section dividers, or alternating subtle background sections. VitePress custom containers could be styled differently.

2. **Add icons to section headings.** Line icons (Lucide or inline SVGs) next to H2/H3 headings would dramatically improve scannability. Especially needed on Home (feature cards), AI Tools (tool listings), and Ideas (project cards).

3. **Improve information density on mobile.** Multiple pages scroll excessively. Use collapsible sections for platform-specific instructions and secondary content.

4. **Add a visual identity element.** No logo, illustration, or mascot graphic anywhere. A simple event logo or CeRKiD zebra illustration in the hero section would improve trust and memorability.

5. **Typography contrast fix.** Bump --vp-c-text-3 from #6c6c80 to at least #8a8a9e for AA compliance. Consider bumping --vp-c-text-2 from #a6a6b8 to #b4b4c6.

6. **Consistent end-of-page navigation.** Some pages end with "Head to the hands-on guide" CTAs, others do not. Every page should end with a clear "Next step" pointing to the next page in sidebar flow.

7. **Add learning objectives at page tops.** Brief "By the end of this page, you will..." boxes on Setup, AI Tools, Hands-On, and Ideas pages.

---

## Targeted Improvements (priority order)

### Priority 1: AI Tools page redesign

- Add a comparison summary table at top (Tool | Type | Cost | Best For)
- Reduce "Recommended" badges to 2 maximum (Copilot for students, Gemini for free)
- Add a simple visual diagram for the 4-level spectrum
- Use styled card containers around each tool

### Priority 2: Home page hero enhancement

- Add a hero image or illustration (gradient mesh, geometric pattern, or CeRKiD zebra)
- Restore icons to feature cards using SVG line icons instead of emojis
- Move "No prior experience required" reassurance above the fold (into hero tagline or as a badge)

### Priority 3: Hands-On page navigation

- Add a step progress indicator at the top (Step 1 of 8, clickable dots or numbers)
- Move AI prompting section before the steps (or link to it from Step 4 where participants first use AI)
- Add a floating sidebar widget highlighting the current step

### Priority 4: Resources page enrichment

- Add one-line descriptions to each link
- Verify all links (especially AlphaGenome docs and GitHub Learning Lab)
- Move project-specific resources to the Ideas page
- Add a "Quick Start" highlighted box with the 3-5 most essential resources

### Priority 5: Accessibility fixes

- Fix --vp-c-text-3 contrast ratio (currently fails WCAG AA)
- Bump --vp-c-text-2 for better readability
- Add skip-to-content link via VitePress layout slot

---

## Screenshots

Desktop (1440x900) and mobile (iPhone 13) screenshots captured via Playwright are stored in `tests/screenshots/` for reference:

- home.png, home-mobile.png
- setup.png, setup-mobile.png
- agenda.png, agenda-mobile.png
- ai-tools.png
- hands-on.png, hands-on-mobile.png
- ideas.png
- resources.png
