import { expect, test } from '@playwright/test';
test.describe("POST - Post", async () => {
    //Arrange
    const url = "https://pw-practice-dev.playwrightvn.com/wp-admin";

    test.beforeEach("Login in Playwright WordPress", async ({ page }) => {
        await page.goto(url);
        await page.locator("//input[@id='user_login']").fill("k9-thanh");
        await page.locator("//input[@id='user_pass']").fill("S1txHAp*^Dt7PRnn)IXma6kR");
        await page.locator("//input[@id='wp-submit']").click()
    });

    test.afterEach("log out", async ({ page }) => {
        await page.locator('//a[@role="menuitem"]').filter({ hasText: "Howdy, " }).hover();
        await page.locator('//li[@id="wp-admin-bar-logout"]').filter({ hasText: "Log Out" }).click();
    });

    test('@POST_TAG_001', async ({ page }) => {
        await test.step("Click button Add new tag", async () => {
            await page.locator('//div[@class="wp-menu-name"]').filter({ hasText: "Posts" }).click();
            await page.locator('//a[@href="edit-tags.php?taxonomy=post_tag"]').filter({ hasText: "Tags" }).click();

            //Check user is in Tag page
            const Title = await page.locator('//h1[@class="wp-heading-inline"]').innerText();
            expect(Title).toEqual("Tags");
        })
        await test.step("Input invalid value in Tag page", async () => {
            await page.locator('//input[@id="tag-name"]').fill("lesson tag");
            await page.locator('//input[@id="submit"]').click();

            //Check input invalid value successfully
            const errorNotice = await page.locator('//div[@class="notice notice-error"]').innerText();
            expect(errorNotice).toEqual("A term with the name provided already exists in this taxonomy.")
        })
    });

    test('@POST_TAG_002', async ({ page }) => {
        await test.step("Click button Add new tag", async () => {
            await page.locator('//div[@class="wp-menu-name"]').filter({ hasText: "Posts" }).click();
            await page.locator('//a[@href="edit-tags.php?taxonomy=post_tag"]').filter({ hasText: "Tags" }).click();

            //Check user is in Tag page
            const Title = await page.locator('//h1[@class="wp-heading-inline"]').innerText();
            expect(Title).toEqual("Tags");
        })
        await test.step("Input invalid value in Tag page", async () => {
            await page.locator('//input[@id="tag-name"]').fill("k9-thanh");
            await page.locator('//input[@id="submit"]').click();

            //Check input invalid value successfully
            const successNotice = await page.locator('//div[@class="notice notice-success is-dismissible"]').innerText();
            expect(successNotice).toEqual("Tag added.");
        })
    });
});