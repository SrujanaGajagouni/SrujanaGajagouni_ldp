// Example async function using await
async function greet() {
    return 'Hello, World!';
}

// Calling the async function
async function main() {
    try {
        const message = await greet(); // Wait for the promise to resolve
        console.log(message); // Output: Hello, World!
    } catch (error) {
        console.error('Error:', error);
    }
}

// Invoke the main function to start execution
main();
