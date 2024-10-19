//Câu 1:
let car = {
    "make": "toyota",
    "model" : "Corolla",
    "year" : 2021,
}
console.log(car.year);

//Câu 2:
let person = {
    "name" : "NTL",
    "adrress" : {
        "street": "Trường Sơn",
        "city": "Ho Chi Minh" ,
        "country": "Viet Nam",
    },
}

console.log(person.adrress.street);

//Câu 3:
let student = {
    "name" : "NTL",
    "grades": {
        "math" : 8,
        "enlgish" : 7,
    } 
}
console.log(student["grades"]["math"]); 

//Câu 4:
let products = {
    "banh": 5,
    "keo": 6,
    "tay": 7,
};

for(let items in product){
    console.log(items+": "+product[items]);
}

//Câu 5:
let settings = {
    "volume":100,
    "brightness":100,
}

settings.volume =  70;

console.log(settings);

//Câu 6:
let bike = {};
bike.color = "grey";
console.log(bike);

//Câu 7:
let employee = {
    "name": "NTL",
    "age" : 24,
}
delete employee.age;

console.log(employee);

//Câu 8:
let school = {
    "classA": ["An","Bình","Châu"],
        
    "classB": ["Đào","Hương","Giang"],
}

for(let student in school){
    console.log(school[student]);
}
