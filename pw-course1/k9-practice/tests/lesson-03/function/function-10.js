/*
Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh switch...case để xử lý.
*/

function monthName(num) {
    switch (num) {
        case 1:
            console.log("Thang 1");
            break;
        case 2:
            console.log("Thang 2");
            break;
        case 3:
            console.log("Thang 3");
            break;
        case 4:
            console.log("Thang 4");
            break;
        case 5:
            console.log("Thang 5");
            break;
        case 6:
            console.log("Thang 6");
            break;
        case 7:
            console.log("Thang 7");
            break;
        case 8:
            console.log("Thang 8");
            break;
        case 9:
            console.log("Thang 9");
            break;
        case 10:
            console.log("Thang 10");
            break;
        case 11:
            console.log("Thang 11");
            break;
        case 12:
            console.log("Thang 12");
            break;
        default:
            console.log(`Số ${num} không có tên tháng tương ứng`);
    }

}
monthName(14);