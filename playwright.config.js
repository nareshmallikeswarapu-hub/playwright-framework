// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // ✅ FIX HERE
  globalSetup: require.resolve('./utils/auth'),

  fullyParallel: true,
  reporter: 'html',

use: {

  storageState: 'storageState.json',

  headless: false,

  slowMo: 1000,

  screenshot: 'only-on-failure',

  video: 'retain-on-failure',

  trace: 'on',

},

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});