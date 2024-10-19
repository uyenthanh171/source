// Cách Thoại làm
export class Library {
    name: string;
    location: string;
    books: {
        id: number;
        name: string;
    }[];

    constructor(name: string, location: string, books: { id: number, name: string }[]) {
        this.name = name;
        this.location = location;
        this.books = books
    }

    addBook(id: number, name: string) {
        this.books.push({ id, name });
    }

    findBook(name: string) {
        return this.books.find(book => book.name.includes(name));
    }
}

let books = [
    { id: 1, name: "Văn Học Việt Nam" },
    { id: 2, name: "Toán Học Việt Nam" }
];
const ThuVien = new Library("Thư Viện Thành Phố", "16 Trần Hưng Đạo", books);
console.log(ThuVien);

const timKiem = ThuVien.findBook("Văn Học");
console.log(timKiem);

// Sửa bài
class Library1 {
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
        if (this.books.some(bookname => bookname === findName)) {
            console.log(`Tên sách: ${findName}`);
        } else {
            console.log(`Không thấy sách: ${findName}`);
        }
    }
}

const newLibrary1 = new Library1("Thư Viện Thành Phố", "1 Phú Lợi");
newLibrary1.addBook("Toán Cao Cấp 1");
newLibrary1.addBook("Văn Học 1");
newLibrary1.findBook("Toán Cao Cấp 1")
