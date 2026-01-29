import { test, expect } from '@playwright/test';

test.describe('Campaign', () => {
  test('placeholder - campaign flow', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/papa/i);
  });

  test('placeholder - memory interaction', async ({ page }) => {
    await page.goto('/');
  });
});
