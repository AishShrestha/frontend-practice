const grey = document.querySelector('#grey');
const red =document.querySelector('#red');
const pink = document.querySelector('#pink');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const body = document.querySelector('body');

grey.addEventListener('click',(event)=>{
    body.style.backgroundColor = 'grey';
})

red.addEventListener('click',(event)=>{
  body.style.backgroundColor = 'red';
    })

pink.addEventListener('click',(event)=>{
    body.style.backgroundColor = 'pink';
    })
blue.addEventListener('click',(event)=>{
    body.style.backgroundColor = 'blue';
    
});

yellow.addEventListener('click',(event)=>{
    body.style.backgroundColor = 'yellow';
});

console.log(document.querySelector('#buttons'));