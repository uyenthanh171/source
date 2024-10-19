// Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
let person = {
    name: "Nga",
    address: {
        street: "Truong Chinh",
        city: "Ha Noi",
        country: "Viet Nam"
    }
}

console.log(person.address["street"]);