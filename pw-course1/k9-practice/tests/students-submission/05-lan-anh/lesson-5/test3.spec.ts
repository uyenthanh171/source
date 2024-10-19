import {test} from "@playwright/test";

test("Todo page", async({page}) => {
    await test.step("Truy cập trang Playwright", async() => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Nhấn link Bài học 3: Todo page", async () => {
        await page.locator("//a[@href ='03-xpath-todo-list.html']").click();
    });

    await test.step("Thêm mới 100 todo item có nội dung “Todo <i>”", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
            await page.locator('//button[@id="add-task"]').click();
        }
    });

    await test.step("Xoá todo có số lẻ", async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }
    })

});
