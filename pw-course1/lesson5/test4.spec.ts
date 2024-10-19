import { test } from "@playwright/test";

// // Cách 1: Gọi một array notes có chứa tất cả 10 tiêu đề và nội dung, chỉ sử dụng lệnh thao tác ở trang playwright
// test("Bài 4: Personal note", async ({ page }) => {
//     const notes = [
//         { title: "title 1", content: "content 1" },
//         { title: "title 2", content: "content 2" },
//         { title: "title 3", content: "content 3" },
//         { title: "title 4", content: "content 4" },
//         { title: "title 5", content: "content 5" },
//         { title: "title 6", content: "content 6" },
//         { title: "title 7", content: "content 7" },
//         { title: "title 8", content: "content 8" },
//         { title: "title 9", content: "content 9" },
//         { title: "title 10", content: "content 10" },
//     ]

//     // Truy cập vào trang playwright
//     await test.step("Truy cập vào trang playwright", async () => {
//         await page.goto("https://material.playwrightvn.com/");
//     })
//     // Click vào Bài 4: Personal note
//     await test.step("Click vào Bài 4: Personal note", async () => {
//         await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
//     })
//     // Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn tại báo https://vnexpress.net/khoa-hoc 
//     await test.step("Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn", async () => {
//         for (const note of notes) {
//             await page.locator('//input[@id="note-title"]').fill(note.title);
//             await page.locator('//textarea[@id="note-content"]').fill(note.content);
//             await page.locator('//button[@id="add-note"]').click();
//         }

//     })
// });

//Cách 2: 
test("Advanced: Bài 4-Personal note", async ({ page }) => {
    let titles: any, contents: any;
    await test.step("Đi vào trang vnexpress lấy data", async () => {
        await page.goto('https://vnexpress.net/khoa-hoc', { waitUntil: 'domcontentloaded' });
        titles = await page.locator('//h3[@class="title-news"]').allTextContents();
        // console.log(titles);
        contents = await page.locator('//p[@class="description"]').allTextContents();
        // console.log(contents);
    })
    await test.step("Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn", async () => {
        for (let i = 0; i < 10; i++) {
            await page.goto("https://material.playwrightvn.com/");
            await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
            await page.locator('//input[@id="note-title"]').fill(titles[i]);
            await page.locator('//textarea[@id="note-content"]').fill(contents[i]);
            await page.locator('//button[@id="add-note"]').click();
        }
    })
})