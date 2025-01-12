// Certainly! Let's dive into JavaScript callback functions.

// What Are Callback Functions?
// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation has been completed. This allows functions to be run asynchronously, meaning they don't block the execution of other code.

// How Callback Functions Work
// In JavaScript, functions are first-class objects, which means they can be passed as arguments to other functions, returned from functions, and assigned to variables. A callback function takes advantage of this feature.

// Here's a simple example :
function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Alice', sayGoodbye);

// In this example, sayGoodbye is passed as a callback function to greet. After greeting Alice, the sayGoodbye function is executed.




// Asynchronous Callbacks
// Callbacks are commonly used for handling asynchronous operations, such as reading files, making network requests, or performing database operations.


// For example :
const fs = require('fs');

fs.readFile('example.txt', 'utf8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

// In this example, the readFile function from the fs module reads the contents of example.txt. When the read operation is complete, the callback function is executed, which either logs an error or the file's content.



// Avoiding Callback Hell
// Callback hell (also known as the "pyramid of doom") occurs when multiple nested callbacks are used, making code difficult to read and maintain.



// Modern Asynchronous Patterns
// While callback functions are still used, modern JavaScript has introduced Promises and async/await syntax, which provide more elegant solutions for handling asynchronous operations.

// Promises :
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
});

promise.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error)    // doesn't run
);


// Async/Await :
async function asyncCall() {
    console.log('Calling...');
    let result = await promise;
    console.log(result); // shows "done!" after 1 second
}

asyncCall();
