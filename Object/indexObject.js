// Lage et object
var example = {};

// Kan brukes for å forklare en person eller noe annet
example = {
    name: "Tommy",
    age: 24,
    from: "Rjukan",
    Country: "Norway",
    sex: "Male"
};

// Hus
example = {
    height: 9,
    length: 15,
    width: 23,
    color: "Blue",
    material: "Wood and bricks"
}

// For å hente en spesifik property må du først
// skrive navnet på variabelen som er objektet
// og så skrive navnet på propertien
console.log(example.height); // Denne har nå hentet høyden på huset

// Du kan også legge til nye properties i et objekt ved å skrive navnet på 
// objektet og så lage navnet til propertien du ønsker å legge en verdi til.
// Hva enn du skriver etter = blir definert som den nye verdien.
// Kan også være fra en prompt hvor brukeren selv kan skrive verdien.
example.myvalue = prompt("Skriv inn noe");
console.log(example.myvalue);  
// Her er myvalue noe jeg definerer på selve linje 31, den finnes ikke i example 
// objektet over og dette går fint. Det som er vanskelig er at vi må HUSKE at vi
// har lagt til en ekstra property.

// Oppgave 1
// Lag et array som beskriver deg (navn, alder, kjønn, osv) og et
// som beskriver noe du liker som hobby eller kjæledyr (du finner passende property navn).

// Oppgave 2
// Skriv ut i en console.log ditt navn og hva hobbyen din er / kjæledyret heter

// 2.A legg til mer informasjon om deg og hoobyen/kjæledyret ditt i samme tekst videre.
// Tips: For at en console.log() ikke skal være utrolig lang
var word = "komplisert"
/* Eksempel => */ console.log("Dette blir fort unødvendig langt og " + word);
// Lag en variabel som er teksten din og legg den inni console.log()
/* Eksempel =>*/ 
var myText = "This is my text";
console.log(myText);

// Oppgave 3
// bruk metoden jeg viste over på linje 31 om å la deg/bruker skrive inn en verdi
// som blir lagt til i ditt objekt.