// 10. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
var a = [[1, 2, 1, 24,45,34], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for ( let i = 0 ; i< a.length ; i++)
{
    console.log('Row ',i)
    for ( var j = 0 ;  j< a[i].length ; j++){
        console.log(a[i][j]);

    }
}