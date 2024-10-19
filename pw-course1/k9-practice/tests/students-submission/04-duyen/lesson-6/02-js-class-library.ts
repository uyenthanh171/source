// Yêu cầu: 
// - Tạo một class Library chứa các thuộc tính: name, location, books (mảng các sách). 
// - Tạo một phương thức addBook để thêm sách vào thư viện. 
// - Tạo một phương thức findBook để tìm sách theo tiêu đề. 

export class Library {
    name: string;
    location: string;
    books: Book[];

    constructor(name: string, location: string, books: Book[]) {
        this.name = name;
        this.location = location;
        this.books = books;
    };

    //phương thức addBook để thêm sách vào thư viện
    addBook(book: Book) {
        this.books.push(book);
    };

    //phương thức findBook để tìm sách theo tiêu đề
    findBook(title: string) {
        const resultSearch = this.books.filter(book => { //tìm kiếm tương đối trả về list book chứa keywork search
            if (book.title.includes(title)) {
                return true;
            } else {
                return false;
            }
        });
        return resultSearch;
    };
};
export class Book {
    title: string;

    constructor(title: string) {
        this.title = title;
    };
};

const book1 = new Book("Truyện Kiều");
const bookList = [book1];
const library1 = new Library("Thư viện 1", "Hà nội", bookList);
library1.addBook(new Book("Đắc Nhân Tâm"));
console.log(library1);
const resultSearch = library1.findBook("Tâm");
console.log(resultSearch);
