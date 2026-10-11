let name = "Ankit";
console.log(name == "Ankit");      // What will print? true
console.log(name === "Ankit");     // What will print? true
console.log(name == "ankit");      // What will print? (lowercase) false
console.log(name === "ankit");     // What will print? false


let age = 16;
console.log(age = 18);          // Predict: What will print?  18
console.log(age);               // Predict: What will print? 18
console.log(age === 18);        // Predict: What will print? true
console.log(age == "18");       // Predict: What will print? true
console.log(age === "18");      // Predict: What will print? false


let x = 5;
console.log(x > "3");           // What will print? 5 3
console.log(x == "5");          // What will print? true 
console.log(x === "5");         // What will print? false
console.log("10" > "9");        // What will print? (both strings!) 10 9
console.log(10 > "9");          // What will print? 9


console.log("112" > "113");     // false ✓.  
console.log("113" > "112");     // Predict? true
console.log("200" > "199");     // Predict? true
console.log("abc" > "abc");     // Predict? false
console.log("abc" > "abb");     // Predict? true
console.log("apple" > "apply"); // Predict? false




console.log("--- Q5: Boolean Comparisons ---");
let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn === true);             // Predict? true 
console.log(hasPermission === false);         // Predict? true
console.log(isLoggedIn !== hasPermission);    // Predict? true 



console.log("--- Q6: Real-World Example ---");
// Movie ticket prices
let age1 = 65;
let ticketPrice = 12;

console.log(age1 >= 65);              // Senior citizen? Predict? true 
console.log(age1 <= 12);              // Child? Predict?  false
console.log(ticketPrice === 12.5);   // Exact price match? Predict? false
console.log(ticketPrice == 12);      // Price is 12? Predict? true