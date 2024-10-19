/*
Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi.
Biết công thức chuyển đổi:
Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
Từ độ F sang độ C: (độ F - 32) * 5 / 9;
*/

let temperature = 100;
let typeOfTemperature = "F"; // "C" | "F"
function changeTypeOfTemperature(temperature, typeOfTemperature) {
    if (typeOfTemperature === "C") {
        return temperature * 9 / 5 + 32;
    }

    if (typeOfTemperature === "F") {
        return (temperature - 32) * 5 / 9;
    }
}

const result = changeTypeOfTemperature(temperature, typeOfTemperature);
console.log(`Gia tri chuyen doi: ${result}`);
