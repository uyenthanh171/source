export class Order {
    orderId: string;
    customerName: string;
    // items: {
    //     name: string;
    //     price: number;
    //     amount: number;
    //     discount: number;
    // }[];
    items: Product[]; //cach 2
    totalAmount: number;

    // constructor(orderId: string, customerName: string, items: { name: string, price: number, amount: number, discount: number }[] = []) {
    constructor(orderId: string, customerName: string, items: Product[] = []) { //cach 2
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items;
        this.totalAmount = this.calculateTotal();
    };

    addItem(item: { name: string, price: number, amount: number, discount: number }) {
        this.items.push(item);
        this.totalAmount = this.calculateTotal();
    }


    calculateTotal() {
        return this.items.reduce((total, item) => {
            const discountedPrice = item.price - (item.price * item.discount / 100);
            return total + (discountedPrice * item.amount);
        }, 0)
    }
}

const order = new Order('O1', 'Khanh', [
    { name: 'Sản phẩm A', price: 100, amount: 2, discount: 10 },
    { name: 'Sản phẩm B', price: 500, amount: 1, discount: 0 }
]);
console.log('Tổng số tiền đơn hàng:', order.totalAmount);

order.addItem({ name: 'Sản phẩm C', price: 200, amount: 5, discount: 5 });
console.log('Tổng số tiền đơn hàng sau khi thêm sản phẩm:', order.totalAmount);


//Cach 2
class Product {
    name: string;
    price: number;
    amount: number;
    discount: number;

    constructor(name: string, price: number, amount: number) {
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}