// 1. Functions
// 1. Write a function add(a, b) that returns the sum of two numbers.
const sum = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
}
result = sum(10, 20);
// 2. Write an arrow function multiply(a, b) to multiply two numbers.
const mul = (a, b) => {
    return a * b;
}
product = mul(10, 5)
// 3. Create a function greetUser that takes a name and logs a greeting message to the console.
const greetUser = (name) => {
    return `Hello!, ${name}. Good Morning`
}
greet = greetUser("Oliver");
// 4 . Write a function isEven that checks if a number is even.
const isEven = (num) => {
    return num % 2 == 0 ? console.log('Number is Eeven') : console.log('Number is Odd');
}
// 5. Create a function findMax that takes three numbers as arguments and returns the largest one.
const findMax = (a, b, c) => {
    let max;
    if( a > b && a > c) {
        return a;
    } else if (b > c && b > a) {
        return b;
    } else 
        return c;
}
max =  findMax(9000, 1000, 230)
// 6. Write a function that accepts an array of numbers and returns the sum of all numbers.
function arraySum (numbersArray) {
    let sum = 0;
    for (let i=0; i<numbersArray.length; i++){
        sum = sum + numbersArray[i];
    }
    return sum;
}
let array = [20, 30, 100]
let total = arraySum(array);
// 7. Create a function that accepts a string and returns the reverse of the string.
function reverseString(str) {
    return str.split('').reverse().join('');
}
let reverse = reverseString("thisis")
console.log(reverse)

// 2. Scope
// 1. Write a function with a locally scoped variable and try accessing it outside the function. What happens?
function scopeCheck(){
    let speed = 66
}
// console.log(speed) , speed is not defined 
// 2. Create a global variable and a local variable with the same name. 
// Test which variable is used inside and outside a function.
let title = "Oppeneheimer"
function cinema() {
    let title = "Dunkirk"
}
// console.log(title) , global variable
// 3. Write a function inside another function. 
// Check the scope of variables defined in both functions.
function outerFunc() {
    let maker = "Sarath";
    let age = 25;
    function innerFunc() {
        let profession = "Engineer"
        return `${maker} is ${age} year's old`;
    }
    // console.log(profession) , not defined error, cause it is local to innerFunc()
    return re = innerFunc();
}
const r = outerFunc();
// console.log(r);

// 3. Closures
// A Closure is a function that reatins access to its lexical scope even when 
// executed outside that scope.
// 1. Create a function makeCounter that return a function. Each time the returned
// function is called, it should increment a counter by 1.
function makeCounter(){
    let number = 0;
    return function count() {
        number++
        return number
    }
};

const counter =  makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
// 2. Write a function that generates a multiplier function 
function multiplier(multiplier) {
    return function multiplyBy(multiplier, multiplayerBy) {
        return multiplier * multiplayerBy;
    }
}
const multiplayerBy3 = multiplier(3);
// 3. Create a function that generates a private variable and provides
// getter and setter functions to access or modify it.

// 4. 'this' keyword
// Refers to the object that is executing the current function
const person = {
    first_name: "Alice",
    greet() {
        console.log(`Hello, ${this.first_name}`);
    },
};
person.greet();
// 4.1 Create an object with a method that uses this to access one of its properties
const car = {
    brand: "BMW",
    engine() {
        console.log(`This car is ${this.brand}`);
    },
};
car.engine();
// 4.2 Write a function that logs 'this'. Call it in the global scope and inside an object
function testthis() {
    console.log(this);
}
const myObject = {
    name: "Rahul",
    myMethod: function() {
        console.log(this);
    }
};
testthis();
myObject.myMethod();
// 4.3 Bind a method of an object to a different object and check how 'this' behavhes
const obj1 = { name: "Shyam" };
const obj2 = { name: "Bob" , greet() { console.log(this.name) } };
const boundGreet = obj2.greet.bind(obj1);

boundGreet();
