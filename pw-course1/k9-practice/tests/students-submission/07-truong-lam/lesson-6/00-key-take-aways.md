# GIT
## Git: Clone
- Clone: Lấy dự án đã có sẵn (remote) về máy tính của bạn (local)
- Câu lệnh clone:

        git clone <url (link git hub)>

- Có thể thay đổi tên của thư mục đã clone về: 
        
        git clone <url> <new-name>

## Git: Branch (nhánh)
- Chia branch giúp làm việc code trở nên thuận tiện hơn

- git branch <branch_name> ***Tạo nhánh***
- git checkout <branch_name> ***chuyển sang nhánh***
- git checkout -b <branch_name> ***Tạo và chuyển nhánh***

## Git: Push = đưa code từ vùng repo lên server
- Đẩy toàn bộ thay đổi local repository lên remote repository
- Câu lệnh: 

        git push <remote_name> or <branch_name>

## Git: Pull = lấy dữ liệu về
- Pull vs Clone: 

        Clone: lấy cả repo về máy local
        Pull: chỉ lấy dữ liệu của nhánh đó về máy local

## Git: Merge request, reviewer
## Git: Convention
- feat/checkout
- fix/fill-infor

        <type>/<short-description>

- type: 
        
        - feat: tính năng mới
        - fix: sửa lỗi
        - conf: thay đổi cấu hình (config)
        - chore: các thay đổi lặt vặt

# JAVASCRIPT (advanced)
## Utils functions (các hàm tiện ích có sẵn)
- Util: 
    * String util
    * Array util

### String Util
#### trim (): 
- Dùng để loại bỏ khoảng trắng ở đầu và cuối của chuỗi

#### includes ()
- Kiểm tra chuỗi có chứa chuỗi con không => trả về true or false

#### replace()
- Dùng để thay thế 1 chuỗi = chuỗi khác

        replace(search value, replace value);

#### split()
- Chia 1 chuỗi thành 1 mảng các chuỗi con dựa trên ký tự phân cách

#### substring()
- trả về 1 phần của chuỗi

### Array Util
#### map()
- Tạo ra 1 mảng mới dựa trên từng ptu của mảng gốc

#### filter()
- Tạo ra 1 mảng mới chứa các ptu thỏa mãn điều kiện trong hàm

#### find()
- Trả về giá trị của ptu đầu tiền của mảng thỏa ma xn điều kiện trong hàm

#### reduce()
- Trả về 1 giá trị duy nhất trả về giá trị duy nhất (từ trái sang phải)

#### some()
- Ktra xem có ít nhât 1 ptu trong mảng thỏa mãn điều trong hàm hay không và trả về true or false

#### every()
-Ktra tất cả các ptu trong mảng có thỏa mãn điều kiện hay không trả về T or F

#### shift()
- Loại bỏ ptu đầu tiên của mảng và trả về ptu bị loại bỏ

#### sort()
- Sắp xếp các ptu của mảng theo thứ tự tăng dần hoặc giảm dần

## Class
- Dùng để khai báo kiểu dữ liệu

### Tên Class
- Đặt tên theo viết hoa chữ cái đầu
 
### Constructor
- Là hàm khởi tạo qua 1 cái class để tạo ra 1 đối tượng

- **This** sẽ truy cập vào các thuộc tính hoặc phương thức của class

- method vs function
    - method: bên trong class, không thể gọi độc lập phải thông qua 1 đối tượng
    - function: bên ngoài class