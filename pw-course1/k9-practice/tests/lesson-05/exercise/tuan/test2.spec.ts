import { test, expect } from '@playwright/test';
test('Bài số 2', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.locator('//a[contains(text(),"Bài học 2: Product page")]').click();
  await page.locator('(//button[@class="add-to-cart"])[1]').click(); //sai yc đề bài (add 3 product)
  await page.locator('(//button[@class="add-to-cart"])[2]').dblclick();
  await page.locator('(//button[@class="add-to-cart"])[3]').click();
});