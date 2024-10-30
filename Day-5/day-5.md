# Revision Of Day 4 
- Learn about promises
- What are callback functions
- What is callback chaining and callback hell
- How promises solve callback hell
- How to create a promise : note(90% cases require no creation of promies you only need handlers)
- What is `.then` handler
    - What happens when you pass `console.log` in then and what happens when you pass an arrow function
    - What is the flow data through resolve and then block(Hint: data is thrown by resolve)
    - What form of data is recived by the resolve (Hint: dictonery)

    > in case of object the data doesn't move forward until you return it to the next then while using chained then's
    ```javascript
    promise.then((data)=>{
        console.log(data);
        return data;
    }).then((res)=>{
        console.log(res.user);
    }).catch(()=>{
        console.log("error");
    }).finally(()=>{
        console.log("Finally")
    })
    ```
    Refer promise-1.js
- What is `.catch` handler


# Async Await Functions
if you use `async` in front of a function 
you use `await` in front of promise calls

# Fetch Data from url
- refer `fetch_data.js` for code
