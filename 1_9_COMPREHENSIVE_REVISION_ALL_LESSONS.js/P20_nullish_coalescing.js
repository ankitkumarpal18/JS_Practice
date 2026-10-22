// ============================================================
// P20_nullish_coalescing.js
// CHAPTER 4: NULLISH COALESCING (??)
// ============================================================
// REQUIREMENTS:
//  1. let apiResponse = null
//     Print: apiResponse ?? "No data"
//  2. let username = "Pramod"
//     Print: username ?? "Guest"
//  3. let count = 0
//     Print: count ?? 10
//  4. let count2 = 0
//     Print: count2 || 10
//     (compare the result with step 3)
//  5. let theme = undefined
//     Print: theme ?? "light"
//  6. Write a comment above each print saying WHY it gives that result
//
// EXPECTED OUTPUT (one value per line):
//  No data
//  Pramod
//  0
//  10
//  light
// ============================================================

// YOUR CODE HERE

let apiResponse = null ;
console.log(apiResponse ?? "No data");  // bzc of ?? api response is null so "nodata " will be print

let username = "Pramod"
console.log(username ?? "Guest");   // username have value so output is Pramod

let count = 0
console.log(count ?? 10); // count has value zero so ouput is 0

let count2 = 0
console.log(count2 || 10); //  bcz of || obrator here 0 is falsy so output will be 10

let theme = undefined

console.log(theme ?? "light"); //  undefined is falsy in ?? case so ouput is light
