function adder(num1, num2) {
    return num1 + num2;
}

console.log(adder(100, "Tony"));
/*
1) 100 and Tony get sent to the Adder function.
2) Adder function runs, and places 100 and Tony, into num1 and num2.
3) Bedore we can returm a value. we need to add/ concatenate. We call num1 num2 for its values, and then add/concatenate them together.
4) The return keyword says that we will return this single Value back to wherever the function was called.
5) The adder function has returned "100Tony" as a single string and is replaced by that value.
6) Because this value is inside of the console.lof arguments area, it will be ent off to the console.log function.
*/



function taxCalculator(itemPrice) {
    var tax = itemPrice * .085;
    var taxedFixedToTwoDecimalPlaces = tax.toFixed(2);
    var taxNumber = parseInt(taxedFixedToTwoDecimalPlaces);

    return taxNumber;
}


// parseInt();


var laptopPrice = 995.95;
var laptopTax = taxCalculator(laptopPrice);

console.log("Price of item: $" + laptopPrice + ". Tax on the item: " + laptopTax + ". Total Cost: $" + (laptopPrice + laptopTax) + ".");




/* Create a function called mathifier.

This function will take two Numbers.

With these two numbers, you will add them, then add the dum to the first number, and then multipy that by the second number.

The Function will return the results.
*/

function mathifier (bikePrice, bikeEssentials) {
    var bikePrice = 1000;
    var bikeEssentials = 300

    return ( (bikePrice + bikeEssentials) * bikeEssentials);
}

console.log(mathifier());




/*
This funtion will be called mathResults.

This function takes only 2 numbers.

This function will console.log the first number and the second number.

This function will console.log each of the following:
The sum of these two numbers.
The difference of these two numbers.
The product of these two numbers.
The dividend of these two numbers.
The leftovers of these two numbers. (modulo)
a
Bonus: each console.log wil tell me what the number is a about.
*/



function mathResults(num1, num2) { 
    console.log(num1, num2)

    // ADDITION
    var sum = num1 + num2;
    console.log(sum)

    // DIFFERENCE
    console.log(num1 - num2);

    // PRODUCT
    var product = num1 * num2;
    console.log(product);

    //DIVIDEND
    console.log = num1 / num2;

    // REMAINDER
    var remainder = num1 % num2;
    console.log(remainder);

}

mathResults(600, 399);












