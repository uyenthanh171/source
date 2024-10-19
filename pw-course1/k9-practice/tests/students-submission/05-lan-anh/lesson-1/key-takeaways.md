# Version control system
### 1. Khái niệm 
- Version Control System (VCS): Hệ thống quản lý các phiên bản
### 2. Phân loại VCS:
- Local: lưu ở máy cá nhân
- Centralize: lưu ở một máy chủ tập trung
- Distributed: lưu ở nhiều
máy khác nhau (VD:Git)

# Git
### 1. Tổng quan về Git 
- Git được viết bởi Linus Torvalds, cha đẻ của Linux
- Git là từ viết sai chính
tả (có chủ đích) của get, do get đã được dùng rồi
- Dùng git do nhu cầu quản lý phiên bản và làm việc giữa nhiều người với nhau
### 2. So sánh Git & VCS
- Tính năng: Dễ dùng, nhiều tính năng vượt trội
- Chi phí: Free
- Phổ biến: Nhiều công ty sử dụng 
### 3. So sánh Git & Github 
#### **Git**
- Là một phần mềm
- Cài trên máy của bạn
- Là một commandline tool
- Là công cụ quản lý phiên bản,đưa file vào Git repository
- Có các tính năng của Version Control System
#### **GitHub**
- Là một dịch vụ web
- Host trên website
- Là công cụ có giao diện
- Là nơi để upload Git repository lên
- Có các tính năng của Version Control System và một số tính năng khác
### 4. Git - three states
- Working Directory: Các file mới hoặc file có thay đổi
- Staging Area: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
- Repository: Các commit
(phiên bản) 
### 5. Các lệnh thường dùng
- Add file vào Staging: git add <file 1> <file 2>
- Add tất cả file vào Staging: git add .
- Commit: git commit -m "massage" (VD: git commit -m"feat: add file test 1)
- Khởi tạo thư mục được quản lý bởi Git: git init
- Cấu hình git:
- **Cho 1 repo**
 - *git config user.name "<name">*
- *git config user.email "<email">*
- **Cho toàn bộ máy tính**
- *git config --global user.name “user”*
- *git config --global user.email “email”*
- Xem trạng thái file: git status (Màu xanh: vùng staging; Màu đỏ: vùng working directory)
- Kiểm tra lịch sử commit: git log
- Convention = Quy tắc: < type >: <short_description>

# Javascript
### 1. Tổng quan về Javascript 
- Là một ngôn ngữ lập trình
- Javascript
chạy được do browser engine support
- Chạy được trên máy tính không cần trình
duyệt, cần Node Js
- Run-time
### 2. Các câu lệnh
- Ghi vào dòng: console.log  (“HelloWorld!”);
- Chạy lệnh (chạy bằng Terminal): node < path > (VD: node lesson-2/javascript/01-hello.js)
### 3. Variable
- Variable = biến, dùng để lưu trữ giá trị,
có thể thay đổi giá trị được.
- Khai báo: var <tên biến> = <giá trị>;
- Khai báo: let <tên biến> = <giá trị>;
- --> *Var: phạm vi toàn cục (global), let: phạm vi trong cặp ngoặc {}*
- Gán lại: <tên biến> = <giá trị>;
### 4. Constant
- Constant = hằng số, Dùng để khai báo các giá trị không thể thay đổi. 
- Khai báo: const < name > = < value >;
- --> *Không gán lại được với hằng số*
### 5. Data type 
- Có 8 kiểu dữ liệu: String Number, Bigint, Boolean, Undefined, Null, Symbol, Object.
### 6. Comparison operator
- Dùng để so sánh giá trị giữa 2 biến với nhau. Kết quả sẽ trả về Boolean (true hoặc false).
- So sánh hơn kém: >, <
- So sánh bằng: ==, ===,!=, !==, >=, <=
### 7. Unary operator
- Toán tử một ngôi dùng để tăng hoặc giảm giá trị
- i++ bằng với i=i+1
- i-- bằng với i=i-1
### 8. Arithmetic operator
- Toán tử
số học: Dùng tính toán giá trị biểu thức
- Các phép toán: +, -, *, /
### 9. Conditional
- Conditional = điều kiện, dùng để kiểm tra có nên thực hiện một đoạn logic không
- Cú pháp: if (<điều kiện>) { // code }. Nếu
điều kiện đúng, sẽ chạy đoạn code
### 10. Loops
- Dùng để thực hiện một đoạn logic một
số lần nhất định
- Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {
// code }