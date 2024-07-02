// Arithmetic Operators
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;         // Addition
let difference = num1 - num2;  // Subtraction
let product = num1 * num2;     // Multiplication
let quotient = num1 / num2;    // Division
let remainder = num1 % num2;   // Modulus

console.log("Arithmetic Operators:");
console.log("Sum:", sum);              // Output: 15
console.log("Difference:", difference); // Output: 5
console.log("Product:", product);      // Output: 50
console.log("Quotient:", quotient);    // Output: 2
console.log("Remainder:", remainder);  // Output: 0

// Assignment Operators
let x = 10;
let y = 5;

x += y;  // Equivalent to x = x + y;
console.log("\nAssignment Operators:");
console.log("x after addition assignment:", x);  // Output: 15

// Comparison Operators
let a = 10;
let b = 5;

let isEqual = a == b;             // Equal to
let isNotEqual = a != b;          // Not equal to
let isGreater = a > b;            // Greater than
let isLess = a < b;               // Less than
let isGreaterOrEqual = a >= b;    // Greater than or equal to
let isLessOrEqual = a <= b;       // Less than or equal to

console.log("\nComparison Operators:");
console.log("Is equal:", isEqual);                 // Output: false
console.log("Is not equal:", isNotEqual);          // Output: true
console.log("Is greater than:", isGreater);        // Output: true
console.log("Is less than:", isLess);              // Output: false
console.log("Is greater than or equal:", isGreaterOrEqual);  // Output: true
console.log("Is less than or equal:", isLessOrEqual);         // Output: false

// Logical Operators
let isTrue = true;
let isFalse = false;

let andResult = isTrue && isFalse;   // Logical AND
let orResult = isTrue || isFalse;    // Logical OR
let notResult = !isTrue;             // Logical NOT

console.log("\nLogical Operators:");
console.log("AND result:", andResult);   // Output: false
console.log("OR result:", orResult);     // Output: true
console.log("NOT result:", notResult);   // Output: false

// String Concatenation Operator
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log("\nString Concatenation Operator:");
console.log("Full Name:", fullName);     // Output: "John Doe"
