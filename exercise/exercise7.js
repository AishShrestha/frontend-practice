//Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.


const input = '4235443524313214234';

const result = [];

for (let i = 0; i < input.length; i++) {
    if( input[i] % 2 == 0 && input[i+1] % 2 == 0){
        result.push(input[i]);
        result.push('-');
    }else{
        result.push(input[i]);
    }
}
console.log(result.join(''));