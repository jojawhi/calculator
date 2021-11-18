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

let secondOperand = "";

let operator = "";

let operatorIndex;

let equation = "";

// let result = displayResult.textContent;

let result = "";


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



// Event Listeners

addButton.addEventListener("click", () => {

    if (firstOperand === "" && displayResult.textContent === "") {

        firstOperand = displayEquation.textContent;
        operator = "+";
        displayEquation.textContent += " + "

    } else if (firstOperand === "" && displayResult.textContent != "") {

        firstOperand = result;
        operator = "+";
        displayEquation.textContent = `${firstOperand} ${operator} `;
        displayResult.textContent = "";

    } else if (firstOperand != "" && operator != "") {

        getOperatorIndex(displayEquation.textContent, `${operator}`);
        secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
        
        operate(firstOperand, secondOperand, operator);
        displayResult.textContent = result;
        firstOperand = result;
        secondOperand = "";
        operator = "+";
        displayEquation.textContent = `${firstOperand} ${operator} `;

    } else if (firstOperand != "" && secondOperand === "") {

            operator = "+";

            getOperatorIndex(displayEquation.textContent, "+");
            secondOperand = displayEquation.textContent.slice((operatorIndex + 2));
            
            operate(firstOperand, secondOperand, operator);
            displayResult.textContent = result;
            firstOperand = result;
            secondOperand = "";
            displayEquation.textContent = result;
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


zeroButton.addEventListener("click", () => {
    
    /*
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    */
    
    if (firstOperand != "") {
        secondOperand += "0";
        displayEquation.textContent += "0";
    } else {
        displayEquation.textContent += "0";
    }
    
});

oneButton.addEventListener("click", () => {

    /*
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    */
    
    if (firstOperand != "") {
        secondOperand += "1";
        displayEquation.textContent += "1";
    } else {
        displayEquation.textContent += "1";
    }
 
});

twoButton.addEventListener("click", () => {
    
    /*
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    */
    
    if (firstOperand != "") {
        secondOperand += "2";
        displayEquation.textContent += "2";
    } else {
        displayEquation.textContent += "2";
    }

});

threeButton.addEventListener("click", () => {
    
    /*
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    */
    
    if (firstOperand != "") {
        secondOperand += "3";
        displayEquation.textContent += "3";
    } else {
        displayEquation.textContent += "3";
    }

});

fourButton.addEventListener("click", () => {
    /*
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    */
    
    if (firstOperand != "") {
        secondOperand += "4";
        displayEquation.textContent += "4";
    } else {
        displayEquation.textContent += "4";
    }

});

fiveButton.addEventListener("click", () => {
    
    /*
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    */
    
    if (firstOperand != "") {
        secondOperand += "5";
        displayEquation.textContent += "5";
    } else {
        displayEquation.textContent += "5";
    }

});

sixButton.addEventListener("click", () => {
    
    /*
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    */
    
    if (firstOperand != "") {
        secondOperand += "6";
        displayEquation.textContent += "6";
    } else {
        displayEquation.textContent += "6";
    }

});

sevenButton.addEventListener("click", () => {
    
    /*
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    */
    
    if (firstOperand != "") {
        secondOperand += "7";
        displayEquation.textContent += "7";
    } else {
        displayEquation.textContent += "7";
    }

});

eightButton.addEventListener("click", () => {
    
    /*
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    */
    
    if (firstOperand != "") {
        secondOperand += "8";
        displayEquation.textContent += "8";
    } else {
        displayEquation.textContent += "8";
    }

});

nineButton.addEventListener("click", () => {
    
    /*
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    */
    
    if (firstOperand != "") {
        secondOperand += "9";
        displayEquation.textContent += "9";
    } else {
        displayEquation.textContent += "9";
    }

});

pointButton.addEventListener("click", () => {
    
    /*
    if (displayResult.textContent != "") {
        result = "";
        displayResult.textContent = "";
        displayEquation.textContent = "";
    }
    */
    
    if (firstOperand != "") {
        secondOperand += ".";
        displayEquation.textContent += ".";
    } else {
        displayEquation.textContent += ".";
    }
});



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