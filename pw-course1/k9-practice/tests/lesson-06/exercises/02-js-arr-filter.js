// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy lọc ra các học sinh có điểm trên 80.
const scores = [85, 90, 78];
const filterScores = scores.filter((score) => score > 80);
console.log(filterScores);

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy lọc ra các tuổi lớn hơn hoặc bằng 18.
const ages = [18, 21, 16, 25];
const filterAges = ages.filter((age) => age >= 18);
console.log(filterAges);

// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy lọc ra các từ có độ dài lớn hơn 5 ký tự.
const fruits = ["apple", "banana", "cherry", "date"];
const filterfruits = fruits.filter((fruit) => fruit.length > 5);
console.log(filterfruits);