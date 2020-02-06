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

