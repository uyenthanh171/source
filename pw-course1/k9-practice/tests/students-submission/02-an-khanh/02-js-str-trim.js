// Trim
// Bài 1: Tạo một chuỗi name với giá trị " Nguyễn Văn A ". Hãy loại bỏ khoảng trắng ở đầu và cuối chuỗi.
const name = " Nguyễn Văn A ";
const trimName = name.trim();
console.log(trimName);

//Bài 2: Tạo một chuỗi userInput với giá trị " 12345 ". Hãy loại bỏ khoảng trắng ở cuối chuỗi.
const userInput =  " 12345 ";
const trimInput = userInput.trimEnd();
console.log(trimInput);

// Bài 2: Tạo một chuỗi email với giá trị " example@gmail.com ". Hãy loại bỏ khoảng trắng đầu chuỗi email.
const email = " example@gmail.com ";
const trimEmail = email.trimStart();
console.log(trimEmail);