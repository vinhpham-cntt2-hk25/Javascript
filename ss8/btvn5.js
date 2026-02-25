const players = [
  "Messi - Forward - 25 - 15",
  "Ronaldo - Forward - 30 - 10",
  "Neymar - Forward - 18 - 20",
  "De Bruyne - Midfielder - 8 - 25",
  "Kante - Midfielder - 2 - 5",
  "Van Dijk - Defender - 5 - 3",
  "Alisson - Goalkeeper - 0 - 1",
];

let minPerformance=+prompt("Nhập ngưỡng hiệu suất tối thiểu");
const reportTopPerformers=(minPerformance, players ) =>{
    let result=players.filter((el, index)=>{
        return Number(el.split(" - ")[2]) + Number(el.split(" - ")[3]) >= minPerformance
    })
    let newArrayPlayers=result.map((el,index)=>{
        return `${el.split(" - ")[0]}: ${Number(el.split(" - ")[2]) + Number(el.split(" - ")[3])}`
    })
    console.log(newArrayPlayers);
    let total= newArrayPlayers.reduce((acc,cur)=>{
        return acc+=Number(cur.split(": ")[1])
    },0)
    console.log(`Tổng hiệu suất: ${total}`);
    
    
}
reportTopPerformers(minPerformance, players)