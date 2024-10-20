//  Write a JavaScript program to display the current day and time in the following format.  
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const date = new Date();
const currentDay = date.getDay();

console.log(`Today is : ${days[currentDay]}`);

const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

if ( hour <= 12){
    var prepand = 'AM';
}else {
    var prepand = 'PM';
}

if(hour > 12 ){
    hour -= 12;
}
console.log(`Current time : ${hour} ${prepand} : ${minute}: ${second}`);