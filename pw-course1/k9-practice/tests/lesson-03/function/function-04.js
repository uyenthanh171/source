/*
Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
Biết:
Số 0, số 1 không phải số nguyên tố.
Các số nguyên tố là số chỉ chia hết cho 1 và chính nó
*/

// function check prime number
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrimeNumber(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// function filter prime number in array
function filterPrimeNumber(arr) {
    const primeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrimeNumber(arr[i])) {
            primeNumbers.push(arr[i]);
        }
    }
    return primeNumbers;
}

const arrayPrimes = filterPrimeNumber(arr);
console.log(arrayPrimes);
