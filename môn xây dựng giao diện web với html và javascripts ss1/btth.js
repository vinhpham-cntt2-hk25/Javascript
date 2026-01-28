// khai bao cac bien can thiet
let bookName = "   Lap trinh web voi JavaScript   ";
let authorName = "Nguyen Van A";
let publish = 2022;
let price = 100000;
let quantity =100;

//chuan hoa du lieu
bookName.trim();//loai bo khoang trang o dau va cuoi
bookName.toUpperCase();
console.log(bookName.trim().toUpperCase());

// ten tac gia in hoa 
console.log("tac gia: ", authorName.toUpperCase());


// tao ma dinh danh
console.log("3 ky tu dau tien tac gia:", authorName.slice(0, 3));
console.log("nam xuat ban", publish);
console.log("so ngau nhien1-1000", Math.ceil(Math.random()*1000));

let bookCode = `${authorName.slice(0, 3)}${publish}-${Math.ceil(Math.random()*1000)}`
console.log("Ma sach: ",bookCode);

//tinh toan so lieu
console.log("thoi gian hien tai", new Date());
// lay ra nam
let year= new Date().getFullYear();
let month= new Date().getMonth()+1;
let day= new Date().getDate();
let hour= new Date().getHours();
let minute= new Date().getMinutes();
console.log("nam hien tai:", year);
// tinh tuoi sach
let bookAge = year - publish;
console.log(bookAge);

// tinh tong gia tri
let totalPrice = price * quantity;
console.log("tong gia tri sach: ",totalPrice);

// in ra phieu nhap kho
console.log(`
    --- PHIẾU NHẬP KHO ---

    Mã sách: ${bookCode}

    Tên sách: ${bookName.trim().toUpperCase()}

    Tác giả: ${authorName.toUpperCase()}

    Năm xuất bản: ${publish}

    Tuổi sách:${bookAge} nam

    Tổng giá trị: ${totalPrice}d

    Ngăn kệ gợi ý: Kệ số ${Math.ceil(Math.random()*10)}    
`);

