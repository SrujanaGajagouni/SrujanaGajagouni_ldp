console.log('Start'); // Synchronous code

setTimeout(function() {
  console.log('Timeout callback'); // Asynchronous callback
}, 2000); // Will execute after 2000 milliseconds (2 seconds)

console.log('End'); // Synchronous code


// The event loop is a fundamental concept that governs the execution model 
// and handles asynchronous operations.

