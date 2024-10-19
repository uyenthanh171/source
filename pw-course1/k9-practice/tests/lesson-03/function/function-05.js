/*
Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.
Đoạn code giả mã (pseudo code) như sau:
// Khai báo mảng global các object có 2 thuộc tính: name, email
// Khai báo hàm có 2 tham số: name, newEmail
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEmail
*/

let users = [
    { name: "A", email: "A@gmail.com" },
    { name: "B", email: "B@gmail.com" },
    { name: "C", email: "C@gmail.com" },
    { name: "D", email: "D@gmail.com" },
]

function emailUpdate(name, newEmail) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users[i].email = newEmail;
            console.log(`Email của ${name} đã được thay đổi thành ${newEmail}`)
        }
    }
    console.log(`${name} không có trong danh sách người sử dụng`)
}
emailUpdate("A", "updateA@gmail.com");
//emailUpdate5b("Tu", "khongsao@gmail.com);
console.log("Danh sách đã cập nhật:", users)