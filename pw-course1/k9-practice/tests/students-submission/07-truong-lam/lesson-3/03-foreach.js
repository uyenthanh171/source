
let numbers = [1, 2, 3];

//Câu 1:
numbers.forEach(function (numbers) {
    console.log(numbers);
})


//Câu 2:
let max = numbers[0];
let sum = 0;
numbers.forEach(function (number) {
    
    if (number > max) {
        max = number;
    }
    sum += number;
})
console.log("Tổng là: "+sum);
console.log(max);

//Câu 3:
let arr = [3, 5, 7];
let a = [];
arr.forEach(function (index) {
    index *= 2;
    a.push(index);
})
console.log(a);