function one (){
    console.log('one');
}
setTimeout(one, 2000); // this is a callback function

// iife example
(function (){
    console.log('second');
})();// this is an anonymous function

let a = new Function(`console.log('Constructor')`);
a(); // this is a constructor function

//arrow function example
let b = () => {
    console.log('arrow function');
}