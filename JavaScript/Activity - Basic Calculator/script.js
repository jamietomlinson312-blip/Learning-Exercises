
function calculate(operator){
    const input1 = parseFloat(document.querySelector("#input1").value);
    const input2 = parseFloat(document.querySelector("#input2").value);
    if (isNaN(input1)||isNaN(input2)){
        alert("Please enter a valid number");
        return null
    } 
    let result
    switch(operator){ // switch statement to select the operation depending on the button clicked
        case "add":
            result = input1 + input2;
            displayResult(input1, input2, operator, result);
            break;
        case "subtract":
            result = input1 - input2;
             displayResult(input1, input2, operator, result);
            break;
        case "divide":
            if (input2 == 0){
                alert("Illegal operation: cannot divide by zero");
                break
            } else{
                result = input1/input2;
                displayResult(input1, input2, operator, result);
                break;
            }
           
        case "multiply":
            result = input1*input2;
            displayResult(input1, input2, operator, result);
            break;
        default:
            return alert("Unkown function");
    }
};

// Event Listeners

const add = document.querySelector("#add");
add.addEventListener("click", function(){
    calculate(this.attributes.id.textContent);
});

const sub = document.querySelector("#subtract");
sub.addEventListener("click", function(){
    calculate(this.attributes.id.textContent);
});

const div = document.querySelector("#divide");
div.addEventListener("click", function(){
    calculate(this.attributes.id.textContent);
});

const mult = document.querySelector("#multiply");
mult.addEventListener("click", function(){
    calculate(this.attributes.id.textContent);
});

function displayResult(input1, input2, operator, result){ // Function to display the correctly formatted result 
    document.querySelector("#input1").value = ""; 
    document.querySelector("#input2").value = "";
    switch(operator){ // switch statement to select correct operator symbol
        case "add":
            operator = "+";
            break;
        case "subtract":
            operator = "-";
            break;
        case "divide":
            operator = "/";
            break;
        case "multiply":
            operator = "x";
            break;
    }
    document.getElementById("results").innerText = `Result: ${input1} ${operator} ${input2} = ${result}`;// output answer
};
