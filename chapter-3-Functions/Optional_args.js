const addition = function (numberOne, numberTwo) {
    return numberOne + numberTwo;
}
const result = addition(10);
console.log(result)
// The above code could result 'NaN' because of few no. of parameters..
// and the computation cannot be performed.

const sayMyName = function(name){
    return `Oh my God!.. You are The ${name}`
}
const myName = sayMyName("Sarath",10, "Neel");
console.log(myName);
// Too many args is there but, js ignore the res of the args.
// If no args passed it would be undefined. 

