// Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.
let products = {
    Banana: 10,
    Apple: 20,
    Orange: 15
}

// products[product]
// products["Banana"]

for (let product in products) {
    // template literal
    console.log(`San pham ${product} co gia la: ${products[product]}`);
    // console.log('San pham ' + product + 'co gia la: ' + products[product])
}