// split()
// Bài 1: Tạo một chuỗi name với giá trị "Nguyễn Văn A". Hãy chia chuỗi thành mảng các từ.

name = "Nguyễn Văn A";
const result = name.split(" ");
console.log(result); //output: [ 'Nguyễn', 'Văn', 'A' ]

// Bài 2: Tạo một chuỗi emails với giá trị "example1@gmail.com,example2@gmail.com,example3@gmail.com". Hãy chia chuỗi thành mảng các email riêng lẻ.

email = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const result2 = email.split(",");
console.log(result2); //output: [ 'example1@gmail.com', 'example2@gmail.com', 'example3@gmail.com' ]

// Bài 3: Tạo một chuỗi date với giá trị "2024-05-19". Hãy chia chuỗi thành mảng các phần riêng biệt của ngày tháng năm.

date = "2024-05-19";
const result3 = date.split("-");
console.log(result3); //Output: [ '2024', '05', '19' ]