// Get the input element, number elements, operator elements, result element, and clear element
const input = document.getElementById('input');
const number = document.querySelectorAll('.numbers div');
const operator = document.querySelectorAll('.operators div');
const result = document.getElementById('result');
const clear = document.getElementById('clear');
let resultDisplayed = false;

// Event listener for number elements
number.forEach((num) => {
    num.addEventListener("click", function(e) {
        const currentString = input.innerHTML;
        const lastChar = currentString[currentString.length - 1];

        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && (lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "/")) {
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML = e.target.innerHTML;
        }
    });
});

// Event listener for operator elements
operator.forEach((op) => {
    op.addEventListener("click", function(e) {
        const currentString = input.innerHTML;
        const lastChar = currentString[currentString.length - 1];

        if (lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "/") {
            const newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length === 0) {
            console.log("enter a number first");
        } else {
            input.innerHTML += e.target.innerHTML;
        }
    });
});

// Event listener for result element
result.addEventListener("click", function() {
    const inputString = input.innerHTML; 
    const numbers = inputString.split(/\+|\-|\x|\//g);
    const operators = inputString.replace(/[0-9]|\./g, "").split("");

    // Perform calculations based on the operators
    const divide = operators.indexOf("/");
    while (divide !== -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("/");
    }

    const multiply = operators.indexOf("x");
    while (multiply !== -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("x");
    }

    const subtract = operators.indexOf("-");
    while (subtract !== -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    const add = operators.indexOf("+");
    while (add !== -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    // Display the result
    const resultInput = document.getElementById('result');
    resultInput.innerHTML = numbers[0];

    resultDisplayed = true;
});
