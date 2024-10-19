class Library {
    name: string; 
    location: string;
    books: string[];

    constructor(name: string, location: string, books: string[] = []) {
        this.name = name;
        this.location = location;
        this.books = books;
    }

    addBook(newBook: string) {
        this.books.push(newBook);
        console.log(this.books);
    }

    findBook(findName: string) {
        const foundBook = this.books;
        if (foundBook.some(bookname => bookname === findName)) {
            console.log(`Tìm thấy sách: ${findName}`);
        } else {
            console.log(`Không tìm thấy sách ${findName}`);
        }
    }
}

const newLibrary = new Library("Thư viện nhà em", "Nguyễn Xiển");
newLibrary.addBook("The Alchemist");
newLibrary.addBook("Kafka on the Shore");
newLibrary.addBook("Doraemon");
newLibrary.findBook("Doraemon");