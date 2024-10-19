// bài 1
{
    const departurePlanet = "Trái Đất";
    const mission = "Khám phá vũ trụ K6";
    const crew = ["Thanh", "Tuấn", "Thoai", "Anh", "Thúy"];

    function LaunchShip(crew) {
        return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join(
            ", "
        )} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K6!`;
    }

    console.log(LaunchShip(crew));
}

// bài 2
{
    function calculateDistance(speed, time) {
        return speed * time;
    }

    const speed = 1000;
    const time = 24;
    const distance = calculateDistance(speed, time);
    console.log(`Khoảng cách đến hành tinh bí ẩn là ${ distance } km.`);
}

// bài 3
{
    function convertTimeToHex(time) {
        return time.toString(16);
    }

    const time = 120;
    const hexTime = convertTimeToHex(time);
    console.log(`Thời gian 120 giây trong hệ thập lục phân là: ${ hexTime }`);
}

// bài 4
{
    function decryptCode(code) {
        let decrypted = "";

        for (let i = 0; i < code.length; i++) {
            let char = code[i];

            if (char === char.toLowerCase()) {
                decrypted += char.toUpperCase();
            } else {
                decrypted += char.toLowerCase();
            }
        }

        return decrypted;
    }

    const code = "K6 Challenge";
    const decryptedCode = decryptCode(code);
    console.log(`Mật mã sau khi giải mã: ${ decryptedCode }`);
}

// bài 5
{
    function returnToEarth() {
        console.log("Chuẩn bị trở về Trái Đất!");
    }

    returnToEarth();
}