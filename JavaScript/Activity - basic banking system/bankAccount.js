export class BankAccount {
    constructor (accountNumber, accountHolder, balance, password) { // Initialise BankAccount Class
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.password = password;
    }

    // Methods for depositing, withdrawing and checking balance

    deposit(depositAmount) {
            this.balance += depositAmount; // Updates the balance property
            console.log(depositAmount + ' was deposited');
            return this.balance;
    }
    withdraw(withdrawAmount) {
        if (withdrawAmount > this.balance) {
            alert("Insufficient funds");
            return this.balance // return balance before attempted withdrawal
        } else {
            console.log(withdrawAmount + ' was withdrawn')
            return this.balance -= withdrawAmount;
        }
    }
    checkBalance() {
        return this.balance;
    }
}