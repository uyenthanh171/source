var Library = /** @class */ (function () {
    function Library(name, location, books) {
        if (books === void 0) { books = []; }
        this.name = name;
        this.location = location;
        this.books = books;
    }
    Library.prototype.addBook = function (newBook) {
        this.books.push(newBook);
        console.log(this.books);
    };
    Library.prototype.findBook = function (findName) {
        var foundBook = this.books;
        if (foundBook.some(function (bookname) { return bookname === findName; })) {
            console.log("T\u00ECm th\u1EA5y s\u00E1ch: ".concat(findName));
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y s\u00E1ch ".concat(findName));
        }
    };
    return Library;
}());
var newLibrary = new Library("Thư viện nhà em", "Nguyễn Xiển");
newLibrary.addBook("The Alchemist");
newLibrary.addBook("Kafka on the Shore");
newLibrary.addBook("Doraemon");
newLibrary.findBook("Doraemon");
