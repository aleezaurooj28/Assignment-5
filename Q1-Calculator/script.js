// Function to get inputs values
function getInputs() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    return { n1: n1, n2: n2 };
}

// Function to display result
function displayResult(message) {
    document.getElementById("result").innerText = message;
}

// 1. Addition Function
function add() {
    var inputs = getInputs();
    if (isNaN(inputs.n1) || !inputs.n2) {
        displayResult("Please enter both numbers");
        return;
    }
    var sum = inputs.n1 + inputs.n2;
    displayResult("Result: " + sum);
}

// 2. Subtraction Function
function subtract() {
    var inputs = getInputs();
    if (isNaN(inputs.n1) || isNaN(inputs.n2)) {
        displayResult("Please enter both numbers");
        return;
    }
    var difference = inputs.n1 - inputs.n2;
    displayResult("Result: " + difference);
}

// 3. Multiplication Function
function multiply() {
    var inputs = getInputs();
    if (isNaN(inputs.n1) || isNaN(inputs.n2)) {
        displayResult("Please enter both numbers");
        return;
    }
    var product = inputs.n1 * inputs.n2;
    displayResult("Result: " + product);
}

// 4. Division Function (With validation)
function divide() {
    var inputs = getInputs();
    if (isNaN(inputs.n1) || isNaN(inputs.n2)) {
        displayResult("Please enter both numbers");
        return;
    }
    
    if (inputs.n2 === 0) {
        displayResult("Cannot divide by zero");
    } else {
        var quotient = inputs.n1 / inputs.n2;
        displayResult("Result: " + quotient);
    }
}
