import { test, expect } from '@playwright/test'

const sitePages = [
  '/',
  '/setup',
  '/agenda',
  '/ideas',
  '/resources',
  '/ai-tools',
  '/hands-on',
  '/slides',
]

for (const pagePath of sitePages) {
  test(`internal links on ${pagePath}`, async ({ page }) => {
    await page.goto(pagePath)
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
        const resolved = new URL(href, page.url()).href
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
