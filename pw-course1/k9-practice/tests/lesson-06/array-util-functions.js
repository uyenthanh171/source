// //1. map: tao ra 1 mang moi dua tren tung phan tu cua mang goc
// let number = [1, 2, 3, 4];
// let newNumbers = number.map(num => num * 2);
// console.log(newNumbers);

// //2. filter(): tao ra 1 mang moi chua cac phan tu thoa man dieu kien trong ham
// let numbers = [1, 2, 3, 4];
// let newNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
// console.log(newNumbers);

// //3. find(): tra ve gia tri cua phan tu dau tien cua mang thoa man dieu kien trong ham, neu ko phan tu nao thoa man thi no tra undefined
// let numbers = [1, 2, 3, 4];
// let newNumbers = numbers.find(num => num % 2 === 0);
// console.log(newNumbers);

// //4. reduce(): tra ve 1 gia tri duy nhat (tu trai qua phai)
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);

// //5. some(): kiem tra xem co it nhat 1 phan tu trong mang thoa man dieu kien trong ham hay ko. tra true/ false
// let numbers = [2, 1, 3, 1];
// let hasEven = numbers.some(num => num % 2 === 0); //false
// console.log(hasEven);

// //6. every(): kiem tra tat ca cac phan tu trong mang cua thoa man khong. tra ve true/false
// let numbers = [1, 2, 2, 4];
// let hasEven = numbers.every(num => num % 2 === 0); //true
// console.log(hasEven);

// //7. push(): them 1 hoac nhieu phan tu vao cuoi mang, tra ve do dai moi cua mang
// let numbers = [2, 2, 2, 4];
// numbers.push(4, 5);
// console.log(numbers);

// //8. shift(): loai bo phan tu dau tien cua mang va tra ve phan tu bi loai bo
// let numbers = [5, 2, 2, 4];
// let newNumbers = numbers.shift();
// console.log(newNumbers);
// console.log(numbers);

// //9. sort(): sap xep cac phan tu cua mang theo thu tu tang dan/ giam dan
// Mac dinh: a la so dung trc, b la so dung sau
// Tang dan dung: sort() hoac sort((a, b) => a - b)
// a - b = negative => a < b => a dung truoc b 
// a - b = positive => a > b => b dung truoc a

// Giam dan dung: sort((a, b) => b - a)
// b - a = negative => b < a => a dung truoc b
// b - a = positive => b > a => b dung truoc a

let numbers = [5, 1, 2, 4]; // [5,1, 2, 4] [5, 2, 1, 4] []
// numbers.sort();
numbers.sort((a, b) => b - a);
console.log(numbers);




