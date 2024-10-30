let promise  = new Promise((resolve,reject)=>{
    resolve({user:"Shashwat", Pass:"24321"});
})
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