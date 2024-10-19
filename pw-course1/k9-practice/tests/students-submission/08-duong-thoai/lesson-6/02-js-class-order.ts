export class Order {
    orderId: number;
    customerName: string;
    items: {
        name: string,
        price: number,
        amount: number,
        discount: number,
    }[];
    totalAmount: number;

    constructor(orderId: number, customerName: string, items: { name: string, price: number, amount: number, discount: number }[]) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items;
        this.totalAmount = 0;
        this.calculateTotal();
    }

    addItem(newItem: {name: string, price: number, amount: number, discount: number}) {
        this.items.push(newItem);
    }

    calculateTotal() {
        this.totalAmount = this.items.reduce((total, item) => {
            return total + (item.price * item.amount - ((100-item.discount)/100));
        }, 0);
        console.log(this.totalAmount);

    }
}
let items = [
    { name: "Cá", price: 10, amount: 2, discount: 0 },
    { name: "Bò", price: 20, amount: 4, discount: 0 }
];

const Thoai = new Order(1, "Thoai", items);

console.log(Thoai);