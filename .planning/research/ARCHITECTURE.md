# Architecture Patterns

**Domain:** Hybrid presentation + documentation workshop website
**Researched:** 2026-02-16
**Overall confidence:** HIGH

## Recommended Architecture

**Jekyll (just-the-docs theme) + standalone reveal.js HTML presentation, deployed to GitHub Pages via GitHub Actions.**

This is a "docs-first, presentation-alongside" architecture. The documentation site is the primary artifact built by Jekyll. The presentation is a self-contained HTML file that Jekyll passes through untouched as a static asset. They share a visual identity through coordinated CSS but are architecturally independent.

```
                    +----------------------------+
                    |     GitHub Repository       |
                    |   (source of truth)         |
                    +----------------------------+
                               |
                         GitHub Actions
                         (Jekyll build)
                               |
                    +----------------------------+
                    |    GitHub Pages Output      |
                    |  /AI-Teachathon/            |
                    +----------------------------+
                    |                            |
          +---------+--------+       +----------+---------+
          |  Jekyll Pages    |       |  Static Passthrough |
          |  (docs mode)     |       |  (presentation)     |
          +------------------+       +---------------------+
          | index.html       |       | presentation.html   |
          | setup/           |       | (standalone reveal.js|
          | agenda/          |       |  loaded from CDN)    |
          | tool-landscape/  |       +---------------------+
          | hands-on/        |
          | ideas/           |
          | resources/       |
          +------------------+
```

### Why This Architecture

| Decision | Rationale |
|----------|-----------|
| Jekyll, not Astro/VitePress/Docusaurus | Zero Node.js build dependency for the docs portion. just-the-docs gives search, navigation, dark mode, responsive design out of the box. The audience is non-technical researchers -- simpler tooling = fewer things to break. Jekyll is natively supported by GitHub Pages. |
| Standalone HTML for presentation, not Slidev/Marp | Slidev requires a Node.js build pipeline and produces an SPA that is harder to integrate with Jekyll output. A standalone reveal.js HTML file requires NO build step, loads from CDN, and Jekyll copies it as-is. Simpler = more reliable for a tight deadline. |
| reveal.js from CDN, not installed locally | No package management needed. CDN loads are fast and cached. The presentation is a single self-contained file. |
| Separate page for presentation, not embedded | The presentation is shown fullscreen on a projector during the workshop. Embedding it in a docs page would constrain its viewport and complicate keyboard navigation. Separate page = native fullscreen behavior. |
| Dark theme for both | Consistent visual identity. Dark theme reads well on projectors (common in lecture halls) and reduces eye strain for extended workshops. |

## Core Architectural Decision: Separate vs. Embedded Presentation

This is the single most important architecture decision. The research strongly favors **separate page**.

### Option A: Separate Presentation Page (RECOMMENDED)

The presentation lives at `/presentation.html` as a standalone reveal.js HTML file. Jekyll does not process it (no front matter). It is a complete, self-contained HTML document with its own `<head>`, styles, and scripts.

**Advantages:**
- Fullscreen presentation mode works natively (F key in reveal.js)
- Speaker notes work out of the box (S key opens speaker view)
- Keyboard navigation (arrows, space, escape) works without conflicts
- reveal.js automatic scaling handles projector/laptop/phone viewports
- No interference from Jekyll CSS or JavaScript
- Can be tested by simply opening the file in a browser -- no build step
- Presenter can navigate to `/presentation.html` directly on the projector

**Disadvantages:**
- Navigation between docs and presentation requires explicit links (not sidebar nav)
- CSS is duplicated (presentation has its own dark theme; docs site has its own)
- Two "worlds" rather than one seamless experience

**Mitigation for disadvantages:**
- Add a "Back to course" link in the presentation (fixed position, subtle)
- Add a prominent "Open Presentation" link/button on the agenda page
- Use shared CSS custom properties (color palette) to maintain visual consistency

### Option B: Presentation Embedded in Docs Page (NOT recommended)

The presentation would be embedded in a Jekyll-rendered page using reveal.js in `embedded: true` mode, sized within the page layout.

**Advantages:**
- Single navigation experience (sidebar always visible)
- Consistent header/footer
- Feels like "one site"

**Disadvantages:**
- Embedded mode constrains viewport size -- presentation cannot go truly fullscreen without JavaScript hacks
- Keyboard events conflict with page scrolling (even with `keyboardCondition: 'focused'`)
- just-the-docs CSS will clash with reveal.js CSS (both define body, h1-h6, a, code, etc.)
- Speaker notes do not work reliably in embedded mode
- reveal.js scaling math is viewport-relative -- embedded mode calculates from the container, which is often wrong on different screens
- Requires JavaScript initialization code and careful DOM structuring
- Projector display would show the sidebar, wasting screen real estate

**Verdict:** Embedded mode creates more problems than it solves. The docs site and presentation serve fundamentally different UX needs (reading vs. presenting). Keep them architecturally separate.

### Option C: Iframe Embedding (NOT recommended)

Embed `presentation.html` in a Jekyll page via `<iframe>`.

**Advantages:**
- Complete style isolation
- Presentation is still a standalone file

**Disadvantages:**
- Keyboard focus management is fragile (iframe steals/loses focus)
- Viewport sizing within an iframe is unpredictable
- Fullscreen from within an iframe requires allowfullscreen and is inconsistent across browsers
- Mobile experience is poor (scrolling within iframe within page)
- Accessibility issues (screen readers struggle with iframes)

**Verdict:** Worst of both worlds. Avoid.

## Recommended Directory Structure

```
AI-Teachathon/
|-- _config.yml                    # Jekyll config: just-the-docs remote theme, dark color scheme
|-- Gemfile                        # Ruby gems for local preview (optional)
|-- .github/
|   +-- workflows/
|       +-- pages.yml              # GitHub Actions: build Jekyll, deploy to Pages
|-- index.md                       # Landing page (nav_order: 1)
|-- setup.md                       # Pre-event setup instructions (nav_order: 2)
|-- agenda.md                      # Event timeline/schedule (nav_order: 3)
|-- presentation.html              # Standalone reveal.js presentation (NO front matter)
|-- tool-landscape.md              # AI tool documentation (nav_order: 5)
|-- hands-on.md                    # Hands-on session guide (nav_order: 6)
|-- ideas.md                       # Living ideas/projects page (nav_order: 7)
|-- resources.md                   # Links and references (nav_order: 8)
|-- assets/
|   |-- css/
|   |   +-- custom.css             # Custom styling overrides for just-the-docs
|   +-- images/                    # Diagrams, logos, screenshots
|-- _sass/
|   +-- color_schemes/
|       +-- teachathon.scss        # Custom color scheme extending dark theme
|-- _includes/                     # Custom Jekyll includes (header, footer overrides)
|-- README.md                      # Repo README (excluded from Jekyll build)
+-- LICENSE                        # CC BY 4.0
```

### Key Structural Decisions

**Flat page structure (no subdirectories for pages):** With only ~8 pages, a flat structure is simpler and avoids Jekyll collection/permalink complexity. Each `.md` file lives at the root and uses `nav_order` in front matter for sidebar ordering.

**`presentation.html` has NO front matter:** Jekyll treats files without YAML front matter as static assets and copies them to the output directory unchanged. This is exactly what we want -- reveal.js needs a complete, unprocessed HTML document. The file will be accessible at `https://berntpopp.github.io/AI-Teachathon/presentation.html`.

**`_sass/color_schemes/teachathon.scss`:** Custom color scheme that extends the built-in dark scheme. This is where the shared color palette lives for the docs side. The presentation.html file mirrors these colors in its own inline `<style>` block.

**`assets/css/custom.css`:** Additional style overrides loaded by just-the-docs. Used for things like making the "Presentation" link stand out in navigation, custom card layouts on the landing page, and code block styling.

**No `_layouts/` directory needed:** just-the-docs provides all necessary layouts (default, page, home). Custom layouts add complexity without value for this project.

## Component Boundaries

| Component | Responsibility | Technology | Notes |
|-----------|---------------|------------|-------|
| Documentation pages | Structured content with nav, search, code blocks | Jekyll + just-the-docs Markdown | 7 pages, sidebar navigation, built-in search |
| Presentation | Fullscreen slides with animations, progressive reveal | reveal.js v5 from CDN, standalone HTML | Self-contained, no build step required |
| Color scheme | Consistent dark theme across both components | SCSS variables (docs) + CSS custom properties (presentation) | Shared palette, independent implementations |
| Build pipeline | Compile Markdown to HTML, copy static assets | GitHub Actions + Jekyll | Triggered on push to main |
| Deployment | Serve static files | GitHub Pages | Automatic via Actions workflow |

## Data Flow

```
Author writes content
        |
        v
  .md files (docs)  +  presentation.html (slides)
        |                       |
        v                       |
  Jekyll processes              | (copied as-is)
  Markdown -> HTML              |
        |                       |
        v                       v
  _site/ output directory (all static files)
        |
        v
  GitHub Actions uploads artifact
        |
        v
  GitHub Pages serves at berntpopp.github.io/AI-Teachathon/
        |
        +---> /index.html          (landing page)
        +---> /setup/              (setup guide)
        +---> /agenda/             (schedule)
        +---> /presentation.html   (reveal.js slides)
        +---> /tool-landscape/     (AI tools docs)
        +---> /hands-on/           (session guide)
        +---> /ideas/              (ideas page)
        +---> /resources/          (links page)
```

## Navigation Between Docs and Presentation

Since the presentation is a standalone HTML file outside Jekyll's navigation system, explicit cross-linking is essential.

### From Docs to Presentation

1. **Agenda page** contains a prominent call-to-action: a styled link/button that opens `presentation.html`. This is the primary entry point during the workshop ("Part 1: Open the presentation").
2. **Sidebar** does NOT include the presentation (it is not a `.md` file with front matter, so just-the-docs ignores it). This is intentional -- the presentation is a special artifact, not a docs page.
3. **Landing page** can include a card/section linking to the presentation.

### From Presentation to Docs

1. **First slide or last slide** includes a link back to the main site (`/AI-Teachathon/`).
2. **Fixed-position "Back to course" link** in the presentation (bottom-right corner, subtle, does not interfere with slide content).

### Workshop Flow

```
Projector (presenter):     presentation.html (fullscreen)
Laptops (participants):    docs site pages (setup, agenda, tool-landscape, etc.)
```

The two audiences use different parts of the site simultaneously. The presenter shows slides on the projector. Participants follow along on their laptops using the docs pages. They may never open the presentation on their laptops (and that is fine).

## CSS Architecture

### Shared Color Palette

Define a shared color palette that both the docs site and the presentation use. The colors are defined independently in each context (SCSS variables for Jekyll, inline CSS for reveal.js) but the actual hex values are coordinated.

```
Palette (shared values):
  --bg-primary:     #1e1e2e    (deep dark blue-gray)
  --bg-secondary:   #2a2a3e    (slightly lighter)
  --text-primary:   #e0e0e0    (light gray)
  --text-heading:   #ffffff    (white)
  --accent:         #7b8cde    (soft blue-purple, medical/academic feel)
  --accent-hover:   #9aa5e8    (lighter accent for hover states)
  --code-bg:        #1a1a2e    (slightly different dark for code blocks)
  --success:        #6bc96b    (green for checklists, success states)
  --warning:        #e8a838    (amber for warnings, important notes)
```

### Docs Site (Jekyll / just-the-docs)

```scss
// _sass/color_schemes/teachathon.scss
@import "./color_schemes/dark";

// Override dark theme variables with our palette
$body-background-color: #1e1e2e;
$sidebar-color: #2a2a3e;
$link-color: #7b8cde;
$body-text-color: #e0e0e0;
$body-heading-color: #ffffff;
// ... additional overrides
```

### Presentation (reveal.js)

```css
/* Inline in presentation.html <style> block */
.reveal {
  --r-background-color: #1e1e2e;
  --r-main-color: #e0e0e0;
  --r-heading-color: #ffffff;
  --r-link-color: #7b8cde;
  --r-link-color-hover: #9aa5e8;
}
```

### Why Not a Shared CSS File?

Because the two contexts are architecturally independent:
- Jekyll processes SCSS and generates CSS for the docs site
- reveal.js uses its own theme system with CSS custom properties
- Sharing a CSS file would create a fragile coupling between two different rendering engines
- The shared palette is small (< 10 values) -- coordinating hex values manually is simpler and more maintainable than building a shared CSS pipeline

## Build Pipeline

### Local Development

```bash
# Option 1: Full Jekyll build (requires Ruby)
bundle install
bundle exec jekyll serve --livereload
# Site available at http://localhost:4000/AI-Teachathon/

# Option 2: Just the presentation (no dependencies)
# Open presentation.html directly in browser
# (reveal.js loads from CDN, no build needed)
```

### Production Build (GitHub Actions)

```yaml
# .github/workflows/pages.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Build with Jekyll
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./
          destination: ./_site
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Build Output

Jekyll produces a `_site/` directory containing:
- All `.md` files compiled to HTML with just-the-docs layout
- `presentation.html` copied as-is (no front matter = static asset)
- `assets/` directory copied as-is
- Generated search index (just-the-docs built-in search)
- No JavaScript bundling, no Node.js, no npm

### Deployment URL Structure

```
https://berntpopp.github.io/AI-Teachathon/
  |-- /                         -> index.html (landing page)
  |-- /setup/                   -> setup.html
  |-- /agenda/                  -> agenda.html
  |-- /presentation.html        -> presentation.html (reveal.js)
  |-- /tool-landscape/          -> tool-landscape.html
  |-- /hands-on/                -> hands-on.html
  |-- /ideas/                   -> ideas.html
  +-- /resources/               -> resources.html
```

Note: Jekyll generates `/pagename/index.html` for `.md` files (clean URLs), but `presentation.html` keeps its extension since it is a static passthrough.

## Responsive Design Strategy

### Docs Pages (Jekyll / just-the-docs)

just-the-docs is inherently responsive:
- **Desktop (> 1200px):** Sidebar navigation visible, content area with comfortable reading width
- **Tablet (768px - 1200px):** Sidebar collapses to hamburger menu, content fills viewport
- **Mobile (< 768px):** Full-width content, hamburger navigation, touch-friendly tap targets

No custom responsive work needed for the docs portion -- the theme handles it.

### Presentation (reveal.js)

reveal.js has built-in responsive scaling:
- **Projector (1920x1080, 1024x768):** Automatic scaling from 960x700 base to fill viewport
- **Laptop (1366x768, 1440x900):** Same scaling, slightly smaller text
- **Mobile/Tablet:** Touch navigation enabled (`touch: true`), scaling works but slides designed for landscape

Key reveal.js sizing configuration:
```javascript
Reveal.initialize({
  width: 960,       // Base width (CSS pixels)
  height: 700,      // Base height (CSS pixels)
  margin: 0.04,     // 4% margin around edges
  minScale: 0.2,    // Minimum scale factor
  maxScale: 2.0,    // Maximum scale factor

  // Presentation behavior
  hash: true,        // Enable URL hash for slide linking
  controls: true,    // Show navigation arrows (helpful on mobile)
  progress: true,    // Show progress bar
  touch: true,       // Enable swipe navigation

  // Presenter features
  // Press S to open speaker notes in a separate window
});
```

### Design Guidelines for Dual-Display Readability

Since the presentation is shown on a projector while participants view docs on laptops:

**Presentation slides:**
- Minimum font size: 24px (base), 48px+ for headings
- Maximum 6-8 words per line
- High contrast: white/light text on dark background
- No fine detail that requires reading from a distance
- Use progressive reveal (fragments) to control information flow

**Docs pages:**
- Standard readable font size (16px base, just-the-docs default)
- Comfortable line length (max-width handled by theme)
- Code blocks with syntax highlighting and copy buttons
- Clear heading hierarchy for scanning

## Patterns to Follow

### Pattern 1: Markdown-First Content

**What:** Write all documentation content in Markdown. Only use HTML for the presentation.
**When:** Always for docs pages.
**Why:** Markdown is rendered by Jekyll into themed, searchable, navigable HTML. Writing raw HTML for docs pages would bypass the theme and require manual navigation/search integration.

### Pattern 2: Progressive Enhancement for Presentation

**What:** The presentation should be functional even if JavaScript fails to load.
**When:** Building presentation.html.
**How:** Structure slide content as semantic HTML (`<section>` elements with text content). If reveal.js CDN fails, the content is still readable as a long scrollable page. Add a `<noscript>` message.

### Pattern 3: Relative Links with baseurl Awareness

**What:** All internal links must account for the `/AI-Teachathon/` base path.
**When:** Linking between docs pages, or from docs to presentation.
**How:** In Markdown docs, use Jekyll's `{{ site.baseurl }}` or relative links. In presentation.html (which is NOT processed by Jekyll), hardcode the base path or use relative paths.

```markdown
<!-- In a Jekyll-processed .md file -->
[Open Presentation]({{ site.baseurl }}/presentation.html)

<!-- In presentation.html (static file, no Liquid processing) -->
<a href="/AI-Teachathon/">Back to course</a>
```

### Pattern 4: Speaker Notes for Presenter Context

**What:** Add speaker notes to every presentation slide.
**When:** Building presentation.html.
**How:** Use `<aside class="notes">` elements within each `<section>`. Presenter presses S to open speaker view with notes, timer, and next-slide preview.

```html
<section>
  <h2>Why Version Control?</h2>
  <p class="fragment">final_v3_REALLY_final.docx</p>
  <aside class="notes">
    Ask the audience: who has done this?
    Wait for laughs, then transition to Git explanation.
    Estimated time: 2 minutes on this slide.
  </aside>
</section>
```

## Anti-Patterns to Avoid

### Anti-Pattern 1: Building a Custom SPA

**What:** Using React, Vue, or Astro to build a custom single-page application that handles both docs and presentations.
**Why bad:** Massive over-engineering for 8 pages and one presentation. Adds Node.js dependency, build complexity, and debugging surface area. Tight deadline (must ship by Feb 17) makes this a schedule risk.
**Instead:** Use Jekyll (battle-tested, zero-JS docs) + standalone HTML (zero-build presentation).

### Anti-Pattern 2: Embedding reveal.js Inside Jekyll Layouts

**What:** Adding reveal.js initialization inside a Jekyll layout template so slides appear within the docs chrome.
**Why bad:** CSS conflicts between just-the-docs and reveal.js. Keyboard event conflicts. Viewport sizing breaks. Speaker notes unreliable. Cannot go truly fullscreen.
**Instead:** Keep presentation.html as a standalone file with NO Jekyll processing.

### Anti-Pattern 3: Using Slidev for "Developer Cred"

**What:** Choosing Slidev because it is a modern developer tool for presentations.
**Why bad:** Adds a complete Vite/Vue build pipeline alongside Jekyll. Two build systems to maintain. Slidev produces an SPA that must be built and output merged with Jekyll output. Deployment complexity doubles. The audience does not care what tool built the slides.
**Instead:** reveal.js from CDN in a single HTML file achieves the same visual result with zero build complexity.

### Anti-Pattern 4: Shared CSS Between Docs and Presentation

**What:** Creating a shared stylesheet imported by both Jekyll and presentation.html.
**Why bad:** Jekyll uses SCSS compilation. reveal.js uses CSS custom properties. A shared file must work in both contexts, creating coupling. When you change a docs style, you might break the presentation. The shared palette is only ~10 values -- not worth the abstraction.
**Instead:** Coordinate hex values manually. Document the palette in a comment block in both files.

### Anti-Pattern 5: Hash-Based SPA Routing on GitHub Pages

**What:** Building a single-page app with client-side routing and the 404.html redirect hack.
**Why bad:** GitHub Pages does not support SPA routing natively. The 404 hack causes actual 404 status codes (bad for bookmarking, sharing, SEO). Static HTML files work perfectly on GitHub Pages without any routing hacks.
**Instead:** Let Jekyll generate separate HTML files for each page. This is what GitHub Pages is designed for.

## Scalability Considerations

| Concern | Current (8 pages) | If Growing (20+ pages) | If Large Scale (50+ pages) |
|---------|-------------------|----------------------|---------------------------|
| Build time | < 5 seconds | < 10 seconds | < 30 seconds (Jekyll is fast) |
| Navigation | Flat sidebar, all visible | Group into sections with just-the-docs collections | Consider switching to VitePress/Docusaurus |
| Search | just-the-docs built-in (client-side) | Still adequate | May need Algolia/server-side search |
| Presentations | 1 standalone file | Multiple .html files, linked from relevant docs pages | Consider Slidev for multi-deck management |
| Deployment | Single GitHub Actions workflow | Same workflow, no changes needed | Same workflow, no changes needed |

For this workshop (8 pages, 1 presentation, tight deadline), the current architecture is appropriately sized. Do not over-architect for scale that will not materialize.

## Sources

### HIGH Confidence (Official Documentation)
- [reveal.js Initialization / Embedded Mode](https://revealjs.com/initialization/)
- [reveal.js Presentation Size / Scaling](https://revealjs.com/presentation-size/)
- [reveal.js Configuration](https://revealjs.com/config/)
- [reveal.js Speaker View](https://revealjs.com/speaker-view/)
- [reveal.js Themes](https://revealjs.com/themes/)
- [Just the Docs Customization](https://just-the-docs.com/docs/customization/)
- [Just the Docs GitHub](https://github.com/just-the-docs/just-the-docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll GitHub Actions](https://jekyllrb.com/docs/continuous-integration/github-actions/)
- [GitHub Actions jekyll-build-pages](https://github.com/actions/jekyll-build-pages)
- [Slidev Building and Hosting](https://sli.dev/guide/hosting)

### MEDIUM Confidence (WebSearch Verified with Official Source)
- [GitHub Pages SPA routing limitations](https://github.com/orgs/community/discussions/64096)
- [reveal.js embedded mode issue discussion](https://github.com/hakimel/reveal.js/issues/3080)
- [VitePress Documentation](https://vitepress.dev/)
- [Astro Starlight](https://starlight.astro.build/)

### LOW Confidence (WebSearch Only, Single Source)
- Building a responsive reveal.js theme (blog post, patterns may vary)
- CSS architecture for dual-purpose sites (general guidance, not workshop-specific)
