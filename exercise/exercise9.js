// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var highestCount = 0;
var mostFrequent = {}

for (let i = 0; i < arr1.length; i++) {
    var count = 0;
    for (let j = 0; j < arr1.length; j++) {
        if (arr1[i] === arr1[j]) {
            count++;
        }
    }
    if (count > highestCount) {
        highestCount = count;
        mostFrequent = arr1[i];
    }
}
console.log(highestCount);
console.log(mostFrequent);