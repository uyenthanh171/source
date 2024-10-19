var Order = /** @class */ (function () {
    function Order(orderId, customerName, items, totalAmount) {
        if (totalAmount === void 0) { totalAmount = 0; }
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items;
        this.totalAmount = totalAmount;
    }
    Order.prototype.addItem = function (newItem) {
        this.items.push(newItem);
    };
    Order.prototype.calculateTotal = function () {
        var totalPrice = this.items.reduce(function (acc, item) {
            var unitTotal = item.price * item.amount * ((100 - item.discount) / 100);
            return acc + unitTotal;
        }, 0);
        console.log("totalPrice = ".concat(totalPrice));
        this.totalAmount = this.items.reduce(function (acc, item) { return acc + item.amount; }, 0);
        console.log("totalAmount = ".concat(this.totalAmount));
    };
    return Order;
}());
var orderItems = [
    { name: "Product 1", price: 10, amount: 2, discount: 0 },
    { name: "Product 2", price: 15, amount: 1, discount: 0 },
    { name: "Product 3", price: 15, amount: 1, discount: 0 },
];
var order = new Order("0001", "K9", orderItems);
order.addItem({ name: "Product 4", price: 20, amount: 1, discount: 0 });
order.calculateTotal();
// Cach2 
var Product = /** @class */ (function () {
    function Product(name, price, amount, discount) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.discount = discount;
    }
    return Product;
}());
var product1 = new Product("Product1", 50, 1, 0);
console.log(product1);
