
let bookName = prompt("Nhập tên sách muốn mượn:");
let borrowerName = prompt("Nhập tên người mượn:");
let bookStatus = prompt("Tình trạng sách (co san / da muon / khong co san):").toLowerCase().trim();
let hasLibraryCard = prompt("Bạn có thẻ thư viện không? (yes / no):").toLowerCase().trim() === "yes";
let borrowDays = Number(prompt("Số ngày dự định mượn:"));

console.log("--- KẾT QUẢ KIỂM TRA ---");

if (bookStatus === "co san") {
    if (hasLibraryCard) {
        console.log(`Chào ${borrowerName}! Chúc mừng, bạn có thể mượn sách "${bookName}".`);
    } else {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện.");
    }

} else if (bookStatus === "da muon") {
    if (borrowDays < 30) {
        if (hasLibraryCard) {
            console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại.");
        } else {
            console.log("Bạn không thể mượn sách nếu không có thẻ thư viện.");
        }
    } else {
        console.log("Thời gian mượn quá dài, hệ thống không thể xử lý.");
    }

} else if (bookStatus === "khong co san") {
    // Trường hợp sách không tồn tại trong kho
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau.");

} else {
    // Trường hợp nhập sai trạng thái sách
    console.log("Lỗi: Thông tin không hợp lệ, vui lòng nhập lại.");
}