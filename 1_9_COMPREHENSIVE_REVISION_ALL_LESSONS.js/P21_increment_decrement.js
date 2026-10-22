// ============================================================
// P21_increment_decrement.js
// CHAPTER 4: INCREMENT & DECREMENT (++ and --)
// ============================================================
// REQUIREMENTS:
//  1. let a = 10. // 
//     let b = ++a
//     Print b, then a.  b=11 .a =11
//
//  2. let c = 10.   
//     let d = c++.       d=10 , c=11
//     Print d, then c
//
//  3. let e = 10.        f = 9 , e = 9
//     let f = --e
//     Print f, then e
//
//  4. let g = 10.       h = 10 , g =9
//     let h = g--
//     Print h, then g
// 
//  5. let p = 10.          
//     console.log(++p + p).  11+11 = 22 
//     Print p.     p will be 11 now 
//     (predict before running: ++p runs first, then p is read)
//
//  6. let i = 1.       
//     let result = i++ + ++i.          1 + 3 
//     Print result, then i.       result is 4 now and i is 3 now 
//
//  7. let x = 5
//     let y = x-- - --x.      5 - 3   y = 2 
//     Print y, then x.    x= 3 


// P21_increment_decrement.js
// CHAPTER 4: INCREMENT & DECREMENT (++ and --)

// 1
let a = 10;
let b = ++a;
console.log(b);
console.log(a);

// 2
let c = 10;
let d = c++;
console.log(d);
console.log(c);

// 3
let e = 10;
let f = --e;
console.log(f);
console.log(e);

// 4
let g = 10;
let h = g--;
console.log(h);
console.log(g);

// 5
let p = 10;
console.log(++p + p);
console.log(p);

// 6
let i = 1;
let result = i++ + ++i;
console.log(result);
console.log(i);

// 7
let x = 5;
let y = x-- - --x;
console.log(y);
console.log(x);