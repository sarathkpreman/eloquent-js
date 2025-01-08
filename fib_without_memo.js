function fibanocci(n) {
    if(n <=1 ) return n; //Base Case
    return fibanocci(n-1) + fibanocci(n-2); //Recursive Case
}

let fib = fibanocci(10)
console.log(fib);