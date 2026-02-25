const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];

    let displayPlayers =(array) =>{
        array.forEach(function(el, index){
            console.log(el);
        }); 

    }
displayPlayers(players)