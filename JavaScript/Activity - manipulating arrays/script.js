let list = []; // Create empty list variable

// Event listeners

const addBtn = document.querySelector("#add_button");
addBtn.addEventListener("click", function(){
    let input = document.querySelector("#add-Element"); // Get input from value field
    if (input.value == ""){
        alert("Enter a value"); // alert if field is empty
    } else {
        list.push(input.value); // push list element
        console.log(list);
        input.value = ""; // reset field to empty
        displayArray(); // display current array in HTML
    }
});

const rmvBtn = document.querySelector("#rmv_button");
rmvBtn.addEventListener("click", function(){
    if ((list.length == 0)){
        alert("Array is empty, add elements first")
    } else {
        //console.log("else")
        list.pop();
        displayArray();
    }
});

const shift = document.querySelector("#shift_button");
shift.addEventListener("click", function(){
    if ((list.length == 0)){
        alert("Array is empty, add elements first") // alert if user tries to remove from an empty array
    } else {
        list.shift();
        displayArray();
    }
});

const unShift = document.querySelector("#unshift_button");
unShift.addEventListener("click", function(){
    let newElem = document.querySelector("#add-Element");
    if (newElem.value == ""){
        alert("Enter a value");
    } else {
        list.unshift(newElem.value);
        displayArray();
        newElem.value = "";
    }
});

const splice = document.querySelector("#splice_button");
splice.addEventListener("click", function(){
    let userInput = Number(prompt("Select an index number to remove"));
    if (userInput >= 0 && userInput < list.length ){ // checks whether array index is in range
        list.splice(userInput, 1); // splice out the user input value 
        displayArray();
    }
        else {
        alert("Index is out of range - select a value between 0 and " + ((list.length)-1))
    }
    
});

// function to display the current array in the HTML

function displayArray(){ 
    //console.log(list);
    document.querySelector("#display").innerHTML = "";
    list.forEach((addedElement, index) => { // function is called for each array element
        let newEl = document.createElement('p');
        let newText = document.createTextNode(`Element ${index}: ${addedElement}`); // template literal to create the HTML text node
        newEl.appendChild(newText);
        let newSection = document.querySelector("#display");
        newSection.appendChild(newEl);
        newSection.setAttribute("class", "p-2 border-1 rounded-md shadow-sm") // styling the new text
    })
};