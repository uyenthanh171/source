// replace()
// Bài 1: Tạo một chuỗi phoneNumber với giá trị "0123 456 789". Hãy thay thế tất cả khoảng trắng bằng dấu chấm.

phoneNumber = "0123 456 789";
const result = phoneNumber.replace(/ /g, ".");
console.log(result); //output 0123.456.789

// Bài 2: Tạo một chuỗi report với giá trị "Có một lỗi trong hệ thống.". Hãy thay thế từ "lỗi" bằng từ "bug".

report = "Có một lỗi trong hệ thống.";
const result2 = report.replace("lỗi", "bug");
console.log(result2); //output: Có một bug trong hệ thống.

// Bài 3: Tạo một chuỗi numbers với giá trị "1,234,567". Hãy thay thế tất cả dấu phẩy bằng dấu chấm.

number = "1,234,567";
const result3 = number.replace(/ /g, ".");
console.log(result3); //output: 1.234.567