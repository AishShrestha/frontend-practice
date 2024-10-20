// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const numbers = [1,32,4,342,21,4,5,2,5,2]
let newArray =  [];

for (let i = 0; i < numbers.length; i++){
    let currentNumber = numbers[i];

    if(!newArray.includes(currentNumber)){
        newArray.push(currentNumber);
    }
}
console.log(newArray);
