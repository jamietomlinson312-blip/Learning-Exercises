const btn = document.getElementById("button");
const hvr = document.getElementById("button-hover");
const dbl = document.getElementById("button-dbl");
const right = document.getElementById("rightclk");
const txt = document.getElementById("demo");



// Add EventListener to btn
btn.addEventListener("click", function () {
   document.getElementById("clicktext").innerHTML = "This text appears when the button is clicked";
   console.log("mouse was clicked");
});

hvr.addEventListener("mouseover", function () {
   document.getElementById("hovertext").innerHTML = "This text appears when the button is hovered over and disappears when pointer leaves the element";
});

hvr.addEventListener("mouseout", function () {
   document.getElementById("hovertext").innerHTML = "";
});

dbl.addEventListener("dblclick", function () {
   document.getElementById("dbl-clicktext").innerHTML = "This text appears when the button is double clicked";
});

right.addEventListener("contextmenu", function () {
   document.getElementById("rightclicktext").innerHTML = "This text appears when the button is right clicked"
});




