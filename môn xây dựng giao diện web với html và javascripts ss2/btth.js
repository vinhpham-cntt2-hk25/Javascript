// 1. Nhập dữ liệu từ người dùng
let userName = prompt("Nhập tên người dùng:");
let roleInput = prompt("Nhập vai trò (admin / student / guest):");
let balance = Number(prompt("Số dư tài khoản thẻ:"));
let cardStatusInput = prompt("Trạng thái thẻ (nhập 'true' nếu đang hoạt động):");
let overdueDays = Number(prompt("Số ngày quá hạn trả sách:"));

// Chuẩn hóa dữ liệu
let role = roleInput ? roleInput.toLowerCase().trim() : "";
let isCardActive = (cardStatusInput === "true");

// 2. Kiểm tra quyền truy cập (Switch-case)
let roleMessage = "";
switch (role) {
    case "admin":
        roleMessage = "Chào Admin, bạn có toàn quyền hệ thống";
        break;
    case "student":
        roleMessage = "Chào sinh viên, bạn có thể mượn sách";
        break;
    case "guest":
        roleMessage = "Chào khách, bạn chỉ có thể đọc tại chỗ";
        break;
    default:
        roleMessage = "Lỗi: Vai trò không hợp lệ!";
}

// 3. Kiểm tra điều kiện mượn sách (If-Else logic)
let borrowResult = "";
let canBorrow = false;

if (!userName) {
    borrowResult = "YÊU CẦU BỊ TỪ CHỐI: Tên không được để trống";
} else if (role !== "admin" && role !== "student") {
    borrowResult = "YÊU CẦU BỊ TỪ CHỐI: Vai trò không được phép mượn";
} else if (balance <= 0 || !isCardActive) {
    borrowResult = "YÊU CẦU BỊ TỪ CHỐI: Thẻ bị khóa hoặc hết số dư";
} else {
    canBorrow = true;
    borrowResult = "ĐƯỢC PHÉP MƯỢN SÁCH";
}

// 4. Tính phí phạt trả muộn
let returnStatus = "";
let fine = 0;

if (overdueDays <= 0) {
    returnStatus = "Cảm ơn bạn đã trả đúng hạn";
    fine = 0;
} else if (overdueDays <= 5) {
    returnStatus = `Quá hạn ${overdueDays} ngày`;
    fine = overdueDays * 5000;
} else if (overdueDays <= 10) {
    returnStatus = `Quá hạn ${overdueDays} ngày`;
    fine = overdueDays * 10000;
} else {
    returnStatus = `Quá hạn ${overdueDays} ngày - TÀI KHOẢN BỊ KHÓA`;
    fine = 200000;
}

console.log(`
--- HỆ THỐNG MƯỢN TRẢ ---
Người dùng: ${userName ? userName.toUpperCase() : "N/A"}
Quyền hạn: ${roleMessage}
Kết quả mượn: ${borrowResult}
Tình trạng trả sách: ${returnStatus}
Tiền phạt: ${fine.toLocaleString('vi-VN')} VNĐ
`);