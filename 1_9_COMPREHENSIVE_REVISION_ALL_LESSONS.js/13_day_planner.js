// ============================================================
// P13_day_planner.js
// LESSON 7: SWITCH
// ============================================================
// REQUIREMENTS:
//  1. let day = "Saturday"
//  2. Use switch(day):
//       "Saturday" and "Sunday" -> print: Weekend
//       "Monday"                -> print: Start of week
//       default                 -> print: Weekday
//  3. Put break in each case
//
// EXPECTED OUTPUT:
//  Weekend
// ============================================================

// YOUR CODE HERE

let day = "Saturday";

switch (day)
{
  case "Saturday":
  case "Sunday":
    
     console.log("Weekend");
    
    break;

    case "Monday":

    console.log("Start of week");

break;

default:
console.log("Weekday");
}
