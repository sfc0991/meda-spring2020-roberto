var myFirstVar = 1000;

var yearsLeft = 1000;

// Units in meters.
var buildingHeightMeters = 100;

var humanAge = 16;

var humanAgeDays = 5840;

// Bad name.
var x = "Super Important";

// Equal sign, everything on the right always happens first.
var sum = 1000 + 50;

var product = 50 * 50;

var dividend = 20 / 10;

var difference = 100 - 10;

// When using variable names on the right side of the equal sign, you are calling for value and then you are runnin the opperators, and finally you are storing the final value into the varuable total.
var total = sum + product;

console.log (total);


// Looked at the built-in Math Library of Javascript.
var radius =40;

var diameterOfCircle = 2 * radius;
var perimeterOfCircle = Math.PI * diameterOfCircle;


console.log("The diameter of the circle with a radius of " + radius + " is " + diameterOfCircle + ". The perimeter of the circle is " + perimeterOfCircle);



// Rounds to the nearest whole number.
var rounded = Math.round(3.14);
console.log(rounded);

// Round up.
var roundedUp = Math.ceil(45.1);

//general rule is you use let when you use var
let someVariable = ;
const FIXEDVARIABLE = "something;"

// Round down.
var roundedDown = Math.floor(45.9); 

// Math.random() returns a value between 0 and .9infinity
// We add a 1 so minimum is now 1, and we miltiply 1000 so maximum is 1000.9.
var someNumber = ( Math.random() * 1000 ) + 1;

// We floor the random nu,ber so decimals are removed.
var roundedRandomNumber = Math.floor(someNumber);
// or use the existing variable:
// someNumber = Math.floor(someNumber);

// Print random rumber.
console.log(roundedRandomNumber);

// Defining multiple variables.
var variableA, variableB;

// Defining multiple variables as well as assigning values.
var variable = "10", variable2 = 100, variable3 = true;

console.log(variable2);

// Caling before Defining.
console.log(howAreYou);
var howAreYou = "Hello";
// You will get Undefined.

var coolVariable = howAreYou = 100;

console.log(coolVariable);

variable = coolVariable;