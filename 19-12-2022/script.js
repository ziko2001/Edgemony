let userPrompt = prompt("Quale operazione vuole utilizzare?");
let firstNumb  = prompt("Inserisci il primo numero");
let secondNumb = prompt("Inserisci il secondo numero");


if (userPrompt === "moltiplicazione") {
    console.log("moltiplicazioni: " + firstNumb * secondNumb);
} else if (userPrompt === "divisione") {
    console.log("divisioni: " + firstNumb / secondNumb);
} else if (userPrompt === "addizione") {
    console.log("addizione: " + (firstNumb + secondNumb));
} else if (userPrompt === "sottrazione") {
    console.log("sottrazione: " + (firstNumb - secondNumb));
} else {
    alert("Siamo spiacenti ma nella casella 'Quale operazione vuole utilizzare?' si può inserire solo le presenti operazioni: moltiplicazione, divisione, addizione e sottrazione")
}


switch (userPrompt) {
    case moltiplicazione:
        console.log("moltiplicazioni: " + firstNumb * secondNumb);
        break
    case divisione:
        console.log("divisioni: " + firstNumb / secondNumb);
        break
    case addizione:
        console.log("addizione: " + (firstNumb + secondNumb));
        break
    case sottrazione:
        console.log("sottrazione: " + (firstNumb - secondNumb));
        break
}

