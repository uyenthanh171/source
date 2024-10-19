// class Product {
//     name: string; 
//     price: number;
//     amount: number;
//     discount: number;

//     constructor(name: string, price: number, amount: number, discount:number) {
//         this.name = name;
//         this.price = price;
//         this.amount = amount;
//         this.discount = discount;
//     }
// }
class Order {
    orderId: number;
    customerName: string;
    items: { name: string, price: number, amount: number, discount: number }[];
    totalAmount: number;

    constructor(orderId: number, customerName: string, items: { name: string, price: number, amount: number, discount: number }[], totalAmount: number) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items
        this.totalAmount = totalAmount;
    }

    addItems(newItem: { name: string, price: number, amount: number, discount: number }) {
        this.items.push(newItem)
        console.log(newOrder);
    }

    calculateTotal() {
        const totalPrice = this.items.reduce((accumulator, items) => {
            const unitAmount = items.price * items.amount * ((100 - items.discount) / 100)
            return accumulator + unitAmount;
        }, 0);
        console.log("Thành tiền của đơn hàng là:", totalPrice)
    }
}
const orderItems = [
    { name: "A", price: 12, amount: 3, discount: 0 },
    { name: "B", price: 13, amount: 1, discount: 0 },
    { name: "C", price: 9, amount: 1, discount: 0 },
]

const newOrder = new Order(22, "Thanh", orderItems, 12);
newOrder.addItems({ name: "H", price: 15, amount: 1, discount: 0 });
newOrder.calculateTotal();