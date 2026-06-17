import { test, expect } from '@playwright/test';

test('Intentional Failure Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/inventory.html');

  // Wrong title intentionally
  await expect(page).toHaveTitle('Wrong Title');

});