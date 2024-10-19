import { test } from 'playwright/test';

// Khai báo biến dùng trong test
const username = "Ivana Nguyen";
const email = "ivana.nguyen@gmail.com";
const dob = "2001-09-01"
const description = "K9 class";
const interests = "Technology";
const country = "canada";


test("Exercise 1: Product page", async ({ page }) => {

    // Bước 1: Truy cập trang web
    await test.step("Truy cập trang web Playwright", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })

    // Bước 2: Click vào Bài 1: Register page
    await test.step("Click vào Bài 1: Register page", async () => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    })

    //Bước 3: Nhập valid value vào tất cả các trường
    await test.step("Nhập valid value vào tất cả các trường", async () => {
        await page.locator('//input[@id="username"]').fill(username);
        await page.locator('//input[@id="email"]').fill(email);
        await page.locator('//input[@id="female"]').check();
        await page.locator('//input[@id="traveling"]').check();
        await page.locator('//input[@id="cooking"]').check();
        await page.selectOption('//select[@id="interests"]', interests);
        await page.selectOption('//select[@id="country"]', country);
        await page.locator('//input[@id="dob"]').fill(dob);
        await page.locator('//input[@id="profile"]').setInputFiles(`images/1.jpg`);
        await page.locator('//textarea[@id="bio"]').fill(description);
        await page.locator('//input[@id="rating"]').click();
        await page.locator('//input[@id="favcolor"]').fill("#ff8975");
        await page.locator('//div[@class="tooltip"]').hover();
        await page.locator('//input[@id="newsletter"]').check();
        await page.locator('//label[@class="switch"]').click();
    })

    //Bước 4: Click Register button để đăng kí
    await test.step("Click Register button để đăng kí", async () => {
        await page.locator('//button[@type="submit"]').click();
    })
})