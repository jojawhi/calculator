const displayContainer = document.querySelector("#displayContainer");
const displayEquation = document.querySelector("#displayEquation");
const displayResult = document.querySelector("#displayResult");

// Map all numeric inputs
const numberButtonElements = document.querySelectorAll('.numberButton[data-key]')
let numberButtons = []
for (const buttonElement of numberButtonElements) {
    const value = buttonElement.getAttribute('value')
    numberButtons[value] = buttonElement
}

const deleteButton = document.querySelector("#deleteButton");
const clearButton = document.querySelector("#clearButton");
const addButton = document.querySelector("#addButton");
const subButton = document.querySelector("#subButton");
const multButton = document.querySelector("#multButton");
const diviButton = document.querySelector("#diviButton");
const equButton = document.querySelector("#equButton");


//Keystroke listener solution from https://github.com/mrbuddh4/calculator
window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.key}']`); // keyCode property is deprecated

    if (key) { // Fix null error when loading app for first time
        key.click();
    }
});


let firstOperand = "";

let secondOperand = "";

let operator = "";

let operatorIndex;

let equation = "";

// let result = displayResult.textContent;

let result = "";

let roundedResult = roundResult(result, 10);


// Functions

function add(firstOperand, secondOperand) {

    result = Number(firstOperand) + Number(secondOperand);
    
}


function subtract(firstOperand, secondOperand) {

    result = Number(firstOperand) - Number(secondOperand);
    
}


function multiply(firstOperand, secondOperand) {

    result = Number(firstOperand) * Number(secondOperand);
    
}


function divide(firstOperand, secondOperand) {
    
    if (secondOperand === 0 || secondOperand === "0") {

        result = "NOPE!";

    } else if (secondOperand != 0) {

        result = Number(firstOperand) / Number(secondOperand);

    }


}

function operate(firstOperand, secondOperand, operator) {

    if (operator === "+") {

        add(firstOperand, secondOperand);

    } else if (operator === "-") {

        subtract(firstOperand, secondOperand);

    } else if (operator === "x") {

        multiply(firstOperand, secondOperand);

    } else if (operator === "/") {

        divide(firstOperand, secondOperand);

    }

    operator = "";

    return result;

}


function getOperatorIndex(string, operatorString) {
    operatorIndex = string.indexOf(operatorString);
    return operatorIndex;
}

function roundResult(number, places) {
    return parseFloat(Math.round(number + "e" + places) + "e-" + places);
}


// Event Listeners

addButton.addEventListener("click", () => {

    if (firstOperand === "" && displayResult.textContent === "") {

        firstOperand = displayEquation.textContent;
        operator = "+";
        displayEquation.textContent += " + "

    } else if (firstOperand === "" && displayResult.textContent != "") {

        firstOperand = roundedResult;
        operator = "+";
        displayEquation.textContent = `${firstOperand} ${operator} `;
        displayResult.textContent = "";

    } else if (firstOperand != "" && operator != "") {

        getOperatorIndex(displayEquation.textContent, `${operator}`);
        secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
        
        operate(firstOperand, secondOperand, operator);
        displayResult.textContent = roundedResult;
        firstOperand = roundedResult;
        secondOperand = "";
        operator = "+";
        displayEquation.textContent = `${firstOperand} ${operator} `;

    } else if (firstOperand != "" && secondOperand === "") {

            operator = "+";

            getOperatorIndex(displayEquation.textContent, "+");
            secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
            
            operate(firstOperand, secondOperand, operator);
            displayResult.textContent = roundedResult;
            firstOperand = roundedResult;
            secondOperand = "";
            displayEquation.textContent = roundedResult;
            displayEquation.textContent += " + ";

    }
       
    console.log(firstOperand, secondOperand, operator);  

})


subButton.addEventListener("click", () => {

    if (firstOperand === "" && displayResult.textContent === "") {

        firstOperand = displayEquation.textContent;
        operator = "-";
        displayEquation.textContent += " - "

    } else if (firstOperand === "" && displayResult.textContent != "") {

        firstOperand = result;
        operator = "-";
        displayEquation.textContent = `${firstOperand} ${operator} `;
        displayResult.textContent = "";

    } else if (firstOperand != "" && operator != "") {
        
        getOperatorIndex(displayEquation.textContent, `${operator}`);
        secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
        
        operate(firstOperand, secondOperand, operator);
        displayResult.textContent = result;
        firstOperand = result;
        secondOperand = "";
        operator = "-";
        displayEquation.textContent = `${firstOperand} ${operator} `;

    } else if (firstOperand != "" && secondOperand === "") {

        operator = "-";
        
        getOperatorIndex(displayEquation.textContent, "-");
        secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
        operate(firstOperand, secondOperand, operator);
        displayResult.textContent = result;
        firstOperand = result;
        secondOperand = "";
        displayEquation.textContent = result;
        displayEquation.textContent += " - ";

    }

    console.log(firstOperand, secondOperand, operator);  

})

multButton.addEventListener("click", () => {

    if (firstOperand === "" && displayResult.textContent === "") {

        firstOperand = displayEquation.textContent;
        operator = "x";
        displayEquation.textContent += " x "

    } else if (firstOperand === "" && displayResult.textContent != "") {

        firstOperand = result;
        operator = "x";
        displayEquation.textContent = `${firstOperand} ${operator} `;
        displayResult.textContent = "";

    } else if (firstOperand != "" && operator != "") {
        
        getOperatorIndex(displayEquation.textContent, `${operator}`);
        secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
        
        operate(firstOperand, secondOperand, operator);
        displayResult.textContent = result;
        firstOperand = result;
        secondOperand = "";
        operator = "x";
        displayEquation.textContent = `${firstOperand} x `;

    } else if (firstOperand != "" && secondOperand === "") {

        operator = "x";
        
        getOperatorIndex(displayEquation.textContent, "x");
        secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
        operate(firstOperand, secondOperand, operator);
        displayResult.textContent = result;
        firstOperand = result;
        secondOperand = "";
        displayEquation.textContent = result;
        displayEquation.textContent += " x ";

    }

    console.log(firstOperand, secondOperand, operator);

})

diviButton.addEventListener("click", () => {

    if (firstOperand === "" && displayResult.textContent === "") {

        firstOperand = displayEquation.textContent;
        operator = "/";
        displayEquation.textContent += " / "

    } else if (firstOperand === "" && displayResult.textContent != "") {

        firstOperand = result;
        operator = "/";
        displayEquation.textContent = `${firstOperand} ${operator} `;
        displayResult.textContent = "";

    } else if (firstOperand != "" && operator != "") {
        
        getOperatorIndex(displayEquation.textContent, `${operator}`);
        secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
        
        operate(firstOperand, secondOperand, operator);
        displayResult.textContent = result;
        firstOperand = result;
        secondOperand = "";
        operator = "/";
        displayEquation.textContent = `${firstOperand} ${operator} `;

    } else if (firstOperand != "" && secondOperand === "") {

        operator = "/";
        
        getOperatorIndex(displayEquation.textContent, "/");
        secondOperand = displayEquation.textContent.slice((operatorIndex + 2));

        operate(firstOperand, secondOperand, operator);

        displayResult.textContent = result;
        firstOperand = result;

        secondOperand = "";
        displayEquation.textContent = result;
        displayEquation.textContent += " / ";

        /*
        if (secondOperand != 0 || secondOperand != "0") {

            operate(firstOperand, secondOperand, operator);
            displayResult.textContent = result;
            firstOperand = result;
            displayEquation.textContent = result;
            displayEquation.textContent += " / ";

        } else if (secondOperand === 0 || secondOperand === "0") {

            result = "NOPE!";
            displayResult.textContent = result;

        }
        */
    }

})


equButton.addEventListener("click", () => {

    console.log(firstOperand, secondOperand, operator);

    if (firstOperand === "") {

        result = "ERROR!";
        displayResult.textContent = result;

        /*
        firstOperand = displayEquation.textContent;
        displayEquation.textContent += " =";
        result = firstOperand;
        displayResult.textContent = result;
        */

    } else if (operator != "" && secondOperand === "") {

        result = "ERROR!";
        displayResult.textContent = result;

    } else if (secondOperand != "") {

        displayEquation.textContent += " =";
        operate(firstOperand, secondOperand, operator);
        firstOperand = "";
        secondOperand = "";
        operator = "";
        displayResult.textContent = result;

    }
    
})


clearButton.addEventListener("click", () => {
    
    displayEquation.textContent = "";
    displayResult.textContent = ""

    firstOperand = "";
    secondOperand = "";
    operator = "";
    result = "";
    
})

deleteButton.addEventListener("click", () => {

    let operatorArray = ["+", "-", "x", "/"];

    for (i = 0; i < operatorArray.length; i++) {

        getOperatorIndex(displayEquation.textContent, operatorArray[i]);

        if (operatorIndex > -1) { break; }

    }

    if (operatorIndex === -1) {

        displayEquation.textContent = displayEquation.textContent.slice(0, (displayEquation.textContent.length - 1));
        firstOperand = "";

    } else if (operatorIndex > -1 && operatorIndex == (displayEquation.textContent.length - 2)) {

        displayEquation.textContent = displayEquation.textContent.slice(0, (displayEquation.textContent.length - 3));
        operator = "";
        firstOperand = "";

    } else if (operatorIndex > -1 && operatorIndex < (displayEquation.textContent.length - 2)) {

        displayEquation.textContent = displayEquation.textContent.slice(0, (displayEquation.textContent.length - 1));
        secondOperand = "";
    }

})

// This is perfectly loop-able!
for (const value in numberButtons) {
    const element = numberButtons[value]

    element.addEventListener('click', () => {
        if (firstOperand !== '') {
            secondOperand += value;
            displayEquation.textContent += value;
        } else {
            displayEquation.textContent += value;
        }
    })
}

// To-do

/*

- make roundResult() work
- fix formatting of display for long numbers

*/

/*

New algorithm

Base functionality

1. Create three variables: firstOperand, secondOperand, and operator
2. Create 4 functions, add(), subtract(), multiply(), divide()
2. Create a function, operate(), that takes the three variables as arguments and uses operator to determine which operation function to run
4. Create event listeners for the number and operator buttons that populate the display on click
5. Create event listeners for the operator buttons that do the following:
    //first equation
    a. if firstOperand is empty, change its value to the current display content and change operator's value to the clicked operator
    b. if firstOperand isn't empty, change secondOperand's value to the display content after the operator, run operate(), populate the display with the result,
       assign result value to firstOperand, replace displayEquation content with firstOperand
6. Create event listener for the equals button that does the following:
    a. if firstOperand is empty change its value to the current displayEquation content, add = to displayEquation.textContent, and assign firstOperand to result
    b. if secondOperand is empty, return error
    c. if secondOperand is not empty, add = to displayEquation.textContent, run operate(), populate the display with the result, assign result value to firstOperand,

*/