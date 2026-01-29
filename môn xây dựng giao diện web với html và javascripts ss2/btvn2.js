let input = prompt("Chào thủ thư, hãy nhập tổng số lượng sách hiện có:");
let bookCount = Number(input);

if (isNaN(bookCount) || input === null || input.trim() === "") {
    console.error("Lỗi: Vui lòng nhập một số nguyên hợp lệ!");
} else if (bookCount < 0) {
    console.error("Lỗi: Số lượng sách không thể là số âm!");
} else {
    console.log(`--- BÁO CÁO TÌNH TRẠNG THƯ VIỆN (Tổng: ${bookCount}) ---`);
    
    if (bookCount < 10) {
        console.log("Thông báo: Thư viện có ít sách.");
    } else if (bookCount >= 10 && bookCount <= 20) {
        console.log("Thông báo: Thư viện có số lượng sách vừa đủ.");
    } else {
        console.log("Thông báo: Thư viện có nhiều sách.");
    }
    console.log("\n--- BẮT ĐẦU QUÁ TRÌNH KIỂM KÊ ---");
    
    if (bookCount === 0) {
        console.log("Không có sách nào để kiểm kê.");
    } else {
        for (let i = 1; i <= bookCount; i++) {
            console.log(`Đang dán nhãn và kiểm tra cuốn sách thứ: ${i}`);
            if (i === 100) {
                console.warn("Cảnh báo: Số lượng quá lớn, chỉ hiển thị kiểm kê 100 cuốn đầu tiên.");
                break;
            }
        }
    }
    
    console.log("--- HOÀN TẤT QUÁ TRÌNH KIỂM KÊ ---");
}