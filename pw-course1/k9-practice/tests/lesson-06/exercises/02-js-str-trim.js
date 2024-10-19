// Trim
// Bài 1: Tạo một chuỗi name với giá trị " Nguyễn Văn A ". Hãy loại bỏ khoảng trắng ở đầu và cuối chuỗi.
const name = " Nguyễn Văn A ";
const trimmedName = name.trim();
console.log(trimmedName);

//Bài 2: Tạo một chuỗi userInput với giá trị " 12345 ". Hãy loại bỏ khoảng trắng ở cuối chuỗi.
const userInput = " 12345 ";
const trimmedUserInput = userInput.trimEnd();
console.log(trimmedUserInput);

// Bài 2: Tạo một chuỗi email với giá trị " example@gmail.com ". Hãy loại bỏ khoảng trắng đầu chuỗi email.
const email = " example@gmail.com ";
const trimmedEmail = email.trimStart();
console.log(trimmedEmail);