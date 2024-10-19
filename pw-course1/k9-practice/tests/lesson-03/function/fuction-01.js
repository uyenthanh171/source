/*
Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
Biết:
Chiều cao được tính theo đơn vị mét (VD: 1.75m)
Cân nặng tính theo kg
Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
BMI < 18.5: thiếu cân
BMI < 25: Bình thường
BMI < 30: Thừa cân
BMI >= 30: Béo phì
*/

const height = 162;
const weight = 45;

function calculateBMI(height, weight) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Thieu can";
    } else if (bmi < 25) {
        return "Binh thuong";
    } else if (bmi < 30) {
        return "Thua can";
    } else {
        return "Beo phi";
    }
}

const result = calculateBMI(height, weight);
console.log(result);