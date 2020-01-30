# Denne siden vil vi gå igjennom kort og greit det grunnleggende med Javascript.

#### Gjerne lag en HTML og JS fil og skriv mens du leser forklaringene under.
#### Vi kommer til å bruke en god del ¨console.log()¨ i eksempelene under slik at du kan 
#### visuelt se det på nettsiden din. Om du ikke vet hvordan gå en side tilbake og trykk på
#### **"Hvordan starte Visual Studio Code / Brackets med HTML, CSS og JS".**

### Hvordan lage en variabel:
#### For å lage en variabel i Javascript bruker vi nøkkelordet `var`. Når Javascript leser ordet `var`
#### så vet den at vi skal til å deklarere en variabel. 

Det er to ord innenfor det å lage variabler som går ofte: **¨Deklarere¨** og **¨Definere¨**.

**_Deklarere_**: Er måten vi forteller Javascript at vi har laget en variabel, men som ikke har blitt 
gitt en verdi. F.eks en tekst eller tall verdi.
`var message;` <== Dette er Javascript syntaks for å ¨Deklarere¨ en variabel
Om du kjører eksempelet over i en **console.log()** ==> **Eks: `console.log(message);`**
Så vil du få ut at den sier *`Undefined`*. Dette er fordi den ikke er **_¨Definert¨_**.

**_Definere_**: Når vi definerer en variabel så gir vi den en verdi. Måte dette skrives på er med EN **`=`** 
etter variabel navnet. **Eks: `var message = ;`** og så legger vi til enten en tekst eller tall verdi.
Tekst: `var message = "Hello World!";`
Tall: `var message = 42;`

OBS!
En ting som er greit å vite når det gjelder datatypene tekst og tall (string og integer), så er det 
at man kan gjøre litt morsomt med de. Man kan sammeligne tallet `42` med teksten `"42"` og 
Javascript vil si til det er `true` (kommer til dette med `true` og `false` verdier).




