// // Bài 1: 
const departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ K9";

const crew = ["Khánh An", "Khanh Đinh", "Lan Anh", "Lê Long", "Minh Trang",
    "Nguyễn Duyên", "Thu Thủy", "Tuấn Phạm",
    "Uyên Thanh", "Dương Thoại", "Trường Lâm"];

function launchShip(crew) {

    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join(", ")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K9!`;
}

console.log(launchShip(crew));

// //Bài 2: 
function calculateDistance(speed, time) {
    return speed * time;
}

const speed = 1000;
const time = 24;

if (speed < 0 || time < 0) {
    return console.log("Giá trị Speed và Time phải >= 0");
}

const distance = calculateDistance(speed, time);

console.log(`Khoảng cách đến hành tinh bí ẩn: ${distance} km`);

//Bài 3:
function convertTimeToHex(time) {
    return time.toString(16);
}

const result = convertTimeToHex(120);

console.log(`Thời gian chuyển đổi sang hệ thập lục phân: ${result}`);


//Bài 4: 
function decryptCode(code) {
    let key = "";
    for (let c in code) {
        let str = code[c].toString();
        if (str === str.toLowerCase()) {
            key += str.toUpperCase();
        } else {
            key += str.toLowerCase();
        }
    }
    return key;
}

let key = decryptCode("K9 Challenge");

console.log(key);

//Bài 5: 
function returnToEarth() {
    console.log(`Chuẩn bị trở về Trái Đất!`);
}

returnToEarth();