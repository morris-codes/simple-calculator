const display = document.getElementById("display");

function addNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number; // Replaces the initial 0 with the new number
    } else {
        display.innerText += number; // Adds the number to the display
    }
}

// Function to add symbols or operators
function addSymbol(symbol) {
    display.innerText += symbol;
}

// Functions to clear all display
function clearDisplay() {
    display.innerText = "0";
}

// Functions to delete the last digit
function deleteNumber() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
    display.innerText = '0';
}
}

// Functions to calculate the total
function calculateResult() {
    try {
        display.innerText = eval(display.innerText); // Evaluation
    } catch (error) {
        display.innerText = "Error"; // This is for invalid input
    }
}
