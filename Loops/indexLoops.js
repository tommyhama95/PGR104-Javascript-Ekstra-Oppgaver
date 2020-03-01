// Vi har to forskjellige løkker/loops som vi kan bruke; for og while

/*****  For loops/løkker  *****/

// Bruker nøkkelorder ¨for¨ for å kunne si til javascript at vi skal lage en loop/løkke

/* Den kjennerelle kode strukturen
    for(start kondisjon; mens sant/true; oppførsel) {
        Koden som skal kjøres x antall ganger som vi spesifiserer inne i () over.
    }
*/
// Om du ser inni for() så ser vi at det deles opp i tre deler med hjelp av ; etter
// KUN de to første. Dette er viktig å huske ettersom du vil få en kjøre feil om du
// glemmer å legge til disse to ; eller om du legger til ; på slutten der det står
// oppførsel. Skal se nærmere på det.

// Vi kan for eksempel ha en kode som skal kjøre en velkomst melding 5 ganger.
// MEN før dette så er det kanskje greit å vite hva disse tre delene inni for() gjør
// og hva de er ment for.

/*** start kondisjon ***/ 
// Dette er hvor vi sier verdien skal starte på. Denne verdien som er et tall vil
// variere avhengig av hva det er vi skal gjøre. Som regel skal vi gå igjennom masse data
// for å finne frem til riktig verdi (for eksempel kun en verdi inni i et array eller object).

/** Det finnes to måter vi kan velge start kondisjon: **/
// Eks 1: Lage verdien inni for().
// for(var i = 0;) 
// Dette gjør vi ved å lage en variabel inni den første delen som start kondisjon.
// Dette gjør at når jeg skal referere til variabelen i så kan jeg kun det inni for-loopen/løkken.
// Det er en grei praksis ettersom det skaper mindre problemer om du skulle valgt noe annet.

// Eks 2: Bruke en tidligere lagd variabel som start kondisjon
// var number = 0;
// for(number;)
// Denne måten kan brukes om du har noe som skal gjøres x antall ganger avhengig av hva number er.
// Dette gjør at for-loopen/løkken blir dynamisk. Ikke så ofte du vil se denne. Vi bruker
// mest Eks 1.

// Vi legger dette til i for-lopen/løkken vår.
// for(var i = 0; mens sant/true; oppførsel) {
//      velkomst koden
// }


/*** mens sant/true ***/
// Dette er en kondisjonssjekk som vil kjøre for-loopen/løkken så lenge det vi har sagt
// gir et resultat som er true. Når verdien blir false vil for-loopen/løkken stoppe.
// Vi bruker eksempelet (Eks 1) over for å bygge på dette med å si 5 Hei velkomster.
// Vi ønsker da å kjøre 5 "Hei" meldinger, ikke mer og ikke mindre. Det vi må skrive
// da er at programmet skal gjøre så lenge i er mindre enn 5. Dette er fordi vi har sagt
// at i starter på 0. 

// Dermed hvis vi skal kjøre fem ganger må det bli slikt:
// Med i er mindre enn 5 => i < 5;
// 0(1) -> 1(2) -> 2(3) -> 3(4) -> 4(5) = 5 ganger.
// Med i er mindre eller lik 5 => i <= 5;
// 0(1) -> 1(2) -> 2(3) -> 3(4) -> 4(5) -> 5(6) = 6 ganger, en for mye.

// Vi legger til kondisjonen vår inn i for-loopen/løkken
// for(var i = 0; i < 5; oppførsel) {
//      velkomst koden
// }

/*** Oppførsel ***/
// Da mangler vi bare det siste for at for-loopen/løkken skal kjøres, nemlig hvordan vi skal
// bruke variabelen i koden.
// her vil det som regel stå enten "i++" eller "i--".
// Med "i++" sier vi det samme som "i = i + 1;" Ta altså variabelen i som er 0 og pluss den 
// med tallet 1 for hver gang vi har kjørt alt inni { } i for-loopen/løkken.
// "i--" gjør det motsatte og trekker fra med tallet 1 for hver gang.
// Vi ønsker å gå fra 0 til vi har kjørt 5 ganger, mens vi er under tallet 5.
// Så da tar vi i bruk "i++".

// Vi legger til oppførselen inn i for-loopen/løkken.
// for(var i = 0; i < 5; i++) {
//      velkomst koden
// }

// Da mangler vi bare hva den skal gjøre. Vi gjør det super enkelt og bare tar en output 
// som console.log(). Kan eventuelt bruke alert() om vi ønsker det.
// for(var i = 0; i < 5; i++) {
//      console.log("Hei");
// }
// Det som kanskje kan være forvirrende her er at jeg har kun skrivet EN console.log(),
// Dette er jo hvorfor vi bruker loops/løkker ettersom da slipper jeg å skrive 5 linjer med console.log().

// Eks:
/*
    console.log("Hei");
    console.log("Hei");
    console.log("Hei");
    console.log("Hei");
    console.log("Hei");
*/
// Dette over er ikke-DRY, her må jeg gjenta meg selv flere ganger og om jeg skulle ønske å endre meldingen 
// må jeg gjøre det på hver enkelt av dem.

// Resultatet kan du se i Console vinduet ditt om du kopierer denne:
for(var i = 0; i < 5; i++) {
    console.log("Hei");
}
// NB! Om det kommer kun en linje ut, sjekk tallet til venstre for "Hei" i Console vinduet.
// Det er veldig ofte at når det skal komme nøyaktig lik melding ut at det blir heller på
// samme linje enn flere.



/*****  While loops/løkker  *****/

// Skrives med å bruke nøkkelordet ¨while¨
// En while-loop/løkke vil kjøre så lenge det vi skriver inni () er sant/true. Når verdien blir
// usann/false vil den stoppe.

// While kode strukturen
/*
    while(mens sann/true) {
        gjør dette
    }
*/

// vi kan bruke samme eksempel som over for å kunne sende ut 5 hei meldinger
// I en while-loop så har vi ikke en variabel som holder telling over hvor mange ganger
// vi har kjørt koden i loopen/løkken. Vi må derfor lage en som holder styring på det.

/* 
    var number = 0;
    while(number < 5) {

    }
*/
// Kondisjonen inni while() blir det samme som den midtre delen av en for-loop.
// En while loop trenger kun å vite denne verdien, hvordan den skal vite når den skal
// stoppe loopen/løkken gjør vi inni { } kode blokken.
// Om vi skulle kjørt koden over uten å gjøre noe med variabelen number som er 0
// ville den kjørt for alltid. number blir aldri annerledes og derfor vil den kjøres for alltid.
// Men ved å legge til i slutten av koden dette vil vi hindre infinite-loop som det kalles.
// Eks: "number++;" eller "number = number + 1;"

var number = 0;
while(number < 5) {
    console.log("Hello");
    number++; // eller number = number + 1;
}
// Sjekk Console vinduet ditt etter "Hello"

// Det som er viktig med hvordan koden er skrivet over er selve variabelen number og hvor
// vi har laget den. Vi har nå laget number på det vi kaller global view. 
// Det vil si at uansett hvor langt vi går inn i koder som en function eller loops/løkker
// sine { } kode blokker vil vi kunne vite hva number er.

// Om jeg hadde skrivet koden slik ville resultatet blitt annerledes:
while(tall < 5) {
    var tall = 0;
    console.log("Heisann");
    tall++;
}
// Om du ser i Console vinduet vil du se at denne while-loopen ikke kjøres i det hele tatt.
// Dette er fordi når programmet leser linjen hvor vi skrev "while(tall < 5) {" så er det
// fordi tall er ikke laget fra før av (deklarert og definert). Vi lager den INNI while-loopen
// Ettersom tall blir først lest i delen jeg nevnte over så har den ingen verdi.
// Dette vil sette kondisjonen (tall < 5) til usann/false og da vil programmet hoppe over while-loopen.
