// //4. replace(): dung de thay the 1 chuoi bang chuoi khac
// let string = string2.replace("VN", "");
// console.log(string);

// replace()
// Bài 1: Tạo một chuỗi phoneNumber với giá trị "0123 456 789". Hãy thay thế tất cả khoảng trắng bằng dấu chấm.
// <code here>
let phoneNumber = "0123 456 789";
let newPhoneNumber = phoneNumber.replace(/ /g, ".");
console.log(newPhoneNumber);

// Bài 2: Tạo một chuỗi report với giá trị "Có một lỗi trong hệ thống.". Hãy thay thế từ "lỗi" bằng từ "bug".
// <code here>
let report = "Có một lỗi trong hệ thống.";
let newReport = report.replace("lỗi", "bug");
console.log(newReport);

// Bài 3: Tạo một chuỗi numbers với giá trị "1,234,567". Hãy thay thế tất cả dấu phẩy bằng dấu chấm.
// <code here>
let numbers = "1,234,567";
let newNumbers = numbers.replace(/,/g, ".");
console.log(newNumbers);