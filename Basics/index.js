/* Kopier følgende under for å se hva de gir i svar i konsoll vinduet.
 Husk at du trenger en HTML fil som linker til denne filen riktig hos deg også.
 Bare sjekk den jeg har som heter "index.html".
 Husker ikke hvordan åpne konsoll vinduet? Gå tilbake til starten av
 siden og trykk på "Hvordan starte VSC Eller Brackets.md" */

var number = 23;
var anotherNumber = 3424;

/* Her gjør vi matematisk funksjon på to variabler.
 Dette går fint ettersom de to navnene blir lest som tallene istedenfor
 ettersom det tall verdi de inneholder. */
var sum = anotherNumber - number; 
console.log("Tall - => " + sum); // 3401

sum = anotherNumber + number;
console.log("Tall + => " + sum); // 3447

sum = anotherNumber * number;
console.log("Tall * => " + sum); // 78752

sum = anotherNumber / number;
console.log("Tall / => " + sum); // 148.8695652173913

/* Dette funker ikke på tekst/string verdier untatt +
 ettersom de ikke er tall verdier */

var firstMsg = "Hello";
var secondMsg = "World!";

var firstAndSecond = firstMsg + secondMsg;
console.log("Tekst + => " + firstAndSecond); // HelloWorld!

var firstAndSecond = firstMsg - secondMsg;
console.log("Tekst - => " + firstAndSecond); // NaN

var firstAndSecond = firstMsg * secondMsg;
console.log("Tekst * => " + firstAndSecond); // NaN

var firstAndSecond = firstMsg / secondMsg;
console.log("Tekst / => " + firstAndSecond); // NaN

/* Et eksempel som ble vist sist var dette med å legge sammen tekster med variabler
 Dette er kjent som konkatinering.
 Eks:*/
firstAndSecond = firstMsg + secondMsg;
console.log(firstAndSecond); // HelloWorld!
/* Dette er fordi vi sier at vi skal slå sammen ordet "Hello" sammen med
 order "World!". Man trenger ikke å bruke variabler for å gjøre dette
 heller. Da gjør vi det bare ¨hardkodet¨ (Skriver inn spesifikt) */
 console.log(" Hard kodet => Hello" + "World!");

 /********************************************* 
 Bonus for deg som synes dette var greit og enkelt.
 Det kom ut i fjor våres en enklere måte å konkatinere tekst verdier sammen med 
 variabler. Det kalles for `template literals` og bruker `` istedenfor "".
 Dette gjør det enklere skrive følgende om tar eksempelet med konkatinering over.
 **********************************************/
console.log(`Template Literal => ${firstMsg} ${secondMsg}`);
// Bruker $ og {} for å gjøre det mulig å putte inn variabler uten at
// de blir ren tekst
// Eks:
console.log("Uten template literal => firstMsg + secondMsg");
// Her ser vi at Javascript ikke leser de som variabler.
// Funker ikke uten `` heller
console.log("Uten ``, m ${} => ${firstMsg} ${secondMsg}");

// Oppgave 1.
// Lag en variabel som beskriver hva din hobby er, men skriv selve navnet på hobbyen
// som en egen variabel: Eks "Jeg liker best å gjøre dette på fritiden: trene"
var description = "Jeg liker best å gjøre dette på fritiden: ";
var hobby = "trene";

// Ved å konkatinere skal du sette disse to sammen.

// Oppgave 2.
// Finn ut hvorfor meldingen i console.log() ikke vises frem i konsoll vinduet.
var myWallet = 874;
var bankDescription = "Din konto inneholder: ";
var myBankDescription = bankDescription + myWallet + "kr";
console.log(myBankDescription);