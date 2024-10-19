// //1. map: tao ra 1 mang moi dua tren tung phan tu cua mang goc
// let number = [1, 2, 3, 4];
// let newNumbers = number.map(num => num * 2);
// console.log(newNumbers);

// Bài 1: Tạo một mảng scores chứa các giá trị điểm kiểm tra: 85, 90, 78. Hãy sử dụng phương thức map() để 
//tạo ra một mảng mới adjustedScores, trong đó mỗi giá trị là điểm kiểm tra ban đầu 
//được tăng thêm 10% nếu điểm đó dưới 90, và giảm 5% nếu điểm đó từ 90 trở lên.
// <code here>
let scores = [85, 90, 78];
let adjustedScores = 
scores.map((diem) => {
    if( diem < 90 ){
        return diem + (diem*0.1); 
    } else if( diem > 90){
        return diem * (diem*0.05);
    } else {
        return diem;
    }
});
console.log(adjustedScores);

// Bài 2: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy chuyển đổi mảng các số thành mảng các chuỗi.
// <code here>
let numbers = [1, 2, 3];
let newNumbers1 = numbers.map((so) => so.toString());
console.log(newNumbers1);

// Bài 3: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy nhân đôi mỗi giá trị trong mảng.
// <code here>
let numbers1 = [1, 2, 3];
let newNumbers = numbers1.map((so) => {
    return so * 2;
});
console.log(newNumbers);