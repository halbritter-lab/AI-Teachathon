# Phase 6: Structure, Content, and Engagement - Research

**Researched:** 2026-02-17
**Domain:** Presentation design, technical communication, educational content
**Confidence:** HIGH

## Summary

This research covers how to revise an existing Marp presentation to improve content completeness, engagement, learning objectives, and slide effectiveness for non-technical researchers. The presentation review (PRESENTATION-REVIEW.md) identified 7 priority areas requiring specific interventions: missing essential content, learning objectives, engagement moments, structure rebalancing, slide titles, and Marp feature utilization.

The standard approach for technical presentations to non-technical audiences involves: (1) explicit learning objectives at start and recap at end, (2) takeaway-driven slide titles that state conclusions rather than topics, (3) embedded engagement prompts every 5-7 minutes, (4) essential content coverage appropriate to the audience domain (for medical researchers: PII protection, private repos, .gitignore), and (5) balanced structure avoiding thin sections.

**Primary recommendation:** Follow the presentation review's 7 priority improvements in order. Content additions (Priority 1) directly address researcher safety concerns and should be implemented before structural changes (Priority 5) to avoid rework.

## Standard Stack

The established tools and formats for this domain:

### Core
| Tool | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Marp | Current (2026) | Markdown-to-presentation | Industry standard for technical content, version control friendly |
| Conventional Commits | v1.0.0 | Commit message format | Machine-readable, semantic versioning compatible |
| Semantic Versioning | v2.0.0 | Version numbering | Research reproducibility, dependency management |

### Supporting
| Concept | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| PLOS "Ten Simple Rules" | 2021 | Slide design framework | All academic presentations |
| Cognitive Load Theory | Established | Content density guidance | Information-heavy topics |
| SMART Learning Objectives | Established | Objective writing | All educational content |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Marp | PowerPoint/Keynote | More visual features but version control unfriendly, binary format |
| Conventional Commits | Free-form messages | More flexibility but no automation, harder to parse history |

**Installation:**
```bash
# Marp CLI already installed in project
npm install -g @marp-team/marp-cli  # If needed
```

## Architecture Patterns

### Recommended Slide Structure for Educational Presentations

Based on PLOS and cognitive load research, optimal structure:

```
1. Title slide (with compelling subtitle/hook)
2. Learning objectives ("What You'll Learn Today")
3. Opening hook (problem/scenario)
4. Core content sections
   - Section breaks as visual signposts
   - 5-7 slides per section maximum
   - Engagement prompt every 5-7 minutes
5. Recap slide ("What You Now Know")
6. Closing CTA
```

### Pattern 1: Learning Objectives Framing

**What:** Explicit objectives at start, revisited at end
**When to use:** All educational presentations
**Example:**
```markdown
# What You'll Learn Today

By the end of this session, you'll be able to:
- Understand Git basics: repos, commits, branches, PRs
- Protect your data: .gitignore, PII management, private repos
- Know why version control matters when using AI tools
- Navigate the AI tool landscape
- Follow the Git workflow hands-on with KidneyQuest

<!-- Use action verbs: understand, identify, apply, demonstrate -->
```

**Best practices:**
- Use action verbs (identify, explain, apply, demonstrate)
- Keep to 3-5 objectives maximum
- Write from learner perspective ("you'll be able to")
- Make measurable when possible

**Source:** [APHA Guidelines for Writing Learning Objectives](https://apha.confex.com/apha/learningobjectives.htm), [Yale Poorvu Center - Writing Learning Goals](https://poorvucenter.yale.edu/teaching/teaching-resource-library/writing-learning-goals-objectives-and-outcomes)

### Pattern 2: Takeaway-Driven Slide Titles

**What:** Titles state the conclusion/takeaway, not the topic
**When to use:** All content slides (not section breaks)
**Example:**
```markdown
<!-- BAD: Topic label -->
# What is a Repository?

<!-- GOOD: Takeaway statement -->
# A Repository Tracks Your Entire Project History
```

**Transformation examples from review:**
- "Branches: Parallel Experiments" → "Branches Let You Experiment Without Risk"
- "Why Commit Messages Matter" → "Good Commit Messages Tell the Story"
- "Git vs GitHub" → "Git Is Local, GitHub Is Online"
- "AI Generates Code Fast" → "AI Is Fast - Version Control Keeps You Safe"

**Best practices:**
- Keep to 1-2 lines, max 15 words
- Use active voice
- State the "so what" not the "what"
- Can include key quantitative data if relevant

**Source:** [McKinsey Action Titles Guide](https://slideworks.io/resources/how-to-write-action-titles-like-mckinsey), [Storytelling with Data - Slide Titles](https://www.storytellingwithdata.com/blog/2020/3/5/transforming-slide-titles), [Six Minutes - Assertion Evidence Design](https://sixminutes.dlugan.com/assertion-evidence-design-presentation-slides/)

### Pattern 3: Engagement Moments

**What:** Planned interaction points every 5-7 minutes
**When to use:** Presentations longer than 10 minutes
**Example:**

```markdown
# We've All Been Here

final_v3.docx
final_v3_REALLY_final.docx
final_v3_REALLY_final_reviewed.docx

<!-- ENGAGEMENT: Show of hands - who has more than 5 versions of a file right now? Pause for laughter/recognition. This builds rapport. -->
```

**Interaction types:**
1. **Show of hands** - Quick polls, experience checks
2. **Turn to neighbor** - 30-second pair discussions
3. **Question slides** - Dedicated slide with large text question
4. **Think-pair-share** - Individual reflection then discussion

**Placement strategy:**
- After opening hook (check shared experience)
- Mid-section (re-engage attention)
- Before transitions (bridge to next topic)
- After complex content (check understanding)

**Source:** [Duarte - 11 Audience Engagement Strategies](https://www.duarte.com/blog/audience-engagement-strategies-presentations/), [Hamilton College - Engaging Your Audience](https://www.hamilton.edu/academics/centers/oralcommunication/guides/how-to-engage-your-audience-and-keep-them-with-you), [PMC - Delivering an Impactful Presentation](https://pmc.ncbi.nlm.nih.gov/articles/PMC11487326/)

### Pattern 4: Essential Researcher Content

**What:** Domain-specific content critical to audience safety/success
**When to use:** When audience has unique risks (medical research, clinical data)
**Required topics for medical researchers:**

```markdown
# Private Repos Protect Unpublished Research

**When to use each:**
- **Public repos:** Open source, teaching materials, published tools
- **Private repos:** Unpublished research, patient-adjacent data, pre-publication code

**Default for medical research:** Start private, make public when ready to share

<!-- For Charite/medical research context, private is the safe default -->
```

```markdown
# .gitignore: Your First Defense Against Data Leaks

**What it is:** A file telling Git which files to never track

**What to ignore:**
- Large data files (CSVs, FASTQs, imaging datasets)
- Environment files (.env, API keys, credentials)
- Binary files (compiled code, PDFs)
- OS artifacts (.DS_Store, Thumbs.db)

<!-- .gitignore prevents accidents before they happen -->
```

```markdown
# Never Commit Patient Data or Credentials

**The rules:**
- No patient data, even "anonymized"
- No API keys, passwords, or tokens
- No institutional credentials

**If you accidentally commit sensitive data:**
- It's in the history forever
- Rewriting history is complex and painful
- Prevention is essential

**Best practice:** Review diffs before committing
```

```markdown
# Conventional Commits: Format for Clarity

**Format:** `type(scope): description`

**Common types:**
- `feat:` New feature (bumps MINOR version)
- `fix:` Bug fix (bumps PATCH version)
- `docs:` Documentation only
- `refactor:` Code restructure, no behavior change
- `test:` Add or update tests

**Example:** `feat: add gene search filter`
**Example:** `fix: correct variant validation for ENSG format`

<!-- KidneyQuest uses this format - show real examples from git log -->
```

```markdown
# Semantic Versioning: MAJOR.MINOR.PATCH

**Format:** v1.2.3
- **MAJOR** (1): Breaking changes, incompatible API
- **MINOR** (2): New features, backward compatible
- **PATCH** (3): Bug fixes, backward compatible

**Why researchers care:**
- Cite specific versions in papers
- Know when updates break things
- Reproducibility depends on version tracking

**Example:** Paper cites "AnalysisTool v2.3.1" - MINOR bump to v2.4.0 is safe, MAJOR bump to v3.0.0 may break analysis
```

**Source:** [GitHub Documentation - About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories), [Atlassian - .gitignore Tutorial](https://www.atlassian.com/git/tutorials/saving-changes/gitignore), [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/), [Semantic Versioning Specification](https://semver.org/)

### Anti-Patterns to Avoid

- **Front-loading theory without engagement** - 20+ slides before any interaction kills attention
- **Identical slide templates in sequence** - Tool category slides 19-21 are visually monotonous
- **Single-slide sections** - Part 3 (AI Timeline) doesn't justify a section break
- **Vague titles** - "There's a Better Way" tells nothing, "Version Control Unlocks AI's Potential" states the claim
- **Assumptions without verification** - Don't assume command line familiarity, acknowledge skill levels

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Commit message format | Custom format | Conventional Commits v1.0.0 | Enables automation, semantic versioning, changelog generation |
| Version numbering | Date-based or arbitrary | Semantic Versioning v2.0.0 | Communicates breaking changes, dependency management |
| Slide design framework | Ad-hoc rules | PLOS "Ten Simple Rules" | Research-backed, peer-reviewed, field-tested |
| Learning objectives | Informal goals | SMART framework | Measurable, audience-focused, assessment-aligned |
| .gitignore templates | Custom lists | GitHub's .gitignore templates | Community-vetted, language-specific, comprehensive |

**Key insight:** Technical communication has mature, field-tested standards. Research-backed frameworks outperform ad-hoc approaches for audience comprehension and retention.

## Common Pitfalls

### Pitfall 1: Teaching Without Objectives

**What goes wrong:** Audience doesn't know what to focus on, leaves without clear takeaways
**Why it happens:** Presenter assumes structure is obvious, or objectives seem redundant
**How to avoid:**
- Add "What You'll Learn Today" slide after title (2-4 bullet points)
- Add "What You Now Know" recap before closing CTA
- Use action verbs (identify, apply, demonstrate)
- Limit to 3-5 objectives maximum
**Warning signs:** No clear "by the end of this session, you'll be able to..." statement

**Source:** Review feedback - "No explicit learning objectives. Objectives are never articulated or revisited."

### Pitfall 2: Topic Labels Instead of Takeaways

**What goes wrong:** Slides state subject matter but not the conclusion, forcing audience to infer meaning
**Why it happens:** Academic tradition of chapter-style headings, easier to write topics than conclusions
**How to avoid:**
- Ask "what's the so-what of this slide?"
- Rewrite titles as statements, not questions or labels
- Test: can someone reading only titles understand the presentation flow?
- Use the "headline test" - would this work as a newspaper headline?
**Warning signs:** Titles starting with "What is", "Types of", "Overview of"

**Source:** Review identified 9 slides with topic-label titles vs. 1 with takeaway title

### Pitfall 3: Passive Lecture Format for 30 Minutes

**What goes wrong:** Attention lapses happen within first minute, compound over time, audience disengages
**Why it happens:** Easier to prepare lecture than interaction, concern about time constraints
**How to avoid:**
- Plan engagement moments every 5-7 minutes minimum
- Use speaker notes to prompt interaction (show of hands, questions, pair discussion)
- Add 1-2 dedicated question slides with large text
- Start with shared experience (filename chaos slide is excellent)
**Warning signs:** Zero questions posed, no pauses for reflection, continuous presenter monologue

**Source:** Review rating - "Engagement & Interactivity: 4/10. No questions posed to the audience at any point."

### Pitfall 4: Missing Domain-Specific Safety Content

**What goes wrong:** Researchers commit PII, credentials, or sensitive data; discover mistakes after data is public
**Why it happens:** Presenters assume audience knows basics, focus on "interesting" content over "essential" content
**How to avoid:**
- Identify audience-specific risks (medical = PII, clinical = patient data)
- Add slides covering: private vs public repos, .gitignore, PII management
- Place safety content early, before hands-on session
- Make consequences explicit ("it's in the history forever")
**Warning signs:** No mention of .gitignore, private repos, or sensitive data handling

**Source:** Review - "Missing essential topics for researchers: Private vs public repositories, .gitignore, PII management, conventional commits, semantic versioning"

### Pitfall 5: Unbalanced Section Structure

**What goes wrong:** Single-slide sections feel abrupt, undermine the "Part X" framing
**Why it happens:** Outlining before content creation, reluctance to merge related topics
**How to avoid:**
- Sections should have 3-7 content slides minimum
- Merge thin sections with related content (Part 3 → Part 2)
- Combine similar slides (Steps 1-2 can share a slide)
- Expand critical steps (Step 3 "Code with AI" needs example prompt/output)
**Warning signs:** Section break followed by single slide then another section break

**Source:** Review - "Part 3 (AI Revolution Timeline) is one content slide - doesn't justify being a section"

### Pitfall 6: Marp Syntax Confusion

**What goes wrong:** Speaker notes, directives, or slide breaks don't render correctly
**Why it happens:** Mixing HTML comments (speaker notes) with Marp directives
**How to avoid:**
- Slide breaks: `---` on its own line
- Speaker notes: `<!-- content -->` on line after slide content
- Directives: `<!-- _class: lead -->` or `<!-- _paginate: false -->`
- Section breaks: Use `<!-- _class: lead -->` for centered text
**Warning signs:** Content appearing that should be hidden, slides not breaking correctly

**Verified syntax from current slides:**
```markdown
---

<!-- _class: lead -->

# Part 1: Git Basics

---

# Slide Title

Content here

<!-- Speaker notes here. These appear in presenter view only. -->
```

## Code Examples

Verified patterns from current presentation and research:

### Marp Slide Structure

```markdown
---
marp: true
theme: teachathon
class: invert
size: 16:9
paginate: true
header: 'AI-Teachathon | Halbritter Lab'
footer: 'Git, GitHub and AI Tools'
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Title Slide

Subtitle or Event Info
Date

<!-- Speaker notes for title slide -->

---

# Regular Content Slide

- Bullet point
- Another point

<!-- Speaker notes explaining the content, delivery tips, timing -->

---

<!-- _class: lead -->

# Part 1: Section Break

---
```

**Source:** Current `docs/presentation/slides.md`

### Learning Objectives Slide

```markdown
---

# What You'll Learn Today

By the end of this session, you'll be able to:
- **Understand** Git basics: repos, commits, branches, PRs
- **Protect** your data: .gitignore, PII management, private repos
- **Explain** why version control matters with AI tools
- **Navigate** the AI tool landscape and choose tools
- **Follow** the Git workflow hands-on with KidneyQuest

<!-- Keep to 3-5 objectives. Use action verbs. This primes the audience for what matters. -->
```

**Source:** SMART learning objectives framework

### Recap Slide Before Closing

```markdown
---

# What You Now Know

You've learned:
- Git tracks your project history safely
- Branches let you experiment without risk
- .gitignore and private repos protect sensitive data
- AI + version control = safe, fast iteration

**Next:** Apply all of this in the hands-on session

<!-- Bridge between theory and practice. Reinforces key takeaways. -->
```

### Engagement Prompt in Speaker Notes

```markdown
---

# Git vs GitHub

**Git:**
- Version control tool on your computer
- Works offline

**GitHub:**
- Website for hosting repositories
- Enables collaboration

<!-- ENGAGEMENT: Quick check - "If your laptop dies, is your Git history lost? What about GitHub?" Pause for responses. Answer: Git history is local (lost), GitHub is remote (safe). This reinforces the distinction. -->
```

**Source:** Engagement best practices research

### Dedicated Question Slide

```markdown
---

<!-- _class: lead -->

# Quick Question

**If you accidentally commit a password to GitHub,
can you just delete the file and commit again?**

<!-- Give 10 seconds. Then explain: No - it's in the history forever. This is why .gitignore and reviewing diffs matters. Prevention is everything. -->
```

### Essential Content Slides for Researchers

```markdown
---

# Private Repos Protect Unpublished Research

**Public repositories:**
- Anyone can view, clone, and contribute
- Good for: Open source, teaching, published tools

**Private repositories:**
- Restricted access only
- Good for: Unpublished research, patient-adjacent data, pre-publication code

**Default for medical research:** Start private, make public when ready

<!-- Charite context: most research should be private until publication -->
```

```markdown
---

# .gitignore: Your First Defense

**What it is:** A file telling Git which files to never track

**What to ignore:**
- Large data (CSVs, FASTQs, imaging)
- Binary files (PDFs, compiled code)
- Environment files (.env, API keys)
- OS artifacts (.DS_Store, Thumbs.db)

**Why it matters:** Prevents accidental commits of things that shouldn't be in a repo

<!-- .gitignore is your first line of defense. Use GitHub's templates for your language. -->
```

```markdown
---

# Never Commit Patient Data or Credentials

**The rules:**
- No patient data, even "anonymized"
- No API keys, passwords, tokens
- No institutional credentials

**What if you do?** It's in the history forever. Rewriting history is painful.

**Best practice:** Always review diffs before committing

<!-- For medical research, this is non-negotiable. Prevention is everything. -->
```

```markdown
---

# Conventional Commits: Structured Messages

**Format:** `type(scope): description`

**Common types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `refactor:` - Code restructure
- `test:` - Tests

**Example:** `feat: add gene search filter`

<!-- KidneyQuest uses this format. It enables automated changelogs and clear history. -->
```

```markdown
---

# Semantic Versioning: MAJOR.MINOR.PATCH

**v1.2.3 means:**
- **1** (MAJOR) - Breaking changes
- **2** (MINOR) - New features, backward compatible
- **3** (PATCH) - Bug fixes

**Why researchers care:** Reproducibility
- Cite specific versions in papers
- Know when updates break things

<!-- Bumping from v1.x to v2.0 means "this may break your analysis" -->
```

### Structural Patterns

**Combining sparse slides (Steps 1-2):**
```markdown
---

# Steps 1-2: Clone and Branch

**Clone the repository:**
```bash
git clone https://github.com/berntpopp/KidneyQuest.git
```

**Create your branch:**
```bash
git checkout -b add-new-gene
```

Now you're working safely. Main branch is untouched.

<!-- Two quick commands, paired together. This frees space to expand Step 3. -->
```

**Expanding critical step (Step 3):**
```markdown
---

# Step 3: Code with AI

**Example prompt:**
> "Add a scoreboard to KidneyQuest that displays the number of genes collected"

**What the AI might generate:**
- HTML for the scoreboard element
- JavaScript to track and update the score
- CSS for positioning and styling

**Your job:** Review, test, iterate

**You are the pilot. AI is the copilot.**

<!-- This is the most important step. Show a concrete example. Testing is essential - AI makes mistakes. -->
```

**Merging sections:**
```markdown
<!-- BEFORE: Separate sections -->
<!-- Part 2: Why Version Control Matters with AI -->
<!-- Part 3: The AI Revolution Timeline -->

<!-- AFTER: Merged section -->
---

<!-- _class: lead -->

# Part 2: Version Control in the AI Era

---
<!-- Slides 13-14 from Part 2, then slide 16 from Part 3 -->
<!-- Now it's one coherent section about VC + AI context -->
```

## State of the Art

Current presentation design trends as of 2026:

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Implicit objectives | Explicit "What You'll Learn" slide | ~2015-2020 | Improved retention, clearer expectations |
| Topic-label titles | Takeaway-statement titles | McKinsey influence, 2010s | Slides stand alone, clearer message |
| Passive lectures | Embedded engagement every 5-7 min | Attention research, 2020s | Sustained attention, better retention |
| Generic content | Domain-specific safety content | Field maturity | Audience-appropriate, reduces errors |
| Ad-hoc commit messages | Conventional Commits | 2019-present | Automation, semantic versioning, clarity |
| Arbitrary versioning | Semantic Versioning | 2013-present | Dependency management, reproducibility |
| Binary presentations | Markdown-based (Marp) | 2018-present | Version control, collaboration, simplicity |

**Deprecated/outdated:**
- PowerPoint as default for technical content: Still common but Marp/markdown gaining for version-controlled content
- Free-form commit messages: Conventional Commits now standard in OSS
- Date-based versioning: Semantic versioning preferred for libraries/tools
- "Learn by doing only" without objectives: Research shows explicit objectives improve outcomes

**Current best practice (2026):**
- AI-powered slide design tools emerging but manual curation still essential
- Hybrid engagement (live + embedded prompts) for both in-person and virtual audiences
- Research-specific safety content (PII, private repos, .gitignore) standard for medical/clinical audiences
- Takeaway titles are McKinsey/consulting standard, spreading to academia

## Open Questions

Things that couldn't be fully resolved:

1. **Optimal engagement frequency for 30-minute technical presentation**
   - What we know: 5-7 minutes is cited frequently, attention lapses within first minute
   - What's unclear: Whether technical content requires different pacing than general content
   - Recommendation: Use 5-7 minute intervals as starting point, adjust based on content density

2. **Marp advanced layout features for diagrams**
   - What we know: Marp supports `bg`, image sizing (`w:`, `h:`), split layouts
   - What's unclear: Best practices for creating simple diagrams (branch visualization, timeline)
   - Recommendation: Use external tools (Excalidraw, Mermaid) and embed as images for Phase 7

3. **Depth of PII/security content for beginner audience**
   - What we know: Content is essential for medical research context
   - What's unclear: How much detail before it becomes overwhelming for beginners
   - Recommendation: Keep to 1 slide each (private repos, .gitignore, PII), concise bullets, emphasize prevention

4. **Conventional Commits: Which types to teach beginners**
   - What we know: `feat`, `fix`, `docs` are most common; spec allows custom types
   - What's unclear: Whether to teach full set or starter subset
   - Recommendation: Focus on 5 types (`feat`, `fix`, `docs`, `refactor`, `test`), mention others exist

## Sources

### Primary (HIGH confidence)

- [Conventional Commits v1.0.0 Specification](https://www.conventionalcommits.org/en/v1.0.0/) - Official spec, format and types verified
- [Semantic Versioning v2.0.0](https://semver.org/) - Official spec, MAJOR.MINOR.PATCH rules verified
- [APHA - Guidelines for Writing Learning Objectives](https://apha.confex.com/apha/learningobjectives.htm) - Action verbs, measurable outcomes
- [Yale Poorvu Center - Writing Learning Goals, Objectives and Outcomes](https://poorvucenter.yale.edu/teaching/teaching-resource-library/writing-learning-goals-objectives-and-outcomes) - SMART framework
- [Six Minutes - Assertion Evidence Design](https://sixminutes.dlugan.com/assertion-evidence-design-presentation-slides/) - Takeaway titles vs topics
- [Storytelling with Data - Transforming Slide Titles](https://www.storytellingwithdata.com/blog/2020/3/5/transforming-slide-titles) - Title effectiveness research
- [McKinsey Action Titles Guide](https://slideworks.io/resources/how-to-write-action-titles-like-mckinsey) - Consulting-grade title structure
- [Marp Markdown Presentation Ecosystem](https://marp.app/) - Official Marp documentation
- [GitHub Documentation - About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories) - Private vs public repos
- [Atlassian Git Tutorial - .gitignore](https://www.atlassian.com/git/tutorials/saving-changes/gitignore) - What to ignore, best practices
- Current presentation source code (`docs/presentation/slides.md`) - Verified Marp syntax

### Secondary (MEDIUM confidence)

- [Duarte - 11 Audience Engagement Strategies](https://www.duarte.com/blog/audience-engagement-strategies-presentations/) - Engagement techniques, multiple sources corroborate
- [Hamilton College - Engaging Your Audience](https://www.hamilton.edu/academics/centers/oralcommunication/guides/how-to-engage-your-audience-and-keep-them-with-you) - Academic context, practical tips
- [PMC - Delivering an Impactful Presentation: A Practical Guide](https://pmc.ncbi.nlm.nih.gov/articles/PMC11487326/) - Peer-reviewed, medical education context
- [GoGather - Audience Engagement Examples 2026](https://gogather.com/blog/unlocking-audience-engagement-examples-and-strategies-for-success) - Current trends, multiple sources verify
- [DataCamp - How to Use .gitignore](https://www.datacamp.com/tutorial/gitignore) - Practical examples, verified with official docs
- [Medium - Marp: Crafting Beautiful Presentations with Markdown](https://medium.com/@shouke.wei/marp-crafting-beautiful-presentations-with-markdown-4ef86f5281a6) - Community best practices
- [Nature npj Digital Medicine - Addressing Threats in Anonymised Healthcare Data](https://www.nature.com/articles/s41746-025-01520-6) - PII protection in medical research
- [PMC - Addressing Threats in Anonymised Healthcare Data](https://pmc.ncbi.nlm.nih.gov/articles/PMC11885643/) - Privacy engineering for healthcare

### Tertiary (LOW confidence)

- WebSearch results for "Marp best practices" - General guidance, no single authoritative source
- Community discussions on private vs public repos - Anecdotal, but 81% private repo stat (2023) is verifiable
- Blog posts on semantic versioning - Multiple sources agree on core principles, but application varies

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Marp, Conventional Commits, and Semantic Versioning are official specs with clear documentation
- Architecture patterns: HIGH - Learning objectives, takeaway titles, and engagement techniques backed by peer-reviewed research and multiple authoritative sources
- Essential content: HIGH - Private repos, .gitignore, PII protection verified with official GitHub docs and medical research literature
- Marp syntax: HIGH - Verified directly from current working presentation source code
- Engagement frequency: MEDIUM - 5-7 minute guidance is consistent across sources but lacks formal research citation
- Pitfalls: HIGH - Directly derived from expert presentation review (PRESENTATION-REVIEW.md) with specific examples and scores

**Research date:** 2026-02-17
**Valid until:** ~30 days (presentation design best practices are stable, but 2026 AI trends evolve quickly)

**Note:** This research is constrained to Phase 6 (content, structure, engagement). Visual design (Priority 2 from review) and Marp visual features are deferred to Phase 7 per roadmap.
