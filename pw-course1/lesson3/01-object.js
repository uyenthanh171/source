//1
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
};
console.log(car.year);

//2
let person = {
    name: 'UyenThanh',
    address: {
        street: 'Do Quang',
        city: 'Da Nang',
        country: 'Viet Nam'
    }
};
console.log(person.address.street);

//3 
let student = {
    name: 'Uyen Thanh',
    grades: {
        math: 100,
        english: 10
    }
};
console.log(student.grades['math']);

//4
let product = {
    iphone: 12000,
    ipad: 15000,
    macbook: 20000,
    airpods: 2000 
};

for(const key in product){
    console.log(key+": "+ product[key]);};
     
// //5
let settings = {
    volume: 50,
    brightness: 100
};

settings.volume = 69; //Thay đổi value of key
console.log(settings);

//6
let bike = {
    make: 'Japan',
    price: 45000
};
bike['color']= 'red'; //Thêm key vào object
console.log(bike)

//7
let employee = {
    name: 'Ivan',
    age: 50,
    department: 'QA' //Xóa key ra khỏi object
};
delete employee.age;
console.log(employee)

//8
let school = {
    classA: ['An','Binh','Chau'],
    classB: ['Dao', 'Huong', 'Giang']
};
console.log(school);