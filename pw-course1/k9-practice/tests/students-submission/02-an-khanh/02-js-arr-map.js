// Bài 1: Tạo một mảng scores chứa các giá trị điểm kiểm tra: 85, 90, 78. Hãy sử dụng phương thức map() để tạo ra một mảng mới adjustedScores,
// trong đó mỗi giá trị là điểm kiểm tra ban đầu được tăng thêm 10% nếu điểm đó dưới 90, và giảm 5% nếu điểm đó từ 90 trở lên.
const scores = [85, 90, 78];
const adjustedScores = scores.map(score => {
    if (score < 90) {
        return score + (score * 10 / 100);
    } else {
        return score - (score * 5 / 100);
    }
});
console.log(adjustedScores);

// Bài 2: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy chuyển đổi mảng các số thành mảng các chuỗi.
const numbers = [1, 2, 3];
const stringArray = numbers.map(number => number.toString());
console.log(stringArray);

// Bài 3: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy nhân đôi mỗi giá trị trong mảng.
const doubleArray = numbers.map(number => number * 2);
console.log(doubleArray);