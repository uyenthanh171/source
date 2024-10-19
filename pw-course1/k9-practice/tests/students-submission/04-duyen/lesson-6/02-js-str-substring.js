// substring()
// Bài 1: Tạo một chuỗi fullName với giá trị "Nguyễn Văn A". Hãy trích xuất tên họ từ chuỗi.

fullName = "Nguyễn Văn A";
const firstName = fullName.substring(0, fullName.indexOf(" "));
const lastName = fullName.substring(fullName.indexOf(" "));
console.log(`First Name: ${firstName}`); //output: Nguyễn
console.log(`Last Name: ${lastName}`); //output: Văn A

// Bài 2: Tạo một chuỗi date với giá trị "2024-05-19". Hãy trích xuất phần năm từ chuỗi.

date = "2024-05-19";
const year = date.substring(0, date.indexOf("-"));
console.log(year); //Output: 2024

// Bài 3: Tạo một chuỗi email với giá trị "example@gmail.com". Hãy trích xuất phần tên miền từ chuỗi email.

email = "example@gmail.com";
const domain = email.substring(date.indexOf("@") + 9);
console.log(domain); //Output: gmail.com