/*
Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>= 6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
*/

function classifyStudentGrade(score) {
    let gradeClassification;
    if (score >= 8) {
        gradeClassification = "Giỏi";
    } else if (score >= 6.5 && score < 8) {
        gradeClassification = "Khá";
    } else if (score >= 5 && score < 6.5) {
        gradeClassification = "Trung bình";
    } else {
        gradeClassification = "Yếu";
    }

    console.log(`Với điểm số ${score}, học sinh được phân loại là: ${gradeClassification}.`);
}

classifyStudentGrade(9);
classifyStudentGrade(7);
classifyStudentGrade(5.5);
classifyStudentGrade(4);