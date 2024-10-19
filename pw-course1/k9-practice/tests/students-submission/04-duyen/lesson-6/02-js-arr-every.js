// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy kiểm tra xem tất cả các điểm số đều lớn hơn 70 hay không.

const scores = [85, 90, 78];
const result1 = scores.every(score => score > 70);
console.log(result1); //output true


// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy kiểm tra xem tất cả các tuổi đều lớn hơn 15 hay không.

const ages = [18, 21, 16, 25];
const result2 = ages.every(ages => ages > 15);
console.log(result2); //output true


// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy kiểm tra xem tất cả các từ đều có độ dài lớn hơn 3 ký tự hay không.

const words = ["apple", "banana", "cherry", "date"];
const result3 = words.every(words => words.length > 3);
console.log(result3); //output true