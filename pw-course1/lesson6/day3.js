//Bài: Tính số nguyên tố
function isPrime(prime) {
    if (prime % prime === 0 && prime % 1 === 0) {
        console.log("Đây là số nguyên tố");
    if (prime % 2 === 0 && prime % Math.sqrt(prime)=== 0) {
        console.log("Đây không phải là số nguyên tố");
    }
    }
}
isPrime(13)