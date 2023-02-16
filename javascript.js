let sum;
let number;
let array = [];
let nrString;


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
    array.push(number);
    return number;
}

function getNr2() {
    number = 2;
    array.push(number);
    return number;
}

function getNr3() {
    number = 3;
    array.push(number);
    return number;
}

function getNr4() {
    number = 4;
    array.push(number);
    return number;
}

function getNr5() {
    number = 5;
    array.push(number);
    return number;
}

function getNr6() {
    number = 6;
    array.push(number);
    return number;
}

function getNr7() {
    number = 7;
    array.push(number);
    return number;
}

function getNr8() {
    number = 8;
    array.push(number);
    return number;
}

function getNr9() {
    number = 9;
    array.push(number);
    return number;
}

function getNr0() {
    number = 0;
    array.push(number);
    return number;
}

function convertNrToString() {
    nrString = array.toString();
    nrString = nrString.replaceAll(",", "");
    return nrString;
}

function displayValue() {
    convertNrToString();
    document.getElementById("display").textContent = nrString;
}
