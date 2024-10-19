//Bài tập: Playwright Bài 5: Puzzle drag and drop game
import { test } from '@playwright/test';
const ex5 = [
    { source: '//div[@id="piece-1"]', destination: '//div[@data-piece="1"]' },
    { source: '//div[@id="piece-2"]', destination: '//div[@data-piece="2"]' },
    { source: '//div[@id="piece-3"]', destination: '//div[@data-piece="3"]' },
    { source: '//div[@id="piece-4"]', destination: '//div[@data-piece="4"]' },
]
test("Bài học 5: Puzzle drag and drop game", async ({ page }) => {
    await test.step("Đi vào trang playwright", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Click vào bài học 5: uzzle drag and drop game", async () => {
        await page.locator('//a[@href="05-xpath-drag-and-drop.html"]').click();
    })
    for (const hoverMouse of ex5) {
        await test.step("Kéo thả các ô 1, 2, 3, 4 vào ô tương ứng", async () => {
            const sourceElement = page.locator(hoverMouse.source);
            const destinationElement = page.locator(hoverMouse.destination);

            await sourceElement.dragTo(destinationElement);
        });
    }
});