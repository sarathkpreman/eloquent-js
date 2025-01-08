const power = (base, exponent) => {
    let result = 1;
    for (let count= 0; count<exponent; count++){
        result *= base;
    }
    return result;
}

const square1 = (x) => { return x * x }
const square2 = x => x * x;

// Write an arrow function that takes two numbers as arguments and return their sum

var sum = (number_one, number_two) => {
    return number_one + number_two;
}

// Convert the following traditional function to an arrow function:
// function greet(name) {
//     return `Hello, ${name}!`;
// }

var greet = (name) => {
    return `Hello, ${name}!`;
}


// Create an arrow function named square that takes one parameter and returns its square
const sqre = (n) => {
    return n * n;
}

// Write an arrow function isEven that checks whether a number is even or not
const even_or_not = (value_to_check) => {
   let isEvenOrNot = value_to_check % 2 == 0
   if(isEvenOrNot === 0){
    console.log("It is an even number")
   } else {
    console.log("Not an even number");
   }
}

const number = even_or_not(6);

// Create an arrow function multiply that multiplies each element in an array by 2 and 
// returns a new way.
// const numbers = [1, 2, 3, 4, 5];

// Rewrite the following function as an arrow function
// function sayHi() {
//     console.log("Hi!");
// }