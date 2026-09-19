console.log("--- Question 4: Roll Call Scenario ---");

var rollNumbersCalled = 0;

for (var currentRoll = 1; currentRoll <= 20; currentRoll++) {
    
    // Skip roll number 13 as they are already marked present
    if (currentRoll === 13) {
        continue; 
    }
    
    // Stop immediately at roll number 18 due to recess bell
    if (currentRoll === 18) {
        break; 
    }
    
    // Print roll call for all other active conditions
    console.log("Calling roll number " + currentRoll);
    
    // Track total successful roll calls made
    rollNumbersCalled++;
}

// Output final statement outside loop block
console.log("Total roll numbers called = " + rollNumbersCalled);
