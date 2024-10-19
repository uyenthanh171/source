// push() và pop()
// Bài 1: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy thêm số 4 vào cuối mảng.

const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); //Output: [ 1, 2, 3, 4 ]

// Bài 2: Tạo một mảng numbers chứa các số: 1, 2, 3, 4. Hãy loại bỏ số cuối cùng trong mảng.

const numbers2 = [1, 2, 3, 4];
numbers.pop();
console.log(numbers); //Output: [ 1, 2, 3]

// Bài 3: Tạo một mảng names chứa các tên: "Alice", "Bob", "Charlie". Hãy thêm tên "David" vào cuối mảng.

const names = ["Alice", "Bob", "Charlie"];
names.push("David");
console.log(names); //Output: [ 'Alice', 'Bob', 'Charlie', 'David' ]

