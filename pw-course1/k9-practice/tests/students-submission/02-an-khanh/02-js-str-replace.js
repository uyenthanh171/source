// replace()
// Bài 1: Tạo một chuỗi phoneNumber với giá trị "0123 456 789". Hãy thay thế tất cả khoảng trắng bằng dấu chấm.
const phoneNumber = "0123 456 789";
const replacePhone = phoneNumber.replaceAll(" ", ".");
const replacePhone2 = phoneNumber.replace(/ /g, "."); // g: global
console.log(replacePhone);
console.log(replacePhone2);

// Bài 2: Tạo một chuỗi report với giá trị "Có một lỗi trong hệ thống.". Hãy thay thế từ "lỗi" bằng từ "bug".
const report = "Có một lỗi trong hệ thống.";
const newReport = report.replace("lỗi", "bug");
console.log(newReport);

// Bài 3: Tạo một chuỗi numbers với giá trị "1,234,567". Hãy thay thế tất cả dấu phẩy bằng dấu chấm.
const numbers = "1,234,567";
const newNumbers = numbers.replaceAll(",",".");
const newNumbers2 = numbers.replace(/","/, "."); // g: global
console.log(newNumbers);
console.log(newNumbers2);