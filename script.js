let display = document.getElementById("display");
let currentInput = "";

// Append numbers to the display
function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
}

// Append operators (+, -, *, /, %) to the display
function appendOperator(op) {
    // Prevent double operator input
    if (isNaN(currentInput.slice(-1))) {
        currentInput = currentInput.slice(0, -1); // Remove last operator
    }
    currentInput += op;
    display.value = currentInput;
}

// Perform the calculation when = is pressed
function calculateResult() {
    try {
        // Prevent division by zero
        if (currentInput.includes("/0")) {
            throw "Cannot divide by zero!";
        }
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = error;
        currentInput = "";
    }
}

// Clear the display
function clearDisplay() {
    currentInput = "";
    display.value = "";
}

// Calculate the square of the current number
function calculateSquare() {
    try {
        let squareValue = eval(currentInput) ** 2;
        currentInput = squareValue.toString();
        display.value = squareValue;
    } catch (error) {
        display.value = "Error!";
        currentInput = "";
    }
}

// Toggle between positive and negative
function toggleNegative() {
    try {
        if (currentInput[0] === "-") {
            currentInput = currentInput.slice(1); // Remove the negative sign
        } else {
            currentInput = "-" + currentInput; // Add negative sign
        }
        display.value = currentInput;
    } catch (error) {
        display.value = "Error!";
        currentInput = "";
    }
}

// Backspace functionality
function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}