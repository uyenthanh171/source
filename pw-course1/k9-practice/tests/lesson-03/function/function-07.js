/*
Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”: “product 1”, price: 100 }
*/

function priceCheck(array) {
    for (item of array) {
        if (item.price === 0)
            return false;
    }
    return true;
}

const products = [
    { name: "Product A", price: 1 },
    { name: "Product B", price: 110 },
    { name: "Product C", price: 4 },
    { name: "Product D", price: 9 },
];
const checkResult = priceCheck(products);
if (checkResult === false) {
    console.log("Giỏ hàng có sản phẩm có giá bằng 0");
} else {
    console.log("Tất cả sản phẩm trong giỏ hàng có giá lớn hơn 0");
}


const products2 = [
    { name: "Product A", price: 1 },
    { name: "Product B", price: 110 },
    { name: "Product C", price: 4 },
    { name: "Product D", price: 9 },
];
function kiemTraGia(arr) {
    let isAllGreatThan0 = true;

    for (let i = 0; i < products2.length; i++) {
        if (products2[i].price < 0) {
            isAllGreatThan0 = false;
        }
    }

    if (isAllGreatThan0 === false) {
        console.log('Có giá âm');
    } else {
        console.log('Tất cả dương');
    }
}