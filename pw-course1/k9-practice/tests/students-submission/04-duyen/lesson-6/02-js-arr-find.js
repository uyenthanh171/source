// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy tìm điểm số đầu tiên lớn hơn 80.

const score = [85, 90, 78];
const result1 = score.find(score => score > 80);
console.log(result1); //output 85

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy tìm tuổi đầu tiên lớn hơn 20.

const ages = [18, 21, 16, 25];
const result2 = ages.find(ages => ages >= 20);
console.log(result2); //output 21

// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy tìm từ đầu tiên có độ dài lớn hơn 5 ký tự.

const words = ["apple", "banana", "cherry", "date"];
const result3 = words.find(words => words.length > 5);
console.log(result3); //output banana