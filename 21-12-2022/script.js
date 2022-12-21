
  //scrivere una prima funzione che presa un stringa come argomento, ritorni la stessa stringa + la parola bootcamp;
  


  let string = prompt("Scrivi una stringa");


  function result(string, secWORD) {
    return string + secWORD
  }

  let totale = result(string, " bootcamp");
  console.log(totale);



/*
  scrivere un oggetto col vostro nome che vi identifichi in proprietà (nome, cognome, ecc...) 
  e per metodi (es. possono anche essere semplici console.log di voi che eseguite un hobby)
  */


const zakariaShoes = {
  color: "Black",
  brand: "Nike",
  isComfortable: true,
  nSuze: 41,
  run: function () {
    console.log("Le scarpe sono belle");
  },

};

