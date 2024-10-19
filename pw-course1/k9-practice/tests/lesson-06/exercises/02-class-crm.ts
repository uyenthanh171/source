class Customer {
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
        console.log(`Thông tin khách hàng: Mã khách hàng: ${this.id}, Tên khách hàng: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`);
    };
    updateEmail(newEmail: string) {
        this.email = newEmail;
        console.log(`Email update: ${this.email}`)
    };
};

const firstCustomer = new Customer('K9', 'Playwright VN', 'playwrightvn@gmail.com', '12345678');

firstCustomer.displayInfo();
firstCustomer.updateEmail('playwrightvietnam@gmail.com');