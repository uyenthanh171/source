import { test, expect } from '@playwright/test';

test('input test', async ({ page }) => {
  // Truy cập vào trang web
  await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

  // Nhập username
  await page.locator('//input[@id="username"]').fill("Truong Lam");

  //Nhập email
  await page.locator('//input[@id="email"]').fill("ntlam@gmail.com");

  //Chọn Gender
  await page.locator('//input[@id="male"]').check();

  //Chọn Hobbies
  await page.locator('//input[@id="reading"]').check();
  await page.locator('//input[@id="cooking"]').check();

  //Chọn Interests
  await page.locator('//option[@value="technology"]').click({ modifiers: ['Control'] });
  await page.locator('//option[@value="sports"]').click({ modifiers: ['Control'] });

  //Chọn Country
  await page.locator('//select[@id="country"]').selectOption('uk');

  // Chọn Date of Birth
  //await page.locator('//input[@id="dob"]');

  //Nhập Biography
  await page.locator('//textarea[@id="bio"]').fill('Hoc Het cap 3');

  //Rate
  await page.locator('//input[@id="rating"]').fill('10');

  //Favorite Color
  await page.locator('//input[@id="favcolor"]').fill('#808080');

  //Newsletter
  await page.locator('//div[@class="tooltip"]').hover();
  await page.locator('//input[@id="newsletter"]').check();

  //Feature
  await page.locator('//span[@class="slider round"]').click();

  // Chọn đăng kí
  await page.locator('//button[@type="submit"]').click();

});

/* Nhận xét
- Nên chia nhỏ và gom các step của test case vào test.step(), VD: 
    - Step 1: Navigate to Material Playwright Page
    - Step 2: Click on User Registration
    - Step 3: Fill information to all fields
    - Step 4: Click Register button
*/