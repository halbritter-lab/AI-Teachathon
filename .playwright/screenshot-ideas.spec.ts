import { test, devices } from '@playwright/test'

const BASE = 'http://localhost:4321/AI-Teachathon'

test('ideas desktop', async ({ browser }) => {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: 'dark',
  })
  const p = await ctx.newPage()
  await p.goto(`${BASE}/ideas`, { waitUntil: 'networkidle' })
  await p.waitForTimeout(1500)
  await p.screenshot({
    path: '.playwright/screenshots/ideas-current.png',
    fullPage: true,
  })
  await ctx.close()
})

test('ideas mobile', async ({ browser }) => {
  const ctx = await browser.newContext({
    ...devices['iPhone 13'],
    colorScheme: 'dark',
  })
  const p = await ctx.newPage()
  await p.goto(`${BASE}/ideas`, { waitUntil: 'networkidle' })
  await p.waitForTimeout(1500)
  await p.screenshot({
    path: '.playwright/screenshots/ideas-mobile-current.png',
    fullPage: true,
  })
  await ctx.close()
})
