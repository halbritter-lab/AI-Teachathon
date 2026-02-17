# Technology Stack Research

**Project:** AI Teachathon Website (Halbritter Lab / CeRKiD / Charite Berlin)
**Researched:** 2026-02-16
**Deadline:** 2026-02-17 (TOMORROW)
**Overall Confidence:** HIGH

---

## Recommendation: Plain HTML + Tailwind CSS v4 CDN + Reveal.js 5.x

**One-liner:** Skip the framework. Use plain HTML pages styled with Tailwind CSS v4 via CDN for documentation pages, and a standalone Reveal.js HTML file for the presentation. Deploy directly to GitHub Pages with zero build step.

**Why this wins:** When the event is TOMORROW, the fastest path to a polished, deployed site is the one with zero build tooling, zero dependencies, zero configuration files, and zero things that can break. Plain HTML with Tailwind v4 CDN produces a modern, beautiful site that deploys by simply pushing files to GitHub. Every other option adds a build step, a configuration layer, and failure modes you cannot afford with a same-day deadline.

---

## Top 3 Comparison

| Criterion | Plain HTML + Tailwind + Reveal.js | Astro Starlight | VitePress |
|---|---|---|---|
| **Setup time** | 0 minutes (create files, push) | 15-30 min (npm, config, learn structure) | 15-30 min (npm, config, learn structure) |
| **Build step required** | NO | YES (npm run build) | YES (npm run build) |
| **GitHub Pages deploy** | Push files, enable Pages | GitHub Actions workflow needed | GitHub Actions workflow needed |
| **Docs + slides hybrid** | Native (separate HTML files) | Custom component or iframe needed | Plugin or iframe needed |
| **Visual quality (2026)** | Excellent (Tailwind v4 is SOTA) | Excellent (built-in theme) | Good (clean but less modern) |
| **Things that can break** | Almost nothing | Node version, npm install, build errors, config | Node version, npm install, build errors, config |
| **AI buildability** | Excellent (Claude knows HTML/CSS deeply) | Good (needs Astro/MDX knowledge) | Good (needs Vue/VitePress knowledge) |
| **Customization** | Total control | Component overrides | Config + Vue components |
| **Search built-in** | No (not needed for 8 pages) | Yes | Yes |
| **Navigation built-in** | Manual (but trivial for 8 pages) | Yes (sidebar auto-generated) | Yes (sidebar auto-generated) |
| **Learning curve** | None | Medium (Astro concepts, file routing) | Medium (VitePress config, Vue) |
| **Risk for tomorrow** | Very low | Medium (build failures, config issues) | Medium (build failures, config issues) |

---

## Detailed Analysis of All Options

### 1. Plain HTML + Tailwind CSS v4 CDN + Reveal.js (RECOMMENDED)

**Setup time:** 0 minutes -- create HTML files and push
**Docs + slides hybrid:** Native -- presentation.html uses Reveal.js, other pages are styled HTML
**Visual quality:** Excellent -- Tailwind v4 is the state of the art for CSS utility frameworks
**GitHub Pages deployment:** Trivial -- push files, enable GitHub Pages on the branch
**AI buildability:** Excellent -- HTML/CSS/JS is Claude's strongest domain
**Modern look:** As modern as you want it -- full control over every pixel

**Strengths:**
- Zero dependencies, zero build step, zero configuration
- Cannot break due to npm/Node version issues
- Full creative control over layout and design
- Tailwind v4 CDN (`@tailwindcss/browser@4`) works with a single script tag
- Reveal.js 5.x works from CDN (jsDelivr) with no npm install
- Every page is independently functional (no framework coupling)
- Claude Code can generate beautiful HTML+Tailwind effortlessly
- Can add interactivity with vanilla JS where needed
- Works offline (CDN cached, or bundle locally)

**Weaknesses:**
- No auto-generated sidebar navigation (must build manually)
- No built-in search (irrelevant for 8 pages)
- No Markdown-to-HTML (content written directly in HTML)
- Navigation header/footer must be duplicated or templated
- No hot reload in development (use VS Code Live Server extension)

**Mitigation for weaknesses:**
- For 8 pages, a shared nav component via JS `fetch()` or simply copy-paste is fine
- Content in HTML is actually FASTER for Claude to generate than Markdown with frontmatter
- VS Code Live Server provides hot reload trivially

**CDN Links (verified 2026-02-16):**
```html
<!-- Tailwind CSS v4 (browser/CDN version) -->
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<!-- Reveal.js 5.x -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/black.css">
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>

<!-- Optional: Reveal.js plugins -->
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/markdown/markdown.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/highlight/highlight.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/notes/notes.js"></script>
```

**Confidence:** HIGH (verified via official CDN pages and jsDelivr)

---

### 2. Astro Starlight (Strong runner-up)

**Current version:** Astro 5.17 / Starlight 0.37.3 (as of Jan 2026)
**Setup time:** 15-30 minutes (npm create, configure, learn file structure)
**Docs + slides hybrid:** Possible via custom Astro component wrapping an iframe or Reveal.js
**Visual quality:** Excellent -- one of the best-looking doc themes available, used by Cloudflare, OpenAI, Microsoft
**GitHub Pages deployment:** Supported via official GitHub Action (`withastro/action`)
**AI buildability:** Good -- Astro has good docs, but MDX/component patterns are less familiar
**Modern look:** State of the art for documentation sites

**Strengths:**
- Beautiful default theme with dark mode, sidebar, search
- MDX support allows mixing Markdown with components
- Can use React, Vue, Svelte components inside pages
- Official GitHub Pages deployment action
- Used in production by major companies (Cloudflare, OpenAI docs)
- i18n support built in
- Excellent accessibility out of the box

**Weaknesses:**
- Requires Node.js 18.17+ and npm
- Build step adds complexity and failure surface
- Must learn Astro's file-based routing (`src/content/docs/`)
- Presentation integration requires custom work (iframe or component)
- Config file (astro.config.mjs) needs correct base path for GitHub Pages
- Starlight is still pre-1.0 (0.37.x) -- possible breaking changes

**Why not recommended for THIS project:**
- The build toolchain is unnecessary risk when shipping tomorrow
- Learning Astro's patterns while racing the clock is wasteful
- The site has only ~8 pages -- Starlight's features (search, sidebar generation, i18n) are overkill
- Presentation integration is not built-in, requiring custom component work

**Would recommend if:** You had 1+ week and wanted a long-lived documentation site with many pages.

**Confidence:** HIGH (verified via official Astro/Starlight docs and GitHub releases)

---

### 3. VitePress (Solid option, not for this timeline)

**Current version:** 1.6.4
**Setup time:** 15-30 minutes
**Docs + slides hybrid:** Possible via Vue component wrapping iframe, or VuePress Theme Hope had Reveal.js integration (but that was VuePress, not VitePress)
**Visual quality:** Good -- clean, professional, but less visually striking than Starlight
**GitHub Pages deployment:** Supported with GitHub Actions workflow
**AI buildability:** Good -- Vue-based, good documentation
**Modern look:** Professional but slightly dated compared to Starlight

**Strengths:**
- Fast build times (Vite-powered)
- Good default theme
- Vue ecosystem integration
- Well-documented deployment to GitHub Pages
- Sidebar and search built in

**Weaknesses:**
- Requires Node.js and build step
- Vue knowledge helpful for customization
- Default theme less visually modern than Starlight
- No native slide/presentation support
- Last published 6+ months ago (1.6.4) -- development pace unclear

**Why not recommended:**
- Same build-step risks as Starlight but with a less modern default look
- For this specific project, no advantage over plain HTML or Starlight

**Confidence:** HIGH (verified via npm and official docs)

---

### 4. Slidev

**Current version:** Latest on npm (actively developed)
**Setup time:** 10-15 minutes
**Docs + slides hybrid:** NO -- Slidev is a presentation-only tool. It does NOT support non-slide pages (docs, guides, reference pages). There is no routing for non-presentation content.
**Visual quality:** Excellent for slides, N/A for documentation
**GitHub Pages deployment:** Supported (builds to SPA)
**Modern look:** Very modern slides

**Verdict: REJECTED.** Slidev is a fantastic presentation tool but cannot serve as a documentation site. It has no concept of "pages" outside of slides. You cannot build a setup guide, agenda, or resources page in Slidev. It would only cover ~20% of the site requirements.

**Confidence:** HIGH (verified via official docs and GitHub issues -- multiple requests for non-slide pages exist as open feature requests)

---

### 5. Docusaurus

**Current version:** 3.9.2
**Setup time:** 20-30 minutes
**Docs + slides hybrid:** Possible via iframe or custom React component
**Visual quality:** Good -- recognizable "Docusaurus look" that is professional but generic
**GitHub Pages deployment:** Built-in deploy command or GitHub Actions
**AI buildability:** Good -- widely used, lots of examples
**Modern look:** Starting to feel dated compared to Starlight/Astro

**Why not recommended:**
- Heavier than needed (React dependency)
- Slower dev server startup
- Requires Node.js 20+ (dropped Node 18 in 3.9)
- Configuration is more complex than Starlight
- The "Docusaurus look" is recognizable and somewhat generic
- For 8 pages built in one evening, the overhead is not justified

**Confidence:** HIGH (verified via official changelog and npm)

---

### 6. MkDocs Material

**Current version:** 9.7.1
**Setup time:** 10-20 minutes (pip install)
**Docs + slides hybrid:** Yes, via mkdocs-revealjs plugin (community template exists)
**Visual quality:** Excellent -- one of the best documentation themes, period
**GitHub Pages deployment:** Supported via `mkdocs gh-deploy` command
**AI buildability:** Good -- Python-based, simple config
**Modern look:** Very polished, Material Design based

**Strengths:**
- Gorgeous theme with tons of built-in features
- Simple YAML configuration
- mkdocs-revealjs template exists for slide integration
- One-command deployment to GitHub Pages
- Markdown content with simple frontmatter

**Weaknesses:**
- Requires Python environment
- Plugin ecosystem is Python-based (different from Node.js tools)
- Material Design aesthetic may not be the "modern web" look desired
- mkdocs-revealjs plugin is community-maintained (lower confidence on stability)

**Why not recommended:**
- Requires Python setup (if not already installed)
- Build step still present
- Plain HTML with Tailwind gives a more custom, modern look with less setup

**Confidence:** MEDIUM (verified core via PyPI; mkdocs-revealjs plugin reliability unverified)

---

### 7. Jekyll + just-the-docs

**Current version:** just-the-docs theme (actively maintained on GitHub)
**Setup time:** 5-15 minutes (if using remote_theme, no local Ruby needed)
**Docs + slides hybrid:** Possible -- Reveal.js as standalone HTML file passed through by Jekyll
**Visual quality:** Clean and professional but visually dated by 2026 standards
**GitHub Pages deployment:** Native -- Jekyll is GitHub Pages' default SSG
**AI buildability:** Good -- simple Markdown + frontmatter
**Modern look:** Dated. The just-the-docs theme looks like 2020-era documentation.

**This was the original plan in start.md.** It is a solid, proven approach. However:

**Strengths:**
- GitHub Pages builds Jekyll natively (no GitHub Actions needed for basic setup)
- Simple Markdown files with frontmatter
- Sidebar navigation auto-generated from nav_order
- Reveal.js presentation works as a standalone HTML passthrough
- just-the-docs has search, ToC, and responsive design built in

**Weaknesses:**
- Visually dated -- does not match "modern, polished" requirement from PROJECT.md
- Limited customization without deep Sass/Jekyll knowledge
- Ruby dependency for local development
- Color scheme options are minimal
- Cannot achieve the "real web experience" visual quality described in requirements
- GitHub Pages uses an older Jekyll version (may have gem compatibility issues)

**Why not recommended:**
- The visual quality gap is significant. In 2026, just-the-docs looks functional but not impressive. The PROJECT.md explicitly asks for "modern presentation-style landing" and "professional look matching academic/lab context." Tailwind v4 delivers this; just-the-docs does not.
- The original plan in start.md used this stack, but the project brief has evolved to emphasize visual quality.

**Confidence:** HIGH (well-known, stable technology)

---

### 8. Hugo with Modern Theme

**Current version:** Hugo 0.145+ (Go-based, extremely fast)
**Setup time:** 15-25 minutes (install Hugo, pick theme, configure)
**Docs + slides hybrid:** Possible via shortcodes or standalone HTML
**Visual quality:** Theme-dependent -- HugoBlox (formerly Academic) is good for academic sites
**GitHub Pages deployment:** Supported via GitHub Actions
**AI buildability:** Medium -- Go templates have unusual syntax
**Modern look:** Theme-dependent

**Why not recommended:**
- Hugo's Go template syntax is the least AI-friendly of all options
- Theme selection and configuration takes time
- HugoBlox has a steep learning curve
- For a one-evening build, the Hugo learning curve is too steep

**Confidence:** MEDIUM (verified Hugo version; theme quality is subjective)

---

### 9. Nextra

**Current version:** Nextra 4 (App Router, Next.js based)
**Setup time:** 20-30 minutes
**Docs + slides hybrid:** No built-in slide support
**Visual quality:** Good -- clean Next.js-powered docs
**GitHub Pages deployment:** Possible but Next.js static export has quirks with GitHub Pages
**Modern look:** Modern

**Why not recommended:**
- Next.js static export to GitHub Pages has known friction
- Heaviest framework option (full React + Next.js)
- No slide integration
- Overkill for 8 static pages

**Confidence:** MEDIUM (verified Nextra 4 release; GitHub Pages deployment not tested)

---

## The Hybrid Docs + Slides Problem: State of the Art (2025-2026)

**Question:** Is there a single framework that natively does both documentation AND presentation slides?

**Answer:** No. There is no single widely-adopted framework that does both well natively.

The ecosystem is bifurcated:
- **Documentation frameworks** (Starlight, VitePress, Docusaurus, MkDocs) do docs well, presentations poorly
- **Presentation frameworks** (Slidev, Reveal.js) do slides well, documentation not at all

**Best approaches for hybrid sites:**

1. **Standalone HTML approach (RECOMMENDED):** Use separate HTML files for docs and slides. Style docs pages with Tailwind, create presentation with Reveal.js as a standalone HTML page. Link between them. This is what major conference sites do.

2. **Docs framework + iframe:** Use a docs framework (Starlight, VitePress) and embed Reveal.js slides in an iframe or link to a standalone Reveal.js page. Works but feels disconnected.

3. **MkDocs + mkdocs-revealjs:** The closest to a true hybrid, with a community plugin that enables Reveal.js pages within MkDocs. But plugin reliability is uncertain.

4. **Quarto:** Academic publishing tool that supports both documents and Reveal.js presentations natively. However, it requires R/Python tooling and is overkill for a web workshop site.

**The plain HTML approach is the state of the art for "I need both, now."** It avoids framework lock-in and lets you optimize each content type independently.

---

## Recommended Stack (Final)

### Core Technologies

| Technology | Version | Purpose | CDN/Install |
|---|---|---|---|
| HTML5 | -- | Page structure | Native |
| Tailwind CSS | v4 (browser CDN) | Styling, responsive design, dark mode | `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>` |
| Reveal.js | 5.2.1 | Presentation slides | jsDelivr CDN (see links above) |
| Vanilla JavaScript | ES2022+ | Navigation, interactions | Native |
| GitHub Pages | -- | Static hosting | Push to branch, enable in Settings |

### Supporting Libraries (Optional)

| Library | Purpose | When to Use | CDN |
|---|---|---|---|
| Highlight.js | Code syntax highlighting | If showing code snippets | `https://cdn.jsdelivr.net/npm/highlight.js@11/` |
| Font Awesome | Icons | If icons needed | `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css` |
| Inter font | Modern typography | Recommended for professional look | Google Fonts |

### Architecture

```
AI-Teachathon/
  index.html                    # Landing page (Tailwind styled)
  setup.html                    # Setup instructions (Tailwind styled)
  agenda.html                   # Event agenda/timeline (Tailwind styled)
  presentation.html             # Reveal.js presentation (standalone)
  tool-landscape.html           # AI tools overview (Tailwind styled)
  hands-on.html                 # Hands-on guide (Tailwind styled)
  ideas.html                    # Project ideas page (Tailwind styled)
  resources.html                # Links and references (Tailwind styled)
  assets/
    css/
      shared.css                # Shared Tailwind customizations
    images/                     # Logos, diagrams, screenshots
    js/
      nav.js                    # Shared navigation component (loaded via JS)
  .github/
    workflows/
      pages.yml                 # GitHub Actions for Pages (simple static deploy)
  .nojekyll                     # Tells GitHub Pages to skip Jekyll processing
  README.md                     # Repo documentation
  LICENSE                       # CC BY 4.0
```

### GitHub Pages Deployment

**Method:** GitHub Actions with static HTML (no build step)

The `.nojekyll` file is critical -- it tells GitHub Pages to serve files directly without Jekyll processing. The GitHub Actions workflow is minimal:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - id: deployment
        uses: actions/deploy-pages@v4
```

This deploys the entire repository root as a static site. No build step. No npm. No Node.js.

**Base URL:** The site will be at `https://berntpopp.github.io/AI-Teachathon/`
All internal links must account for the `/AI-Teachathon/` base path.

---

## Alternatives Considered (Summary)

| Category | Recommended | Runner-up | Why Not Runner-up |
|---|---|---|---|
| Overall stack | Plain HTML + Tailwind + Reveal.js | Astro Starlight | Build step risk, overkill for 8 pages, timeline too tight |
| CSS framework | Tailwind CSS v4 CDN | None (pure CSS) | Tailwind is dramatically faster for Claude to generate than raw CSS |
| Presentation | Reveal.js 5.x CDN | Slidev | Slidev cannot do docs pages; Reveal.js is standalone and proven |
| Hosting | GitHub Pages (static) | Vercel/Netlify | GitHub Pages is the requirement |
| Build tool | None (zero build) | Vite | No build = no build failures at 2 AM |

---

## Why Not the Original Plan (Jekyll + just-the-docs)?

The `start.md` file in `.planning/` contains an original plan using Jekyll + just-the-docs + Reveal.js. This was a reasonable plan, but the plain HTML approach is better for this specific situation because:

1. **Visual quality:** just-the-docs looks functional but dated. Tailwind v4 produces modern, visually impressive pages that match the "professional look" requirement.

2. **Speed:** Jekyll + just-the-docs requires either Ruby locally or a more complex GitHub Actions workflow. Plain HTML requires nothing.

3. **Flexibility:** The landing page should be a "real web experience" (per PROJECT.md), not a docs page with a nav sidebar. Plain HTML lets you create a full-width, hero-style landing page. just-the-docs forces every page into the sidebar+content layout.

4. **AI generation:** Claude Code can generate beautiful, complete HTML+Tailwind pages in a single pass. Jekyll requires understanding of frontmatter, Liquid templates, theme overrides, and Sass variables.

5. **Risk:** Jekyll has Ruby dependency issues, gem version conflicts, and GitHub Pages uses an older Jekyll version. Plain HTML has zero dependency issues.

**The original plan's content structure is excellent.** The page list, content outlines, and Reveal.js approach from `start.md` should be preserved. Only the technology wrapper changes from Jekyll to plain HTML.

---

## Version Verification

| Technology | Claimed Version | Verified Via | Verification Date |
|---|---|---|---|
| Tailwind CSS v4 | v4 (browser CDN) | Official docs (tailwindcss.com/docs/installation/play-cdn) | 2026-02-16 |
| Reveal.js | 5.2.1 | jsDelivr CDN, GitHub releases | 2026-02-16 |
| Astro | 5.17 | npm registry | 2026-02-16 |
| Starlight | 0.37.3 | GitHub releases | 2026-02-16 |
| VitePress | 1.6.4 | npm registry | 2026-02-16 |
| Docusaurus | 3.9.2 | npm registry, official changelog | 2026-02-16 |
| MkDocs Material | 9.7.1 | PyPI | 2026-02-16 |

---

## Sources

### Primary (HIGH confidence)
- [Tailwind CSS Play CDN](https://tailwindcss.com/docs/installation/play-cdn) -- Official CDN setup docs
- [Reveal.js Installation](https://revealjs.com/installation/) -- Official installation guide
- [Reveal.js on jsDelivr](https://www.jsdelivr.com/package/npm/reveal.js) -- CDN availability
- [Astro Starlight Getting Started](https://starlight.astro.build/getting-started/) -- Official setup guide
- [Astro GitHub Pages Deploy](https://docs.astro.build/en/guides/deploy/github/) -- Official deployment docs
- [VitePress Deploy Guide](https://vitepress.dev/guide/deploy) -- Official deployment docs
- [Docusaurus Deployment](https://docusaurus.io/docs/deployment) -- Official deployment docs
- [Slidev Building and Hosting](https://sli.dev/guide/hosting) -- Official hosting guide
- [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) -- Official docs

### Secondary (MEDIUM confidence)
- [Starlight vs Docusaurus - LogRocket](https://blog.logrocket.com/starlight-vs-docusaurus-building-documentation/) -- Framework comparison
- [Distr: Starlight instead of Docusaurus](https://distr.sh/blog/distr-docs/) -- Real-world migration story
- [MkDocs Reveal.js Template](https://github.com/dhondta/mkdocs-revealjs-template) -- Community integration
- [Astro Starlight GitHub Pages Template](https://github.com/30DaysOf/astro-starlight-ghpages/) -- Community deployment template
- [Slidev GitHub Pages Discussion](https://github.com/slidevjs/slidev/discussions/301) -- Community deployment approaches

### Tertiary (LOW confidence -- unverified community sources)
- [PHLAK Reveal.js + Tailwind template](https://github.com/PHLAK/presentation) -- Community presentation template
- [Nextra 4 announcement](https://the-guild.dev/blog/nextra-4) -- Blog post on Nextra 4 features

---

*Last updated: 2026-02-16*
