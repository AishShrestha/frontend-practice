//Write a JavaScript program to get the current date.  
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDay() + 1 ;
const year = date.getFullYear();
console.log(`${month}-${day}-${year}`);
console.log(`${month}/${day}/${year}`);