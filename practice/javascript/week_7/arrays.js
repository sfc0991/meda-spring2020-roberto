var myVar = "One Iten";
var firstDay = "Monday";
var secondDay = "Tuesday";

// Array Syntax, a collection of data surrouned by square brackets.
// Consisdered a single value. An Array.

var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Requesting a specific value inside of an Array:
// Use square brackets after calling the varuable with thearray.
// Put the index number inside of the square brackets.
// Example (myArray[7]):

// Arrays are zero-based index, the first item has an index or "address" of 0.

console.log(daysOfWeek[6]);

daysOfWeek[6] = "funday";

console.log(daysOfWeek[6]);

daysOfWeek[12] = "superday";

console.log(daysOfWeek);



// You can mix datatypes in an Array.
// [100, true, "hello"];