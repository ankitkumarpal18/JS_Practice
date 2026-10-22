// ============================================================
// P02_bank_account.js
// LESSON 1: VARIABLES
// ============================================================
// REQUIREMENTS:
//  1. Account holder name using const  (value: "Asha")
//  2. Account type using const         (value: "Savings")
//  3. Balance using let                (start: 10000)
//  4. Deposit 5000, print balance
//  5. Withdraw 2000, print balance
//
// EXPECTED OUTPUT:
//  Account Holder: Asha
//  Account Type: Savings
//  Balance: 10000
//  After deposit: 15000
//  After withdrawal: 13000
// ============================================================

// YOUR CODE HERE

const name ="Asha";
const type ="Savings";
let Balance = 10000; Depositamount = 5000; withdrawalamount=2000;


console.log("Account Holder: "+name);
console.log("Account Type: "+type);
console.log("Balance: "+Balance);
console.log("After deposit: "+(Balance=Balance+Depositamount));
console.log("After withdrawal: "+(Balance=Balance-withdrawalamount));
console.log("Final balance : "+Balance);








