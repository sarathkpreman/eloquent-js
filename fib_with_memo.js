function memoizedFibonacci() {
    const cache = {} //Cache to store the results

    function fibonacci(n) {
        if(n in cache) {
            return cache[n]; //Return cached result if available
        }

        if(n <=1 ){
            return n; //Base case
        }

        // Store the result before returning
        cache[n] = fibonacci(n-1) + fibonacci(n-2);
        return cache[n];
    }

    // Return the inner function
    return fibonacci;
}

const fib = memoizedFibonacci();
console.log(fib(15))