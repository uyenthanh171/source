export class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`)
    }

    updateEmail(newEmail) {
        this.email = newEmail;
        console.log(`Email update: ${this.email}`)
    }
};

const thoai = new Customer(1, "Thoai", "thoaiaust@gmail.com", "0949572002");
thoai.displayInfo();

thoai.updateEmail("thoaiau15@gmail.com");
thoai.displayInfo();