//12) What will the following code output, and why?
console.log(2 + "2");
console.log(2 - "2");

// (22): The + operator in JavaScript is overloaded. When one operand is a string, it triggers string concatenation.
// (0): The - operator is strictly for numeric subtraction. When one operand is not a number, JavaScript tries to coerce the operand to a number.