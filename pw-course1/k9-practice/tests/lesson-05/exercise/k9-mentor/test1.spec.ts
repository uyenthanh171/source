import { test } from "@playwright/test";

// Khai báo 
const date = "2024-09-24";
const username = "Playwright Viet Nam";
const email = "playwrightvietnam@gmail.com";
const description = "K9-class";
const country = "usa";

test("Exercise 1: Register Page", async ({ page }) => {
    // Go to Material Playwright page
    await test.step("Navigate to Material Playwright Page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on User Registration", async () => {
        await page.locator("//a[@href ='01-xpath-register-page.html']").click();
    });

    await test.step("Fill information to all fields", async () => {
        await page.locator('//input[@id="username"]').fill(username);
        await page.locator('//input[@id="email"]').fill(email);
        await page.locator('//input[@id="male"]').check();
        await page.locator('//input[@id="traveling"]').check();
        await page.selectOption('//select[@id="country"]', country);
        await page.locator('//input[@id="dob"]').fill(date);
        await page.locator('//input[@id="profile"]').setInputFiles(`tests/lesson-05/exercise/k9-mentor/test-data/003-generating_locatr.png`);
        await page.locator('//textarea[@id= "bio"]').fill(description);
        await page.locator('//div[@class="tooltip"]').hover();
        await page.locator('//input[@id= "newsletter"]').check();
    });

    await test.step("Click Register button", async () => {
        await page.locator("//button[normalize-space()='Register']").click();
    });
})