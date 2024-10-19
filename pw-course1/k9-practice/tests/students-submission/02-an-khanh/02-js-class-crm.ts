export class Customer {
    id: string;
    name: string;
    email: string;
    phone: string;

    constructor(id: string, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayInfo() {
        return `Customer ${this.id} has name: ${this.name}, email: ${this.email}, phone: ${this.phone}`;
    }

    updateEmail(newEmail: string) {
       this.email = newEmail; 
    }
}

const khanh = new Customer("123","Khanh", "khanh@gmail.com", "0123 456 789");
console.log(khanh.displayInfo());
khanh.updateEmail("newKhanh@gmail.com");
console.log(khanh.displayInfo());