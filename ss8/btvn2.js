const playerNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson",
];

    let getUpperNames=(array)=>{
        return array.map(function(el, index){
           return el.toUpperCase();
            
       });

    }
  console.log(getUpperNames(playerNames));
  