import { test } from 'playwright/test';
test('Bài 2: Product Page', async ({ page }) => {
    //Bước 1: Truy cập trang web
    await test.step("Truy cập trang web playwright", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    //Bước 2: Click vào Bài 2: Product page 
    await test.step("Truy cập vào bài 2: Product page", async () => {
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();
    })

    //Thêm sản phẩm 1: 2 sản phẩm vào giỏ hàng
    await test.step("Thêm 2 sản phẩm 1 vào giỏ hàng", async () => {
        await page.locator('//button[@class="add-to-cart" and @data-product-id="1"]').click({ clickCount: 2 });
    })

    // Thêm sản phẩm 2: 3 sản phẩm vào giỏ hàng
    await test.step("Thêm 3 sản phẩm 2 vào giỏ hàng", async () => {
        await page.locator('//button[@class="add-to-cart" and @data-product-id="2"]').click({ clickCount: 3 });
    })

    //Thêm sản phẩm 3: 1 sản phẩm vào giỏ hàng
    await test.step("Thêm 1 sản phẩm 3 vào giỏ hàng", async () => {
        await page.locator('//button[@class="add-to-cart" and @data-product-id="3"]').click()
    });
})

