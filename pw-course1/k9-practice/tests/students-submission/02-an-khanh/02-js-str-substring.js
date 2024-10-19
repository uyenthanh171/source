// substring()
// Bài 1: Tạo một chuỗi fullName với giá trị "Nguyễn Văn A". Hãy trích xuất tên họ từ chuỗi.
const fullName = "Nguyễn Văn A";
const firstName = fullName.substring(0, 6);
const lastName = fullName.substring(11);
console.log(firstName + " " + lastName);

// Bài 2: Tạo một chuỗi date với giá trị "2024-05-19". Hãy trích xuất phần năm từ chuỗi.
const date = "2024-05-19";
const year = date.substring(0,4);
console.log(year);

// Bài 3: Tạo một chuỗi email với giá trị "example@gmail.com". Hãy trích xuất phần tên miền từ chuỗi email.
const email = "example@gmail.com";
const domain = email.substring(8);
console.log(domain);