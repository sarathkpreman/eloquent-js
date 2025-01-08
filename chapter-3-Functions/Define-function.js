const square = function(x) {
    return x * x;
}
const returning = square(5);
// Here the function has some values to return, so the expression with the 'return' keyword
// will return.
console.log(returning)

// Side effect
const makeNoise = function() {
    console.log("Pling......");
}
const nothing=makeNoise()
// Here the function is returning nothing so, the result will be 'undefined'
console.log(nothing)

const power = function(base, exponent){
    let result = 1;
    for(let count=0; count < exponent; count++){
        result *= base
    }
    return result;
}
// same as like the above , there is value returning..
console.log(power(2, 5))

