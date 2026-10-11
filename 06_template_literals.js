let name = "Ankit";
let city = "Delhi";

// print: My name is Ankit and I live in Delhi


console.log (`My name is ${name } and I live in ${city}`);
console.log(" My name is ${name } and I live in ${city}");

//let price = 100;
//console.log(`Price is ${price}`);
//console.log("Price is ${price}");



let quantity = 3;
let price = 250;
// print: 3 items cost 750 rupees



// price *= quantity;    // this method will change the price value forever after this this will become 750 permanantly.

// console.log(`3 items cost ${price}`);

console.log(`3 items cost ${quantity*price}`); // with this we can use price 250 later also


// Q3  as below 

let product = "Laptop";
let cost = 45000;
// print: The Laptop costs 45000 rupees


console.log(`The laptop costs ${cost}`);



let firstName = "Ankit";
let lastName = "Pal";
// print: Full name: Ankit Pal


console.log(`${firstName} ${lastName}`) ;


let a = 10;
let b = 5;
// print: 10 + 5 = 15

console.log(`${a}+${b}=${a+b}`);


let price1 = 100;
let qty = 4;
let discount = 50;
// print: Total after discount is 350

console.log(`Total after discount is ${price1*qty-discount}`);

let marks = 80;
// print: Your marks are 80 and percentage is 80%

console.log(`Your marks are ${marks} and percentage is ${marks}%`);



let testName = "Login Test";
let duration = 2.5;
// print: Login Test completed in 2.5 seconds


console.log(`${testName} completed in ${duration} seconds`);


let price2 = "250";
let qty2 = "4";
// print: Total bill is 1000 rupees

console.log(`Total bill is ${Number(price2)*Number(qty2)}`);


let city2 = "Delhi";
console.log(`Welcome to ${city2}`);


let myName = "Ankit";
let myAge = 28;

// Name: Ankit
// Age: 28

console.log(`Name : ${myName}
Age :${Number(myAge)}`);


let name3 = "Ravi";
console.log('Hello ${name3}');


let token;
console.log(token);
console.log(typeof token);