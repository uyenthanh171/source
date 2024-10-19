// //3. find(): tra ve gia tri cua phan tu dau tien cua mang thoa man dieu kien trong ham, neu ko phan tu nao thoa man thi no tra undefined
// let numbers = [1, 2, 3, 4];
// let newNumbers = numbers.find(num => num % 2 === 0);
// console.log(newNumbers);

// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy tìm điểm số đầu tiên lớn hơn 80.
// <code here>
let scores = [85, 90, 78];
let findScores = scores.find(diem => diem > 80);
console.log(findScores);

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy tìm tuổi đầu tiên lớn hơn 20.
// <code here>
let ages = [18, 21, 16, 25];
let findAge = ages.find(tuoi => tuoi > 20);
console.log(findAge);

// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy tìm từ đầu tiên có độ dài lớn hơn 5 ký tự.
// <code here>
let words = ["apple", "banana", "cherry", "date"];
let findWord = words.find(tu => tu.length > 5);
console.log(findWord);