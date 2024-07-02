
function multiply(a,b){
    return a*b;  }
let x = multiply(4, 3);// Function is called, the return value will end up in x
console.log(x);


console.log("\n");



function greet(name, age) {      
    console.log("Hello, " + name + "! You are " + age + " years old.");}
greet("Alice");  // Case 1: Passing fewer arguments, Output: Hello, Alice! You are undefined years old.



console.log("\n");



function add(a, b) {            
    return a + b;}
let result = add(3, 4, 5);  // Case 2: Passing more arguments ,Extra argument: 5
console.log("Sum with extra argument:", result);  // Output: Sum with extra argument: 7


console.log("\n");



let square = function(x) {// Traditional function expression
    return x * x;};

// Arrow function equivalent
let squareArrow = (x) => x * x;

console.log(square(5));      // Output: 25
console.log(squareArrow(5)); // Output: 25


console.log("\n");



// Traditional function expression
let sum = function(a, b) {
    return a + b;
};

// Arrow function equivalent
let sumArrow = (a, b) => {
    return a + b;
};

console.log(sum(3, 4));      // Output: 7
console.log(sumArrow(3, 4)); // Output: 7

