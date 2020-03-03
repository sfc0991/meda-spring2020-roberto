// Concatenation example
"a word" + "gabe";
"a number" + 100;
"hello" + true; // = hellotrue
100 + "a number"; // 100 a number
100 + 100 + 100 + "hello"; // = 300hello
"hello" + 100 + 100 + 100; // = hello100100100





function sentenceBuilder(person, place, action, item) {
    var firstPart = " went to ";
    var secondPart = ", and ";
    var thirdPart = " but there was a problem, ";
    var fourthPart = " did not work.";

    var completeSentence = person + firstPart + place + secondPart + action + thirdPart + item + fourthPart;

    console.log(completeSentence);
}

sentenceBuilder("Osiah", "Happy Donut", "fought witht the store owner", "the fists");

sentenceBuilder("David", "Six Flags", "took a ride on the Ferris Wheel", "the hydeaulics");





function getNumber() {
    var theSpecialNumber = 42;

    return theSpecialNumber;
}

console.log(getNumber());

var newNumber = getNumber() + 100;

console.log(newNumber);

var results = getNumber() / 50;

console.log(getNumber() / 50);


// Arguments and parameters, thats how you give it information.
function getName() {

    var firstName = "Eduardo";

    return firstName;

}

console.log(getName() + " is a person.");











