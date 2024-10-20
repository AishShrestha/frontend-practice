// We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -

const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const o = ["th","st","nd","rd"]


for( let i=0; i<color.length; i++ ){
    if( i == 0){
        console.log(`1 ${o[1]} choice is ${color[i]}`);
    }
    if( i == 1){
        console.log(`2 ${o[2]} choice is ${color[i]}`);
    }
    if(i == 2){
        console.log(`3 ${o[3]} choice is ${color[i]}`);
    }
    if(i > 2){
        console.log(`${i+1} ${o[3]} choice is ${color[i]}`);
    }
}