// Write a function that takes a number and prints its square.
function find_sqauare (number) {
    return number * number;
}

// Write a program that checks if a number is greater than 10.
function number_greater_than_given_number (give_number) {
    if (give_number > 10) {
        return "The Given number is greater than 10";
    } else if (give_number < 10) {
        return "The given number is not greater than 10";
    } else {
        return "The given input is not a number!";
    }
}

// Write a program that combines two strings.
function combineStrings (wordOne, wordTwo) {
    return `${wordOne} ${wordTwo}`;
}

// Create an array of your favorite fruits and print each fruit using a loop.
let fruits = ["apple", "grapes", "orange", "pinapple", "strawberry"];
function printFavouriteFruits (fruits, favorite) {
    let favoriteFruits = [];
    for (let i=0; i<fruits.length; i++) {
        if (fruits[i] === favorite) {            
            return favorite
        } else if (fruits[i] !== favorite){
            return `\n${favorite} Your favourite item not in the list`;
        }
    }
    return favoriteFruits;
}

const result = printFavouriteFruits(fruits,"apple");
console.log(result);