import { test } from 'playwright/test';
test('Bài 3: To do page', async ({ page }) => {
    test.setTimeout(120000);
    // Bước 1: Truy cập trang playwright
    await test.step("Truy cập trang playwright", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    // Bước 2: Click vào bài 3: Todo page
    await test.step("Click vào Bài 3: Todo page", async () => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    })

    // Bước 3: Thêm mới 100 todo item có nội dung "To do <i>"
    await test.step('Thêm mới 100 todo item có nội dung "To do <i>"', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill(`To do ${i}`);
            await page.locator('//button[@id="add-task"]').click();
        }

    })
    // Xóa các todo có số lẻ
    await test.step('Xóa các todo có số lẻ', async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="to-do-${i}-delete"]`).click();
            }
        }
    })
})


