// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy tính tổng các điểm.
const scores = [85, 90, 78];
const totalScores = scores.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(totalScores);

// Bài 2: Tạo một mảng numbers chứa các số: 1, 2, 3, 4. Hãy tính tích của các số.
const numbers = [1, 2, 3, 4];
const multiplication = numbers.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);
console.log(multiplication);
// Bài 3: Tạo một mảng expenses chứa các giá trị chi phí: 50, 100, 150. Hãy tính tổng chi phí.
const expenses = [50, 100, 150];
const totalExpenses = expenses.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(totalExpenses);