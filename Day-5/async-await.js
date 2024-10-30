// Trying to perform the things done in day-5/promise-2.js using promises with async await
function roll(num, delay){
    return new Promise((reslove, reject)=>{
        setTimeout(() => {
            reslove();
            console.log("Roll Number is "+num);
        }, delay);
    })
}
async function getRoll() {
    await roll(1213, 1000);
    await roll(1214, 1000);
    await roll(1215, 1000);
}
getRoll()