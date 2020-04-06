/*
    Alle kommentarer markert med $ er kommentarer jeg ikke vil kommentert til vanlig.
*/

/* Eksempel på hvordan HTML ville sett ut
<html>
    <header></header>
    <body>
        <input id="InputField">
        <button id="Button">Hent måned</button>
        <p id="OutputPTag"></p>
        <script src="index.js"></script>
    </body>
</html>
*/
var result = +"1"

console.log(result)

/***********************  2.1  ***********************/ 

var months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];

// Hent HTML elementer
var button = document.getElementById("Button");
var pTag = document.getElementById("OutputPTag");

// eventlistener med tom funksjon som kalles på når knappen trykkes. $
button.addEventListener("click", function () {
    var input = document.getElementById("InputField").value;

    for(var i = 0; i < months.length; i++) {
        
        // Hvis bruker skrev et tall
        // $ kommenter hvorfor du tar input -1 og parseinter
        if(i === parseInt(input-1)) {     
            pTag.textContent = months[i];
            if(i >= 2 && i <= 7){ // Sjekker for grønne måneder
                pTag.style.color = "#00ff00"; // Grønn
            } else {
                pTag.style.color = "#0000FF"; // Blå
            }

            // Sjekker opp i mot at begge verdier er helt riktig uansett store eller små bokstaver
        } else if(months[i].toLowerCase() === input.toLowerCase()){
            pTag.textContent = i+1;
            if(i >= 8 || i <= 1){ // Sjekker for blå måneder
                pTag.style.color = "#0000FF"; // Blå
            } else {
                pTag.style.color = "#00ff00"; // Grønn
            }
    
        } else {
            // Hvis ingenting stemte
        }
    
    }
});


/***********************  2.2  ***********************/ 

var cities = [
    { name: "Trondheim", population: 182000},
    { name: "Bergen", population: 27200},
    { name: "Bergen", population: 27200},
    { name: "Bergen", population: 27200},
    { name: "Stavanger", population: 130000},
    { name: "Tromsø", population: 71000},  
    { name: "Bergen", population: 27200},
    { name: "Bergen", population: 27200}
];

var countries = [
    {name: "Norway", population: 784585},
    {name: "Sweden", population: 541211},
    {name: "Danmark", population: 660051},
    {name: "Island", population: 8464825},
];

console.log(cities);
console.log(countries);


// Gjorde om navnet til funksjonen til å bli mer dynamisk og forståelig
function replaceObjectInArray(oldName, newObject, array) {

    // Om oldName eller newObject ikke stemmer med type, stopp programmet
    if(typeof(oldName) !== typeof("")) { // Sjekker annet enn string type
        console.log("oldName er ikke string datatype");
        return;
    } else if (typeof(newObject) !== typeof({})) { // Sjekker annet enn objekt type
        console.log("newObject er ikke et objekt");
        return;
    } else { 
        // typene stemmer med kriterier
        var status = false; 
        for(var i = 0; i < array.length; i++) {
            if(array[i].name === oldName) {
                array.splice(i, 1, newObject);
                status = true;
            }
        }
        // Sjekke om element ble byttet ut eller ikke, hvis false er den ikke byttet
        if(status === false) {
            alert("Dette elementet: " + oldName + " fantes ikke i arrayet");
        }
    }
    console.log("Funksjonen var kjørt") // $ ikke nødvendig console.log
}

// Kjører mot cities arrayet
replaceObjectInArray("Bergen", 
                   {name: "Oslo", population: 630000}, 
                   cities);

// Kjører mot countries arrayet
replaceObjectInArray("Danmark", 
                    {name: "Finland", population: 5555551},
                    countries);

// Sjekker om elementet ikke finnes i arrayet som sendes inn
replaceObjectInArray("Tyskland", 
                    {name: "USA", population: 0},
                    countries);

// Sjekker mot feil element type som sendes inn i argument 1
replaceObjectInArray(746, {name:"heui", population: 894356498}, cities);

// Sjekker mot feil i objetk type som sendes inn i argument 2
replaceObjectInArray("Tromsø", 58646, cities);





