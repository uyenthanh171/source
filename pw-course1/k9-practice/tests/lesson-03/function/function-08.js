/*
Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối.
*/

function kiemTraGio(gio) {
    if (gio < 0 || gio > 24) {
        console.log("Giờ không hợp lệ");
    } else if (gio >= 9 && gio <= 21) {
        console.log("Giờ mở cửa");
    } else {
        console.log("Giờ đóng cửa");
    }
}

kiemTraGio(25);