// VALID NAMES

// EX1: camelCase (recommended)
let firstName = "Ankit";
console.log(firstName);  // Predict: ? Ankit

// EX2: underscore style
let first_name = "Pal";
console.log(first_name);  // Predict: ?  Pal

// EX3: dollar sign start
let $price = 100;
console.log($price);  // Predict: ?  100

// EX4: underscore start
let _private = "secret";
console.log(_private);  // Predict: ?  secret

// EX5: numbers in middle
let test123 = "ok";
console.log(test123);  // Predict: ? ok

// EX6: Case sensitive - different variables
let name = "Ankit";
let Name = "Pal";
let NAME = "Kumar";
console.log(name);    // Predict: ?   Ankit 
console.log(Name);    // Predict: ?     Pal
console.log(NAME);    // Predict: ?      Kumar

// EX7: PascalCase (valid but not common for variables)
let MyVariable = "value";
console.log(MyVariable);  // Predict: ?    value
      
// EX8: Complex but valid
let user_$_name = "test";
console.log(user_$_name);  // Predict: ?  test

// EX9: Single underscore
let _ = "underscore";
console.log(_);  // Predict: ?   underscoro

// EX10: Single dollar sign 
let $ = "dollar";
console.log($);  // Predict: ? dollar