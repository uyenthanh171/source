// replace()
// Bài 1: Tạo một chuỗi phoneNumber với giá trị "0123 456 789". Hãy thay thế tất cả khoảng trắng bằng dấu chấm.
let phoneNumber = "0123 456 789";

// Cach 1
const replacedPhoneNumber = phoneNumber.replace(/ /g, "."); // g: global
console.log(replacedPhoneNumber);

// Cach 2
for (let value of phoneNumber) {
    if (value === " ") {
        value = ".";
    }
}
console.log(phoneNumber);

// Bài 2: Tạo một chuỗi report với giá trị "Có một lỗi trong hệ thống.". Hãy thay thế từ "lỗi" bằng từ "bug".
const report = "Có một lỗi trong hệ thống.";
const replacedReport = report.replace("lỗi", "bug");
console.log(replacedReport);

// Bài 3: Tạo một chuỗi numbers với giá trị "1,234,567". Hãy thay thế tất cả dấu phẩy bằng dấu chấm.
const numbers = "1,234,567";
const replacedNumbers = numbers.replace(/","/, ".");
console.log(replacedNumbers);