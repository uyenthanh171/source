/*
Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.
Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
*/

let students = [
    { name: "Alex", score: 85 },
    { name: "Blex", score: 95 },
    { name: "Clex", score: 65 },
    { name: "Dlex", score: 55 }
]

function tinhTB(arr) {
    // TB = tong / so phan tu
    // so phan tu -> arr.length
    // tong -> tinh
    let tong = 0;

    for (let i = 0; i < arr.length; i++) {
        tong += arr[i].score;
    }

    return tong / arr.length;
}

tinhTB(students);

function tinhDTB(array) {
    let tong = 0;
    for (hocsinh of array) {
        tong = tong + hocsinh.score;
    }
    return tong / array.length;
}

const dtb = tinhDTB(students);
console.log(dtb);