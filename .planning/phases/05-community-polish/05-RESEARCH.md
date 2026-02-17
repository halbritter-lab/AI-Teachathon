# Phase 5: Community & Polish - Research

**Researched:** 2026-02-17
**Domain:** VitePress content pages, GitHub integration, Playwright testing
**Confidence:** HIGH

## Summary

Phase 5 adds community-facing pages (ideas and resources), enables GitHub contribution via VitePress's built-in editLink feature, and ensures quality with Playwright-based testing. Research focused on three technical domains: VitePress page layout and editLink configuration, Playwright testing strategies for static sites, and responsive/cross-link validation patterns.

VitePress provides native support for edit-on-GitHub links via `themeConfig.editLink` with a pattern-based URL system. The home page layout supports hero sections with featured content and action buttons, making it ideal for highlighting KidneyQuest as the featured project. For testing, Playwright offers comprehensive device emulation, built-in link validation via the request API, and project-based configuration for testing across multiple viewports and browsers.

**Primary recommendation:** Use VitePress editLink with GitHub pattern, implement Playwright projects for multi-device testing, validate all links using soft assertions for complete error reporting.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| VitePress | 1.6.4 | Static site generator | Already in use, native GitHub integration |
| Playwright | Latest (1.50+) | Browser automation & testing | Industry standard for E2E testing, excellent device emulation |
| @playwright/test | Bundled | Test runner | Official Playwright test framework with rich assertions |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| playwright.devices | Bundled | Device profiles | Pre-configured mobile/tablet/desktop viewports |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Playwright | Puppeteer | Playwright has better multi-browser support and auto-waiting |
| VitePress editLink | Custom GitHub links | Built-in feature handles path resolution automatically |
| Manual testing | Visual regression testing | Playwright provides both functional and visual testing capabilities |

**Installation:**
```bash
npm install -D playwright @playwright/test
npx playwright install chromium firefox webkit
```

## Architecture Patterns

### Recommended Project Structure
```
docs/
├── ideas.md              # Project ideas page with hero section
├── resources.md          # Timeline-organized resource links
└── .vitepress/
    └── config.mts        # Contains editLink configuration

tests/
├── playwright.config.ts  # Multi-device projects configuration
├── links.spec.ts         # Cross-link and external link validation
└── responsive.spec.ts    # Mobile/desktop viewport testing
```

### Pattern 1: VitePress editLink Configuration
**What:** Global edit-on-GitHub links on all pages via config
**When to use:** When enabling community contributions without per-page configuration
**Example:**
```typescript
// Source: https://vitepress.dev/reference/default-theme-edit-link
export default defineConfig({
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/berntpopp/AI-Teachathon/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
```

**Per-page override** (if needed to disable on specific pages):
```yaml
---
editLink: false
---
```

### Pattern 2: Hero Section for Featured Content
**What:** VitePress home layout with hero section and action buttons
**When to use:** To prominently feature KidneyQuest while keeping other projects secondary
**Example:**
```yaml
# Source: https://vitepress.dev/reference/default-theme-home-page
---
layout: home

hero:
  name: Featured Project
  text: KidneyQuest
  tagline: An educational game about rare kidney diseases, built with web technologies and AI assistance
  actions:
    - theme: brand
      text: Learn More
      link: /hands-on
    - theme: alt
      text: View on GitHub
      link: https://github.com/example/kidneyquest

features:
  - icon: 🧬
    title: Genomic Variant Effect Prediction
    details: Use AlphaGenome API to predict variant effects...
---

## Additional Project Ideas
[Markdown content below for the 4 alternative projects]
```

### Pattern 3: Playwright Link Validation
**What:** Extract all links from pages and validate status codes
**When to use:** To catch broken internal cross-links and dead external links before deployment
**Example:**
```typescript
// Source: https://www.checklyhq.com/docs/learn/playwright/how-to-detect-broken-links/
test('validate all links', async ({ page }) => {
  await page.goto('http://localhost:5173/AI-Teachathon/')

  // Extract all links
  const allLinks = await page.locator('a').all()
  const allLinkHrefs = await Promise.all(
    allLinks.map((link) => link.getAttribute('href'))
  )

  // Filter and normalize
  const validHrefs = allLinkHrefs.reduce((links, link) => {
    if (link && !link.startsWith('mailto:') && !link.startsWith('#'))
      links.add(new URL(link, page.url()).href)
    return links
  }, new Set<string>())

  // Check status codes with soft assertions
  for (const url of validHrefs) {
    const response = await page.request.get(url)
    expect.soft(response.ok(), `${url} should return 200-299`).toBeTruthy()
  }
})
```

### Pattern 4: Multi-Device Testing with Projects
**What:** Configure Playwright projects for desktop, tablet, and mobile viewports
**When to use:** To ensure responsive design works across all target devices
**Example:**
```typescript
// Source: https://playwright.dev/docs/test-projects
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm run docs:dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },

  projects: [
    // Desktop
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // Mobile
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] }, // 393×851
    },
    {
      name: 'iPhone 12',
      use: { ...devices['iPhone 12'] }, // 390×844
    },

    // Tablet
    {
      name: 'iPad',
      use: { ...devices['iPad (gen 7)'] }, // 810×1080
    },

    // Custom presentation viewport
    {
      name: 'Presentation 1024x768',
      use: {
        viewport: { width: 1024, height: 768 },
        deviceScaleFactor: 1,
      },
    },
  ],
})
```

### Pattern 5: Responsive Testing
**What:** Test critical UI elements at different viewport sizes
**When to use:** To verify mobile navigation, text readability, and layout shifts
**Example:**
```typescript
// Source: https://playwright.dev/docs/emulation
test.describe('Responsive design', () => {
  test('mobile sidebar navigation works', async ({ page }) => {
    // Mobile viewport already set via project config
    await page.goto('/AI-Teachathon/')

    // Mobile menu button should be visible
    const menuButton = page.locator('[aria-label="Toggle navigation"]')
    await expect(menuButton).toBeVisible()

    // Sidebar should appear after click
    await menuButton.click()
    await expect(page.locator('nav.sidebar')).toBeVisible()
  })

  test('desktop viewport has persistent sidebar', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto('/AI-Teachathon/')

    // Sidebar always visible on desktop
    await expect(page.locator('nav.sidebar')).toBeVisible()
  })
})
```

### Anti-Patterns to Avoid
- **Hard-coded waits:** Playwright auto-waits for elements; avoid `page.waitForTimeout()` except for debugging
- **Ignoring soft assertions:** Use `expect.soft()` for link checking to get complete error lists, not just first failure
- **Testing third-party APIs directly:** Mock external services to avoid rate limits and flaky tests
- **Single viewport testing:** Test at multiple sizes; 375px mobile is common but not comprehensive
- **Global editLink disabling:** If contributions aren't desired on specific pages, disable per-page via frontmatter

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Edit-on-GitHub links | Custom GitHub URL builder | VitePress editLink config | Handles path resolution, base paths, and :path placeholder automatically |
| Device emulation | Manual viewport testing | playwright.devices registry | Pre-configured user agent, touch support, pixel ratio for 100+ devices |
| Link validation | Custom fetch loops | Playwright page.request API | Maintains session context, handles redirects, respects cookies |
| Mobile testing | CSS media query checks only | Playwright device emulation | Tests actual touch events, viewport meta tags, mobile-specific JS |
| Broken link detection | Grep/regex on HTML | Playwright locator.all() | Renders page fully, follows client-side routing, tests actual navigation |

**Key insight:** VitePress and Playwright both provide abstractions that handle edge cases (base paths, redirects, SPA routing). Custom solutions miss these and create maintenance burden.

## Common Pitfalls

### Pitfall 1: Base Path Mismatch in Testing
**What goes wrong:** Tests pass locally but links break in production because VitePress uses `/AI-Teachathon/` base path
**Why it happens:** Dev server serves from `/` but production deploys to subdirectory (GitHub Pages)
**How to avoid:** Configure Playwright webServer to test against the actual base path:
```typescript
webServer: {
  command: 'npm run docs:dev',
  url: 'http://localhost:5173/AI-Teachathon/', // Include base path
}
```
**Warning signs:** Internal links work in dev but return 404 in GitHub Pages preview

### Pitfall 2: Testing Without Building First
**What goes wrong:** Tests validate dev server content, which may differ from production build
**Why it happens:** VitePress dev server uses on-demand compilation; build process optimizes differently
**How to avoid:** Add separate test for production build:
```typescript
// In CI or pre-deploy testing
webServer: {
  command: 'npm run docs:build && npm run docs:preview',
  url: 'http://localhost:4173',
}
```
**Warning signs:** Tests pass but deployed site has broken features

### Pitfall 3: Not Using Soft Assertions for Link Validation
**What goes wrong:** Test stops at first broken link, hiding other issues
**Why it happens:** Regular assertions throw immediately; soft assertions collect all failures
**How to avoid:** Always use `expect.soft()` when validating multiple links:
```typescript
// BAD: stops at first failure
expect(response.ok()).toBeTruthy()

// GOOD: reports all failures at end
expect.soft(response.ok(), `${url} failed`).toBeTruthy()
```
**Warning signs:** CI shows one broken link but manual testing finds more

### Pitfall 4: Fullscreen API Doesn't Work in Headless Mode
**What goes wrong:** Presentation fullscreen tests fail in CI but pass locally
**Why it happens:** Fullscreen API requires user interaction and doesn't work in headless browsers
**How to avoid:** Test presentation at target viewport size instead of actual fullscreen:
```typescript
// DON'T try to test fullscreen API in headless
// DO test at presentation viewport size
{
  name: 'Presentation',
  use: { viewport: { width: 1024, height: 768 } },
}
```
**Warning signs:** GitHub issue #15116 - known Playwright limitation since 2022

### Pitfall 5: editLink Pattern Without :path Placeholder
**What goes wrong:** All pages link to same GitHub URL instead of their source file
**Why it happens:** Forgot `:path` placeholder in pattern string
**How to avoid:** Always include `:path` in editLink pattern:
```typescript
// BAD: all pages link to /docs/
pattern: 'https://github.com/org/repo/edit/main/docs/'

// GOOD: :path replaced with actual file path
pattern: 'https://github.com/org/repo/edit/main/docs/:path'
```
**Warning signs:** Edit link on ideas.md and resources.md both go to same URL

### Pitfall 6: Treating Playwright as Unit Test Framework
**What goes wrong:** Using Playwright to test pure functions or data transformations
**Why it happens:** Playwright is convenient but overkill for non-browser logic
**How to avoid:** Use Playwright only for browser-dependent behavior (navigation, rendering, user interaction)
**Warning signs:** Tests that don't call `page.goto()` or interact with DOM

## Code Examples

Verified patterns from official sources:

### Complete Playwright Config for VitePress
```typescript
// Source: https://playwright.dev/docs/test-projects
// Combined with VitePress patterns
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:5173/AI-Teachathon/',
    trace: 'on-first-retry',
  },

  webServer: {
    command: 'npm run docs:dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },

  projects: [
    // Desktop browsers
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // Mobile devices
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },

    // Tablet
    {
      name: 'tablet',
      use: { ...devices['iPad (gen 7)'] },
    },

    // Custom: Presentation mode
    {
      name: 'presentation',
      use: {
        viewport: { width: 1024, height: 768 },
        deviceScaleFactor: 1,
      },
    },

    // Minimum mobile width from requirements
    {
      name: 'mobile-375',
      use: {
        viewport: { width: 375, height: 667 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
})
```

### Link Validation Test
```typescript
// Source: https://www.checklyhq.com/docs/learn/playwright/how-to-detect-broken-links/
import { test, expect } from '@playwright/test'

test.describe('Link validation', () => {
  const pages = [
    '/AI-Teachathon/',
    '/AI-Teachathon/setup',
    '/AI-Teachathon/agenda',
    '/AI-Teachathon/ideas',
    '/AI-Teachathon/resources',
  ]

  for (const pagePath of pages) {
    test(`validate links on ${pagePath}`, async ({ page }) => {
      await page.goto(pagePath)

      // Extract all links
      const allLinks = await page.locator('a').all()
      const allLinkHrefs = await Promise.all(
        allLinks.map((link) => link.getAttribute('href'))
      )

      // Filter and normalize
      const validHrefs = allLinkHrefs.reduce((links, link) => {
        expect.soft(link).toBeTruthy()

        if (link && !link.startsWith('mailto:') && !link.startsWith('#')) {
          links.add(new URL(link, page.url()).href)
        }
        return links
      }, new Set<string>())

      // Validate each unique URL
      for (const url of validHrefs) {
        try {
          const response = await page.request.get(url)
          expect
            .soft(response.ok(), `${url} returned ${response.status()}`)
            .toBeTruthy()
        } catch (error) {
          expect
            .soft(null, `${url} failed to load: ${error.message}`)
            .toBeTruthy()
        }
      }
    })
  }
})
```

### Responsive Navigation Test
```typescript
// Source: https://playwright.dev/docs/emulation
import { test, expect } from '@playwright/test'

test.describe('Responsive navigation', () => {
  test('mobile viewport has functional menu', async ({ page }) => {
    // Assumes project config sets mobile viewport
    await page.goto('/AI-Teachathon/')

    // Find Ideas link in sidebar
    const ideasLink = page.locator('nav a:has-text("Ideas")')

    // Click and verify navigation
    await ideasLink.click()
    await expect(page).toHaveURL(/.*\/ideas/)
    await expect(page.locator('h1')).toContainText('Project Ideas')
  })

  test('presentation viewport renders slides', async ({ page }) => {
    // Assumes project config sets 1024x768 viewport
    await page.goto('/AI-Teachathon/presentation.html')

    // Verify Marp slides are present
    await expect(page.locator('section[data-marpit-slide]')).toBeVisible()
  })

  test('text is readable at 375px width', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/AI-Teachathon/ideas')

    // Check for horizontal scrolling (bad UX)
    const bodyWidth = await page.locator('body').evaluate((el) => el.scrollWidth)
    expect(bodyWidth).toBeLessThanOrEqual(375)

    // Verify text doesn't overflow container
    const article = page.locator('article')
    const articleWidth = await article.evaluate((el) => el.scrollWidth)
    const containerWidth = await article.evaluate((el) => el.clientWidth)
    expect(articleWidth).toBeLessThanOrEqual(containerWidth)
  })
})
```

### editLink Configuration
```typescript
// Source: https://vitepress.dev/reference/default-theme-edit-link
// In docs/.vitepress/config.mts
export default defineConfig({
  // ... existing config

  themeConfig: {
    // ... existing themeConfig

    editLink: {
      pattern: 'https://github.com/berntpopp/AI-Teachathon/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
  },
})
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual cross-link checking | Playwright link validation | 2020+ | Automated detection of broken internal links |
| CSS media queries only | Device emulation with touch/UA | Playwright 1.0+ | Tests actual mobile behavior, not just layout |
| Per-page edit links in markdown | Global editLink config | VitePress 1.0+ | Single config point, automatic path resolution |
| Separate mobile test browsers | Built-in device registry | Playwright 1.8+ | Pre-configured 100+ device profiles |
| Hard waits and sleeps | Auto-waiting and actionability checks | Playwright core | Reliable tests without arbitrary timeouts |

**Deprecated/outdated:**
- **Puppeteer for multi-browser testing:** Playwright has better Firefox and WebKit support
- **Manual viewport.set() for every test:** Use projects configuration instead
- **waitForTimeout() in tests:** Playwright auto-waits; manual waits indicate anti-pattern
- **Ignoring base path in tests:** Modern static site generators require base path awareness

## Open Questions

Things that couldn't be fully resolved:

1. **External link validation rate limiting**
   - What we know: Playwright can validate external links via page.request
   - What's unclear: AlphaGenome docs, QuillBot, GPTZero links may have rate limits
   - Recommendation: Separate external link validation into its own optional test; run with --project=external-links

2. **Optimal number of device sizes to test**
   - What we know: Requirements specify 375px mobile and 1024x768 presentation
   - What's unclear: How many intermediate sizes provide value vs. test time cost
   - Recommendation: Start with 5 projects (Desktop Chrome, Firefox, Pixel 5, iPhone 12, presentation), expand if issues found

3. **Testing presentation.html in isolation**
   - What we know: Presentation is served via custom Vite middleware, not VitePress routing
   - What's unclear: Whether Playwright can reliably test the middleware-served version
   - Recommendation: Test both `/presentation.html` and direct file serving; verify Marp slide elements render

4. **AlphaGenome Colab link stability**
   - What we know: User specified alphagenomedocs.com/colabs/ as the official source
   - What's unclear: Whether this URL is stable or redirects to Google Colab domain
   - Recommendation: Use WebFetch to verify actual URL, use final destination in resources page

## Sources

### Primary (HIGH confidence)
- [VitePress editLink configuration](https://vitepress.dev/reference/default-theme-edit-link) - Pattern syntax, text customization, frontmatter control
- [VitePress Home Page layout](https://vitepress.dev/reference/default-theme-home-page) - Hero section, features, actions configuration
- [VitePress Routing](https://vitepress.dev/guide/routing) - Internal link handling, base path
- [Playwright Device Emulation](https://playwright.dev/docs/emulation) - Device registry, viewport, touch support
- [Playwright Projects](https://playwright.dev/docs/test-projects) - Multi-device configuration, dependencies
- [Playwright Best Practices](https://playwright.dev/docs/best-practices) - Auto-waiting, test isolation
- [Checkly: Broken Link Detection with Playwright](https://www.checklyhq.com/docs/learn/playwright/how-to-detect-broken-links/) - Link extraction and validation pattern

### Secondary (MEDIUM confidence)
- [BrowserStack: 15 Playwright Best Practices 2026](https://www.browserstack.com/guide/playwright-best-practices) - Selector strategy, test scope, avoiding hard waits
- [Better Stack: Playwright Best Practices](https://betterstack.com/community/guides/testing/playwright-best-practices/) - Page Object Model, handling third-party APIs
- [VitePress Deploy Guide](https://vitepress.dev/guide/deploy) - Base path configuration, preview server
- [Checkly: Emulating Mobile Devices](https://www.checklyhq.com/docs/learn/playwright/emulating-mobile-devices/) - Device registry patterns, practical implementation

### Tertiary (LOW confidence)
- [Playwright Issue #15116: Fullscreen API doesn't work headless](https://github.com/microsoft/playwright/issues/15116) - Known limitation since 2022
- [Academic research pain points 2026](https://medium.com/@stephanie.k.liao/pain-points-of-research-f942a818c976) - Literature review, writing, data analysis challenges
- [AI Tools for Academic Research 2026](https://cognitivefuture.ai/best-ai-tools-for-academic-research/) - Research workflow automation trends

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - VitePress already in use, Playwright is industry standard for E2E testing
- Architecture: HIGH - All patterns verified with official documentation and code examples
- Pitfalls: HIGH - Base path, soft assertions, fullscreen API verified via official docs and GitHub issues
- Research pain points: MEDIUM - Based on 2026 articles but not nephrology-specific (per user decision)
- Device sizes: HIGH - playwright.devices registry is well-documented and maintained

**Research date:** 2026-02-17
**Valid until:** 2026-03-17 (30 days - stable ecosystem, VitePress and Playwright have mature APIs)
