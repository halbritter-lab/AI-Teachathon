import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: '.',
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
    command: 'npm run docs:dev -- --port 5173',
    url: 'http://localhost:5173/AI-Teachathon/',
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },

  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'presentation',
      use: {
        viewport: { width: 1024, height: 768 },
        deviceScaleFactor: 1,
      },
    },
  ],
})
