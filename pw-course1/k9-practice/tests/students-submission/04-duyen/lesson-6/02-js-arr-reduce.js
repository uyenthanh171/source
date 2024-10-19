// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy tính tổng các điểm.
// <code here>
const score = [85, 90, 78];
const result = score.reduce((total, number) => total + number, 0);
console.log(result); //output: 253

// Bài 2: Tạo một mảng numbers chứa các số: 1, 2, 3, 4. Hãy tính tích của các số.
// <code here>
const numbers = [1, 2, 3, 4];
const result2 = numbers.reduce((multiplication, number) => multiplication * number, 1);
console.log(result2); //output: 24


// Bài 3: Tạo một mảng expenses chứa các giá trị chi phí: 50, 100, 150. Hãy tính tổng chi phí.
// <code here>
const expenses = [50, 100, 150];
const result3 = expenses.reduce((total, number) => total + number, 0);
console.log(result3); //output: 300
