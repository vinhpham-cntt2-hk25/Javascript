let bookName = prompt("Nhập tên sách:");
let author = prompt("Nhập tên tác giả:");
let publishYear = Number(prompt("Nhập năm xuất bản của sách:"));

let currentYear = new Date().getFullYear();

console.log(`--- THÔNG TIN SÁCH: ${bookName.toUpperCase()} ---`);
console.log(`Tác giả: ${author}`);
if (publishYear === currentYear) {
    // Trường hợp 1: Năm xuất bản trùng với năm hiện tại
    console.log("Thông báo: Đây là sách mới!");

} else if (currentYear - publishYear <= 5 && currentYear - publishYear > 0) {
    // Trường hợp 2: Xuất bản trong vòng 5 năm qua (ví dụ: 2021 - 2025 nếu hiện tại là 2026)
    console.log("Thông báo: Sách khá mới.");

} else if (publishYear > currentYear) {
    console.log("Cảnh báo: Năm xuất bản không hợp lệ (lớn hơn năm hiện tại)!");

} else {
    console.log("Thông báo: Sách đã cũ.");
}