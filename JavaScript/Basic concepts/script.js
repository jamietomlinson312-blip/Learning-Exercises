// alert("Welcome to this JavaScript practice area")

const btn = document.getElementById("button");
const hvr = document.getElementById("button-hover");
const dbl = document.getElementById("button-dbl");
const right = document.getElementById("rightclk");
const txt = document.getElementById("demo");
const lg = document.getElementById("log")


// Add Event Listeners to index file
btn.addEventListener("click", function () {
   document.getElementById("clicktext").textContent = "This text appears when the button is clicked";
   console.log("mouse was clicked");
});

lg.addEventListener("click", function () {
   console.log("logging information to the console");
});

hvr.addEventListener("mouseover", function () {
   document.getElementById("hovertext").textContent = "This text appears when the button is hovered over and disappears when pointer leaves the element";
});

hvr.addEventListener("mouseout", function () {
   document.getElementById("hovertext").textContent = "";
});

dbl.addEventListener("dblclick", function () {
   document.getElementById("dbl-clicktext").textContent = "This text appears when the button is double clicked";
});

right.addEventListener("contextmenu", function () {
   document.getElementById("rightclicktext").textContent = "This text appears when the button is right clicked"
});


// Practicing JavaScript syntax and basic concepts

// Declaring variables of different data types

var myName = "John"
let myAge = 29
const myOccupation = "Scientist"

// Functions

let anonFunction = function () {
   console.log("anonymous function"); // Anonymous function assigned to a variable
};
anonFunction();

function newFunction () {
   console.log("Named function"); // Named function
};
newFunction();

let text = "laptop";
let newSlice = text.slice(1,3); // built-in slice() function slices out a portion of a string, from position 1 up to but not including position 3
console.log(newSlice);

// Conditional Statements

if (myAge >= 30) {
   console.log("myAge variable is greater than 30"); // This code only runs if myAge is greater than 30
} else {
   console.log("myAge variable is less than 30");
};

let fruit = "Apple"
switch(fruit){
   case "Pear":
      console.log("Pear match with fruit");
      break;
    case "Orange":
      console.log("Orange match with fruit");
      break;
    case "Apple":
      console.log("Apple match with fruit"); // switch statement cycles through all cases until one is true, and code block runs
      break;
    case "Grapes":
      console.log("Grapes match with fruit");
      break;
};

// Arrays

let inst = ["piano", "guitar", "drums", "violin"]; // Array of strings
let scores = [32, 56, 99, 28, 88]; // Array of numbers
let ages = [18, "ten", 25] // Array of mixed data types

// Loops

for (let i = 0; i < 5; i++) { // Loop which runs 5 times, until conditional statement returns False
   console.log("looping");
}

for (let i = 0; i < inst.length; i++) { // Looping through an array and printing the items to the console
   console.log(inst[i]);
}

