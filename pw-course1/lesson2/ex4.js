let height = 1.68;
let fraction = (height % 1) * 100;
let idealweight = fraction * 9 / 10;
let maxweight = fraction;
let minweight = fraction * 8 / 10;
// a. Khai báo chiều cao của bạn
console.log(fraction)
// b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng 1 dòng
console.log("Cân nặng lý tưởng" + " ", idealweight, "Cân nặng tối đa" + " ", maxweight, "Cân nặng tối thiểu" + " ", minweight)
