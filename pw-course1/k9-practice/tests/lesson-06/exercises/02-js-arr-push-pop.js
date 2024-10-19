// push() và pop()
// Bài 1: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy thêm số 4 vào cuối mảng.
const numbers = [1, 2, 3];
const pushedNumbers = numbers.push(4);
console.log(numbers);

// Bài 2: Tạo một mảng numbers chứa các số: 1, 2, 3, 4. Hãy loại bỏ số cuối cùng trong mảng.
const numbers2 = [1, 2, 3, 4];
const popNumbers = numbers2.pop();
console.log(numbers2);

// Bài 3: Tạo một mảng names chứa các tên: "Alice", "Bob", "Charlie". Hãy thêm tên "David" vào cuối mảng.
const names = ["Alice", "Bob", "Charlie"];
const pushedNames = names.push("David");
console.log(names);
