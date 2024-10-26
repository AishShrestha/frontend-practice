const  userInfo = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        const error = true;
        if(!error){
            resolve({
                name: 'John Doe',
                age: 30,
                email: 'johndoe@example.com'
            });
        }else{
            reject('An error occurred while fetching user information');
        }
       
    },2000);
})

userInfo.then((user)=>{
    console.log(user);
    return user;
})
.then((user)=>{
    console.log(user.name);
})
.catch((error)=>{
    console.log(`E: ${error}`);


})