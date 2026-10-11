let a = "28";

let b = 25;

console.log(a);
console.log(b);

console.log(a+b);

console.log(Number(a)+b);


console.log(10 + 5);
console.log("10" + 5);
console.log(10 + "5");
console.log("10" + "5");



let x = "99";

console.log(typeof x);

x = Number(x);

console.log(typeof x);



// 1st way
let price = "100";
let tax = 50;
console.log(price + tax);

price = Number(price);

console.log(price +tax);

//2nd way

console.log(Number(price)+tax);



let item1 = "250";
let item2 = "150";
console.log(item1 + item2);


console.log(Number(item1)+Number(item2));


let marks1 = "40";
let marks2 = "35";
console.log(marks1 + marks2);


console.log(Number(marks1)+Number(marks2));


let d;
let c = null;

console.log(d);
console.log(c);
console.log(typeof d);
console.log(typeof c);


console.log(Number("12.5"));
console.log(Number(""));
console.log(Number("50 kg"));
console.log(Number(true));


let test1 = true;
let test2 = false;
let test3 = true;

console.log(Number(test1) + Number(test2) + Number(test3));   // 2

