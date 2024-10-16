function rollNo(num , delay, nextroll){
    setTimeout(()=>{
        console.log(num);
        if (nextroll) nextroll(); // this is a callback function don't mistake it for a parameter to the function
    }, delay)
}
rollNo(1, 1000,()=>{
    rollNo(2,1000,()=>{
        rollNo(3, 1000,()=>{
            rollNo(4, 1000);
        })
    })
});

// This is an example of callback hell where we are calling the function inside the function and so on.
// This will make the code more complex and difficult to understand.

// The solution to this is to use promises. Promises are used to handle asynchronous operations in JavaScript.

// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.