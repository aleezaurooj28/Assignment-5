console.log("--- Question 3: Number Pattern ---");

// Prompt user for input and convert to an integer
var n = parseInt(prompt("Enter a number for the pattern rows:"));

// Check if valid number was provided
if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    // Outer loop handles the rows
    for (var i = 1; i <= n; i++) {
        var rowString = "";
        
        // Inner loop builds the string sequence for each specific row
        for (var j = 1; j <= i; j++) {
            rowString += j;
        }
        
        // Print the completed row string to console
        console.log(rowString);
    }
}
