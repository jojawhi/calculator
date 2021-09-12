const displayContainer = document.querySelector("#displayContainer");
const displayEquation = document.querySelector("#displayEquation");
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


zeroButton.addEventListener("click", () => {
    displayEquation.textContent += "0";
});

oneButton.addEventListener("click", () => {
    displayEquation.textContent += "1";
});

twoButton.addEventListener("click", () => {
    displayEquation.textContent += "2";
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
    displayEquation.textContent += "+";
})

subButton.addEventListener("click", () => {
    displayEquation.textContent += "-";
})

multButton.addEventListener("click", () => {
    displayEquation.textContent += "*";
})

diviButton.addEventListener("click", () => {
    displayEquation.textContent += "/";
})

equButton.addEventListener("click", () => {
    displayEquation.textContent += "=";
})

clearButton.addEventListener("click", () => {
    displayEquation.textContent = "";
})