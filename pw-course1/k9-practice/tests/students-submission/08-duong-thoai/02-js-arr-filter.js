// //2. filter(): tao ra 1 mang moi chua cac phan tu thoa man dieu kien trong ham
// let numbers = [1, 2, 3, 4];
// let newNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
// console.log(newNumbers);

// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy lọc ra các học sinh có điểm trên 80.
// <code here>
let scores = [85, 90, 78];
let newScores = scores.filter(diem => diem > 80);
console.log(newScores);

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy lọc ra các tuổi lớn hơn hoặc bằng 18.
// <code here>
let ages = [18, 21, 16, 25];
let newAge = ages.filter(tuoi => tuoi >= 18);
console.log(newAge);

// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy lọc ra các từ có độ dài lớn hơn 5 ký tự.
// <code here>
let words = ["apple", "banana", "cherry", "date"];
let newWords = words.filter(tu => tu.length > 5);
console.log(newWords);