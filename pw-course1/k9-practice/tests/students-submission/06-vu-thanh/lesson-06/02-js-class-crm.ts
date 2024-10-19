class Customer {
    id: number;
    name: string;
    email: string;
    phone: number;

    constructor(id: number, name: string, email: string, phone: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone
    }

    displayInfor(): void {
        console.log(`id: ${this.id}, name: ${this.name}, email: ${this.email}, phone: ${this.phone}`)
    }

    updateEmail(NewEmail: string) {
        if (NewEmail) {
            this.email = NewEmail;
            console.log(`KH được cập nhật email mới là ${this.email}`);
        } else {
            console.log("Email của KH không đủ điều kiện để cập nhật");
        }
    }
}
const Customer1 = new Customer(1, "John", "John@gmail.com", 78976546);
Customer1.displayInfor();
Customer1.updateEmail("johnd@gmail.com");
Customer1.updateEmail("");