let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Bặng Văn G-Thủ môn",
];

// Trả về mảng chứa tất cả các vị trí duy nhất có trong đội (không trùng lặp)
let result=[];
function getAllPositions(players){
    let resultArray=[];
    for(let i=0;i<players.length;i++){
        result[i]=players[i].split("-")[2];
        if(resultArray.includes(result[i])){
            continue;
        }
        resultArray.push(result[i]);
    }
    return resultArray;
}
console.log(getAllPositions(players));

// Trả về chuỗi chứa tên cầu thủ có tên dài nhất (nếu có nhiều thì trả về tên đầu tiên tìm thấy)
function findPlayersWithLongestName(players){
    let longestName=[];
    let max=0;
    for(let i=0;i<players.length;i++){
        let name=players[i].split("-")[1];
        if(name.length>max){
            max=name.length
            longestName=name
    }
}
return longestName;         
}
console.log("Tên cầu thủ có tên dài nhất:");
console.log(findPlayersWithLongestName(players));

// Trả về số lượng cầu thủ có tên bắt đầu bằng chữ cái được truyền vào (không phân biệt hoa thường)
let letter=prompt("Nhập 1 chữ cái");
function countPlayersStartingWithLetter(letter){
    let searchLetterName=[];
    let letterCount=0;
    for(let i=0;i<players.length;i++){
        let letterName=players[i].split("-")[1]
        if(letter.toUpperCase()===letterName[0]){
            letterCount++;
        }
    }
    return letterCount
}
console.log(`Số cầu thủ có tên bắt đầu bằng ${letter} là:`);

console.log(countPlayersStartingWithLetter(letter));