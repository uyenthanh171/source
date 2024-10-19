import { expect, test } from '@playwright/test';
test.describe("AUTH - Authentication", async () => {
    // let xpath;
    // test.beforeAll(async () => {
    //     xpath = {
    //         inputUsername: "//input[@id='user_login']",
    //         inputPw: "//input[@id='user_pass']",
    //     }
    // })
    //Login page
    test.beforeEach(async ({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");

    });
    test("@AUTH_001", async ({ page }) => {
        await test.step("Input username and pwd", async () => {
            //Input username and pwd
            await page.locator("//input[@id='user_login']").fill("k9-thanh");
            await page.locator("//input[@id='user_pass']").fill("S1txHAp*^Dt7PRnn)IXma6kR1");

            //Check 2 input fields
            const inputUserName = await page.locator("//input[@id='user_login']").inputValue();
            const inputPw = await page.locator("//input[@id='user_pass']").inputValue();

            expect(inputUserName).toEqual("k9-thanh");
            expect(inputPw).toEqual("S1txHAp*^Dt7PRnn)IXma6kR1");
        })
        await test.step("Click Login", async () => {
            //Click Login button
            await page.locator("//input[@id='wp-submit']").click();

            //Check login page unsuccessful
            const message = await page.locator("//div[@id='login_error']").innerText();

            expect(message).toMatch(/Error: The password you entered for the username .* is incorrect. Lost your password?/);
        })
    });
    
    test("@AUTH_002", async ({page}) => {
        await test.step("Input username and pwd", async () => {
            //Input username and pwd
            await page.locator("//input[@id='user_login']").fill("k9-thanh");
            await page.locator("//input[@id='user_pass']").fill("S1txHAp*^Dt7PRnn)IXma6kR");

            //Check 2 input fields
            const inputUserName = await page.locator("//input[@id='user_login']").inputValue();
            const inputPw = await page.locator("//input[@id='user_pass']").inputValue();

            expect(inputUserName).toEqual("k9-thanh");
            expect(inputPw).toEqual("S1txHAp*^Dt7PRnn)IXma6kR");

            //Click Login button
            await page.locator("//input[@id='wp-submit']").click();

            //Check login page successful
            const h1text = await page.getByRole('heading',{level: 1, name: 'Dashboard'}).innerText();
            const h2activity = await page.getByRole('heading', {level: 2, name: 'Activity'}).innerText();
            const h2atglance = await page.getByRole('heading', {level: 2, name: 'At a Glance'}).innerText();

            expect(h1text).toEqual("Dashboard");
            expect(h2activity).toEqual("Activity");
            expect(h2atglance).toEqual("At a Glance")
        })
    }); 
});


