import { test, expect } from '@playwright/test';

test('Add todo', async ({ page }) => {

    await test.step("Navigate to Material Playwright Page", async () => {
        await page.goto("https://material.playwrightvn.com");
    });

    await test.step("Click on to Product Page", async () => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    });

    await test.step("Thêm mới 100 todo item có nội dung “Todo <i>”", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
            await page.locator('//button[@id="add-task"]').click();
        }
    });

    await test.step("Xóa các todo số lẻ", async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        for (let i = 1; i <= 100; i+=2) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
        }
    });
});