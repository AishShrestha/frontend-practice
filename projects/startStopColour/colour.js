const generateHexcode = () =>{
    const hexcode = '0123456789ABCDEF';
    let  result = '#'
    for(let i = 0; i < 6; i++){
        result += hexcode[randomNumber()];
    }
    return result;
}

const randomNumber = () =>{
   return  Math.floor(Math.random()*10)
}

const start = document.querySelector('#start');
let changeColour;

start.addEventListener('click',()=>{
     changeColour = setInterval(()=>{
        document.body.style.backgroundColor = generateHexcode();
    },1000); 
})

const stop = document.querySelector('#stop');

stop.addEventListener('click',()=>{
    clearInterval(changeColour);
    changeColour = null;
    console.log(changeColour);
})
