//Câu 1: 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);


//Câu 2: 
for (let i = 2; i <= 9; i++) {
    console.log("Bảng cửu chương " + i);
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
    console.log("\n");
}


//Câu 3:
const arr = [];

for (let i = 1; i <= 99; i += 2) {
        arr.push(i);
}
console.log(arr);


//Câu 4:
for (let i = 1; i <= 10; i++) {
    console.log("user-" + i + "@example.com")
}


//Câu 5:
const doanhThu = [
    { "month": 1, "total": 150, },
    { "month": 2, "total": 100, },
    { "month": 3, "total": 130, },
    { "month": 4, "total": 220, },
    { "month": 5, "total": 100, },
    { "month": 6, "total": 100, },
    { "month": 7, "total": 250, },
    { "month": 8, "total": 100, },
    { "month": 9, "total": 100, },
    { "month": 10, "total": 100, },
    { "month": 11, "total": 100, },
    { "month": 12, "total": 300, },
]

let tong = 0;

for (let i = 0; i < doanhThu.length; i++) {
    tong += doanhThu[i].total;
}
console.log("Tổng doanh thu của 12 tháng là: " + tong);