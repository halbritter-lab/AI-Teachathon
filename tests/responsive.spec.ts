import { test, expect } from '@playwright/test'

test.describe('Responsive design', () => {
  test('no horizontal scroll on ideas page', async ({ page }) => {
    await page.goto('http://localhost:5555/AI-Teachathon/ideas')
    await page.waitForLoadState('networkidle')

    const bodyScrollWidth = await page.evaluate(() => document.body.scrollWidth)
    const viewportWidth = page.viewportSize()?.width ?? 0
    expect(bodyScrollWidth).toBeLessThanOrEqual(viewportWidth + 1) // 1px tolerance
  })

  test('no horizontal scroll on resources page', async ({ page }) => {
    await page.goto('http://localhost:5555/AI-Teachathon/resources')
    await page.waitForLoadState('networkidle')

    const bodyScrollWidth = await page.evaluate(() => document.body.scrollWidth)
    const viewportWidth = page.viewportSize()?.width ?? 0
    expect(bodyScrollWidth).toBeLessThanOrEqual(viewportWidth + 1)
  })

  test('all main pages render without errors', async ({ page }) => {
    const pages = ['/AI-Teachathon/', '/AI-Teachathon/setup', '/AI-Teachathon/agenda', '/AI-Teachathon/ideas', '/AI-Teachathon/resources']
    for (const pagePath of pages) {
      const errors: string[] = []
      page.on('pageerror', (err) => errors.push(err.message))

      await page.goto(`http://localhost:5555${pagePath}`)
      await page.waitForLoadState('networkidle')

      expect.soft(errors, `${pagePath} should have no JS errors`).toEqual([])
    }
  })
})

test.describe('Presentation', () => {
  test('renders Marp slides at 1024x768', async ({ page }) => {
    await page.goto('http://localhost:5555/AI-Teachathon/presentation.html', { waitUntil: 'networkidle' })

    // Verify Marp slides rendered
    const slides = page.locator('svg[data-marpit-svg]')
    await expect(slides.first()).toBeVisible({ timeout: 10000 })

    // Verify multiple slides exist
    const slideCount = await slides.count()
    expect(slideCount).toBeGreaterThan(1)
  })
})
