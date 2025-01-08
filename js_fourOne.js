// 1. Creating a Promise using Promise Constructor
const myPromise = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        const success = true;
        if(success) {
            resolve("Operation successfull");
        } else {
            reject("Operation failed");
        }
    }, 2000);
})

// Promise.resolve(value): This creates a Promise that is immediatley resolved
// with the given value
const resolvedPomise = Promise.resolve("Already resolved");

// Promise.reject(reason): This creates a Promise that is 
// immediately rejected with the given reason

// const rejectedPromise = Promise.reject("Immediately rejected");


// 2. Handling Promise Outcomes

myPromise
.then((result)=> {
    console.log("Result:", result);
})
.catch((error)=>{
    console.log("Error:", error);
})
.finally(()=>{
    console.log("Promise Completed");
});


// 3. Combining Promises
// Combining Promises" refers to techniques that allow you to manage 
// multiple Promises concurrently or in specific patterns.
// Instead of dealing with Promises one by one, you can coordinate their 
// execution and handle their results collectively.
// This is essential for scenarios where you need to perform several asynchronous 
// operations and then proceed based on their combined outcomes.