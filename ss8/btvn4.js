const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];

    let getReversedNames=(array)=>{
        return players.map(function(el,index){
            return el.split(" - ")[0];
        }).reverse();

    }

    console.log(getReversedNames(players));
