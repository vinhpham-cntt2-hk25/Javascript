let bookName = prompt("Nhập tên sách:");
let status = prompt("Trạng thái sách (co san / da muon):").toLowerCase().trim();
let publishYear = Number(prompt("Nhập năm xuất bản:"));

let currentYear = new Date().getFullYear();
let bookAge = currentYear - publishYear;

console.log(`--- KẾT QUẢ KIỂM TRA: ${bookName.toUpperCase()} ---`);

if (status === "co san") {
    if (bookAge <= 5) {
        console.log("Sách này mới và có sẵn để mượn.");
    } else {
        console.log("Sách này có sẵn nhưng đã lâu năm.");
    }
} else if (status === "da muon") {
    if (bookAge <= 10) {
        console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau.");
    } else {
        console.log("Sách này đã mượn và khá cũ.");
    }
} else {
    console.log("Trạng thái sách không hợp lệ. Vui lòng nhập 'co san' hoặc 'da muon'.");
}