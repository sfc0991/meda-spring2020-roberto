var counter  = 0;


while (10 > counter) {
    //code to run per loop.
    counter = counter + 1;
    console.log(counter);

    // The ++ will add a 1 to the excisting variable value;
    //counter++;

    // The -- will subtract a 1 to the existing variable value;
    // counter--;
}

// Inside the parenthesis we have three parts: counter, condition, and code that changers the counter. The third part only runs after the code block.
for (var counter = 0; 10 > counter; counter = counter + 1) {
    console.log(counter);
}

var special = 1;

// Outer loop will run for 10 times, for each time we are executing another loop that will itself run 10 times.
for (var i = 0; i <10; i++) {


    for (var e = 0; e < 10; e++) {
        
        // The inner loop that will run once (ten times).
        for (var o = 0; o < 10; o++) {
            console.log("running! " + special);
            special++;
        }
    }

}

var special = 12;

for (var counter = 12; 49 > counter; counter = counter + 2) {
    console.log(counter);
}


for (var i = 12; i <= 48; i = i + 2) {
    console.log(i); 
}


