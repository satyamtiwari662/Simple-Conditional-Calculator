// 1. Get input from user
let num1 = parseFloat(prompt("Enter the first number:"));
let operator = prompt("Enter an operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter the second number:"));

let result;

// 2. Conditional branching to handle the operator
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        // Handling division by zero
        if (num2 === 0) {
            result = "Error: Cannot divide by zero";
        } else {
            result = num1 / num2;
        }
        break;
    default:
        result = "Invalid Operator! Please use +, -, *, or /.";
}

// 3. Print the result to the console
console.log("Number 1:", num1);
console.log("Operator:", operator);
console.log("Number 2:", num2);
console.log("Computed Result:", result);

// Bonus: Alert the user with the result
alert("The result is: " + result);