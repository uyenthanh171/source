/*
Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5 tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
*/

function getPrice(age) {
    if (age < 0) {
        return "Tuổi không hợp lệ";
    } else if (age <= 5) {
        return "Bé được miễn phí";
    } else if (age >= 6 && age <= 17) {
        return "Giá vé là 50k đồng";
    } else {
        return "Giá vé là 100k đồng";
    }
}
console.log(getPrice(25));

/*
- Tip đặt tên cho function là:
    - Đặt 1 động từ làm tiền tố giúp cho mục đích của hàm trở nên rõ ràng hơn
    - 1 số Verb thường đc sử dụng làm tiền tố cho hàm: get, set, calculate, check, ….
*/