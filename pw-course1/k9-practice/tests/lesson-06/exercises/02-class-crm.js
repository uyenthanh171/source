var Customer = /** @class */ (function () {
    function Customer(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    Customer.prototype.displayInfo = function () {
        console.log("Th\u00F4ng tin kh\u00E1ch h\u00E0ng: M\u00E3 kh\u00E1ch h\u00E0ng: ".concat(this.id, ", T\u00EAn kh\u00E1ch h\u00E0ng: ").concat(this.name, ", Email: ").concat(this.email, ", Phone: ").concat(this.phone));
    };
    ;
    Customer.prototype.updateEmail = function (newEmail) {
        this.email = newEmail;
        console.log("Email update: ".concat(this.email));
    };
    ;
    return Customer;
}());
;
var firstCustomer = new Customer('K9', 'Playwright VN', 'playwrightvn@gmail.com', '12345678');
firstCustomer.displayInfo();
firstCustomer.updateEmail('playwrightvietnam@gmail.com');
