// 1. Arrow Functions
const add = (a, b) => a + b; 
// the above method is Implicit return
let ott = add(10, 50);
console.log(ott);
const square = (x) => { return x * x; }
// the above method is Explicit return
let board = square(5)
console.log(board);
// 1.1 Convert the following function to an arrow function
// function greet(name) {
// return `Hello, ${name}`;
// }
const greet = (name) => {
    return `Hello, ${name}`;
};
let name = greet('aishu');
// 1.2 Write an arrow function to calculate the squre of a number.
const square_of_number = (number) => {
    return number ** number;
}
const odd_even = (number) => {
    if(number % 2 == 0){
        console.log('Number  is even');
    } else {
        console.log('Number is odd');
    }
}
odd_even(4);
// 1.3 Create an arrow function that takes an array and returns a new array
// with each element doubled
const doubled = (arr) =>{ 
    for(let i = 0; i<arr.length; i++){
        
    }
}

// 2. Destructring 
// 2.1 Array Destructring
const colors = ["red","blue","green"];
const [first, second] = colors;
console.log(first)
// 2.2 Object Destructuring
const person = {name: "Sarath", age: 25};
const {age} = person;
console.log(age);
// 2.3 Destructur the following array
const fruits = ["Apple","Banana","Cherry"];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit2)
console.log(fruit1)
console.log(fruit3)
// 2.4 Destructure the following object
const user = { nam: "John", ages: 30, country: "USA" };
const {nam, ages, country} = user;
console.log(country);
console.log(nam);
console.log(ages)
// 2.5 Write a function that takes an object with properties 'name' and 'age' and logs
// them ussing destructuring.
const destructure = (obj) => {
    const {name, age} = obj
    console.log(`This is the name from the destrutured object ${name}`);
    console.log(`This is the age from the destructured object ${age}`);
}
let ob = { name: "Sarath", age: 25 } 
destructure(ob);
// 2.6 Use destructuring to swap two variables
let a = 10, b = 20;

// 2.7 Destructure nested properties from the following object
const us = {
    name: "Alice",
    address: {
        city: "Wonderland",
        zip: "12345"
    },
};

// 2.8 Destructure the first two elements of an array and gather the rest using 
// the rest operator.

// 3. Spread and Rest Operators
// 3.1 Spread Operator(...)
const arr1 = [1,2];
const arr2 = [...arr1, 3, 4];
// 3.2 Rest Operator(...)
const [begin, ...ends] = [1, 2, 3, 4];
console.log(begin);
console.log(...ends);





// 4. Template literals
const names = "Alice";
const message = `Hello ${names}`;
console.log(message)
