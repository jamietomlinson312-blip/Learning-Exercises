import { BankAccount } from "./bankAccount.js"; // Importing the BankAccount class from external .js file

const newAccount = new BankAccount((Math.floor((Math.random() * 100) + 1)), "Dave", 1000, "piano"); // creating BankAccount instance
console.log("Account created for:" , newAccount.accountHolder, newAccount);
document.getElementById("number").innerHTML = `Account Number: ${newAccount.accountNumber}`; // populating data fields with properties
document.getElementById("holder").textContent = `Account Holder: ${newAccount.accountHolder}`; 
document.getElementById("balance").textContent = `Account Balance: ${newAccount.balance}`; 
let summaryHTML = `Hello ${newAccount.accountHolder}, your account number is ${newAccount.accountNumber} and your initial balance is 
${newAccount.balance}`; // using template literals to render summary text
document.getElementById("summary").innerHTML = summaryHTML;


//Adding event listeners to buttons

const depo = document.getElementById("b_deposit"); // HTML button elements
const withdraw = document.getElementById("b_withdraw");
const bal = document.getElementById("b_balance");
const col = document.getElementById("b_colour");

depo.addEventListener("click", function () {
let depositValue = Number(prompt("Enter amount to deposit:")); // Prompt user for a value and convert to a Number using Number()
newAccount.deposit(depositValue); // Call the deposit(x) function
document.getElementById("balance").innerHTML = newAccount.balance; //update the "balance" HTML element
if (!(document.getElementById("new_balance").innerHTML === "")){ // Updates lower balance message only if not empty
    document.getElementById("new_balance").innerHTML = "Current balance is: " + newAccount.balance;
};
document.getElementById("balance").textContent = `Account Balance: ${newAccount.balance}`; // Update balance field
updateSummary();
});

withdraw.addEventListener("click", function () {
let withdrawValue = Number(prompt("Enter amount to withdraw:"));
newAccount.withdraw(withdrawValue);
document.getElementById("balance").innerHTML = newAccount.balance;
if (!(document.getElementById("new_balance").innerHTML === "")){
    document.getElementById("new_balance").innerHTML = "Current balance is: " + newAccount.balance;
};
document.getElementById("balance").textContent = `Account Balance: ${newAccount.balance}`; // Update balance field
updateSummary();
});

bal.addEventListener("click", function () {
newAccount.checkBalance() // call function
document.getElementById("new_balance").innerHTML = "Current balance is: " + newAccount.balance;
document.getElementById("new_balance").style.border = "2px solid green";
});

col.addEventListener("click", function() {
const newColour = document.querySelectorAll("p");
for (let i = 0; i < newColour.length; i++) {
    newColour[i].style.color = "blue";
    }
});

//function for updating the 'summary' text

function updateSummary(){
    summaryHTML = `Hello ${newAccount.accountHolder}, your account number is ${newAccount.accountNumber} and your current balance is 
    ${newAccount.balance}`; // this will contain the updated newAccount properties, after the deposit or withdraw function is called
    document.getElementById("summary").innerHTML = summaryHTML; // reassigning the HTML content 
};

