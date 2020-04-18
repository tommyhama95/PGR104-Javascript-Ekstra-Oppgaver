var streetName = "Junglebungle";
var street = [
    {
        housenumber: 43,
        color: "Blue",
        housemembers: [ "Lucy", "George", "Hank", "Luke" ]
    },
    {
        housenumber: 44,
        color: "Yellow",
        housemembers: [ "Lucy", "Martin" ]
    },
    {
        housenumber: 32,
        color: "Red",
        housemembers: [ "Luke", "George", "Jimmy" ]
    },
    {
        housenumber: 77,
        color: "Blue",
        housemembers: []
    },
    {
        housenumber: 3,
        color: "Green",
        housemembers: [ "Tom", "George", "Luke" ]
    }
];

// Assignment 1
// 1.A
// Write Javascript code that show the first house with Yellow as color


// 1.B
// Write Javascript code that counts how many houses has between 1 and 3 housemembers


// 1.D
// Write Javascript code that allows a user to add a house to the street, give it a housenumber, a color, and housemembers.
// Choose whatever form for input (prompt or HTML-input) the user can write in.


// function call inside of an addEventlistener can either be name of existing global function (Ex: addNewHouse)
// or emoty function with arrow function call, example below.
//addBtn.addEventListener("dblclick", () => { Code to do when called });


/**** A bit more tricky questions ****/

// 1.E 
// Write Javascript code that counts how many times "Luke" is registered in a house


// 1.F 
// Write Javascript code that tells how many houses has an even number as an address


// Assignment 2
/******* What will the result be? Ex: 1+1 = 2 <= The correct answer *******/

// 2.A
var a = "24" + 24;

// 2.B
var b = false + 54;

// 2.C
var c = (79 + true);

// 2.D
var d = (true + true) * 6;

// 2.E 
var e = ("3" + (false - true));

//BONUS
// 2.1 What datatype are the following variables above?



// Assignment 3
/****** Implicitt or Explicitt conversion ******/

// 3.A
var result1 = "543" * 1;

// 3.B
var result2 = 74 + "32";

// 3.C
var result3 = parseFloat("45.25" + 4)

// 3.D
var result4 = ( (74 * 3) / 2).toString();

/*** Tricky ***/

// 3.E
var result5 = (true+5).toString() * 2;

// 3.F
var result6 = parseInt( ("474" * 3).toString() );




