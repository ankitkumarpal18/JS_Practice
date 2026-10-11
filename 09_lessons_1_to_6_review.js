let name ="Ankit";
let age = 17;
let score = 85.5;

console.log(name);  // Ankit 
console.log(typeof age );//number
console.log(score +10); //95.5
console.log(age*2);// 34
console.log("Age :"+ age); // Age : 17


let firstName = "Ankit";
let lastName = "Pal";
let courseYear = 2;

console.log(`Hello ${firstName} ${lastName}`); //Hello Ankit Pal
console.log(`You are in Year ${courseYear}`);// You are in Year 2
console.log(`Next year will be ${courseYear+1}`); // Next year will be 3 


let input = "25";        // String from user input
let number = 30;

console.log(input + number);         //2530  
console.log(Number(input) + number);  // 55
console.log(input === number);  // false     
console.log(input == number); //false


let price = 150;
let budget = 200;

console.log(price > budget);        // Predict?  false
console.log(price < budget);        // Predict?  true
console.log(price === 150);         // Predict?   true
console.log(price !== 100);         // Predict?   true
console.log(budget >= 200);         // Predict?   true


let city1 = "Delhi";
let city2 = "bangalore";

console.log("apple" > "banana");    // Predict?  false
console.log("apple" < "banana");    // Predict?  true
console.log(city1 === city2);       // Predict? false
console.log(city1 == "Delhi");      // Predict? true 
console.log("100" > "99");          // Predict? (TRAP!) true 



let balance = 500;

if (balance > 1000) {
    console.log("You are rich");
} else {
    console.log("Save more money");  // Save more money
}



let marks = 65;

if (marks >= 90) {
    console.log("Excellent");
} else if (marks >= 75) {
    console.log("Good");
} else if (marks >= 60) {
    console.log("Pass");   // Pass
} else {
    console.log("Fail");
}


let userName = "ankit";
let enteredName = "Ankit";
let password = "123456";
let enteredPassword = "123456";

if (userName === enteredName) {
    console.log("Name matches");
} else {
    console.log("Name does not match");  // Name does not match
}

if (password === enteredPassword) {
    console.log("Password correct"); // Password correct
} else {
    console.log("Password incorrect");
}




let studentName = "Ankit";
let attendancePercent = 78;
let testScore = 82;

if (attendancePercent < 75) {
    console.log("Attendance is low");
} else {
    console.log("Attendance is good"); // Attendance is good
}

if (testScore >= 80) {
    console.log("Pass the test");   // Pass the test
} else if (testScore >= 60) {
    console.log("Borderline, need improvement");
} else {
    console.log("Fail the test");
}

console.log(`${studentName}, your score is ${testScore}`); // Ankit, your score is 82 



let val1 = "10";
let val2 = 10;
let val3 = "10";

console.log(val1 === val2);        // Predict? false
console.log(val1 === val3);        // Predict? true
console.log(val1 == val2);         // Predict? true 
console.log(val1 > "5");           // Predict? true 
console.log(val2 > "5");           // Predict? ture



console.log("111" > "99");       // Predict? (both strings) false
console.log(111 > 99);           // Predict? (both numbers) true 
console.log("111" > 99);         // Predict? (mixed) true 
console.log(111 > "99");         // Predict? (mixed) true 


console.log("abc" > "abc");         // Predict? fasle
console.log("abc" > "abd");         // Predict? fasle
console.log("cat" > "car");         // Predict? true
console.log("100" > "099");         // Predict? true 
console.log("apple" > "app");       // Predict? true


console.log("--- FINAL VALIDATION ---");
console.log("111" > "99");       // false
console.log(111 > 99);           // true
console.log("111" > 99);         // true
console.log(111 > "99");         // true
console.log("abc" > "abc");      // false
console.log("abc" > "abd");      // false
console.log("cat" > "car");      // true
console.log("100" > "099");      // true
console.log("apple" > "app");    // true