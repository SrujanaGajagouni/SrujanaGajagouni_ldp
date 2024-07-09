function cal(a, b, operation) {
    setTimeout(() => {
        console.log("The output is:");
        operation(a,b);
    },2000); // setTimeout delays execution by 2 seconds
}

function add(x, y) {
    console.log(x + y);
}

// Example of setInterval
setInterval(() => {
    cal(4, 5, add);
    console.log("Cal function running every 3 seconds");
}, 3000);
