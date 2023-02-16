let sum;

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