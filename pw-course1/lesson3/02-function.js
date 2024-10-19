// Bài 1: Tính BMI
// function caculateBMI(weight, height) {
//     const bmi = weight / (height * height);
//     if (bmi < 19.5) {
//         console.log("Gầy");
//     }
//     else if (bmi >= 18.5 && bmi < 24.9) {
//         console.log("Bình thường");
//     }
//     else if (bmi >= 25 && bmi < 29.9) {
//         console.log("Thừa cân");
//     }
//     else {
//         console.log("Béo phì")
//     }
// }

// caculateBMI(67, 1.72);
// console.log(caculateBMI);

// //Bài 2: Tính nhiệt độ
// function changetemp(temp, kindOfTemp) {
//     const F = (temp) * 9 / 5 + 32;
//     const C = (temp - 32) * 5 / 9;
//     if (kindOfTemp.toUpperCase() === "F") {
//         console.log(F);
//     }
//     else if (kindOfTemp.toUpperCase() === "C") {
//         console.log(C)
//     }
// }

// changetemp(6, "F");
// console.log(changetemp);

//Bài 3: Tính tổng các phần tử trong mảng
// function caculateSum(array) {
//     let total = 0;
//     for (i = 0; i < array.length; i++) {
//         total += array[i]
//     }
//     return total
// }
// let array = [111,222,333,444,555,666,777];
// console.log(caculateSum(array));

//Bài 4: Hàm lọc số nguyên tố
//Cách 1: Dùng hàm for để lọc ra số nguyên tố
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]  //number ở đây đại diện cho một giá trị của arr khi chạy vòng lặp
// function isPrime(number) {
//     if (number <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) return false
//     }
//     return true;
// };

// //Dùng hàm for để duyệt các giá trị trong mảng arr theo function isPrime
// // for (let i = 0; i < arr.length; i++) {
// //     if(isPrime(arr[i]))
// //     console.log(`Đây là số nguyên tố: ${arr[i]}`)
// // };
// //Cách 2: Dùng filter
// const checkPrime = arr.filter(isPrime);
// console.log("Đây là số nguyên tố:", checkPrime);

//Bài 5: Cập nhật Email dựa trên một danh sách
// === dùng để so sánh giá trị
// = gán giá trị mới
let user = [
    {username: "A", email: "a@gmail.com"},
    {username: "B", email: "b@gmail.com"},
    {username: "C", email: "c@gmail.com"},
] 
function checkEmail (name, newEmail) {
    for(let i = 0; i < user.length; i++) {
       if (user[i].username === name) {
        user[i].email = newEmail;
        console.log(`${name} đã được cập nhật email mới thành ${newEmail}`)
       }; 
    }
        console.log(`${name} không có email được cập nhật hợp lệ`)
    }
    checkEmail("A","thanh@gmail.com")
console.log("Danh sách đã được cập nhật:", user);

