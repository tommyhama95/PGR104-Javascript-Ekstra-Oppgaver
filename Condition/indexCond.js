// Oppgave 1
// Vi skal lage en liten aldersgrense sjekker. Start med å lage to variabler
// En av disse inneholder din alder og den andre skal ha en aldersgrense som er 18
// lag en if som sjekker om du er gammel nok til å kjøpe konsert billet.
// Om du er gammel nok skal du sende beskjed til bruker (med console.log eller alert)
// om at du får kjøpe billet. Om du IKKE er gammel nok skal du si ifra at du må vente 
// et par år. Husk å sjekke om du er nøyaktig 18 også ;)

if("Din kondisjon her") {
    // du er gammel nok
} else {
    // du er ikke gammel nok
}


// Oppgave 2
// I eksempelet under så vil koden alltid kjøre else koden.
// Fiks slik at vi kjører koden som står inne i if slik at vi får
// "Halla Gunnar" ut i konsoll vinduet. Finnes flere måter å løse denne på.
var name = "Gunnar";
var name2 = "Olav";
var name3 = "gunnar";

if(name === name3) {
    console.log("Halla " + name);
} else {
    console.log("Du er jo ikke " + name);
}


// Oppgave 3
// Vi har funnet ut at du har lyst å reise en tur. Du må dermed spare penger
// som er ca 2 300kr. Du har første gang nå 2 400kr på kontoen;
// Sjekk om du kan reise eller ikke. Lag alt fra bunn, se over om du trenger start hjelp.

// 3.A: Denne gangen har du 2 299kr på kontoen, sjekk om du kan reise.

// 3.B: Du har klart å finne 1 kr på gata, legge den til i spare kontoen og se om du kan reise.


// Oppgave 4
// Skriv en if-else som skal sjekke om verdien under er alt annet enn sin egen verdi
var isSame = 42;



/*********** Switch case ***********/

// Oppgave 1
// Gi variabelen 'value' en verdi (tall eller tekst) og se når den sjekkes i koden under.
var value;
var message = "Verdien du tok var ";
var nameOfGMan = "gunnar";

switch(value) { 
    // kan også hardkode inn verdien inni () i switchen. Eks: Switch(32), men da er switchen unødvendig
    // ettersom verdien vi sender inn er ALLTID 32...
    case 32: console.log(message + "nøyaktig 32");
        break;
    case "32": console.log(message + "teksten 32");
        break;
    case "Gunnar": console.log(message + "Gunnar?");
        break;
    case nameOfGMan: console.log(message + "gunnar med liten g?");
        break;
    default: console.log("Du oppga ingen verdi som ble sjekket i Switchen"); 
}

// 1.A
// Hva om vi skal sjekke en kondisjon inni switchen? For eksempel om tallet vi sender inn er større
// eller mindre enn 32. Da må verdien vi sjekker for i switchen byttes til å sjekke etter 
// en boolks verdi, nemlig true ettersom vi skal sjekke om kondisjon stemmer, tar vi false sjekker vi
// om det er motsatt verdi.
var boolValue;
var number = 32;

switch(boolValue){
    case number > 32: console.log(message + "større enn 32");
        break;
    case number < 32: console.log(message + "mindre enn 32");
        break;
    case number === 32: console.log(message + "nøyaktig lik tallet 32");
        break; 
    case number !== 40: console.log(message + "ikke lik 32, men " + number + " " + typeof(number));
        break;
    default: console.log("Ikke større, mindre eller lik 32, meg skuffet  :(");
}

// bonus: vet du hvorfor koden aldri leser noe annet enn første case om boolValue er usann(false)?


// Oppgave 2
// Lag en switch case som sjekker om verdien som kommer inn er ditt navn eller din venn sin.
// Om ingen stemmer, send en melding tilbake til bruker som du selv velger skal si :P
