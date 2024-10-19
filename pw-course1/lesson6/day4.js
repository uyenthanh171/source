//Bài: Tính tuổi
function caculateAge (dob) {
    const currentYear = new Date().getFullYear();
    if (dob > currentYear) {
        console.log("Năm sinh không hợp lệ.");
    }
    else {
    const age = currentYear - dob
        console.log(age + "tuổi");
    }
}
caculateAge(2045)