const displayContainer = document.querySelector("#displayContainer");
const displayEquation = document.querySelector("#displayEquation");
const displayResult = document.querySelector("#displayResult");
const zeroButton = document.querySelector("#zeroButton");
const oneButton = document.querySelector("#oneButton");
const twoButton = document.querySelector("#twoButton");
const threeButton = document.querySelector("#threeButton");
const fourButton = document.querySelector("#fourButton");
const fiveButton = document.querySelector("#fiveButton");
const sixButton = document.querySelector("#sixButton");
const sevenButton = document.querySelector("#sevenButton");
const eightButton = document.querySelector("#eightButton");
const nineButton = document.querySelector("#nineButton");
const pointButton = document.querySelector("#pointButton");

const clearButton = document.querySelector("#clearButton");
const addButton = document.querySelector("#addButton");
const subButton = document.querySelector("#subButton");
const multButton = document.querySelector("#multButton");
const diviButton = document.querySelector("#diviButton");
const equButton = document.querySelector("#equButton");




let firstOperand = "";

let operator = "";

let secondOperand = "";

let operationArray = [];

let operatorIndex;

let equation = "";

// let result = displayResult.textContent;

let result = "";

let addClicked = false;
let subClicked = false;
let multClicked = false;
let diviClicked = false;



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
    
    if (secondOperand != 0) {

        result = Number(firstOperand) / Number(secondOperand);
        

    } else if (secondOperand === 0) {

        return "ERROR!";

    }

}

function operate(firstOperand, secondOperand) {

    if (addClicked === true) {

        add(firstOperand, secondOperand);

    } else if (subClicked === true) {

        subtract(firstOperand, secondOperand);

    } else if (multClicked === true) {

        multiply(firstOperand, secondOperand);

    } else if (diviClicked === true) {

        divide(firstOperand, secondOperand);

    }

    return result;

}


function getOperatorIndex(string, operatorString) {
    operatorIndex = string.indexOf(operatorString);
    return operatorIndex;
}


// Event Listeners

zeroButton.addEventListener("click", () => {
    
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    
    if (firstOperand != "") {
        secondOperand += "0";
        displayEquation.textContent += "0";
    } else {
        displayEquation.textContent += "0";
    }
    
});

oneButton.addEventListener("click", () => {

    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    
    if (firstOperand != "") {
        secondOperand += "1";
        displayEquation.textContent += "1";
    } else {
        displayEquation.textContent += "1";
    }
 
});

twoButton.addEventListener("click", () => {

    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    
    if (firstOperand != "") {
        secondOperand += "2";
        displayEquation.textContent += "2";
    } else {
        displayEquation.textContent += "2";
    }

});

threeButton.addEventListener("click", () => {

    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    
    if (firstOperand != "") {
        secondOperand += "3";
        displayEquation.textContent += "3";
    } else {
        displayEquation.textContent += "3";
    }

});

fourButton.addEventListener("click", () => {
    
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    
    if (firstOperand != "") {
        secondOperand += "4";
        displayEquation.textContent += "4";
    } else {
        displayEquation.textContent += "4";
    }

});

fiveButton.addEventListener("click", () => {
    
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    
    if (firstOperand != "") {
        secondOperand += "5";
        displayEquation.textContent += "5";
    } else {
        displayEquation.textContent += "5";
    }

});

sixButton.addEventListener("click", () => {
    
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    
    if (firstOperand != "") {
        secondOperand += "6";
        displayEquation.textContent += "6";
    } else {
        displayEquation.textContent += "6";
    }

});

sevenButton.addEventListener("click", () => {
    
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    
    if (firstOperand != "") {
        secondOperand += "7";
        displayEquation.textContent += "7";
    } else {
        displayEquation.textContent += "7";
    }

});

eightButton.addEventListener("click", () => {
    
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    
    if (firstOperand != "") {
        secondOperand += "8";
        displayEquation.textContent += "8";
    } else {
        displayEquation.textContent += "8";
    }

});

nineButton.addEventListener("click", () => {
    
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    
    if (firstOperand != "") {
        secondOperand += "9";
        displayEquation.textContent += "9";
    } else {
        displayEquation.textContent += "9";
    }

});

pointButton.addEventListener("click", () => {
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    
    if (firstOperand != "") {
        secondOperand += ".";
        displayEquation.textContent += ".";
    } else {
        displayEquation.textContent += ".";
    }
});

addButton.addEventListener("click", () => {
    /*
    addClicked = true;
    firstOperand = Number(displayEquation.textContent);
    displayEquation.textContent += " + ";
    console.log(firstOperand);
    */
    
    addClicked = true;
    subClicked = false;
    multClicked = false;
    diviClicked = false;

    operator = "+";

    if (firstOperand == "") {

        firstOperand = Number(displayEquation.textContent);
        operationArray[0] = firstOperand;
        operationArray[1] = operator;
        displayEquation.textContent += " + ";
        console.log(operationArray);
        console.log(firstOperand);

    } else if (firstOperand != "") {

        displayEquation.textContent += " + ";

    }

})

subButton.addEventListener("click", () => {
    /*
    subClicked = true;
    firstOperand = Number(displayEquation.textContent);
    displayEquation.textContent += " - ";
    */
    
    addClicked = false;
    subClicked = true;
    multClicked = false;
    diviClicked = false;

    operator = "-";

    if (firstOperand == "") {

        firstOperand = Number(displayEquation.textContent);
        operationArray[0] = firstOperand;
        operationArray[1] = operator;
        displayEquation.textContent += " - ";
        console.log(operationArray);
        console.log(firstOperand);

    } else if (firstOperand != "") {

        displayEquation.textContent += " - ";

    }

})

multButton.addEventListener("click", () => {
    
    /*
    multClicked = true;
    firstOperand = Number(displayEquation.textContent);
    displayEquation.textContent += " x ";
    */

    addClicked = false;
    subClicked = false;
    multClicked = true;
    diviClicked = false;

    operator = "*";

    if (firstOperand == "") {

        firstOperand = Number(displayEquation.textContent);
        operationArray[0] = firstOperand;
        operationArray[1] = operator;
        displayEquation.textContent += " x ";
        console.log(operationArray);
        console.log(firstOperand);

    } else if (firstOperand != "") {

        displayEquation.textContent += " x ";

    }

})

diviButton.addEventListener("click", () => {

    /*
    diviClicked = true;
    firstOperand = Number(displayEquation.textContent);
    displayEquation.textContent += " / ";
    */
   
    addClicked = false;
    subClicked = false;
    multClicked = false;
    diviClicked = true;

    operator = "/";

    if (firstOperand == "") {

        firstOperand = Number(displayEquation.textContent);
        operationArray[0] = firstOperand;
        operationArray[1] = operator;
        displayEquation.textContent += " / ";
        console.log(operationArray);
        console.log(firstOperand);

    } else if (firstOperand != "") {

        displayEquation.textContent += " / ";

    }

})


equButton.addEventListener("click", () => {

    if (addClicked === true) {
        getOperatorIndex(displayEquation.textContent, "+");
        secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
        operationArray[2] = Number(secondOperand);
    } else if (subClicked === true) {
        getOperatorIndex(displayEquation.textContent, "-");
        secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
        operationArray[2] = secondOperand;
    } else if (multClicked === true) {
        getOperatorIndex(displayEquation.textContent, "x");
        secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
        operationArray[2] = secondOperand;
    } else if (diviClicked === true) {
        getOperatorIndex(displayEquation.textContent, "/");
        secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
        operationArray[2] = secondOperand;
    }

    displayEquation.textContent += " = ";

    operate(operationArray[0], operationArray[2]);

    /*
    if (addClicked === true) {
        result = Number(firstOperand) + Number(secondOperand);
    } else if (subClicked === true) {
        result = Number(firstOperand) - Number(secondOperand);
    } else if (multClicked === true) {
        result = Number(firstOperand) * Number(secondOperand);
    } else if (diviClicked === true) {
        result = Number(firstOperand) / Number(secondOperand);
    }
    */

    displayResult.textContent = result;

    console.log(secondOperand);

    addClicked = false;
    subClicked = false;
    multClicked = false;
    diviClicked = false;

    firstOperand = "";
    secondOperand = "";
    
})

clearButton.addEventListener("click", () => {
    displayEquation.textContent = "";
    displayResult.textContent = ""

    firstOperand = "";
    secondOperand = "";

    addClicked = false;
    subClicked = false;
    multClicked = false;
    diviClicked = false;
    
})



// To-do

/*
- figure out how to allow chaining operators, look into arrays for this
// RegEx from https://stackoverflow.com/questions/62712250/chaining-multiple-operations-in-a-javascript-calculator
// let calculation = str.match(/\d+\.\d+|\d+|[^0-9]/g);

*/

/*

New algorithm

Base functionality

1. Create three variables: firstOperand, secondOperand, and operator
2. Create an empty array, operationArray, to store the 3 variables before running an operation
3. Create a function, operate(), that takes the array items as arguments to run an equation
4. Create event listeners for the number and operator buttons that populate the display on click
5. Create event listeners for the operator buttons that do the following:
    a. if firstOperand is empty, change its value to the current display content and change operator's value to the clicked operator
    b. if firstOperand isn't empty, change secondOperand's value to the display content after the operator and return the operation

push equation string to operationArray

*/