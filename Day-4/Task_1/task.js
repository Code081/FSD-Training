function rollNo(num, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Roll No is", num)
            resolve("Successfully Done");
        }, delay);
    });
}
rollNo(1, 1000).then(()=>{
    rollNo(2, 1000).then(()=>{
        rollNo(3, 1000).then(()=>{
            rollNo(4,1000);
        })
    })
})