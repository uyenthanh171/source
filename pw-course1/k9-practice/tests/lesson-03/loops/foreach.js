// // 1.In ra tất cả các phần tử của một mảng:
arr = [1, 2, 3];
arr.forEach(element => {
    console.log(element);
});

// // 2.Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng:
let myArr1 = [100, 300, 200, 10];
let sum = 0;
let max = myArr1[0];
let min = myArr1[0];

myArr1.forEach(item => {
    sum += item;

    if (item > max) {
        max = item;
    }
    if (item < min) {
        min = item;
    }
})

// console.log(`Sum: ${sum}`);
// console.log(`Max: ${max}`);
// console.log(`Min: ${min}`);

// // 3.Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi:
const myArr2 = [20, 30, 50];
const myResultArr = [];

myArr2.forEach(item => {
    myResultArr.push(item * 2);
})

// console.log(`Origin arr: ${myArr2}`);
// console.log(`Result arr: ${myResultArr}`);