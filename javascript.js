let sum;
let lastSum;
let number;
let inputNumbers = [];
let inputOperators = [];
let storedNumbers = [];
let storedSums = [];
let output = [];
let outputString;
let operator;
let a;
let b;

function add(a, b) {
    sum = a + b;
    return sum;
}

function subtract(a, b) {
    sum = a - b;
    return sum;
}

function multiply(a, b) {
    sum = a * b;
    return sum;
}

function divide(a, b) {
    sum = a / b;
    return sum;
}

function operate(a, b, operator) {
    if(operator == "+") {
        add(a, b);
    }
    if(operator == "-") {
        subtract(a, b);
    }
    if(operator == "*") {
        multiply(a, b);
    }
    if(operator == "/") {
        divide(a, b);
    }
    return sum;
}

function getNr1() {
    number = 1;
    output.push(number);
    inputNumbers.push(number);
    return number;
}

function getNr2() {
    number = 2;
    output.push(number);
    inputNumbers.push(number);
    return number;
}

function getNr3() {
    number = 3;
    output.push(number);
    inputNumbers.push(number);
    return number;
}

function getNr4() {
    number = 4;
    output.push(number);
    inputNumbers.push(number);
    return number;
}

function getNr5() {
    number = 5;
    output.push(number);
    inputNumbers.push(number);
    return number;
}

function getNr6() {
    number = 6;
    output.push(number);
    inputNumbers.push(number);
    return number;
}

function getNr7() {
    number = 7;
    output.push(number);
    inputNumbers.push(number);
    return number;
}

function getNr8() {
    number = 8;
    output.push(number);
    inputNumbers.push(number);
    return number;
}

function getNr9() {
    number = 9;
    output.push(number);
    inputNumbers.push(number);
    return number;
}

function getNr0() {
    number = 0;
    output.push(number);
    inputNumbers.push(number);
    return number;
}

function getDivide() {
    operator = "/";
    output.push(operator);
    inputOperators.push(operator);
    storeNr()
    return operator;
}

function getMultiply() {
    operator = "*";
    output.push(operator);
    inputOperators.push(operator);
    storeNr()
    return operator;
}

function getSubtract() {
    operator = "-";
    output.push(operator);
    inputOperators.push(operator);
    storeNr()
    return operator;
}

function getAdd() {
    operator = "+";
    output.push(operator);
    inputOperators.push(operator);
    storeNr()
    return operator;
}

function convertOutputToString() {
    outputString = output.toString();
    outputString = outputString.replaceAll(",", "");
    return outputString;
}

function displayOutput() {
    convertOutputToString();
    document.getElementById("display").textContent = outputString;
}

function displaySum(lastSum) {
    document.getElementById("display").textContent = lastSum;
}

function clearDisplay() {
    document.getElementById("display").textContent = "";
    output = [];
    storedSums = [];
    a = undefined;
    b = undefined;
    operator = undefined;
    sum = undefined;
    lastSum = undefined;
}

function storeNr() {
    if(inputNumbers.length == 0) {
        return;
    } else {
        inputNumbers = inputNumbers.toString();
        inputNumbers = inputNumbers.replaceAll(",", "");
        let nr = parseInt(inputNumbers);
        storedNumbers.push(nr);
        inputNumbers = [];
        return storedNumbers;
    }
}

function storeCalcSum() {
    let x;
    if(x = isNaN(sum)) {
        return;
    } else {
        storedSums.push(sum);
    }
}

function calculate() {
    storeNr();
    if(typeof output[0] === "number") {
        operate(a = storedNumbers[0], b = storedNumbers[1], operator);
    } else if(storedSums.length = 1) {
        operate(a = lastSum, b = storedNumbers[0], operator);
        storedSums = [];
    }
    storeCalcSum();
    storedNumbers = [];
    lastSum = sum;
    operator = undefined;
    output = [];
    displaySum(lastSum);
    return lastSum;
}