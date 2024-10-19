# Git

## Git clone

- Lấy dự án đã có sẵn (remote) về máy (local)
- Câu lệnh: git clone < url >
- Nếu muốn lấy dự án về nhưng mà đổi tên thành tên khác: git clone < url > < new-name >

## Git branch
- Tạo ra nhánh mới để thao tác không ảnh hưởng đến main/master
- Tạo branch mới: git branch < branch-name >
- Di chuyển vào branch: git checkout < branch-name >
- Tạo và di chuyển vào branch mới tạo: git checkout -b < branch-name >

## Git push
- Đưa code từ vùng Repository lên server
- Câu lệnh: git push < remote-name > < branch-name >

## Git pull
- Lấy dữ liệu về
- So sánh khác nhau giữa pull và clone:
    - pull: Chỉ lấy dữ liệu của nhánh đó về máy
    - clone: Lấy cả repo 

## Git merge request
- Gộp code từ một nhánh sang nhánh còn lại

## Git convention

### Đặt tên branch
- < type >/< short-decription >
    - type:
        - feat: tính năng mới
        - fix: sửa lỗi
        - conf: thay đổi cấu hình (config)
        - chore: các thay đổi “lặt vặt”: Xóa file không dùng, đổi tên file,...
    - short-description: Mục đích của branch được tạo ra
### Viết commit message
- < type >:< short-decription >
    - type:
        - feat: tính năng mới
        - fix: sửa lỗi
        - conf: thay đổi cấu hình (config)
        - chore: các thay đổi “lặt vặt”: Xóa file không dùng, đổi tên file,...
    - short-description: Mục đích của commit được tạo ra

# Javascript

## Utils functions

- Là các hàm tiện ích có sẵn
- Giúp xử lí code nhanh hơn

### String utils 

- **trim()** : Loại bỏ khoảng trắng ở đầu và cuối chuỗi

- **toLowerCase()** : Chuyển đổi các kí tự của chuỗi thành Thường

- **toUpperCase()** : Chuyển đổi các kí tự của chuỗi thành Hoa

- **includes()** : Kiểm tra xem chuỗi có phải chuỗi con hay k

        let arr = "abc" 
        arr.includes("ab") //true
        arr.includes("AB") //flase

- **replace()** : Thay thế 1 chuỗi bằng chuỗi khác

        let arr = arr.replace("searchValue", "replaceValua")
        searchValue không có thì giữ nguyên chuỗi

- **split()** : Chia một chuỗi thành 1 mảng chứa các chuỗi con dựa trên ký tự phân cách

        let arr = "abc dv";
        arr.split(" ");
        // [ 'abc', 'dv' ]

- **substring()** : Trả về 1 phần của chuỗi, bắt đầu từ inđex đc chỉ định hoặc đến cuối chuỗi

- **indexOf()** : Trả về vị trí xuất hiện đầu tiên của chuỗi, nếu k tìm thấy nó trả về -1

### Array utils
- **map** : Tạo ra 1 mảng mới dựa trên từng phần tử của mảng gốc

- **filter()** : Tạo ra 1 mảng mới chứa các phần tử thỏa mãn điều kiện trong hàm

- **find()** : Trả về giá trị của phần tử đầu tiên của mảng thỏa mản điều kiện trong hàm

- **reduce()** : Trả về 1 giá trị duy nhất (từ trái qua phải)

- **some()** : Kiểm tra xem có ít nhất 1 phần tử trong mảng thỏa điều kiện trong mảng hay ko. Trả true/false

- **every()** : Kiểm tra tất cả các phần tử trong mảng có thỏa mãn ko. Trả true/false

- **push()** : Thêm 1 hoặc nhiều phần tử vào cuối mảng

- **shift()** : Xóa phần tử đầu tiên của mảng

- **sort()** : Sắp xếp theo thứ tự tăng/giảm

        numbers = [2, 3, 1, 4];
        numbers.sort((a,b) => a - b); // [1, 2, 3, 4];
        numbers.sort((a,b) => b - a); // [4, 3, 2, 1];

## Class

        export class K9ClassStudent {
            name: string; // thuộc tính = property
            age: number; 

            constructor(name: string, age: number) {
                this.name = name;
                this.age = age;
            }

            printInfo() { // phương thức = method
                // code
            }
        };