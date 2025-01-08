//1. Variables
let age = 22;
const name = "John";
let isStudent = true;
console.log(`Age: ${age} Name: ${name} Is Student ? : ${isStudent}`);
// 2 Write a program to swap the values of two variables using a temporary variable.
let johns_secret = "I stolen her bag";
let alexs_secret = "I kissed her";
let secret_keeper = alexs_secret;
console.log(`Jhon's Secret : ${johns_secret}\n`);
console.log(`Alex's Secret : ${alexs_secret}\n`);
console.log(`The secret Keeper keeps secret : ${alexs_secret}\n`);
alexs_secret = johns_secret;
johns_secret = secret_keeper;
console.log("After the Secret keeper SWAPED HIS VALUES\n");
console.log(`Alex has who's secret: ${alexs_secret}\n`);
console.log(`John has who's secret: ${johns_secret}\n`);
console.log(`Did the Secret keeper cheated Alex ?\n`);
// 3. Write a program to calculate the area of a circle.
// Use constant PI.
const PI = 3.14
let area;
let radius = 20;
area = PI * radius;
console.log(`Area of Circle : ${area}\n`);



// Data Types
// 1. Identify the data types of the following variables
let a = 10;
let b = "Hello";
let c = false
let d;
let e = null;
// 2. Log their data types to the console using typeof
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
// 3. Declare an array of your favourite fruits and log it's type
let favourite_fruits = ["Apple","Grapes","Orange"]
console.log(favourite_fruits);
console.log(typeof(favourite_fruits[0]));
console.log(typeof(favourite_fruits[1]));
console.log(typeof(favourite_fruits[2]));
// 4. Declare an object with keys name,age, isStudent, Initialize with your deatils
let me = {
    name: "Sarath",
    age: 25,
    isEmployed: "false"
}
// 5. Write a pgm to check if the a variable is undefined or null and log an
// appropriate message.
let first_name = "Nithin";
let second_name = undefined;
let education = null;
console.log(`First Name: ${first_name}\n Last name: ${second_name}\n education: ${education}`)
// 6. Convert a string into number and vice versa.
let balance = "1000";
console.log(typeof balance);
console.log(typeof parseInt(balance));



// Operators
// 1. Perform basic arithmetic operations (+ , - , /, *, %)

const numberOne = 100;
const numberTwo = 59;

let result;
result = numberOne + numberTwo;
result = numberOne / numberTwo;
result = numberOne * numberTwo;
result = numberOne - numberTwo;
console.log(result);
// 2. Comapre two numbers using ==, ===, !=, !== and log the results.
let comapre;
comapre = numberOne == numberTwo;
console.log(comapre);
comapre = numberOne === numberTwo;
console.log(comapre);
compare = numberOne != numberTwo;
console.log(comapre);
comapre = numberOne !== numberTwo;
console.log(comapre);
// 3. Write a program that checks if a number is even or odd using the modulo operator.
let number = 99;
let check;
check = number % 2;
if(check == 0 ){
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is odd`);
}
// 4. Evaluate the following expressions 
console.log( 5 + "5");
console.log( 5 == "5");
console.log(5 === "5"); 
// The type coercion converts the one of the data types into a common one , here 
// "5" will be converted into number; It is called Type coercion.
console.log(5 - "5");
// Below is also a type coecion , boolean converted into number a coommon,
// When performing an arithmetic operations type coercion might happens.
console.log(true + 1);
// 5. Write a program to determine if a person can vote based on their age (use logical operators).
let personAge = 49;
// personAge > 18 ? console.log("Eligible to Vote") : console.log("Not eligible to Vote");
if(personAge >= 18){
    console.log("Eligible to vote");
} else {
    console.log("Not eligble to vote");
}
// 6. Write a program to calculate the total price of items in a shopping cart, 
// considering the quantity and unit price of each item.
let stock = [
    {milk: 'Milma', price: 20, quantity: 10},
    {rice : 'Basmati', price: 60, quantity: 200},
    {laptop: 'Dell', price: 75000, quantity: 24},
]
let cart = []
cart.push(stock[1],stock[2]);
const checkout = (cartItems, availableStock) => {
    const [itemOne, itemTwo, ...rest] = cartItems;
    return itemOne.milk
}

key  = checkout(cart, stock);
console.log(key)