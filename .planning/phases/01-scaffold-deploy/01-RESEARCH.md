# Phase 1: Scaffold & Deploy - Research

**Researched:** 2026-02-16
**Domain:** VitePress + Tailwind CSS v4 + GitHub Pages
**Confidence:** HIGH

## Summary

VitePress is a modern static site generator powered by Vite and Vue, designed for documentation sites. It uses file-based routing, has built-in search (MiniSearch), and offers extensive theming capabilities through CSS variables. The current version requires Node.js 18+ and uses a zero-config approach with sensible defaults.

Tailwind CSS v4 represents a major architectural shift from v3, featuring a new high-performance engine (182x faster for incremental builds), CSS-first configuration (no more `tailwind.config.js`), automatic content detection, and a first-party Vite plugin (`@tailwindcss/vite`). This eliminates PostCSS configuration but requires understanding `@source` directives for VitePress integration.

GitHub Pages deployment via GitHub Actions is the standard approach, requiring repository permissions (`pages: write`, `id-token: write`), proper base URL configuration for project repos, and no `.nojekyll` file when using Actions (Jekyll processing is bypassed).

**Primary recommendation:** Use VitePress with Tailwind CSS v4's Vite plugin, configure explicit `@source` paths for markdown scanning, deploy via GitHub Actions with automatic builds on push to main, and customize theme via CSS variable overrides rather than component replacement.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| VitePress | 1.6.3+ | Static site generator | Official Vue ecosystem docs tool, built on Vite |
| Tailwind CSS | 4.1.5+ | Utility-first CSS | v4 offers 182x faster builds, zero-config setup |
| @tailwindcss/vite | 4.1.5+ | Tailwind Vite plugin | First-party v4 plugin, replaces PostCSS approach |
| Node.js | 22 LTS | Runtime | Extended support to 2027, required for VitePress 18+ |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| MiniSearch | (built-in) | Local search | Always - comes with VitePress, enable with `provider: 'local'` |
| @tailwindcss/typography | 4.x | Prose styling | If markdown needs automatic typography styles |
| autoprefixer | 10.4.20+ | CSS vendor prefixes | With Tailwind v4 for browser compatibility |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| VitePress | VuePress | VuePress is older, Vite-based VitePress is faster and modern |
| Tailwind v4 | Tailwind v3 | v3 requires PostCSS config, explicit content paths, slower builds |
| GitHub Pages | Cloudflare Pages | Cloudflare offers faster global CDN but GitHub is simpler for repos |
| Local search | Algolia DocSearch | Algolia requires API keys, external service - local is zero-config |

**Installation:**
```bash
# Core VitePress + Tailwind CSS v4 setup
npm install -D vitepress@next tailwindcss@latest @tailwindcss/vite@latest autoprefixer@latest postcss@latest
```

## Architecture Patterns

### Recommended Project Structure
```
.
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── .vitepress/
│   ├── config.mts           # VitePress configuration (site metadata, theme)
│   ├── theme/
│   │   ├── index.ts         # Custom theme entry (extends DefaultTheme)
│   │   └── style.css        # Custom CSS + Tailwind import
│   ├── cache/               # Dev server cache (gitignored)
│   └── dist/                # Build output (gitignored)
├── docs/
│   ├── index.md             # Home page (hero layout)
│   ├── setup.md             # Content pages
│   ├── agenda.md
│   └── ...
├── package.json             # Scripts: docs:dev, docs:build, docs:preview
└── README.md
```

### Pattern 1: VitePress Configuration with Tailwind v4 Plugin

**What:** Configure VitePress to use Tailwind CSS v4's Vite plugin and set up proper base URL for GitHub Pages
**When to use:** Always - required for both Tailwind integration and GitHub Pages deployment

**Example:**
```typescript
// .vitepress/config.mts
// Source: https://vitepress.dev/reference/site-config + Tailwind v4 docs
import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: "AI-Teachathon | Halbritter Lab",
  description: "Learn Git, GitHub & AI Tools — Hands On",
  base: '/AI-Teachathon/', // CRITICAL for GitHub Pages project repos

  vite: {
    plugins: [tailwindcss()] // Tailwind v4 Vite plugin
  },

  themeConfig: {
    search: {
      provider: 'local' // Enable MiniSearch
    },
    sidebar: [
      { text: 'Setup', link: '/setup' },
      { text: 'Agenda', link: '/agenda' },
      { text: 'AI Tools', link: '/ai-tools' },
      // Flat list, no nested groups
    ],
    footer: {
      message: 'Halbritter Lab · CeRKiD · Charite Berlin',
      copyright: 'GitHub Repository'
    }
  }
})
```

### Pattern 2: Custom Theme with Tailwind v4 CSS Import

**What:** Extend VitePress DefaultTheme and import Tailwind CSS v4 with explicit source paths for markdown
**When to use:** Always - required to make Tailwind utilities available in VitePress

**Example:**
```typescript
// .vitepress/theme/index.ts
// Source: https://vitepress.dev/guide/extending-default-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css' // Import Tailwind CSS

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // layout slots if needed
    })
  }
} satisfies Theme
```

```css
/* .vitepress/theme/style.css */
/* Source: https://tailwindcss.com/blog/tailwindcss-v4 */
@import "tailwindcss";

/* CRITICAL: Explicit source paths for VitePress markdown scanning */
/* Paths are relative to THIS CSS file */
@source "../../docs/**/*.md";
@source "../**/*.{vue,ts}";

/* Custom CSS variable overrides */
:root {
  --vp-c-brand-1: #646cff; /* Light mode brand */
  --vp-c-brand-2: #747bff;
  --vp-c-brand-3: #535bf2;
}

.dark {
  --vp-c-brand-1: #a8b1ff; /* Dark mode brand */
  --vp-c-brand-2: #5c73e7;
  --vp-c-brand-3: #3e63dd;

  /* Dark background customization */
  --vp-c-bg: #2d2d3f; /* Medium dark, not pitch black */
  --vp-c-bg-alt: #25253a;
  --vp-c-bg-soft: #32324a;
}
```

### Pattern 3: Hero Layout for Landing Page

**What:** Use VitePress's built-in hero layout with frontmatter configuration
**When to use:** Always for the home page (`index.md`)

**Example:**
```markdown
---
layout: home

hero:
  name: "AI-Teachathon"
  text: "Halbritter Lab"
  tagline: "Learn Git, GitHub & AI Tools — Hands On"
  actions:
    - theme: brand
      text: Get Started
      link: /setup
    - theme: alt
      text: View Agenda
      link: /agenda
---
```

### Pattern 4: GitHub Actions Deployment Workflow

**What:** Configure automated deployment to GitHub Pages on push to main
**When to use:** Always - required for GitHub Pages deployment

**Example:**
```yaml
# .github/workflows/deploy.yml
# Source: https://vitepress.dev/guide/deploy
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Install dependencies
        run: npm ci

      - name: Build with VitePress
        run: npm run docs:build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Anti-Patterns to Avoid

- **Using Tailwind v3 setup patterns with v4:** Don't create `tailwind.config.js` or `postcss.config.js` - v4 uses CSS-first configuration via `@theme` in your CSS file
- **Missing `@source` directives:** Tailwind v4's automatic content detection doesn't scan VitePress markdown by default - must use explicit `@source` paths relative to CSS file
- **Forgetting base URL:** GitHub Pages project repos REQUIRE `base: '/repo-name/'` in config - without it, all assets 404
- **Creating `.nojekyll` file:** Not needed with GitHub Actions deployment (Jekyll processing is bypassed automatically)
- **Using nested sidebar groups when not needed:** CONTEXT.md specifies flat list - don't add unnecessary complexity
- **Replacing DefaultTheme components:** Use CSS variable overrides instead of component replacement for simpler maintenance

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Site search | Custom search UI | VitePress local search (`provider: 'local'`) | Built-in MiniSearch with fuzzy matching, zero config, no external service |
| Dark mode toggle | Custom toggle component | VitePress built-in appearance | Automatic toggle, persists preference, configurable labels |
| Markdown rendering | Custom parser | VitePress markdown-it | Handles frontmatter, code highlighting, custom containers, Vue components in markdown |
| Hero section layout | Custom Vue component | VitePress hero layout | Optimized, accessible, supports images/gradients, tested across devices |
| Code syntax highlighting | Custom highlighter | Shiki (built-in) | High-quality syntax highlighting, supports 100+ languages |
| Hot module reload | Custom dev server | Vite (via VitePress) | Instant HMR, optimized caching, battle-tested |
| CSS purging | Custom unused CSS removal | Tailwind v4 automatic | 182x faster, automatic content detection, respects .gitignore |

**Key insight:** VitePress and Tailwind v4 are "batteries included" frameworks. Custom solutions add maintenance burden and miss edge cases already solved. Trust the defaults, customize via configuration.

## Common Pitfalls

### Pitfall 1: Incorrect Base URL Configuration
**What goes wrong:** Site deploys but all CSS/JS assets return 404, pages render without styles
**Why it happens:** GitHub Pages serves project repos at `username.github.io/repo-name/` but VitePress defaults to root path `/`
**How to avoid:**
- Set `base: '/AI-Teachathon/'` in `.vitepress/config.mts`
- Base must match repository name exactly (case-sensitive)
- Must include leading and trailing slashes
- Test locally with `npm run docs:preview` after build
**Warning signs:** Local dev works but deployed site broken, browser console shows 404 errors for `/_assets/*`

### Pitfall 2: Tailwind Classes Not Generated from Markdown
**What goes wrong:** Tailwind utilities in markdown frontmatter or custom containers don't generate CSS
**Why it happens:** Tailwind v4's `@tailwindcss/vite` plugin doesn't automatically scan markdown files outside Vite's build graph
**How to avoid:**
- Add `@source "../../docs/**/*.md";` in `.vitepress/theme/style.css`
- Path is relative to the CSS file, NOT project root
- Use glob patterns to match all markdown locations
- Alternative: Switch to `@tailwindcss/postcss` for automatic subdirectory scanning
**Warning signs:** Tailwind utilities work in `.vue` files but not in markdown, missing styles only in content pages

### Pitfall 3: Missing GitHub Repository Permissions
**What goes wrong:** GitHub Actions workflow runs but deployment step fails with permissions error
**Why it happens:** Default `GITHUB_TOKEN` doesn't have `pages: write` or `id-token: write` permissions
**How to avoid:**
- Declare permissions in workflow YAML (see Pattern 4)
- Enable GitHub Pages in repo settings: Settings > Pages > Source: "GitHub Actions"
- Don't use legacy branch-based deployment
**Warning signs:** Workflow shows green checkmark but site doesn't update, deployment step shows "403 Forbidden"

### Pitfall 4: Mixing Tailwind v3 and v4 Setup Patterns
**What goes wrong:** No utilities generated, or conflicting build errors
**Why it happens:** Following outdated tutorials that show `@tailwind base;` directives and `tailwind.config.js` creation
**How to avoid:**
- v4 uses `@import "tailwindcss";` NOT `@tailwind` directives
- v4 uses `@theme { }` blocks in CSS NOT `tailwind.config.js`
- v4 uses `@tailwindcss/vite` plugin NOT `postcss.config.js`
- Check tutorial dates - if before late 2024, it's v3 instructions
**Warning signs:** Build errors mentioning "unknown at-rule @tailwind", Vite failing to process CSS

### Pitfall 5: Footer Not Displaying
**What goes wrong:** Footer configuration set but doesn't appear on any pages
**Why it happens:** VitePress only displays footer "when the page doesn't contain a sidebar" - sidebar pages hide footer automatically
**How to avoid:**
- Footer only appears on pages with `sidebar: false` in frontmatter
- For global attribution, use custom theme layout slots instead
- Or accept footer only shows on home page (layout: home)
- Document this limitation in planning
**Warning signs:** Footer appears on home page but disappears on all other pages

### Pitfall 6: Node.js Version Mismatch
**What goes wrong:** VitePress fails to install or build with cryptic errors
**Why it happens:** VitePress requires Node.js 18+ but system has older version
**How to avoid:**
- Use Node.js 22 LTS (support until 2027)
- Specify `node-version: 22` in GitHub Actions workflow
- Add `.nvmrc` file with version for local development
- Document Node.js requirement in setup docs
**Warning signs:** Installation errors mentioning "unsupported engine", Vite build failures

## Code Examples

Verified patterns from official sources:

### Flat Sidebar Navigation
```typescript
// Source: https://vitepress.dev/reference/default-theme-sidebar
export default {
  themeConfig: {
    sidebar: [
      { text: 'Setup', link: '/setup' },
      { text: 'Agenda', link: '/agenda' },
      { text: 'AI Tools', link: '/ai-tools' },
      { text: 'Hands-On', link: '/hands-on' },
      { text: 'Ideas', link: '/ideas' },
      { text: 'Resources', link: '/resources' }
    ]
  }
}
```

### Local Search Configuration
```typescript
// Source: https://vitepress.dev/reference/default-theme-search
export default {
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,      // Fuzzy matching threshold
            prefix: true,    // Enable prefix search
            boost: {         // Field boosting for relevance
              title: 4,      // Boost title matches
              text: 2,       // Boost body text
              titles: 1      // Boost heading matches
            }
          }
        }
      }
    }
  }
}
```

### CSS Variable Color Customization
```css
/* Source: https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css */

/* Light mode colors */
:root {
  /* Brand colors */
  --vp-c-brand-1: #646cff;
  --vp-c-brand-2: #747bff;
  --vp-c-brand-3: #535bf2;

  /* Background colors */
  --vp-c-bg: #ffffff;
  --vp-c-bg-alt: #f6f6f7;
  --vp-c-bg-soft: #f6f6f7;

  /* Text colors */
  --vp-c-text-1: #3c3c43; /* Primary text */
  --vp-c-text-2: #67676c; /* Muted text */
  --vp-c-text-3: #929295; /* Subtle text */
}

/* Dark mode colors */
.dark {
  /* Brand colors - brighter for dark backgrounds */
  --vp-c-brand-1: #a8b1ff;
  --vp-c-brand-2: #5c73e7;
  --vp-c-brand-3: #3e63dd;

  /* Background colors - medium dark, not pitch black */
  --vp-c-bg: #1b1b1f;
  --vp-c-bg-alt: #161618;
  --vp-c-bg-soft: #202127;

  /* Text colors - adjusted for dark background contrast */
  --vp-c-text-1: #dfdfd6; /* Primary text */
  --vp-c-text-2: #98989f; /* Muted text */
  --vp-c-text-3: #6a6a71; /* Subtle text */
}
```

### Package.json Scripts
```json
{
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  },
  "devDependencies": {
    "vitepress": "^1.6.3",
    "tailwindcss": "^4.1.5",
    "@tailwindcss/vite": "^4.1.5",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.1"
  }
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Tailwind v3 with PostCSS | Tailwind v4 with Vite plugin | Dec 2024 | No `tailwind.config.js`, CSS-first config, 182x faster |
| Explicit content paths | Automatic content detection | Tailwind v4 | Simpler setup but requires `@source` for VitePress markdown |
| `@tailwind` directives | `@import "tailwindcss"` | Tailwind v4 | CSS-native imports, better tool support |
| VuePress | VitePress | 2022+ | Vite-based (faster HMR), Vue 3, modern architecture |
| Jekyll GitHub Pages | GitHub Actions deployment | 2022+ | Full build control, no Jekyll limitations, modern CI/CD |
| Algolia search default | Local search (MiniSearch) | VitePress 1.0+ | Zero-config, no API keys, privacy-friendly |
| Node.js 18 LTS | Node.js 22 LTS | Oct 2024 | Extended support to 2027, better performance |

**Deprecated/outdated:**
- **`tailwind.config.js`:** Tailwind v4 uses `@theme` blocks in CSS files
- **`postcss.config.js`:** Tailwind v4 Vite plugin handles this internally
- **`.nojekyll` file:** Not needed with GitHub Actions deployment (only for legacy branch-based deployment)
- **`@tailwind base/components/utilities`:** Replaced with `@import "tailwindcss"` in v4
- **`content: []` array:** Tailwind v4 auto-detects, but VitePress markdown needs explicit `@source` paths

## Open Questions

Things that couldn't be fully resolved:

1. **Tailwind v4 @source Path Resolution**
   - What we know: Paths are relative to the CSS file containing `@source`
   - What's unclear: Whether glob patterns work across symlinks or monorepo workspaces
   - Recommendation: Use explicit relative paths, test during scaffolding phase

2. **VitePress Footer on Sidebar Pages**
   - What we know: Footer only shows when sidebar is disabled (`sidebar: false` frontmatter)
   - What's unclear: Whether custom theme slots can override this behavior cleanly
   - Recommendation: Accept limitation, use footer on home page only, document in planning

3. **Tailwind v4 Typography Plugin**
   - What we know: `@tailwindcss/typography` has v4 version
   - What's unclear: Whether prose styles conflict with VitePress markdown defaults
   - Recommendation: Skip for now, VitePress has good markdown defaults, add only if needed

## Sources

### Primary (HIGH confidence)
- [VitePress Getting Started](https://vitepress.dev/guide/getting-started) - Installation, project structure
- [VitePress Deploy Guide](https://vitepress.dev/guide/deploy) - GitHub Actions workflow, base URL config
- [VitePress Default Theme Sidebar](https://vitepress.dev/reference/default-theme-sidebar) - Sidebar configuration
- [VitePress Default Theme Home Page](https://vitepress.dev/reference/default-theme-home-page) - Hero layout configuration
- [VitePress Default Theme Search](https://vitepress.dev/reference/default-theme-search) - Local search setup
- [VitePress Extending Default Theme](https://vitepress.dev/guide/extending-default-theme) - Custom theme pattern
- [Tailwind CSS v4 Announcement](https://tailwindcss.com/blog/tailwindcss-v4) - v4 changes, new features
- [VitePress GitHub vars.css](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css) - CSS variables reference

### Secondary (MEDIUM confidence)
- [VitePress + Tailwind v4 Migration Guide](https://soubiran.dev/series/create-a-blog-with-vitepress-and-vue-js-from-scratch/migrating-our-vitepress-blog-to-tailwind-css-version-4) - Integration steps verified against official docs
- [Node.js Releases](https://nodejs.org/en/about/previous-releases) - LTS timeline for 2026
- [Tailwind CSS v4 @source Issue #16050](https://github.com/tailwindlabs/tailwindcss/issues/16050) - VitePress markdown scanning solution

### Tertiary (LOW confidence)
- WebSearch: "VitePress common mistakes pitfalls GitHub Pages 2026" - Aggregated community issues
- WebSearch: "Tailwind CSS v4 common mistakes pitfalls gotchas 2026" - v4 migration issues

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Official documentation, verified versions, clear consensus
- Architecture: HIGH - Official examples, tested patterns, GitHub sources
- Pitfalls: MEDIUM - Based on GitHub issues and community reports, some speculation on edge cases

**Research date:** 2026-02-16
**Valid until:** 2026-03-18 (30 days - VitePress and Tailwind are stable, slow-moving)
