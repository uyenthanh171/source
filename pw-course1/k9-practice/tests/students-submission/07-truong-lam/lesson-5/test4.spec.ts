import { test } from '@playwright/test';

test('Add Peronal Notes', async ({ page }) => {
    let titles, contents;

    await test.step("Vào trang Vnexpress lấy data", async () => {
        await page.goto("https://vnexpress.net/khoa-hoc", { waitUntil: "domcontentloaded" });
        titles = await page.locator('//h3[@class="title-news"]/a').allTextContents();
        contents = await page.locator('//p[@class="description"]/a').allTextContents()
    });

    await test.step("Navigate to Material Playwright Page", async () => {
        await page.goto("https://material.playwrightvn.com");
    });

    await test.step("Click on to Personal Notes", async () => {
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    });

    await test.step("Add 10 notes có nội dung là tiêu đề và một phần ngắn", async () => {
        for (let i = 0; i < 10; i++) {
            await page.locator('//input[@type="text" and @id="note-title"]').fill(titles[i]);
            await page.locator('//textarea[@id="note-content"]').fill(contents[i]);
            await page.locator('//button[@id="add-note"]').click();
        }
    });

    await test.step("Thực hiện search theo tiêu đề bài báo bất kì", async () => {
        let search = "Thép";
        await page.locator('//input[@type="text" and @id="search"]').fill(search);
    });
});