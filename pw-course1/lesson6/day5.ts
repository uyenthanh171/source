// Bài: Quản lí danh sách sản phẩm
type Product = {
    name: string,
    price: number,
}

interface ProductList {
    data: Product[],
    addProduct(name: string, price: number): void,
    removeProduct(name: string): void,
    calculateTotal(): number,
}

const ProductList: ProductList = {
    data: [],
    addProduct(name: string, price: number) {
        this.data.push({
            name: name,
            price: price,
        });
    },
    removeProduct(name: string) {
        this.data = this.data.filter(product => product.name !== name)
    },
    calculateTotal() {
        let total = 0
        for (let i = 0; i < this.data.length; i++) {
            total += this.data[i].price
        }
        return total;
    }
}
//Thêm sản phẩm vào productlist
ProductList.addProduct("Táo", 10);
ProductList.addProduct("Cam", 9);
ProductList.addProduct("Nho", 9);
ProductList.addProduct("Lê", 12);
console.log(ProductList)

//Xóa sản phẩm ra khỏi productlist
ProductList.removeProduct("Táo");
console.log(ProductList)

//Tính tổng của productlist sau khi thêm và xóa
console.log(ProductList.calculateTotal())
