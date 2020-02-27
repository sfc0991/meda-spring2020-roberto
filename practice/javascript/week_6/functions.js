// Intro to Functions.

// Example of Functions we have used so far.
console.log ();
Math.round ();
Math.ceil ();
Math.random ();

var currentTime = Date.now().toString();
console.log(currentTime);

// A function taht belongs to a class ("library") is called a "Method".
// A variable tht belongs to a class ("Library") is called a "Property".



console.log("Hello");
console.log("Hello");
console.log("Hello");

// The Syntax Structure of a Function Definition.
function nameofFunction() {
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}

nameofFunction();
nameofFunction();



/*
Similar to CSS Rulesets.

selector {
    property: value;
    property: value;
}

*/


// Booleans must be lowercase.
function whoAmI () {
    console.log (2009);
    console.log ("Roberto");
    console.log (false); 
}

whoAmI();



// Arguments and Parameters.

// "Hello" is the Argument.
// Backlash n \n means new line.
console.log("hello \n", 100, true);

//Text is the parameter (variable) tjat will accept any data that is given to this function.
function takeDataIn (text1, text2) {
    console.log(text1);
    console.log(text2);
}


takeDataIn("How are you doing?");
takeDataIn("Goodbye!");


function hiMyNameIs (text) {
    console.log(text);
}

hiMyNameIs("Roberto Escobar");


function adder(number1, number2) {

    var sum = number1 + number2;

    console.log("The Sum of" + number1 + " and " + number2 + " is " + sum);
}

adder(4000, 19);