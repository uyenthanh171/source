// // 1.In ra tên và giá trị của mỗi thuộc tính trong một đối tượng:
// let student = {
//     name: "Alex",
//     age: 10
// };

// for (let property in student) {
//     console.log(`${property}=${student[property]}`);
// }

// // 2.Tính tổng các giá trị số của các thuộc tính trong một đối tượng:
const student = {
    name: "Alex",
    "math": 5,
    "physic": 6,
}

let sum = 0;
for (property in student) {
    const value = student[property];

    if (typeof value === "number") {
        sum += value;
    }
}

console.log(sum);

// // 3.Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng:
let employee = { "name": "Jonh", "age": 33 };
let propertiesArray = [];

for (let property in employee) {
    propertiesArray.push(property);
}

// console.log(propertiesArray);