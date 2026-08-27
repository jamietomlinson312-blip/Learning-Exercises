// Using the Math object to calculate a mean value from an array and produce a rounded number

let userValues = []; // array to store the user input values

const btn = document.querySelector("#number-button"); // 'Select number' button
btn.addEventListener("click", function(){
    let inputField = document.querySelector("#number");
    inputVal = Number(inputField.value); // get the value from the input field
    if (inputVal != ""){
        console.log(inputVal, "is a valid input");
        userValues.push(inputVal);
        inputField.value = "";
        displayNums(userValues); // call the function to display the current selection of numbers
    } else {
        if (inputVal == ""){ // alerts if an empty field is submitted
            alert("Please enter a value");
        }
    }
});

// Function to display the current array of numbers

function displayNums(numberInput){
    let newDiv = document.createElement("div"); // create new div
    newDiv.setAttribute("class", "flex gap-10"); // set tailwind class
    let newNum = document.createElement("p"); // create new p element
    let content = document.createTextNode(numberInput); // add text node from the current array
    newNum.appendChild(content);
    let avg = document.createElement("button"); // create average button
    avg.setAttribute("class", "text-xs p-1 bg-cyan-200 rounded-md shadow-md transition ease-in-out duration 150 hover:bg-cyan-400"); // button styling
    let buttonText = document.createTextNode("Calculate Average");
    avg.onclick = () => {calcMean(numberInput)} // click event: run average calculation on current styling
    avg.appendChild(buttonText);
    newDiv.appendChild(newNum);
    newDiv.appendChild(avg); // append the number array and the button to the new div   
    let currentSection = document.querySelector("#current-nums");
    currentSection.replaceChildren(newDiv); // replace the content of the section 
};

// Function to calculate the Mean 

function calcMean(numberArray){
    let sum = 0;
    for (let i = 0; i < numberArray.length; i++){ // loop through the array and calculate the mean
        sum += numberArray[i];
    }
    let average = sum/numberArray.length;
    average = Math.round(average);
    console.log("calcMean function return....", average);
    let avgResult = document.createElement("p");
    avgResult.setAttribute("class", "mt-2 font-bold")
    avgResult.innerHTML = `Calculated average is: ${average}` // creates a new 'p' element with HTML content using the calculated mean value
   
    let currentSection = document.querySelector("#current-nums");
    currentSection.insertAdjacentElement("beforeend", avgResult); // insert the new calculated mean 
};

