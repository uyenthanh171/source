// includes()
// Bài 1: Tạo một chuỗi name với giá trị "Nguyễn Văn A". Hãy kiểm tra xem chuỗi có chứa "Nguyễn" hay không.
const name = "Nguyễn Văn A";
const isIncluded = name.includes("Nguyễn");
console.log(isIncluded);

// Bài 2: Tạo một chuỗi email với giá trị "example@gmail.com". Hãy kiểm tra xem chuỗi có chứa ký tự "@" hay không.
const email = "example@gmail.com";
const isSymbol = email.includes("@");
console.log(isSymbol);

// Bài 3: Tạo một chuỗi productName với giá trị "MacBook Pro". Hãy kiểm tra xem chuỗi có chứa từ "Pro" hay không.
const productName = "MacBook Pro";
const isPro = productName.includes("Pro");
console.log(isPro);