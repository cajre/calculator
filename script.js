// Declare global variables
let previousAnswer = 0;
let currentInput = '';

// Function to evaluate the expression
function evaluate(expression) {
   try {
      let result = eval(expression);
      previousAnswer = result;
      return result;
   } catch (error) {
      displayError("Error: Invalid expression");
      return NaN;
   }
}

// Function to clear the display
function clearDisplay() {
   currentInput = '';
   updateDisplay(currentInput);
}

// Function to use the previous answer
function usePreviousAnswer() {
   currentInput += previousAnswer;
   updateDisplay(currentInput);
}

// Function to append value to display
function appendToDisplay(value) {
   currentInput += value;
   updateDisplay(currentInput);
}

// Function to display error message
function displayError(message) {
   document.getElementById('result').innerText = message;
}

// Function to update display
function updateDisplay(value) {
   document.getElementById('result').innerText = value;
}

// Event listener for evaluation button
document.getElementById('evaluate-btn').addEventListener('click', function() {
   updateDisplay(evaluate(currentInput));
});

// Other event listeners for numeric, operator, special buttons...
