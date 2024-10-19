// Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số.

const arr = [5, 10, 15];

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // sum = sum + arr[i];
    } 

    return sum;
}

const result = sumArray(arr);
console.log(result);