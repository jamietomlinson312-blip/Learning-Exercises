import { BankAccount } from "./bankAccount.js"; // Importing the BankAccount class 

// Creating a 2 instances of the BankAccountclass with a random account number from 0-100

const newAccount = new BankAccount((Math.floor((Math.random() * 100) + 1)), "John", 1000); 
console.log("Account created for:" , newAccount.accountHolder, newAccount);
const newAccount2 = new BankAccount((Math.floor((Math.random() * 100) + 1)), "Dave", 15000);
console.log("Account created for:" , newAccount2.accountHolder, newAccount2);

//Populating the data fields with the newAccount properties

document.getElementById("number").innerHTML = newAccount.accountNumber; 
document.getElementById("holder").textContent = newAccount.accountHolder;
document.getElementById("balance").textContent = newAccount.balance;

//Adding event listeners to buttons

const depo = document.getElementById("b_deposit") // HTML button elements
const withdraw = document.getElementById("b_withdraw")
const bal = document.getElementById("b_balance")

depo.addEventListener("click", function () {
    let depositValue = Number(prompt("Enter amount to deposit:")); // Prompt user for a value and convert to a Number using Number()
    newAccount.deposit(depositValue); // Call the deposit(x) function
    document.getElementById("balance").innerHTML = newAccount.balance; //update the "balance" HTML element
    if (!(document.getElementById("new_balance").innerHTML === "")){ // Updates lower balance message only if not empty
        document.getElementById("new_balance").innerHTML = "Current balance is: " + newAccount.balance;
    };
});
withdraw.addEventListener("click", function () {
    let withdrawValue = Number(prompt("Enter amount to withdraw:"));
    newAccount.withdraw(withdrawValue);
    document.getElementById("balance").innerHTML = newAccount.balance;
    if (!(document.getElementById("new_balance").innerHTML === "")){
        document.getElementById("new_balance").innerHTML = "Current balance is: " + newAccount.balance;
    };
});

bal.addEventListener("click", function () {
    let currentBalance = newAccount.checkBalance()
    document.getElementById("new_balance").innerHTML = "Current balance is: " + newAccount.balance;
});

