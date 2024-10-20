// Write a JavaScript program to compute the sum and product of an array of integers.

const numbers = [1, 2, 3, 4, 5];


const sum = numbers.reduce((total,value)=>{
    return total + value;

})
const product = numbers.reduce((total,value)=>{
return total*value;
})
console.log(sum)
console.log(product);