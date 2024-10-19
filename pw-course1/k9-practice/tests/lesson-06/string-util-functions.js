// //1. trim() dung de loai bo khoang trang ở đầu và cuối 
// let string = "K9 class";
// console.log(string.trim());

// // //2. toLowerCase() va toUpperCase() chuyen doi tat ca ky tu trong chuoi thanh Thuong/ Hoa
// console.log(string.toLowerCase());
// console.log(string.toUpperCase());

// //3. includes() tra ve true/ false. dung de kiem tra chuoi co chua chuoi con hay khong
// let string2 = "Playwright VN K9";
// console.log(string2.includes("K9")); // true
// console.log(string2.includes("k9")); // false

// //4. replace(): dung de thay the 1 chuoi bang chuoi khac
// let string = string2.replace("VN", "");
// console.log(string);



// //5. split(): chia 1 chuoi thanh 1 array cac chuoi con dua tren ky tu phan cach
// let string2 = "Playwright VN K9";
// console.log(string2.split(" "));


//6. substring(): tra ve 1 phan cua chuoi, bat dau tu index duoc chi dinh hoac den cuoi chuoi
// let str1 = "Hello World";
// console.log(str1.substring(0, 5));
// console.log(str1.substring(6));

// //7. indexOf(): tra ve vi tri xuat hien dau tien cua chuoi, neu khong tim thay no tra ve -1
let str1 = "Hello World";
console.log(str1.indexOf("World")); //6
console.log(str1.indexOf("JS")); //-1

