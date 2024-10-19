// 1.In ra tất cả các ký tự của một chuỗi:
let str = "Playwright";

for (let char of str) {
    console.log(char);
}

// 2.Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị cho trước:
function findFirstAndLastIndices(array, value) {
    let firstIndex = -1;
    let lastIndex = -1;

    for (let [index, element] of array.entries()) {
        if (element === value) {
            if (firstIndex === -1) {
                firstIndex = index;
            }
            lastIndex = index;
        }
    }

    console.log(`Vị trí phần tử đầu tiên: ${firstIndex}`);
    console.log(`Vị trí phần tử cuối cùng: ${lastIndex}`);
}

let arrayList = [1, 2, 3, 4, 3, 55, 3];
let value = 3;
findFirstAndLastIndices(arrayList, value);

// 3.Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho:
// Cach 1
// let str = "Playwright";
// let reversedArray = [];

// for (let char of strIn03) {
//     reversedArray.unshift(char);
// }

// console.log(reversedArray);

// Cach 2
let str = "Playwright";
let mangNghichDao = [];
for (let i = str.length - 1; i >= 0; i--) {
    mangNghichDao.push(str[i]);
}
console.log(mangNghichDao); 


// 4.Lọc ra tất cả các phần tử duy nhất trong một mảng:
function findUniqueElements(arr) {
    let result = [];

    for (let num of arr) {
        let count = 0;

        // Kiểm tra số lần xuất hiện của phần tử trong mảng
        for (let x of arr) {
            if (num === x) {
                count++;
            }
        }

        // Nếu phần tử chỉ xuất hiện đúng 1 lần, thêm vào mảng kết quả
        if (count === 1) {
            result.push(num);
        }
    }

    return result;
}

let arr = [1, 2, 3, 1, 2, 4, 5];
let uniqueElements = findUniqueElements(arr);
console.log(uniqueElements);

