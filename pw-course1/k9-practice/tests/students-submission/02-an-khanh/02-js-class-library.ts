export class Library {
    name: string;
    location: string;
    books: string[];

    constructor(name: string, location: string, books: string[] = []) {
        this.name = name;
        this.location = location;
        this.books = books;
    };

    addBook(newBook: string) {
        this.books.push(newBook);
    }

    findBook(book: string) {
        return this.books.filter(item => item.includes(book));
    }
}

const myLibrary = new Library("Thư viện 1", "Hồ Chí Minh",["Sách 1", "Sách 2", "Sách 333", "Sách 33", "Sách 3", "Sách 4", "Sách 5"]);
myLibrary.addBook("Sách 6");
console.log(myLibrary.books)
console.log(myLibrary.findBook("Sách 3"));