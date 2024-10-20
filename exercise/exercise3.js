//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 

const a = 5;
const b = 6;
const c = 7;
const s = 0.5*(a+b+c);

const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(`Area of triangle: ${area}`);