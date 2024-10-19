//Bài: Tính chỉ số BMI
function caculateBMI (weight,height) {
    const bmi = weight / (height*height);
    if (bmi < 19.5) {
        console.log("Gầy");
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        console.log("Bình thường");
    }
    else if(bmi >= 25 && bmi < 29.9) {
        console.log("Thừa cân");
    }
    else {console.log("Béo phì")
    }
}

caculateBMI(67,1.72);
console.log(caculateBMI);
// Note: Nếu dùng if thì kết quả của hàm sẽ vẫn tiếp tục được chạy và nó sẽ xảy ra 2 kết quả 
// Vì vậy phải dùng else if để kết quả chỉ có 1
