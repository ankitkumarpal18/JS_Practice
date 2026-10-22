// CHECKING FOR NULL

// EX1: Is value null?
let value1 = null;
console.log(value1 === null);  // Predict: ?  outpur is true 

// EX2: Is value null?
let value2 = undefined;
console.log(value2 === null);  // Predict: ?  output is false

// EX3: Is value null?
let value3 = 0;
console.log(value3 === null);  // Predict: ?    false

// EX4: Is value null or undefined?
let value4 = null;
console.log(value4 == null);  // Predict: ? (loose equality).  true 

// EX5: Is value null or undefined?
let value5 = undefined;
console.log(value5 == null);  // Predict: ? (loose equality). ture

// ─────────────────────────────

// CHECKING FOR ARRAYS

// EX6: Is value an array?
let arr1 = [1, 2, 3];
console.log(Array.isArray(arr1));  // Predict: ?  true

// EX7: Is value an array?
let arr2 = [];
console.log(Array.isArray(arr2));  // Predict: ? true

// EX8: Is value an array?
let obj = {x: 1}; 
console.log(Array.isArray(obj));  // Predict: ? false

// EX9: typeof vs Array.isArray
let data = [10, 20];
console.log(typeof data);  // Predict: ?  object 
console.log(Array.isArray(data));  // Predict: ? ture

// EX10: Difference between null and undefined.  
console.log(null === undefined);  // Predict: ? (strict) false
console.log(null == undefined);   // Predict: ? (loose)  true 