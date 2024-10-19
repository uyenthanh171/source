// Yêu cầu: 
// - Tạo một class Customer chứa các thuộc tính: id, name, email, phone. - Tạo một phương thức displayInfo để hiển thị thông tin khách hàng. 
// - Tạo một phương thức updateEmail để cập nhật email của khách hàng. Phương thức nhận vào một tham số duy nhất là newEmail 

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
    };
    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`);
    };
    updateEmail(newEmail: string) {
        this.email = newEmail;
    }
};
const customer1 = new Customer(1, "Duyên", "duyennt1224@gmail.com", "0393123123");
customer1.displayInfo(); // output: ID: 1, Name: Duyên, Email: duyennt1224@gmail.com, Phone: 0393123123
customer1.updateEmail("newemail@gmail.com");
customer1.displayInfo(); // output: ID: 1, Name: Duyên, Email: newemail@gmail.com, Phone: 0393123123
