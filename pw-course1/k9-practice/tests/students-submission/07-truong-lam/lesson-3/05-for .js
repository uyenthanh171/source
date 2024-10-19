
const student = {
    "name": "Alex",
    "age": 10,
    "salary": 20,
}


//Câu 1: 
for (let index in student) {
    console.log(index + " = " + student[index]);
}


//Câu 2:
let sum = 0
for (let index in student) {
    if (typeof student[index] === "number") {
        sum += student[index];
    }
}
console.log("Tổng các giá trị số: " + sum);

//Câu 3: 
let arr = [];
for (let index in student) {
    arr.push(index);
}
console.log(arr);

//Câu 4: từ phần for-of câu 3 chuyển qua theo yêu cầu của đề bài
const str = "Playwright";
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}