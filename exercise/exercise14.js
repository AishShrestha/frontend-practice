// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

const array1 = [1,0,2,3,4];
const array2 = [3,5,6,7,8,13];
const newArray = [];
const maxLength = Math.max(array1.length, array2.length);  
for (let i = 0; i < maxLength; i++){

    const val1 = array1[i] || 0;
    const val2 = array2[i] || 0; 
    newArray.push(val1+val2);
}
console.log(newArray);


