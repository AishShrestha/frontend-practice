// fetch('https://api.github.com/users/aishshrestha').then((response)=>{
 
//    return response.json();
// })
// .then((info)=>{
//     console.log(info);

// })
// .catch((error)=>{
//     console.log(error);

// })

const getInfo = async () =>{
    try{
        const response = await fetch('https://api.github.com/users/aishshrestha');
        console.log(response);
        const data = await response.json();
        console.log(data);


    }catch(error){
        console.log(error);

    }


}
getInfo();