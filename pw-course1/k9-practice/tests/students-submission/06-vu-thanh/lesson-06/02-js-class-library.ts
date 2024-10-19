class library {
    name: string;
    location: string;
    book: { id: number, nameBook: string, establish: string }[];

    constructor(name: string, location: string, book: { id: number, nameBook: string, establish: string }[]) {
        this.name = name;
        this.location = location;
        this.book = book;
    }
    addBook(newbook: { id: number, nameBook: string, establish: string }) {
        this.book.push(newbook);
        console.log(addedlibrary);
    }
    findBook(findnameBook: { id: number, nameBook: string, establish: string }) {
        const foundBook = this.book;
        if (foundBook.some(bookname => bookname.id === findnameBook.id || bookname.nameBook === findnameBook.nameBook))
            console.log(`Tìm thấy sách ${findnameBook.nameBook}`);
        else {
            console.log(`Không tìm thấy sách ${findnameBook.nameBook}`);
        }
    }
}
const bookdetails = [
    { id: 1, nameBook: "Conan", establish: "Nhật" }
]
const addedlibrary = new library("Thư viện ĐN", "Đà Nẵng", bookdetails)
addedlibrary.addBook({ id: 1, nameBook: "Doraemon", establish: "Việt Nam" })
console.log(library)
addedlibrary.findBook({ id: 2, nameBook: "Conan", establish: "Nhật" });

