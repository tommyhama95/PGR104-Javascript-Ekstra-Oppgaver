// Hvordan lage en funksjon
function thisIsMyFunction() {
    // bruker nøkkelorder function for å lage den
    // sammen med din definerte navn på funksjonen sammen med () på slutten
    // alt mellom { } er det funksjonen skal gjøre når den kalles på
}
// trenger ikke ; på slutten

thisIsMyFunction(); // HER kaller jeg på funksjonen som jeg lagde over


// Funksjon med parametere
function addition(number1, number2) {
    console.log(number1 + number2);
}

// Vi kan sende inn data til en funksjon som skal gjøre noe spesielt.
// Som eksempelet over har jeg sagt at dette blir en funksjon som skal
// legge sammen to tall. Den har egen lagde variabler som ikke må
// deklareres, disse kalte jeg "number1" og "number2".
// For at jeg skal ha noe inni disse kan jeg legge inn tall i funksjonskallet

addition(2, 2) // sender inn to tall som blir til sammen 4

// kan sende inn variabler som vi har laget fra før av også
var first = 3;
var second = 4;
addition(first, second) // Her sender jeg inn to variabler som inneholder tallene 3 og 4

// Kan også legge sammen tekster i denne funksjonen selv om det ikke er helt ment
// for at vi skal sende noe annet enn tall inn
var msg1 = "This is ";
var msg2 = "my text";
addition(msg1, msg2);


// Hva skjer om funksjonskallet er FØR funksjonen blir laget?
doesItGetCalled()

function doesItGetCalled() {
    console.log("If I exist inside Console then yes");
}
// I best praktisk har vi som regel funksjonskallet ETTER funksjonen for å sørge
// for at vår Javascript har lest at funksjonen finnes.


// Funksjoner med "return" statment
// Funksjoner kan også returnere verdier eller resultater av noe vi ønsker
// å gjøre slik at vi kan bruke det videre. For eksempel med et matte eksempel
// Funksjonen sum() skal sjekke utregninen av to tall og sende tilbake resultatet.
// Da bruker vi nøkkelordet "return" for å si at det til høyre for ordet skal sendes tilbake.
// Vi kan kun sende tilbake en verdi.

function sum(tall1, tall2) {
    /* return tall1, tall2  <== Fungerer ikke! */
    return tall1 + tall2; // returnerer tilbake EN verdi
}

console.log(sum(2, 4));
// Resultatet av en funksjon kan også lagres som en variabel
var added = sum(5, 6); // blir 11
console.log(added);



// Oppgave 1
// Få den hemmelige meldingen under til å vises i konsoll vinduet 
// ved hjelp av funksjonen, Nin-nin (meldingen skal sendes via koden inni funksjonen
// bare se lenger opp om trenger tips).
var secretMessage = "This is a ninja message, Nin-nin!";

function ninjaCall() {
    
}


// Oppgave 2
// lag en funksjon og la den ta i mot først 1 parameter
// skriv så denne verdien ut i en console.log()

// 2.A: La funksjonen ta i mot 2 parametre og gang/multipliser "*"
// disse to mot hverandre.

// 2.B: La funksjonen ta i mot enda et parameter, nå skal nemlig denne funksjonen
// bli en enkel kalkulator. La de to første parameterne være tall og den siste være
// hvilken matteoperasjon som skal skje med de to tallene (+, -, / og *).


//Oppgave 3
// Lag et objekt som handler om et dyr. Gi den navn, alder, kjønn, rase og gi den en tom property som heter sounds.
// Sounds propertien skal være en funksjon som skal gjøre følgende når vi kaller på den. Den skal returnere
// hvilken lyd dyret lager. 
