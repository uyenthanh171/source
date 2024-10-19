import { test } from '@playwright/test';

test('Add Product', async ({ page }) => {
    await test.step("Navigate to Material Playwright Page", async () => {
        await page.goto("https://material.playwrightvn.com");
    });

    await test.step("Click on to Product Page", async () => {
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();
    });

    await test.step("Add Product 1: 2 itmes", async () => {
        await page.locator('//button[@data-product-id="1"]').click({ clickCount: 2 });
    });
    await test.step("Add Product 2: 3 itmes", async () => {
        await page.locator('//button[@data-product-id="2"]').click({ clickCount: 3 });
    });
    await test.step("Add Product 3: 1 itmes", async () => {
        await page.locator('//button[@data-product-id="3"]').click();
    });
});