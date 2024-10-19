const { timeStamp } = require("console");

// Hàm chuyển đổi nhiệt độ
function changetemp (temp, kindOfTemp) {
    const F = (temp) * 9/5 + 32;
    const C = (temp - 32) * 5 / 9;
if (kindOfTemp.toUpperCase() === "F") {
    console.log(F);
}
else if (kindOfTemp.toUpperCase() === "C") {
    console.log(C)
}
}

changetemp(6, "F");
console.log(changetemp);