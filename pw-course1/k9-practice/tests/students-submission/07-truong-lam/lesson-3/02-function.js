//Câu 1: 
let w = 75;
let h = 1.75;


let BIM = w / (h * h);
let nhanXet = phanLoaiBMI(BIM);

function phanLoaiBMI(BMI) {
    if (BMI < 18.5) {
        return "Thiếu cân";
    } else if (BMI < 25) {
        return "Bình thường";
    } else if (BMI < 30) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
}




//Câu 2: 
function chuyenDoiNhietDo(value, type) {
    if (type === 'C') {
        return (value * 9 / 5) + 32;
    } else if (type === 'F') {
        return (value - 32) * 5 / 9;
    } else {
        return "Không tìm thấy loại nhiệt độ";
    }
}

console.log(chuyenDoiNhietDo(25, 'C'));
console.log(chuyenDoiNhietDo(77, 'F'));



//Câu 3: 
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 19];

function sumArrays(arr) {
    let sum = 0;
    for (let index in arr) {
        sum += arr[index];
    }
    return sum;
}
console.log(sumArrays(numbers));



//Câu 4: dựa vào mảng numbers ở câu 3 để làm

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    let squareRoot = Math.sqrt(n);

    for (let i = 2; i <= squareRoot; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
        console.log(numbers[i]);
    }
}



//Câu 5: 
const users = [
    {name: "A", email: "a@gmail.com"},
    {name: "B", email: "b@gmail.com"},
    {name: "C", email: "c@gmail.com"},
]

function updateEmail(name, newEmail){
    for(let i = 0;i<users.length;i++){
        if(users[i].name===name){
            users[i].email = newEmail;
            return console.log(`Email của ${name} đã được cập nhật thành ${newEmail}.`);
           
        }
        
    }
    console.log(`Không tìm thấy người dùng có tên ${name}.`);
}


updateEmail("A","ab@gmail.com");



//Câu 6: 
const students = [
    { "name": "A", "score": 6 },
    { "name": "B", "score": 7 },
    { "name": "C", "score": 8 },

]

function averageScore(students) {

    let average = 0;
    for (let i = 0; i < students.length; i++) {
        average += students[i].score;
    }
    average = average / students.length;
    return average;
}

let average = averageScore(students);

console.log(average);



//Câu 7: 
const items = [
    { "name": "product 1", "price": 100 },
    { "name": "product 2", "price": 0 },
    { "name": "product 3", "price": 80 },

]

function verifyItems(items) {
    for (let i = 0; i < items.length; i++) {
        if(items[i].price <= 0){
            return false;
        } 
    }
    return true;
}

let isValid = verifyItems(items);

console.log(isValid);



//Câu 8: 
let hour = 21;

if (hour < 0 || hour > 24) {
    console.log("Giờ không hợp lệ")
} else {
    function isOpen(h) {
        if (h >= 9 && h <= 21) {
            return "Open";
        } else {
            return "Close";
        }
    }
    console.log(isOpen(hour));
}



//Câu 9: 
function ticketPrice(tuoi) {
    if (tuoi < 0) {
        console.log("Tuổi không hợp lệ");
    } else if (tuoi <= 5) {
        console.log("Em bé: Miễn Phí");
    } else if (tuoi >= 6 && tuoi <= 17) {
        console.log("Tuổi của bạn là: " + tuoi + "\nGiá vé là 50k");
    } else {
        console.log("Tuổi của bạn là: " + tuoi + "\nGiá vé là 100k");
    }
}

ticketPrice(200);



//Câu 10:
let m = 11;

function monthly(m) {


    switch (m) {
        case 1:
            console.log("Tháng 1");
            break;
        case 2:
            console.log("Tháng 2");
            break;
        case 3:
            console.log("Tháng 3");
            break;
        case 4:
            console.log("Tháng 4");
            break;
        case 5:
            console.log("Tháng 5");
            break;
        case 6:
            console.log("Tháng 6");
            break;
        case 7:
            console.log("Tháng 7");
            break;
        case 8:
            console.log("Tháng 8");
            break;
        case 9:
            console.log("Tháng 9");
            break;
        case 10:
            console.log("Tháng 10");
            break;
        case 11:
            console.log("Tháng 11");
            break;
        case 12:
            console.log("Tháng 12");
            break;
        default:
            console.log("Vui lòng nhập tháng hợp lệ từ tháng 1 đến tháng 12");
    }

}

let month = monthly(m);


//Câu 11: 
function xetLoai(diemTB) {
    if (diemTB < 0 || diemTB > 10) {
        console.log("Vui lòng nhập điểm hợp lý")
    } else
        if (diemTB < 5) {
            console.log("Yếu");
        } else if (diemTB >= 5 && diemTB < 6.5) {
            console.log("Trung Bình");
        } else if (diemTB >= 6.5 && diemTB < 8) {
            console.log("Khá");
        } else
            console.log("Giỏi");

}
xetLoai(8);

//Câu 12: 
function nhietDo(temp) {
    if (temp >= 30) {
        console.log("Nhiệt độ " + temp + "°C: Nóng")
    } else if (temp < 30 && temp >= 20) {
        console.log("Nhiệt độ " + temp + "°C: Mát")
    } else {
        console.log("Nhiệt độ " + temp + "°C: Lạnh")
    }
}

nhietDo(23);