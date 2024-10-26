const promise = new Promise((resolve,reject)=>{
setTimeout(()=>{
    const error = true;
    if(!error){
        console.log("Promise...");
        resolve();
    }else{
        console.error("Promise rejected due to error");
        reject();
    }
  
},2000)
})

promise.then(()=>{
    console.log("Promise resolved successfully");
}).catch(()=>{
    console.log("Promise rejected due to error");
})