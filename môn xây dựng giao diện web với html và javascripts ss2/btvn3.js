let bookName = prompt("Nhập tên sách:");
let category = prompt("Nhập thể loại (Khoa học / Lịch sử / Văn học / Truyện):").toLowerCase().trim();
let status = prompt("Tình trạng sách (co san / da muon):").toLowerCase().trim();

console.log(`--- PHÂN LOẠI SÁCH: ${bookName.toUpperCase()} ---`);

if (category === "khoa học" || category === "lịch sử") {
    if (status === "co san") {
        console.log("Sách này có sẵn trong thư viện.");
    } else {
        console.log("Sách đã được mượn.");
    }
} else if (category === "văn học" || category === "truyện") {
    console.log("Sách này có thể đọc giải trí.");
} else {
    console.log("Thể loại này chưa được cập nhật trong hệ thống.");
}