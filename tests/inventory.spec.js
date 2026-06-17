import { test, expect } from '@playwright/test';

test('User lands on inventory page @smoke', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/inventory.html');

  await expect(page).toHaveURL(/inventory/);

});

test('Inventory page title validation @regression', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/inventory.html');

  await expect(page).toHaveTitle(/Swag Labs/);

});