let sum;
let number;
let outputArray = [];
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
        add(a,b);
    }
    if(operator == "-") {
        subtract(a,b);
    }
    if(operator == "*") {
        multiply(a,b);
    }
    if(operator == "/") {
        divide(a,b);
    }
    return sum;
}

function getNr1() {
    number = 1;
    outputArray.push(number);
    return number;
}

function getNr2() {
    number = 2;
    outputArray.push(number);
    return number;
}

function getNr3() {
    number = 3;
    outputArray.push(number);
    return number;
}

function getNr4() {
    number = 4;
    outputArray.push(number);
    return number;
}

function getNr5() {
    number = 5;
    outputArray.push(number);
    return number;
}

function getNr6() {
    number = 6;
    outputArray.push(number);
    return number;
}

function getNr7() {
    number = 7;
    outputArray.push(number);
    return number;
}

function getNr8() {
    number = 8;
    outputArray.push(number);
    return number;
}

function getNr9() {
    number = 9;
    outputArray.push(number);
    return number;
}

function getNr0() {
    number = 0;
    outputArray.push(number);
    return number;
}

function getDivide() {
    operator = "/";
    outputArray.push(operator);
    return operator;
}

function getMultiply() {
    operator = "*";
    outputArray.push(operator);
    return operator;
}

function getSubtract() {
    operator = "-";
    outputArray.push(operator);
    return operator;
}

function getAdd() {
    operator = "+";
    outputArray.push(operator);
    return operator;
}

function convertNrToString() {
    outputString = outputArray.toString();
    outputString = outputString.replaceAll(",", "");
    return outputString;
}

function displayValue() {
    convertNrToString();
    document.getElementById("display").textContent = outputString;
}

function clearDisplay() {
    document.getElementById("display").textContent = "";
    outputArray = [];
}