let fruit = "banana" ;

switch (fruit)
{
case "apple":
    
        console.log("Red fruit");
        break;
    
case "orange":
    
        console.log("orange fruit");
        break;
    
case "banana":

    console.log("yellow fruit") ;

    break;

default:
    console.log("unknown fruit");  // output yellow fruit


}


let month = 5;

switch (month){

case 1 :
    console.log("January");
    break;

case 5:
    console.log("May");
    break;

case 12:
    console.log("December");
    break;

default:

console.log("Other month");  //output May

}

let colour ="purple";

switch(colour)
{
 case "red":
    console.log("stop");
    break;
case "Yellow":
    console.log("slow down");
    break;

case"Green":
   console.log("Go");
break;

default:
    console.log("Unknown colour");  // output unknown colour
}


let day= "sunday";

switch(day)
{
 case "sunday":
 case "saturday":
    {
      console.log("weekend");
    }
    break ;

case "Monday":
case "tuesday":
case "wednesday":
case "Thuresday":
case "Friday":

{
    console.log("weekday");
}

default:
    {
        console.log("invalid day");  // output weekend
    }

}
    
let opration = "multiply";

let a = 10;
let b = 3;

switch (opration)

{
case "add":
    console.log(a+b);
    break;
case "subtract":
    console.log(a-b);
    break;
case "multiply":
    console.log(a*b);
    break;
case"divide":
console.log(a/b);
  break;        // output 30 

}


let role = "admin";
let canDelete = true;

switch (role) {
    case "admin":
        console.log("You are admin");
        if (canDelete) {
            console.log("You can delete posts");
        }
        break;
    case "user":
        console.log("You are user");
        break;
    default:
        console.log("Unknown role");  //output You are admin , You can delete Posts

}