// Bài 1: Tạo một mảng scores chứa các giá trị điểm kiểm tra: 85, 90, 78. Hãy sử dụng phương thức map() để tạo ra một mảng mới adjustedScores, trong đó mỗi giá trị là điểm kiểm tra ban đầu được tăng thêm 10% nếu điểm đó dưới 90, và giảm 5% nếu điểm đó từ 90 trở lên.
const scores = [85, 90, 78];
const newScores = scores.map((score) => {
    if (score < 90) {
        return score * 1.1;
    } else {
        return score * 0.95;
    }
});
console.log(newScores);

// Bài 2: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy chuyển đổi mảng các số thành mảng các chuỗi.
const numbers = [1, 2, 3];
const numberToString = numbers.map((number) => number.toString());
console.log(numberToString);

// Bài 3: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy nhân đôi mỗi giá trị trong mảng.
// <code here>
const numbers2 = [1, 2, 3];
const doubleNumber = numbers2.map((number2) => number2 * 2);
console.log(doubleNumber);