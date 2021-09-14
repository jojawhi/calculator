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

displayEquation.textContent = "";
displayResult.textContent = "";


let firstOperand = "";

let secondOperand = "";

let result = "";

let addClicked = false;
let subClicked = false;
let multClicked = false;
let diviClicked = false;

zeroButton.addEventListener("click", () => {
    
    if (firstOperand != "") {
        secondOperand += "0";
        displayEquation.textContent += "0";
    } else {
        displayEquation.textContent += "0";
    }
    
});

oneButton.addEventListener("click", () => {

    if (typeof result === Number) {
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

    if (firstOperand != "") {
        secondOperand += "2";
        displayEquation.textContent += "2";
    } else {
        displayEquation.textContent += "2";
    }

});

threeButton.addEventListener("click", () => {
    displayEquation.textContent += "3";
});

fourButton.addEventListener("click", () => {
    displayEquation.textContent += "4";
});

fiveButton.addEventListener("click", () => {
    displayEquation.textContent += "5";
});

sixButton.addEventListener("click", () => {
    displayEquation.textContent += "6";
});

sevenButton.addEventListener("click", () => {
    displayEquation.textContent += "7";
});

eightButton.addEventListener("click", () => {
    displayEquation.textContent += "8";
});

nineButton.addEventListener("click", () => {
    displayEquation.textContent += "9";
});

pointButton.addEventListener("click", () => {
    displayEquation.textContent += ".";
});

addButton.addEventListener("click", () => {
    addClicked = true;
    firstOperand = Number(displayEquation.textContent);
    displayEquation.textContent += "+";
    console.log(firstOperand);
})

subButton.addEventListener("click", () => {
    subClicked = true;
    firstOperand = Number(displayEquation.textContent);
    displayEquation.textContent += "-";
})

multButton.addEventListener("click", () => {
    multClicked = true;
    firstOperand = Number(displayEquation.textContent);
    displayEquation.textContent += "*";
})

diviButton.addEventListener("click", () => {
    diviClicked = true;
    firstOperand = Number(displayEquation.textContent);
    displayEquation.textContent += "/";
})

equButton.addEventListener("click", () => {
    displayEquation.textContent += " =";

    if (addClicked === true) {
        result = Number(firstOperand) + Number(secondOperand);
    } else if (subClicked === true) {
        result = Number(firstOperand) - Number(secondOperand);
    } else if (multClicked === true) {
        result = Number(firstOperand) * Number(secondOperand);
    } else if (diviClicked === true) {
        result = Number(firstOperand) / Number(secondOperand);
    }

    displayResult.textContent = result;

    console.log(typeof result);

    addClicked = false;
    subClicked = false;
    multClicked = false;
    diviClicked = false;
    
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