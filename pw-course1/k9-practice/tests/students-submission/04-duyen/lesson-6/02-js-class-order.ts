// Yêu cấu:
// - Tạo một class Order chứa các thuộc tính: orderId, customerName, items (mảng các sản phẩm), totalAmount. 
// - Sản phẩm bao gồm các thuộc tính: name, price, amount, discount 
// - Tạo một phương thức addItem để thêm sản phẩm vào đơn hàng. 
// - Tạo một phương thức calculateTotal để tính tổng số tiền của đơn hàng. 

export class Order {
    orderId: number;
    customerName: String;
    items: OrderItem[];
    totalAmount: number;

    constructor(orderId: number, customerName: String, items: OrderItem[]) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items;
    };

    //phương thức addItem để thêm sản phẩm vào đơn hàng
    addItem(item: OrderItem) {
        this.items.push(item);
    };

    //phương thức phương thức calculateLineAmount để tính giá trị của các lineitem trong đơn
    calculateLineAmount(item: OrderItem) {
        let lineAmount = item.amount - item.discount;
        return lineAmount > 0 ? lineAmount : 0;
    };

    //phương thức calculateTotal để tính tổng số tiền của đơn hàng
    calculateTotal() {
        let totalAmount = 0;
        this.items.forEach(item => {
            let lineAmount = this.calculateLineAmount(item);
            totalAmount += lineAmount;
        })
        this.totalAmount = totalAmount;
    };
};

export class OrderItem {
    name: string;
    price: number;
    amount: number;
    discount: number;

    constructor(name: string, price: number, amount: number, discount: number) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.discount = discount;
    };
};
const lineItem1 = new OrderItem("SP1", 10000, 20000, 2000);
const lineItem2 = new OrderItem("SP2", 20000, 50000, 5000);
const orderItems = [lineItem1, lineItem2];
const order = new Order(1, "Duyên", orderItems);
order.addItem(new OrderItem("SP3", 10000, 20000, 20000))
order.calculateTotal();
console.log(order);



