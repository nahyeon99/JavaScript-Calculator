const result = document.querySelector(".js-result");
const reset = document.querySelector(".js-reset");
const equals = document.querySelector(".js-equals");
const numbers = Array.from(document.querySelectorAll(".js-number"));
const operators = Array.from(document.querySelectorAll(".js-operator"));

let firstValue = "",
    firstDone,
    secondValue = "",
    secondDone,
    currentOperator = "";

function doOperation() {
    const intValueA = parseInt(firstValue, 10);
    const intValueB = parseInt(secondValue, 10);
    switch(currentOperator){
        case "+":
            return intValueA + intValueB;
        case "-":
            return intValueA - intValueB;
        case "*":
            return intValueA * intValueB;
        case "/":
            return intValueA / intValueB;
        default:
            return;
    }
}

function calculator() {
    const operation = doOperation();
    firstValue = operation;
    result.innerHTML = firstValue;
    secondValue = "";
    secondDone = false;
}

function handleNumberClick(e) {
    const clickedNum = e.target.innerHTML;
    if(!firstDone){
        firstValue = firstValue + clickedNum;
        result.innerHTML = firstValue;
    } else {
        secondValue = secondValue + clickedNum;
        result.innerHTML = secondValue;
        secondDone = true;
    }
}

function handleOperatorClick(e) {
    const clickedOperator = e.target.innerHTML;
    currentOperator = clickedOperator;
    if(!firstDone){
        firstDone = true;
    }
    if(firstDone && secondDone){
        calculator();
    }
}

function handleEqualsClick() {
    if(firstDone && secondDone) {
        calculator();
    }
}

function handleResetClick() {
    result.innerHTML = "0";
    firstValue = "";
    firstDone = false;
    secondValue = "";
    secondDone = false;
    currentOperator = "";
}

numbers.forEach(function(number) {
    number.addEventListener("click", handleNumberClick);
});

operators.forEach(function(operator) {
    operator.addEventListener("click", handleOperatorClick);
});

equals.addEventListener("click", handleEqualsClick);
reset.addEventListener("click", handleResetClick);