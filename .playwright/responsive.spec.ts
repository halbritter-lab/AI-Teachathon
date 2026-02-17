import { test, expect } from '@playwright/test'

test.describe('Responsive design', () => {
  test('no horizontal scroll on ideas page', async ({ page }) => {
    await page.goto('/ideas')
    await page.waitForLoadState('networkidle')

    // Check if horizontal scrolling is actually possible (accounts for VitePress sidebar hidden off-screen)
    const hasHorizontalScroll = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    )
    expect(hasHorizontalScroll).toBe(false)
  })

  test('no horizontal scroll on resources page', async ({ page }) => {
    await page.goto('/resources')
    await page.waitForLoadState('networkidle')

    const hasHorizontalScroll = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    )
    expect(hasHorizontalScroll).toBe(false)
  })

  test('all main pages render without errors', async ({ page }) => {
    const pages = ['/', '/setup', '/agenda', '/ideas', '/resources']
    for (const pagePath of pages) {
      const errors: string[] = []
      page.on('pageerror', (err) => errors.push(err.message))

      await page.goto(pagePath)
      await page.waitForLoadState('networkidle')

      expect.soft(errors, `${pagePath} should have no JS errors`).toEqual([])
    }
  })
})

test.describe('Presentation', () => {
  test('renders Marp slides at 1024x768', async ({ page }) => {
    await page.goto('/presentation.html', { waitUntil: 'networkidle' })

    // Verify Marp slides rendered
    const slides = page.locator('svg[data-marpit-svg]')
    await expect(slides.first()).toBeVisible({ timeout: 10000 })

    // Verify multiple slides exist
    const slideCount = await slides.count()
    expect(slideCount).toBeGreaterThan(1)
  })
})
