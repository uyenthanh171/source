//Bài 1 Khởi động tàu vũ trụ K9
function process() {
    const departurePlanet = "Trái Đất";
    const mission = "Khám phá Vũ trụ K6";
    const crews = ["Member A", "Member B", "Captain"];
    launchShip(crews);
    const distance = calculateDistance(1000, 24);
    console.log("Khoảng cách hành trình cần phải đi: " + distance + " km");
    const hexaTimeInSecond = convertTimeToHex(120);
    console.log("Thời gian tại hành tinh đích đến: ", hexaTimeInSecond);
    const decryptedCode = decryptCode("K6 Challenge");
    console.log("Đã giải mã thành công, và mật mã kho báu là: ", decryptedCode)
    returnToEarth();
}

// Bài 2 Du hành đến hành tinh bí ẩn
function launchShip(crews) {
    let crewsName = '';
    for (const crew of crews) {
        if (crewsName.length === 0) {
            crewsName = crew;
        } else {
            crewsName = `${crewsName}, ${crew}`;
        }
    }
    console.log("Chuẩn bị khởi động! Phi hành đoàn gồm: " + crewsName.trim() + " sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K6!");
}

// Bài 3 Hành tinh kì lạ
function calculateDistance(speed, time) {
    return speed * time;
}

// Bài 4 Khám phá kho báu
function convertTimeToHex(decimalTimeInSecond) {
    return decimalTimeInSecond.toString(16);
}

// Bài 5 Trở về Trái Đất
function decryptCode(encryptedCode) {
    let decryptedString = '';
    for (const character of encryptedCode) {
        if (character === character.toLowerCase()) {
            decryptedString += character.toUpperCase();
        } else {
            decryptedString += character.toLowerCase();
        }
    }
    return decryptedString;
}

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
process();