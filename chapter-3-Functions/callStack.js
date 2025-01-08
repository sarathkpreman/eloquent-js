const greet = function() {
    console.log("Hello")
    sayName();
    console.log("Good Bye");
}

const sayName = function() {
    console.log("My name is John");
    askQuestion();
}

const askQuestion = function() {
    console.log("What is your name?");
}

greet();