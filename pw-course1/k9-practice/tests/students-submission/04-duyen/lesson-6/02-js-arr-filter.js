// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy lọc ra các học sinh có điểm trên 80.

const score = [85, 90, 78];
const result1 = score.filter(score => score > 80);
console.log(result1); //output [ 85, 90 ]

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy lọc ra các tuổi lớn hơn hoặc bằng 18.

const ages = [18, 21, 16, 25];
const result2 = ages.filter(ages => ages >= 18);
console.log(result2); //output [ 18, 21, 25 ]

// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy lọc ra các từ có độ dài lớn hơn 5 ký tự.

const words = ["apple", "banana", "cherry", "date"];
const result3 = words.filter(words => words.length > 5);
console.log(result3); //output [ "banana", "cherry" ]