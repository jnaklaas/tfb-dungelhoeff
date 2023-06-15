import { expect, test } from '@playwright/test';

// test('index page has expected h1', async ({ page }) => {
// 	await page.goto('/');
// 	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
// });

test('index has h1', async ({ page }) => {
	await page.goto('/');
	await page.waitForTimeout(1000);
	// await page.screenshot({ path: 'screenshot1.png' });
	await expect(page.locator('h1')).toBeVisible();
});
