// Q3.1: Write a program that accepts three numbers and checks if at least one of them is greater than 10.
const greater_or_not = (num_one, num_two, num_three) => {
 if(num_one > 10){
    return `${num_one} is greater than 10`;
 } else if(num_two > 10) {
    return `${num_two} is greater than 10`;
 } else if(num_three > 10) {
    return `${num_three} is greater than 10`;
 } else {
    return `All the numbers are less than 10`;
 }
}

// Q3.2: Given three Boolean variables a = true, b = false, and c = true, evaluate the result of:
a = true;
b = false;
c = true;
// console.log(c || a && b)
// In this assigned operations , here on the right or left hand side any on of the operand or computation becomes 
// true and the other is false, the entire statement will be true, the logical OR operation becomes false only when 
// the LHS AND RHS becomes false.


// Q3.3: Write a function that accepts two Boolean values (isSunny, isWeekend) 
// and returns true if you can go to the beach, which is possible only if both are true.
const let_s_go_out = (isSunny, isWeekend) => {
    if(isSunny && isWeekend) {
        console.log("You can go out today!");
    } else {
        console.log("Oh. No you cannot go out today");
    }
}


