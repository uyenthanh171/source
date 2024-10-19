// //4. reduce(): tra ve 1 gia tri duy nhat (tu trai qua phai)
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);

// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy tính tổng các điểm.
// <code here>
let scores = [85, 90, 78];
let sum = scores.reduce((total, num) => total + num, 0);
console.log(sum);

// Bài 2: Tạo một mảng numbers chứa các số: 1, 2, 3, 4. Hãy tính tích của các số.
// <code here>
let numbers = [1, 2, 3, 4];
let tich = numbers.reduce((total, num) => total * num, 1);
console.log(tich);

// Bài 3: Tạo một mảng expenses chứa các giá trị chi phí: 50, 100, 150. Hãy tính tổng chi phí.
// <code here>
let expenses = [50, 100, 150];
let sum1 = expenses.reduce((total, num) => total + num, 0);
console.log(sum1);