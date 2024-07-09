// Declare and initialize an array
let fruits = ['Apple', 'Banana', 'Cherry'];

// Output initial array
console.log("Initial Array:", fruits);
console.log('\n');

// Push operation: Add 'Date' to the end of the array
fruits.push('Date');
console.log("After push('Date'):", fruits);
console.log('\n');

// Pop operation: Remove the last element ('Date') from the array
let removedFruit = fruits.pop();
console.log("After pop():", fruits);
console.log("Removed element:", removedFruit);
console.log('\n');

// Unshift operation: Add 'Apricot' to the beginning of the array
fruits.unshift('Apricot');
console.log("After unshift('Apricot'):", fruits);
console.log('\n');

// Shift operation: Remove the first element ('Apricot') from the array
let shiftedFruit = fruits.shift();
console.log("After shift():", fruits);
console.log("Shifted element:", shiftedFruit);
console.log('\n');

// Length of the array
console.log("Length of the array:", fruits.length);
console.log('\n');

//Accessing through indexing
let thirdfruit=fruits[2];
console.log("Thirdfruit is:",thirdfruit);