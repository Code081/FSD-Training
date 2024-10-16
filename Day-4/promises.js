const promise = new Promise(function (resolve, reject) {
    console.log("My First Promise");
    // resolve("Promise is resolved"); // directly connected to the then() method
    reject("Promise is rejected"); // directly connected to the catch() method
});

// to fulfill the promise we use the then() method
promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})

//to print the parent resolve message
// promise.then(console.log);

// if the promise is rejected we use the catch() method
// promise.catch(() => {
//     console.log("Promise is rejected");
// });