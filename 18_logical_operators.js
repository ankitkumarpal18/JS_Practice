// Q1
let x = 5;
let y = 10;
if (x > 0 && y > 0) {
    console.log("Both positive");
} else {
    console.log("At least one not positive");
}

// Q2
let isWeekend = true;
let hasWork = false;
if (isWeekend || hasWork) {
    console.log("Can relax");
} else {
    console.log("Must work");
}

// Q3
let score = 45;
if (score >= 60 && score <= 100) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Q4
let admin = false;
let owner = true;
if (admin || owner) {
    console.log("Has permission");
} else {
    console.log("No permission");
}

// Q5
let a = true;
let b = false;
let c = true;
if (a && b && c) {
    console.log("All true");
} else {
    console.log("Not all true");
}

// Q6
let x1 = 0;
let y1 = 0;
if (x1 > 0 || y1 > 0) {
    console.log("At least one positive");
} else {
    console.log("Both zero or negative");
}

// Q7
let age = 20;
let hasID = true;
if (!(age >= 18 && hasID)) {
    console.log("Entry denied");
} else {
    console.log("Entry allowed");
}

// Q8
let isPremium = false;
let hasCredits = true;
if (isPremium || hasCredits) {
    console.log("Can access");
} else {
    console.log("Cannot access");
}

// Q9
let grade = "A";
let attendance = 95;
if (grade === "A" && attendance >= 90) {
    console.log("Top student");
} else {
    console.log("Good student");
}

// Q10
let username = "admin";
let isLoggedIn = false;
if (username === "admin" || isLoggedIn) {
    console.log("Welcome admin");
} else {
    console.log("Not admin");
}