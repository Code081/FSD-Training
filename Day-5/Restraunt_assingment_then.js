function orderFood(orderItem, orderTime, nextFood){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            console.log(orderItem);
            if (nextFood) nextFood();
            resolve("Order Recived");
        }, orderTime);
    })
}
orderFood("Food-1", 1000, ()=>{
    orderFood("Food-2", 1000, ()=>{
        orderFood("Food-3", 1000,()=>{
            orderFood("Food-4", 1000);
        })
    })
})