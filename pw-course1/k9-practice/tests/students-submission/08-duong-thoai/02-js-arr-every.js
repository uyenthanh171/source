// //6. every(): kiem tra tat ca cac phan tu trong mang cua thoa man khong. tra ve true/false
// let numbers = [1, 2, 2, 4];
// let hasEven = numbers.every(num => num % 2 === 0); //true
// console.log(hasEven);

// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy kiểm tra xem tất cả các điểm số đều lớn hơn 70 hay không.
// <code here>
let scores = [85, 90, 78];
let checkScore = scores.every(diem => diem > 70);
console.log(checkScore);

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy kiểm tra xem tất cả các tuổi đều lớn hơn 15 hay không.
// <code here>
let ages = [18, 21, 16, 25];
let checkAge = ages.every(tuoi => tuoi > 15);
console.log(checkAge);

// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy kiểm tra xem tất cả các từ đều có độ dài lớn hơn 3 ký tự hay không.
// <code here>
let words = ["apple", "banana", "cherry", "date"];
let checkWord = words.every(tu => tu.length > 3);
console.log(checkWord);