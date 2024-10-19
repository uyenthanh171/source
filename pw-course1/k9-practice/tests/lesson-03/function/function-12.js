/*
Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
*/

function reportWeather(temperature) {
    let weatherCondition;

    if (temperature >= 30) {
        weatherCondition = "Nóng";
    } else if (temperature >= 20 && temperature < 30) {
        weatherCondition = "Mát";
    } else {
        weatherCondition = "Lạnh";
    }

    console.log(`Với nhiệt độ là ${temperature} độ C, trạng thái thời tiết là: ${weatherCondition}.`);
}

reportWeather(35);
reportWeather(25);
reportWeather(15);