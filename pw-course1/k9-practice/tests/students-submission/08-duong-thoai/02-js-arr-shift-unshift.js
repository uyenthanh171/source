// //8. shift(): loai bo phan tu dau tien cua mang va tra ve phan tu bi loai bo
// let numbers = [5, 2, 2, 4];
// let newNumbers = numbers.shift();
// console.log(newNumbers);
// console.log(numbers);

// Bài 1: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy loại bỏ phần tử đầu tiên trong mảng.
// <code here>
let numbers = [1, 2, 3];
let newNumbers = numbers.shift();
console.log(newNumbers);
console.log(numbers);

// Bài 2: Tạo một mảng numbers chứa các số: 2, 3. Hãy thêm số 1 vào đầu mảng.
// <code here>
let numbers1 = [2, 3];
let newNumbers1 = numbers1.unshift(1);
console.log(numbers1);

// Bài 3: Tạo một mảng names chứa các tên: "Bob", "Charlie". Hãy thêm tên "Alice" vào đầu mảng.
// <code here>
let names = ["Bob", "Charlie"];
let newNames = names.unshift("Alice");
console.log(names);