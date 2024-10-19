import { test, expect } from '@playwright/test'; // Không dùng expect thì không import vào file test

test('Register Page', async ({ page }) => {

/* Nhận xét
- Code chưa chạy pass do sai xpath newsletter
- Nên chia nhỏ và gom các step của test case vào test.step(), VD: 
    - Step 1: Navigate to Material Playwright Page
    - Step 2: Click on User Registration
    - Step 3: Fill information to all fields
    - Step 4: Click Register button
*/

  // Truy cập vào web
  await page.goto('https://material.playwrightvn.com/');
  // Click vào link 
  await page.locator('//a[contains(text(), "Bài học 1: Register Page")]').click();
  
  // Nhập Username
  await page.locator('//input[@id="username"]').fill("Lan Anh");
  
  // Nhập Email
  await page.locator('//input[@id="email"]').fill("lananh@gmail.com");
  
  // Check giới tính
  await page.locator('//input[@id="male"]').check();
  
  // Checkbox
  await page.locator('//input[@id="reading"]').check();
  await page.locator('//input[@id="traveling"]').check();
  
  // Click option đầu tiên và giữ Shift
  await page.locator('//option[@value="technology"]').click();
  await page.locator('//option[@value="music"]').click({ modifiers: ['Shift'] });
  
  // Chọn quốc gia
  await page.locator('//select[@id="country"]').selectOption('canada'); // Dùng selectOption để chọn dễ hơn
  
  // Nhập ngày sinh
  
  // Nhập Bio
  await page.locator('//textarea[@id="bio"]').fill('K9 Playwright class');
  // Mau
  //await page.locator('//input[@id="favcolor"]').fill('#440ACD');
  // Rate 
  //Hover
  await page.locator('//div[@class="tooltip"]').hover();
  //Checkbox
  await page.locator('//input[@id="newletter"]').check();  // sai xpath
  //Enable
  await page.locator('//span[@class="slider round"]').click();

  await page.locator('//button[@type="submit"]').click();
});
