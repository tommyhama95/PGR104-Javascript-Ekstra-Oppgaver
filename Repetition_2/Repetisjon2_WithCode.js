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

/* Pseudo code version
* function getYellowHouse {
    var pTag = get elemnt with id 1.A from HTML

    for(start at 0, loop until max length of street array) {
        if(this index houses color equals Yellow) {
            set pTag as = street + house number has house color Yellow
        }
    }
}
*/

function getYellowHouse() {
    var pTag1A = document.getElementById("1.A");

    for(var i = 0; i < street.length; i++) {
        // If housecolor is what we are looking for
        if(street[i].color === "Yellow") {
            var result = streetName + " " + street[i].housenumber
            console.log(result);
            pTag1A.textContent += result;
        }
        // Does not require an else-statement
    }
}

getYellowHouse();

// 1.B
// Write Javascript code that counts how many houses has between 1 and 3 housemembers

/* Pseudo Code version
function counthouse {
    var pTag = get html elemnt with ptag ID as 1.B

    for (from 0 til street max length) {
        if(this house member length is between 1 and 3) {
            then x = count up with 1
        } 
    }
    pTag = there are x houses that have members between 1 and 3
}
*/

function countHousemembers1Til3() {
    var count = 0;
    var pTag1B = document.getElementById("1.B");

    for(var i = 0; i < street.length; i++) {
        // If house members are 1, 2 or 3 in length, then count + 1
        if(street[i].housemembers.length >= 1 && street[i].housemembers.length <= 3) {
            count++;
        }
    }
    var result = "There was " + count + " houses with 1 til 3 housemembers";
    pTag1B.textContent += result;
    console.log(result);
}

countHousemembers1Til3();


// 1.C
// Write Javascript code that counts average house members
function countAverageHouseMembers() {
    var pTag1C = document.getElementById("1.C");
    var count = 0;

    for(var i = 0; i < street.length; i++) {
        count += street[i].housemembers.length;
    }

    // Calculate average house members
    var avg = count / street.length;
    var result = "The average house members is " + avg;
    pTag1C.textContent += result;
    console.log(result);
}

countAverageHouseMembers();


// 1.D
// Write Javascript code that allows a user to add a house to the street, give it a housenumber, a color, and housemembers.
// Choose whatever form for input (prompt or HTML-input) the user can write in.

function addNewHouse() {
    var pTag1D = document.getElementById("1.D");
    var number = document.getElementById("a").value;
    var color = prompt("What is the color of the house?");
    var membersLength = prompt("How many members are in the house?");
    var memberArray = [];

    // loop from 1 til members length
    // Ex: membersLength = 5, then loop 1 til 5
    for(var i = 1; i <= parseInt(membersLength); i++) {
        var memberName = prompt("What is the name of the member?");
        memberArray.push(memberName); // add name to array
    };

    var houseObject = {
        housenumber: parseInt(number),
        color: color,
        housemembers: memberArray
    };

    pTag1D.textContent += houseObject; // doesnt work
    console.log(houseObject);

}


var addBtn = document.getElementById("addbutton");
addBtn.addEventListener("click", addNewHouse);

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




