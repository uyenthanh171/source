// substring()
// Bài 1: Tạo một chuỗi fullName với giá trị "Nguyễn Văn A". Hãy trích xuất tên họ từ chuỗi.
const fullName = "Nguyễn Văn A";
const substringFullName = fullName.substring(0, 6);
console.log(substringFullName);

// Bài 2: Tạo một chuỗi date với giá trị "2024-05-19". Hãy trích xuất phần năm từ chuỗi.
const date = "2024-05-19";
const substringdate = date.substring(0, 4);
console.log(substringdate);

// Bài 3: Tạo một chuỗi email với giá trị "example@gmail.com". Hãy trích xuất phần tên miền từ chuỗi email.
const email = "example@gmail.com";
const substringemail = email.substring(13, 17);
console.log(substringemail);