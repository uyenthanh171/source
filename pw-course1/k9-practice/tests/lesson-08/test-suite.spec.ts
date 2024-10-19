import { expect, test } from '@playwright/test';

test.describe("Authentication", async () => {
     let xpath;
    test.beforeAll(async () => {
        xpath = {
            inputUsername: "",
            inputPw: ""
        }

        

    }); // Đầu tiên

    test.beforeEach(async ({ page }) => {
        // Go to login page
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
    });  

    test.afterEach(async () => {

    }); // chạy lần 1 chạy lần 2

    test.afterAll(async () => {});  // sau cùng 

    test("Login fail", async ({ page }) => {
        await test.step("Nhập username, pw", async () => {
            // Nhập user name, pw
            await page.locator(xpath.inputUsername).fill("k6-mentor");
            await page.locator(xpath.inputPw).fill("fjdfsjsdfnjd");

            // Kiểm tra 2 ô input được nhập
            const inputUsername = await page.locator("//input[@id = 'user_login']").inputValue();
            const inputPw = await page.locator("//input[@id = 'user_pass']").inputValue();

            expect(inputUsername).toEqual("k6-mentor");
            expect(inputPw).toEqual("fjdfsjsdfnjd");
        });
 
    // go to website
    }); // chạy test 1

    test("Login pass", async () => {
        // go to website
    });  // chạy test 2


});
