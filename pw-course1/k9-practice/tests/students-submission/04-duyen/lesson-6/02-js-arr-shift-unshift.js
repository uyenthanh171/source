// Bài 1: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy loại bỏ phần tử đầu tiên trong mảng.

const numbers = [1, 2, 3];
numbers.shift();
console.log(numbers); //output: [ 2, 3 ]

// Bài 2: Tạo một mảng numbers chứa các số: 2, 3. Hãy thêm số 1 vào đầu mảng.

const numbers2 = [2, 3];
numbers.unshift(1);
console.log(numbers); //output: [ 1, 2, 3 ]

// Bài 3: Tạo một mảng names chứa các tên: "Bob", "Charlie". Hãy thêm tên "Alice" vào đầu mảng.

const names = ["Bob", "Charlie"];
names.unshift("Alice");
console.log(names); //output: [ 'Alice', 'Bob', 'Charlie' ]