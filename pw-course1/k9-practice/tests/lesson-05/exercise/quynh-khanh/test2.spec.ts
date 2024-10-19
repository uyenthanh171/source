import { test } from '@playwright/test';

test('Thêm sản phẩm vào giỏ hàng', async({page}) =>{
    /* Truy cập website */
    await page.goto('https://material.playwrightvn.com/'); // không để action nào không nằm trong test step

    /* Click vào Bài học 2 */
    await test.step('Click vào bài học 2', async() =>{
        await page.locator("//a[contains(text(),'Bài học 2: Product page')]").click();
    })

    /* Add to cart sản phẩm 1 với 2 item */
    await test.step('Add to cart sản phẩm 1', async() =>{
        await page.locator("//button[@data-product-id = 1]").dblclick();
    });

    /* Add to cart sản phẩm 2 với 3 item */
    await test.step('Add to cart sản phẩm 2', async() =>{
        await page.locator("//button[@data-product-id = 2]").click({   
            clickCount: 3
        });
    });

    /* Add to cart sản phẩm 3 với 1 item */
    await test.step('Add to cart sản phẩm 3', async() =>{
        await page.locator("//button[@data-product-id = 3]").click();
    // thừa 1 dòng trống    
    });
}) // nên thêm dấu chấm phẩy

/* Nhận xét
- Code chạy pass
- Chia step test rõ ràng
- Comment code chi tiết
*/