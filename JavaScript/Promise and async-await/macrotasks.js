console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0); // This is a macrotask

Promise.resolve().then(() => {
  console.log('Promise resolved'); // This is a microtask
});

console.log('End');
