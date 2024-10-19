// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy kiểm tra xem có điểm số nào lớn hơn 80 hay không.
const scores = [85,90,78];
const result1 = scores.some(score => score > 80);
console.log(result1);

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy kiểm tra xem có tuổi nào dưới 18 hay không.
const ages = [18,21,16,25];
const result2 = ages.some(age => age < 18);
console.log(result2);

// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy kiểm tra xem có từ nào có độ dài lớn hơn 5 ký tự hay không.
const words = ["apple", "banana", "cherry", "date"];
const result3 = words.some(word => word.length > 5);
console.log(result3);