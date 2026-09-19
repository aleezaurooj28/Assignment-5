// 1. Function without parameters
function greet() {
    console.log("Welcome to JavaScript!");
}

// 2. Function with one parameter
function greetUser(name) {
    console.log("Welcome, " + name + "!");
}

// 3. Function with two parameters that returns a value
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Calling the functions and checking outputs in the console
console.log("--- Question 2: Functions Output ---");

// Call function without parameters
greet(); 

// Call function with one parameter
greetUser("Ali"); 
greetUser("Ayesha"); // Verifies different input produces different result

// Call function with two parameters and save the return value
var totalSum = addNumbers(15, 25);
console.log("Returned Sum: " + totalSum);
