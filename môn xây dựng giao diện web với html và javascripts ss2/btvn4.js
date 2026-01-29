let userName = prompt("Nhập tên người mượn:");
let role = prompt("Nhập vai trò (admin/student/guest):").toLowerCase().trim();
let bookName = prompt("Nhập tên sách:");
let bookStatus = prompt("Trạng thái sách (co san / da muon / khong co san):").toLowerCase().trim();
let publishYear = Number(prompt("Nhập năm xuất bản của sách:"));
let rating = Number(prompt("Mức độ yêu thích của bạn với cuốn này (1-5):"));
let hasCard = prompt("Bạn có thẻ thư viện không? (yes/no):").toLowerCase().trim() === "yes";

let currentYear = new Date().getFullYear();
let bookAge = currentYear - publishYear;

console.log(`%c--- HỆ THỐNG QUẢN LÝ THƯ VIỆN ---`, "color: blue; font-weight: bold;");
let roleMessage = "";
switch (role) {
    case "admin":
        roleMessage = "Chào Admin, bạn có toàn quyền hệ thống.";
        break;
    case "student":
        roleMessage = "Chào sinh viên, bạn có thể mượn sách.";
        break;
    case "guest":
        roleMessage = "Chào khách, bạn chỉ có thể đọc tại chỗ.";
        break;
    default:
        roleMessage = "Lỗi: Vai trò không xác định!";
}
let borrowStatus = "";

if (bookStatus === "co san") {
    if (hasCard && (role === "admin" || role === "student")) {
        let ageInfo = (bookAge <= 5) ? "Sách này mới." : "Sách này đã lâu năm.";
        borrowStatus = `ĐƯỢC PHÉP MƯỢN. (${ageInfo})`;
    } else {
        borrowStatus = "BỊ TỪ CHỐI (Cần thẻ thư viện hoặc vai trò phù hợp).";
    }
} else if (bookStatus === "da muon") {
    let ageInfo = (bookAge <= 10) ? "Sách khá mới, hãy đợi trả." : "Sách khá cũ.";
    borrowStatus = `KHÔNG THỂ MƯỢN. (${ageInfo})`;
} else if (bookStatus === "khong co san") {
    borrowStatus = "Sách không có sẵn, vui lòng đăng ký sau.";
} else {
    borrowStatus = "Thông tin trạng thái sách không hợp lệ!";
}

let preferenceMsg = "";
if (rating === 5 || rating === 4) {
    preferenceMsg = "Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!";
} else if (rating === 3) {
    preferenceMsg = "Sách này khá ổn, có thể mượn.";
} else if (rating >= 1 && rating <= 2) {
    preferenceMsg = "Bạn có thể cân nhắc mượn lại sau.";
} else {
    preferenceMsg = "Mức đánh giá không hợp lệ.";
}
console.log(`Người dùng: ${userName.toUpperCase()}`);
console.log(`Vai trò: ${roleMessage}`);
console.log(`Sách: ${bookName}`);
console.log(`Kết quả kiểm tra: ${borrowStatus}`);
console.log(`Đánh giá: ${preferenceMsg}`);
console.log(`-----------------------------------`);