import { test } from "@playwright/test";

test("Add personal notes", async ({ page }) => {
    const notes = [
        { title: "Title 1", content: "Content 1" },
        { title: "title 2", content: "content 2" },
        { title: "title 3", content: "content 3" },
        { title: "title 4", content: "content 4" },
        { title: "title 5", content: "content 5" },
        { title: "title 6", content: "content 6" },
        { title: "title 7", content: "content 7" },
        { title: "title 8", content: "content 8" },
        { title: "title 9", content: "content 9" },
        { title: "title 10", content: "content 10" }
    ];

    await test.step("Vào playwrightvn > Lesson 4", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    })

    await test.step("Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn", async () => {
        for (const note of notes) {
            await page.locator('//input[@type="text" and @id="note-title"]').fill(note.title);
            await page.locator('//textarea[@id="note-content"]').fill(note.content);
            await page.locator('//button[@id="add-note"]').click();
        }
    })

    await test.step("Thực hiện search theo tiêu đề bài báo bất kì.", async () => {
        await page.locator('//input[@type= "text" and @id= "search"]').fill('Title 1');
    })
})

test("Advance: Add personal notes", async ({ page }) => {
    let titles, contents;

    await test.step("Vào trang Vnexpress lấy data", async () => {
        await page.goto('https://vnexpress.net/khoa-hoc', { waitUntil: 'domcontentloaded' });
        titles = await page.locator('//h3[@class="title-news"]/a').allTextContents();
        console.log(titles);
        contents = await page.locator('//p[@class="description"]/a').allTextContents();
        console.log(titles);
    })

    await test.step("Vào playwrightvn > Lesson 4", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    })

    await test.step("Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn", async () => {
        for (let i = 0; i < 10; i++) {
            await page.locator('//input[@type="text" and @id="note-title"]').fill(titles[i]);
            await page.locator('//textarea[@id="note-content"]').fill(contents[i]);
            await page.locator('//button[@id="add-note"]').click();
        }
    })

    await test.step("Thực hiện search theo tiêu đề bài báo bất kì.", async () => {
        await page.locator('//input[@type= "text" and @id= "search"]').fill('Khoa');
    })
})