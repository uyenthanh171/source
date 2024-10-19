// 1. Khởi động tàu vũ trụ K9
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K9";
let crew = ["Tuan", "Trang", "Thuy", "Thanh", "Khanh", "Duyen", "Lan Anh", "Lam", "Khanh", "Thoai", "Long"];
console.log(crew.toString());

// Viết hàm lanchShip()
function launchShip(crew) {
    let listMember = "";

    for (let i = 0; i < crew.length; i++) {
        if (i == crew.length - 1) {
            listMember += crew[i] + " ";
        } else {
            listMember += crew[i] + ", ";
        }
    }

    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${listMember}sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}

// Kết nối với trung tâm điều khiển
console.log(launchShip(crew));

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    let distance = speed * time;
    return distance;
}

let distance = calculateDistance(1000, 24);
console.log(`Khoảng cách là: ${distance} km`);

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    return time.toString(16);
}

console.log(`Thời gian trên hành tinh này là: ${convertTimeToHex(120)}`);

// 4. Khám phá kho báu
function decryptCode(code) {
    let result = "";
    
    for (let i = 0; i < code.length; i++) {
        if (code[i] === code[i].toUpperCase()) {
            result += code[i].toLowerCase(); // code[i] = K => result += "K" -> "k"
        } else {
            result += code[i].toUpperCase(); // code[i] = a => result += "a" -> "A"
        }
    }
    return result;
}

console.log(decryptCode("K9 Challenge"));

// 5. Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();


