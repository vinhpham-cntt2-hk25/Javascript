const players = [
  "Messi - Forward - 25 - 15 - 34",
  "Ronaldo - Forward - 30 - 10 - 38",
  "Neymar - Forward - 18 - 20 - 32",
  "De Bruyne - Midfielder - 8 - 25 - 35",
  "Kante - Midfielder - 2 - 5 - 36",
  "Van Dijk - Defender - 5 - 3 - 33",
  "Alisson - Goalkeeper - 0 - 1 - 37",
];

console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ");
const reportByPosition =(array) =>{
    let totalForward=0;
    let totalMidfielder=0;
    let totalDefender=0;
    let totalGoalkeeper=0;
    array.forEach((el,index)=>{
        if(el.split(" - ")[1]==="Forward"){
            totalForward++;
        }else if(el.split(" - ")[1]==="Midfielder"){
            totalMidfielder++;
        }else if(el.split(" - ")[1]==="Defender"){
            totalDefender++;
        }else if(el.split(" - ")[1]==="Goalkeeper"){
            totalGoalkeeper++;
        }
    })
    
    let goalForwardArray = players.filter((el,index)=>{
        return el.split(" - ")[1]==="Forward"
    })
    let goalMidfielderArray = players.filter((el,index)=>{
        return el.split(" - ")[1]==="Midfielder"
    })
    let goalDefenderArray = players.filter((el,index)=>{
        return el.split(" - ")[1]==="Defender"
    })
    let goalGoalkeeperArray = players.filter((el,index)=>{
        return el.split(" - ")[1]==="Goalkeeper"
    })

    // tính tổng bàn thắng
    const positionWin =(arrayPosition)=>{
        let totalWin=0;
        arrayPosition.forEach((el)=>{
            totalWin=totalWin + Number(el.split(" - ")[2])
        })
        return totalWin
    }
    
    
    //  Tổng kiến tạo
    const positionConstruction =(arrayPosition)=>{
        let totalConstruction=0;
        arrayPosition.forEach((el)=>{
            totalConstruction+= Number(el.split(" - ")[3])
        })
        return totalConstruction
    }

    // Tổng số trận
    const match=(arrayPosition)=>{
        let totalMatch=0;
        arrayPosition.forEach((el)=>{
            totalMatch+=Number(el.split(" - ")[4])
        })
        return totalMatch
    }
    console.log(`
Forward:

- Số cầu thủ: ${totalForward}

- Tổng bàn thắng: ${positionWin(goalForwardArray)}

- Tổng kiến tạo: ${positionConstruction(goalForwardArray)}

- Tổng số trận: ${match(goalForwardArray)}

- Trung bình hiệu suất/trận: ${((positionWin(goalForwardArray)+positionConstruction(goalForwardArray))/match(goalForwardArray)).toFixed(2)}

 

Midfielder:

- Số cầu thủ: ${totalMidfielder}

- Tổng bàn thắng: ${positionWin(goalMidfielderArray)}

- Tổng kiến tạo: ${positionConstruction(goalMidfielderArray)}

- Tổng số trận: ${match(goalMidfielderArray)}

- Trung bình hiệu suất/trận: ${((positionWin(goalMidfielderArray)+positionConstruction(goalMidfielderArray))/match(goalMidfielderArray)).toFixed(2)}

 

Defender:

- Số cầu thủ: ${totalDefender}

- Tổng bàn thắng: ${positionWin(goalDefenderArray)}

- Tổng kiến tạo: ${positionConstruction(goalDefenderArray)}

- Tổng số trận: ${match(goalDefenderArray)}

- Trung bình hiệu suất/trận: ${((positionWin(goalDefenderArray)+positionConstruction(goalDefenderArray))/match(goalDefenderArray)).toFixed(2)}
`);
    
}
reportByPosition(players)