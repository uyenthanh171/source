// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy kiểm tra xem tất cả các điểm số đều lớn hơn 70 hay không.
const scores = [85, 90, 78];
const answer = scores.every(index => index > 0);
console.log(answer);

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy kiểm tra xem tất cả các tuổi đều lớn hơn 15 hay không.
const ages = [18, 21, 16, 25];
const answer2 = ages.every(index => index > 15);
console.log(answer2);

// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy kiểm tra xem tất cả các từ đều có độ dài lớn hơn 3 ký tự hay không.
const words = ["apple", "banana", "cherry", "date"];
const answer3 = words.every(word => word.length > 3);
console.log(answer3);