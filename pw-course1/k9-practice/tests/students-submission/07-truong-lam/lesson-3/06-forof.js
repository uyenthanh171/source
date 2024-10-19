//Câu 1: 
const str = "Playwright";
for (const i of str) {
    console.log(i);
}


//Câu 2:
const arr = [1, 2, 3, 4, 3, 55, 23];
const target = 1;

let firstIndex = 0;
let lastIndex = 0;
let index = 0;

for (const value of arr) {
    if (value === target) {
        if (firstIndex === 0) {
            firstIndex = index;
        }
        lastIndex = index;
    }
    index++;
}

console.log("Vị trí đầu tiên:", firstIndex);
console.log("Vị trí cuối cùng:", lastIndex);



//Câu 4: 
const a = [1, 2, 3, 1, 2, 4, 5];

const count = {};

for (const number of arr) {
    if (count[number]) {
        count[number]++;
    } else {
        count[number] = 1;
    }
}

const b = [];
for (const number of arr) {
    if (count[number] === 1) {
        b.push(number);
    }
}

console.log(b);