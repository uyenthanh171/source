// Bài 1: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy loại bỏ phần tử đầu tiên trong mảng.
const numbers = [1, 2, 3];
const shiftednumbers = numbers.shift();
console.log(numbers);

// Bài 2: Tạo một mảng numbers chứa các số: 2, 3. Hãy thêm số 1 vào đầu mảng.
const numbers2 = [2, 3];
const shiftednumbers2 = numbers2.unshift(1);
console.log(numbers2);

// Bài 3: Tạo một mảng names chứa các tên: "Bob", "Charlie". Hãy thêm tên "Alice" vào đầu mảng.
const names = ["Bob", "Charlie"];
const shiftednames = names.unshift("Alice");
console.log(names);