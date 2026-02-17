# Phase 7: Visual Elements and Marp Features - Research

**Researched:** 2026-02-17
**Domain:** Marp presentation framework, SVG diagrams, presentation design
**Confidence:** HIGH

## Summary

This research covers Marp's visual capabilities (split layouts, scoped styles, fit directive) and professional presentation design principles for adding visual richness to educational presentations. The investigation focused on five key areas: Marp's split background syntax, scoped styling patterns, section break design, SVG diagram best practices, and image placement strategies.

**Key findings:**
- Marp's `bg left`/`bg right` directives create 50/50 split layouts by default, customizable via percentages
- Scoped style blocks (`<style scoped>`) apply CSS to individual slides without affecting the global theme
- The `<!-- fit -->` directive auto-scales headings horizontally to fill slide width
- Research-backed best practice: images left, text right for optimal cognitive processing
- User's Gaia invert theme uses teal/cyan highlight (#02c797) which should guide SVG diagram color palettes

**Primary recommendation:** Use `bg left` for all split layouts (images left, content right), extend theme CSS with utility classes for common patterns, and reserve scoped styles for truly one-off adjustments per slide.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Marp Core | 4.0+ | Markdown-to-slides converter | Official Marp framework, built-in themes, auto-scaling |
| Marpit | 3.4+ | Underlying framework | Powers Marp's image syntax and directives |
| SVG (inline) | 1.1/2.0 | Vector diagrams | Version-controlled, scalable, theme-integrated |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Gaia theme | Built-in | Base theme | Already in use, supports invert class |
| CSS Variables | Standard | Theme customization | Override colors without forking theme |
| Scoped styles | Marpit feature | Per-slide CSS | One-off tweaks only |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Inline SVG | External PNG/JPG | SVG is version-controlled, theme-aware, scalable |
| Scoped styles | Multiple theme variants | Theme variants for reusable patterns, scoped for one-offs |
| bg left/right | HTML columns | bg syntax is simpler, Marp-native, maintains consistency |

**Installation:**
```bash
# Already installed in this project
npm list @marp-team/marp-cli
```

## Architecture Patterns

### Recommended Image Structure
```
docs/presentation/
├── slides.md                    # Marp source
└── images/                      # All presentation images
    ├── diagrams/
    │   ├── git-branching.svg    # Concept diagrams
    │   ├── workflow-5-step.svg
    │   └── ai-timeline.svg
    └── screenshots/
        ├── github-pr-ui.png     # Tool screenshots
        ├── chatgpt-interface.png
        └── copilot-vscode.png
```

### Pattern 1: Split Layout with Background Image
**What:** Dedicate half the slide to a background image, half to content
**When to use:** Any slide combining visual and explanatory text
**Example:**
```markdown
<!-- Source: https://marpit.marp.app/image-syntax -->
![bg left](images/diagrams/git-branching.svg)

# Branches Let You Experiment Without Risk

- A **branch** is like running a parallel experiment
- The main branch stays safe and stable
- You work on your branch, test your changes, then merge when ready
```

**Split size customization:**
```markdown
![bg left:33%](images/diagrams/narrow-diagram.svg)
# Wide Content Area
More room for text when diagram is simple
```

### Pattern 2: Auto-Sized Section Titles
**What:** Section break slides with large, auto-fitted headings
**When to use:** Major topic transitions (Part 1, Part 2, etc.)
**Example:**
```markdown
<!-- Source: https://github.com/marp-team/marp-core -->
<!-- _class: lead -->
<style scoped>
section {
  background: linear-gradient(135deg, #0288d1 0%, #02c797 100%);
}
h1 { color: #fff; }
</style>

# <!-- fit --> Part 1: Git Basics
Your foundation for version control
```

### Pattern 3: Scoped Style for Per-Slide Tweaks
**What:** CSS block affecting only the current slide
**When to use:** One-off adjustments (larger code, custom spacing)
**Example:**
```markdown
<!-- Source: https://marpit.marp.app/theme-css?id=scoped-style -->
<style scoped>
pre {
  font-size: 2.2rem;  /* 20% larger than theme default */
}
code {
  background: var(--color-background-code);
}
</style>

# Code Example Slide

```bash
git clone https://github.com/berntpopp/KidneyQuest.git
git checkout -b add-new-gene
```
```

### Pattern 4: Theme Utility Classes (Extend Theme CSS)
**What:** Reusable classes defined in marp-theme.css
**When to use:** Patterns used multiple times across slides
**Example:**
```css
/* In docs/.vitepress/theme/marp-theme.css */
/* Source: https://github.com/marp-team/marp-core/blob/main/themes/README.md */

.large-code pre {
  font-size: 2.2rem;
}

.tight-spacing li {
  margin-bottom: 0.3rem;
}

.section-git {
  background: linear-gradient(135deg, #0288d1 0%, #02c797 100%);
}

.section-ai {
  background: linear-gradient(135deg, #7b1fa2 0%, #02c797 100%);
}
```

**Usage in slides:**
```markdown
<!-- _class: lead section-git -->
# <!-- fit --> Part 1: Git Basics
```

### Anti-Patterns to Avoid
- **Inline images on non-split slides:** Research shows split layouts process better cognitively; inline images lack visual weight and hierarchy
- **Scoped styles for reusable patterns:** Creates maintenance burden; use theme utility classes instead
- **Image right, text left:** Contradicts cognitive processing research; less comfortable for Western audiences
- **Multiple bg left/right on same slide:** Only last one renders; use advanced backgrounds with SVG for multi-image layouts
- **Fit directive on body text:** Designed for headings only; vertical overflow not handled well

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Git branching diagrams | Custom SVG from scratch | Mermaid gitgraph or template | Standard symbols, clear semantics, community-recognized patterns |
| Color gradients for sections | Inline hex values per slide | CSS custom properties with utility classes | Maintainable, consistent, theme-integrated |
| Image size/position tweaks | Repeated scoped styles | Marpit bg size syntax (cover, contain, x%) | Built-in, consistent, documented |
| Multi-column layouts | Complex HTML divs with Grid | Marp bg left/right split | Simpler, native, maintains Markdown readability |

**Key insight:** Marp's directives (`bg left`, `<!-- fit -->`, size keywords) are designed for common presentation patterns. Custom CSS should extend the theme, not replicate Marp's built-in features.

## Common Pitfalls

### Pitfall 1: Mixing bg left and bg right in Same Slide
**What goes wrong:** Only the last defined background image renders; the first is ignored
**Why it happens:** Marpit's image syntax spec: "last defined keyword wins" when mixed
**How to avoid:** Use one split direction per slide; for multiple images, use advanced inline SVG backgrounds
**Warning signs:** Second image not appearing despite correct syntax

### Pitfall 2: Scoped Styles Not Actually Scoped
**What goes wrong:** Styles leak to other slides or don't apply at all
**Why it happens:** Marpit converts `<style scoped>` to `section[data-marpit-scope-xxx]` selectors; improper nesting or specificity causes issues
**How to avoid:** Place `<style scoped>` block immediately after frontmatter (for first slide) or before slide delimiter (`---`) for subsequent slides
**Warning signs:** Styles applying to wrong slides or requiring `!important`

### Pitfall 3: Vertical Overflow with Fit Directive
**What goes wrong:** Large auto-sized heading pushes content off bottom of slide
**Why it happens:** `<!-- fit -->` scales horizontally but doesn't account for vertical space of surrounding content
**How to avoid:** Use `<!-- fit -->` on section breaks with minimal content (title + subtitle only), not content-heavy slides
**Warning signs:** Bottom text clipped or pagination footer overlapping content

### Pitfall 4: SVG Colors Clashing with Theme
**What goes wrong:** Diagrams use arbitrary colors that feel disconnected from presentation
**Why it happens:** SVG created without referencing theme's color palette
**How to avoid:** Extract theme colors from `marp-theme.css`, use those exact values in SVG diagrams
**Warning signs:** Diagrams look like "imported clip art" rather than integrated visuals

**Reference palette for this project (Gaia invert customized):**
```css
--color-background: #1a1a1a;
--color-foreground: #ffffff;
--color-highlight: #02c797;       /* Teal - use for accents */
--color-highlight-hover: #04e6af; /* Brighter teal */
--color-dimmed: #c6c6c6;          /* Use for secondary diagram elements */
```

### Pitfall 5: Image Placement Reduces Readability
**What goes wrong:** Text on right, image on left feels awkward and harder to process
**Why it happens:** Assuming left/right placement is arbitrary aesthetic choice
**How to avoid:** Research-backed pattern: images left, text right for Western audiences (cognitive processing flows left-to-right, visual first, then text)
**Warning signs:** Audience eyes scanning unnaturally, slide feels "backwards"

### Pitfall 6: Overusing Scoped Styles
**What goes wrong:** Every slide has `<style scoped>`, creating maintenance nightmare
**Why it happens:** Not understanding theme utility class pattern
**How to avoid:** Identify repeated patterns (large code, tight spacing, section colors), add as utility classes in `marp-theme.css`, use scoped styles only for true one-offs
**Warning signs:** Similar scoped blocks repeated across multiple slides

## Code Examples

Verified patterns from official sources:

### Split Layout - Image Left, Text Right
```markdown
<!-- Source: https://github.com/marp-team/marpit/blob/main/docs/image-syntax.md -->
![bg left](images/diagrams/git-branching.svg)

# Branches Let You Experiment Without Risk

- A **branch** is like running a parallel experiment
- The main branch stays safe and stable
- You work on your branch, test your changes, then merge when ready
```

### Section Break with Auto-Sized Title
```markdown
<!-- Source: https://github.com/marp-team/marp-core/blob/main/themes/README.md -->
<!-- _class: lead section-git -->

# <!-- fit --> Part 1: Git Basics
Your foundation for version control
```

### Scoped Style for Larger Code Block
```markdown
<!-- Source: https://marpit.marp.app/theme-css?id=scoped-style -->
<style scoped>
pre {
  font-size: 2.2rem;  /* Theme default is ~1.8rem */
}
</style>

# Step 3: Let AI Write Code While You Steer

```bash
git clone https://github.com/berntpopp/KidneyQuest.git
git checkout -b add-new-gene
```
```

### SVG Diagram Integrated with Theme Colors
```svg
<!-- Source: Best practice from research synthesis -->
<!-- File: docs/presentation/images/diagrams/git-branching.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
  <!-- Use theme colors for integration -->
  <style>
    .branch-line { stroke: #02c797; stroke-width: 3; fill: none; }
    .commit-dot { fill: #02c797; }
    .merge-line { stroke: #04e6af; stroke-width: 2; fill: none; }
    .label-text { fill: #ffffff; font-family: sans-serif; font-size: 18px; }
    .dim-line { stroke: #c6c6c6; stroke-width: 2; fill: none; }
  </style>

  <!-- Main branch -->
  <line x1="50" y1="200" x2="750" y2="200" class="dim-line"/>
  <circle cx="100" cy="200" r="8" class="commit-dot"/>
  <circle cx="700" cy="200" r="8" class="commit-dot"/>

  <!-- Feature branch -->
  <path d="M 200 200 Q 250 150, 300 100 L 600 100 Q 650 150, 700 200" class="branch-line"/>
  <circle cx="300" cy="100" r="8" class="commit-dot"/>
  <circle cx="450" cy="100" r="8" class="commit-dot"/>
  <circle cx="600" cy="100" r="8" class="commit-dot"/>

  <!-- Labels -->
  <text x="100" y="230" class="label-text" text-anchor="middle">main</text>
  <text x="450" y="80" class="label-text" text-anchor="middle">feature branch</text>
  <text x="700" y="230" class="label-text" text-anchor="middle">merge</text>
</svg>
```

### Theme Utility Classes (in marp-theme.css)
```css
/* Source: https://github.com/marp-team/marp-core/blob/main/themes/README.md */
/* Extend existing theme rather than forking */

/* Code readability variants */
.large-code pre {
  font-size: 2.2rem;
  line-height: 1.5;
}

.mono-emphasis code {
  font-family: 'Fira Code', monospace;
  font-weight: 600;
}

/* Content density adjustments */
.tight-spacing li {
  margin-bottom: 0.3rem;
}

.compact h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Section color themes */
.section-git {
  background: linear-gradient(135deg, #0288d1 0%, #02c797 100%);
}

.section-github {
  background: linear-gradient(135deg, #24292e 0%, #02c797 100%);
}

.section-ai {
  background: linear-gradient(135deg, #7b1fa2 0%, #02c797 100%);
}

.section-workflow {
  background: linear-gradient(135deg, #f57c00 0%, #02c797 100%);
}

/* All section breaks keep text white */
.section-git h1,
.section-github h1,
.section-ai h1,
.section-workflow h1 {
  color: #ffffff;
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `[fit]` keyword | `<!-- fit -->` HTML comment | Marp v1 → v2 | Markdown renders cleanly as docs |
| Fixed bg split (50/50) | Percentage split (`bg left:33%`) | Marpit 2.0+ | Flexible layouts for varied content |
| Inline style per slide | Theme CSS variables + utility classes | 2024-2025 trend | Maintainable, consistent theming |
| Absolute hex colors in SVGs | CSS custom properties in SVGs | Modern SVG practice | Theme-aware diagrams |
| Centered images inline | Split backgrounds (`bg left/right`) | Marp best practice | Better visual hierarchy, cognitive flow |

**Deprecated/outdated:**
- **Deckset `[fit]` syntax:** Marp uses `<!-- fit -->` for Markdown compatibility
- **Multiple backgrounds without inline SVG:** Only last bg renders; use Marpit's advanced backgrounds for multi-image
- **External theme files linked per slide:** Global theme in frontmatter + utility classes is standard

## Open Questions

Things that couldn't be fully resolved:

1. **Optimal screenshot resolution for GitHub Actions build**
   - What we know: High resolution (HD/FHD+) recommended for quality
   - What's unclear: Whether GitHub Actions build environment or Marp HTML export affects final rendering quality
   - Recommendation: Capture at 1920x1080, test one screenshot through full build pipeline to verify quality

2. **Mermaid gitgraph integration with Marp**
   - What we know: Mermaid can generate git diagrams; some Marp setups support Mermaid via plugins
   - What's unclear: Whether this project's Marp CLI config supports Mermaid, or if manual SVG is simpler
   - Recommendation: Start with manual SVG using color palette (known to work); investigate Mermaid plugin if diagram complexity grows

3. **Inline SVG vs external SVG file performance**
   - What we know: External SVG files are more maintainable and version-controlled
   - What's unclear: Whether Marp's HTML export embeds external SVGs or links them, affecting portability
   - Recommendation: Use external SVG files in `images/diagrams/`; verify in exported `presentation.html` that they're embedded properly

## Sources

### Primary (HIGH confidence)
- [Marpit Image Syntax Documentation](https://github.com/marp-team/marpit/blob/main/docs/image-syntax.md) - bg left/right split layout syntax verified
- [Marpit Theme CSS Documentation](https://marpit.marp.app/theme-css?id=scoped-style) - scoped style blocks behavior
- [Marp Core GitHub](https://github.com/marp-team/marp-core) - fit directive, auto-scaling metadata
- [Gaia Theme Source](https://github.com/marp-team/marp-core/blob/main/themes/gaia.scss) - color variable definitions
- [Marp Core Themes README](https://github.com/marp-team/marp-core/blob/main/themes/README.md) - built-in theme features, customization patterns

### Secondary (MEDIUM confidence)
- [Image Left, Text Right cognitive processing research](https://ryanjwarriner.com/image-left-text-right/) - brain processes visuals left-to-right more efficiently
- [Presentation Design Trends 2026 - Slidesgo](https://slidesgo.com/slidesgo-school/ai-presentations/presentation-design-trends-2026) - section breaks, color schemes, visual differentiation
- [UI Color Palette Best Practices - IxDF](https://www.interaction-design.org/literature/article/ui-color-palette) - 60-30-10 rule, avoid absolute white/black
- [Workflow Visualization Best Practices - Creately](https://creately.com/guides/workflow-visualization/) - 5-step workflow diagram design patterns
- [Git Branching Diagrams - Mermaid](https://mermaid.js.org/syntax/gitgraph.html) - gitgraph visualization standards
- [Whitespace in Presentations - BrightCarbon](https://www.brightcarbon.com/blog/presentation-whitespace/) - visual density, macro/micro whitespace

### Tertiary (LOW confidence)
- [Split Layout Best Practices - Venngage](https://venngage.com/blog/presentation-layout-ideas/) - general presentation advice, not Marp-specific
- [Screenshot Cropping Best Practices - Presentation Process](https://www.presentation-process.com/screenshots.html) - Rule of thirds, cropping unnecessary details
- [Code Block Readability - Whitepage](https://www.whitepage.studio/blog/presentation-font-sizes) - 24-32pt body text, 36-44pt headings for presentations

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Marp/Marpit are established, official documentation verified
- Architecture: HIGH - Patterns extracted from official docs and theme source code
- Pitfalls: HIGH - Based on Marpit issue discussions and official documentation warnings
- Image placement: MEDIUM - Cognitive research supports left-image pattern, but not Marp-specific
- Section break design: MEDIUM - 2026 trends verified via web search, multiple sources agree
- SVG diagram specifics: MEDIUM - General SVG best practices, not Marp-specific testing

**Research date:** 2026-02-17
**Valid until:** 2026-04-17 (60 days - Marp stable, design trends evolve slowly)
