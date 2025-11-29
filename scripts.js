/****************** YOUR NAME: Dialyn Villostas

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/
"use strict";

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
let modelName = "XYZ";
let duration = 0

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

function recalculate() {
    let costSpan = document.getElementById("calculated-cost"); // getting the calculated-cost <span>
    let total = 0 // variable to hold the total

    // checking the model and calculate
    if  (modelName === "XYZ") {
        total = duration * 100;
    } else if (modelName === "CPRG") {
        total = duration *213;
    }

// update the page
    costSpan.textContent = total.toFixed(2);
}


/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

let modelButton = document.getElementById("model-button");

function changeModel() {
    // getting the <span> showing the model text
    let modelTextSpan = document.getElementById("model-text");

    // toogle the model
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelTextSpan.textContent = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelTextSpan.textContent = "Model ZYZ"
    }
    // recalculate cost
    recalculate();
}

// making the button clickable
modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

let durationButton = document.getElementById("duration-button");

function changeDuration() {

    let durationSpan =  document.getElementById("duration-text");

    // asking user for days
    let userInput = prompt("Enter number days to book:" );

    // converting to number
    let newNumber = Number(userInput);

    //basic validation
    if (!isNan(newNumber) && newNumber >= 0) {
        duration = newNumber;
        durationSpan.textContent = duration;
        recalculate();
    } else {
        alert("Please enter a valid number.");
    }
}

// enable click
durationButton.addEventListener("click, changeDuration");



