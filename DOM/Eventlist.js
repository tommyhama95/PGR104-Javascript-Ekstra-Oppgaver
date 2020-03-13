
var oneClick = document.getElementById("one");
var dbClick = document.getElementById("db");
var hoverOver = document.getElementById("over");
var btn = document.getElementById("btn");


/*
  En eventlistener er delt i 2 deler inne i ()
  Første delen er hva slags event som skjer som vi sier som en tekst
  Andre delen er hvilken funksjon som skal kjøre når html elementet blir 
  trykket, overhover eller annet. 
 */

// Trykker en gang
oneClick.addEventListener("click", function() {
  console.log(oneClick.textContent);
});

// Dobbel klikking (Ikke trykk for fort)
dbClick.addEventListener("dblclick", function() {
  console.log(dbClick.textContent);
});

// Data mus er over elementet
hoverOver.addEventListener("mouseover", function() {
  console.log(hoverOver.textContent);
});

// Trykker på knappen
btn.addEventListener("click", function() {
  console.log("Button pressed")
});


// Kan også skrive slik, er så og si det samme som over
btn.addEventListener("click", () => {
  console.log("Button pressed and doing the same");
});