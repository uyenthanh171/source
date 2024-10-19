// Bài 1: Tạo một mảng scores chứa các giá trị điểm kiểm tra: 85, 90, 78. Hãy sử dụng phương thức map() để tạo ra một mảng mới adjustedScores, trong đó mỗi giá trị là điểm kiểm tra ban đầu được tăng thêm 10% nếu điểm đó dưới 90, và giảm 5% nếu điểm đó từ 90 trở lên.

const score = [85, 90, 78];
const adjustedScores = score.map(score => {
    if (score < 90) {
        return score + (score * 0.1);
    } else {
        return score - (score * 0.05);
    }
});
console.log(adjustedScores); // Output: [ 93.5, 85.5, 85.8 ]

// Bài 2: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy chuyển đổi mảng các số thành mảng các chuỗi.

const numbers = [1, 2, 3];
const result = numbers.map(numbers => String(numbers));
console.log(result); //Output [ '1', '2', '3' ]

// Bài 3: Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy nhân đôi mỗi giá trị trong mảng.

const result2 = numbers.map(numbers => numbers * 2);
console.log(result2); //Output [ 2, 4, 6 ]

