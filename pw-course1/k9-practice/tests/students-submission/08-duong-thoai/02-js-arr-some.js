// //5. some(): kiem tra xem co it nhat 1 phan tu trong mang thoa man dieu kien trong ham hay ko. tra true/ false
// let numbers = [2, 1, 3, 1];
// let hasEven = numbers.some(num => num % 2 === 0); //false
// console.log(hasEven);

// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy kiểm tra xem có điểm số nào lớn hơn 80 hay không.
// <code here>
let scores = [85, 90, 78];
let kiemTra = scores.some(score => score > 80);
console.log(kiemTra);

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy kiểm tra xem có tuổi nào dưới 18 hay không.
// <code here>
let ages = [18, 21, 16, 25];
let kiemTra1 = ages.some(age => age < 18);
console.log(kiemTra1);

// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy kiểm tra xem có từ nào có độ dài lớn hơn 5 ký tự hay không.
// <code here>
let words = ["apple", "banana", "cherry", "date"];
let kiemTra2 = words.some(word => word.length > 5);
console.log(kiemTra2);