// A function that references the bindings from local scope is called a closure. OR
// Closure is function which keeps the local or lexical scope even after the function called 

function multiplier(number){
    return function twiced(mult){
        return number * mult;
    }
}

let m = multiplier(10);
console.log(m(5));

const exp = function(who) {
    return ()=> `Hello, ${who}`;
}

let me = exp("Sarath");
console.log(me());

// PRACTICE QUESTION
// 1. Simple Counter:
// Problem: Create a function createCounter() that returns a function. 
// Each time the returned function is called, it should increment a counter and return the current value.

function createCounter () {
    let counter = 0;
    return ()=> {
        return counter++;
    } 
}   

const counter = createCounter();
console.log(counter())
console.log(counter())
console.log(counter())

// 2. Greeting Generator
// Problem: Create a function greetMaker(greeting) that takes a greeting string (e.g., "Hello", "Hola") as an argument and returns a function. 
// The returned function should take a name as an argument and return a greeting string that combines the initial greeting with the name (e.g., "Hello John", "Hola Maria").

function greetMaker(greeting) {
    return (name)=> {
        return `${greeting} ${name}`;
    }
}
const greetAlex = greetMaker("Hai");
console.log(greetAlex("Alex"));


// 3. Private Varibale  with Closure 
// Problem: Create a function createSecretHolder(secret) that takes a secret value as an argument and returns an object with two methods:
// getSecret() and setSecret(newSecret). The secret should be private and only accessible through these methods.

const createSecretHolder = function(secret) {
    let this_is_mysecret = secret == " " ? undefined : secret; 
    return {
        getSecret() {
            return this_is_mysecret
        },
        setSecret(my_new_secret) {
            return this_is_mysecret = my_new_secret; 
        }
    }
}

const mySecret = createSecretHolder("I have crush on her");
console.log(mySecret.this_is_mysecret);

// 4. Function with Memory(More Challenging)
// Problem: Create a function createMemorizer() that returns a function. 
// The returned function should take a number as an argument. If the number has been passed to the function before, 
// it should return the stored result (you can assume a simple calculation like multiplying by 2). If it's a new number, 
// it should perform the calculation, store the result, and return it.

const createMemorizer = function() {
    const my_memory = [];
    return function (number) {
        let a_new_information;
        for(let i=0; i<my_memory.length; i++){
            if(my_memory[i] === number) {
                return `${number} i already know`
            } else {
                 a_new_information = number * 2;
            }
        }
         return my_memory.push(a_new_information)
    }
}

const memo = createMemorizer();
console.log(memo(4));

