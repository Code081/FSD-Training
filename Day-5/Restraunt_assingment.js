function orderFood(orderItem, orderTime){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            console.log(orderItem);
            resolve("Order Recived");
        }, orderTime);
    })
}

async function restaraunt() {
    await orderFood("Food-1", 1000);
    await orderFood("Food-2", 1000);
    await orderFood("Food-3", 1000);
    await orderFood("Food-4", 1000);
}
restaraunt()
