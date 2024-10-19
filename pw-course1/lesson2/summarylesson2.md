# Summary lesson 2
## Git vs Git hub

### Git:
- Git là một phần mềm
- Được cài trên máy
- Commandline tool
- Là công cụ quản lí phiên bản, đưa file git vào repo
- Có các tính năng VSC

### Git hub:
- Là một dịch vụ web
- Host trên website
- Là công cụ giao diện
- Là nơi upload git repo
- Có các tính năng VSC và một số tính năng khác

### Git three states
- Working directory: Các file mới hoặc các file thay đổi
- Stagging area: Các file đưa vào vùng chuẩn bị commit
- Repository: Các commit

### Git key takeaways
#### Lệnh khởi cấu hình
Cấu hình cho git cho 1 repo:
- git config user.name “<name>”
- git config user.email “<email>”

Cấu hình cho toàn bộ máy tính
- git config --global user.name
“user”
- git config --global user.email
“email”

#### Lệnh thêm file vào vùng stagging
Thêm file vào vùng staging:
- Thêm 1 file: git add <file_name>
- Thêm toàn bộ: git add .

#### Lệnh xem trạng thái file
Xem trạng thái file: git status
- File màu xanh: vùng staging
- File màu đỏ: vùng working
directory

#### Commit
- Commit: git commit -m”message”
- Kiểm tra lịch sử commit: git log

### Commit convention
<type>: <short_description>


## Javascript
### Variable (biến)
Variable = biến, dùng để lưu trữ giá trị, có thể thay đổi giá trị được.

var khai báo lại được, let thì không

var item1 = ‘a’;

var item1 = ‘c’; // OK

let item2 = ‘b’;

let item2 = ‘d’; // error

Phạm vi của biến
- var: phạm vi toàn cục (global)
- let: phạm vi trong cặp ngoặc {}

### Constant (hằng số)
Constant = hằng số. Dùng để khai báo các giá trị không thể thay đổi.

Khi nào dùng var/let, khi nào dùng const?
- var/let: khi biến sẽ gán lại
- const: khi biến không gán lại
- Thường sẽ dùng let và const, KHÔNG dùng var

### Data type (kiểu dữ liệu)
String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object.

### Unary operator (toán tử một ngôi)
Dùng để tăng hoặc giảm giá trị
- i++ bằng với i=i+1
- i-- bằng với i=i-1

### Arithmetic operator (toán tử số học)
Các phép toán: +, -, *, /

### Conditional (điều kiện, dùng để kiểm tra có nên thực hiện một đoạn logic không)
if (<điều kiện>) { // code }.

### Loops (vòng lặp, Dùng để thực hiện một đoạn logic một số lần nhất định)
for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {
    // code }

### Format code
- Mac: Option + Shift + F
- Window: Alt + Shift + F





