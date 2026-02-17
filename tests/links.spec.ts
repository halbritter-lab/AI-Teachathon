import { test, expect } from '@playwright/test'

const sitePages = [
  '/AI-Teachathon/',
  '/AI-Teachathon/setup',
  '/AI-Teachathon/agenda',
  '/AI-Teachathon/ideas',
  '/AI-Teachathon/resources',
  '/AI-Teachathon/ai-tools',
  '/AI-Teachathon/hands-on',
  '/AI-Teachathon/slides',
]

for (const pagePath of sitePages) {
  test(`internal links on ${pagePath}`, async ({ page }) => {
    await page.goto(`http://localhost:5555${pagePath}`)
    await page.waitForLoadState('networkidle')

    const allLinks = await page.locator('a[href]').all()
    const hrefs = await Promise.all(
      allLinks.map((link) => link.getAttribute('href'))
    )

    // Filter to internal links only (start with / or are relative)
    const internalHrefs = hrefs.reduce((links, href) => {
      if (
        href &&
        !href.startsWith('http') &&
        !href.startsWith('mailto:') &&
        !href.startsWith('#')
      ) {
        // VitePress uses client-side routing with absolute paths from base
        // Convert /page to /AI-Teachathon/page for HTTP testing
        let normalizedHref = href
        if (href.startsWith('/') && !href.startsWith('/AI-Teachathon/')) {
          normalizedHref = `/AI-Teachathon${href}`
        }
        const resolved = new URL(normalizedHref, page.url()).href
        links.add(resolved)
      }
      return links
    }, new Set<string>())

    for (const url of internalHrefs) {
      const response = await page.request.get(url)
      expect
        .soft(response.status(), `${url} should return 200-299`)
        .toBeGreaterThanOrEqual(200)
      expect
        .soft(response.status(), `${url} should return 200-299`)
        .toBeLessThan(400)
    }
  })
}
