// Trying to perform the things done in day-4 assingment 4 using promises
function roll(num, delay){
    return new Promise((reslove, reject)=>{
        setTimeout(() => {
            reject();
            // console.log("Roll Number is "+num);
        }, delay);
    })
}
roll(1212, 1000).then(()=>{
    roll(12132, 2000).then(()=>{
        roll(12123, 3000).then(()=>{
            console.log("All roll numbers are done");
        })
    })
}).catch(()=>{
    console.log("The Request Was Rejected");
})