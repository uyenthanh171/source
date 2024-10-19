//không dùng expect thì không import vào file test
// Chưa chia steps trong TC
import { test, expect } from '@playwright/test'; 

test ('Add Product',async({page})=>{
    // Truy cập vào trang web
    await page.goto("https://material.playwrightvn.com");

    //Click vào bài 2
    await page.click('//a[@href="02-xpath-product-page.html"]');

    // Chọn sản phẩm 1: 2 sản phẩm
    await page.locator('//button[@data-product-id="1"]').dblclick();

    // Chọn sản phẩm 2: 3 sản phẩm
    await page.locator('//button[@data-product-id="2"]').dblclick();
    await page.locator('//button[@data-product-id="2"]').click();

    // Chọn sản phẩm 3: 1 sản phẩm
    await page.locator('//button[@data-product-id="3"]').click();
//dòng cách thừa 
});

