// Write a JavaScript function to clone an array.
const oldArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday","saturday"];
// const newArray = [...oldArray];
// console.log(newArray);


// for (let i = 0; i < oldArray.length; i++){
//     const newArray = oldArray[i];
//     console.log(newArray);
// }

const nested = { name: "John", address: { city: "NY" } };
const copy = { ...nested };
copy.address.city = "LA";
console.log(nested);
console.log(copy);

// const person = { name: "John", age: 25 };
// const copiedPerson = { ...person };  // Copies the object
// copiedPerson.age = 26;
// console.log(person);  // Output: { name: "John", age: 25 } (unchanged)
// console.log(copiedPerson);