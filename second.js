console.log("Expressions and Conditions");
// Using logical operator to find age of a person lies between 10 to 20
let person_age= 35;
if (person_age>10 && person_age<20) {
    console.log("Person's age is between 10 and 20");
} else {
    console.log("Person's age does not lie between 10 and 20");
}
// Switch case statement demostration(if, if else, if else if)


// To check a number is divisible by both 2 and 3
let num1= prompt("Enter a number:")
if ((num1%2 && num1%3)==0) {
    console.log(" Number is divisible by both 2 and 3");
}
else{
    console.log(" Number cannot be divided by both 2 and 3");
}
//To check a number is divisible by either 2 or 3
let num2=prompt("Enter second number");
if (num2%2==0 || num2%3==0) {
    console.log(" Number is divisible by 2 or 3");
}
else{
    console.log(" Number cannot be divided by either 2 or 3");
}
//age checking for driving
let age=19;
console.log((age>=18)?"You can drive":"You cannot drive");
