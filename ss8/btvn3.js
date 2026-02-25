const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];

    let filterPlayersByPosition=(array)=>{
        return array.filter(function(el, index){
            return el.split(" - ")[1]==="Forward"
        })

    }
        console.log(filterPlayersByPosition(players));
        