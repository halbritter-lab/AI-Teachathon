import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: '.',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
  },

  webServer: {
    command: 'npx vitepress dev docs --port 4321',
    cwd: '..',
    url: 'http://localhost:4321/AI-Teachathon/',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
    stdout: 'pipe',
    stderr: 'pipe',
  },

  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
      testMatch: 'links.spec.ts',
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 5'] },
      testMatch: 'responsive.spec.ts',
      testIgnore: '**/Presentation/**',
    },
    {
      name: 'presentation',
      use: {
        viewport: { width: 1024, height: 768 },
        deviceScaleFactor: 1,
      },
      testMatch: 'responsive.spec.ts',
      grep: /Presentation/,
    },
  ],
})
