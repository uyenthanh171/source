class Order {
    orderId: string;
    customerName: string;
    totalAmount: number;
    items: { name: string, price: number, amount: number, discount: number }[];

    constructor(orderId: string, customerName: string, items: { name: string, price: number, amount: number, discount: number }[], totalAmount: number = 0) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items;
        this.totalAmount = totalAmount;
    }

    addItem(newItem: { name: string, price: number, amount: number, discount: number }) {
        this.items.push(newItem);
    }

    calculateTotal() {
        const totalPrice = this.items.reduce((acc, item) => {
            const unitTotal = item.price * item.amount * ((100 - item.discount) / 100);
            return acc + unitTotal;
        }, 0);
        console.log(`totalPrice = ${totalPrice}`);
        this.totalAmount = this.items.reduce((acc, item) => acc + item.amount, 0);
        console.log(`totalAmount = ${this.totalAmount}`);
    }
}

const orderItems = [
    { name: "Product 1", price: 10, amount: 2, discount: 0 },
    { name: "Product 2", price: 15, amount: 1, discount: 0 },
    { name: "Product 3", price: 15, amount: 1, discount: 0 },
];

const order = new Order("0001", "K9", orderItems);
order.addItem({ name: "Product 4", price: 20, amount: 1, discount: 0 });
order.calculateTotal();


// Cach2 
class Product {
    name: string;
    price: number;
    amount: number;
    discount: number;

    constructor(name: string, price: number, amount: number, discount: number) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.discount = discount;
    }
}

const product1 = new Product("Product1", 50, 1, 0);
console.log(product1);