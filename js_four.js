// PROMISES

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const data = { name: "John", age: 30 }
            if(data) {
                resolve(data);
            } else {
                reject("Error fetching Data");
            }
        }, 2000);
    });
}

fetchData()
.then(data => {
    console.log("Data", data);
})
.catch(error=> {
    console.log("Error",error);
});

// 1. Simple Timeout Promise: Write a function delay(ms) that returns a promise.
// The promise should resolve after ms "milliseconds"

const delay = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const user = {
                name: "sarath",
                isLoggeIn: true,
                status: "Away"
            }
            if(user){
                resolve(`${user.name} is logged in successfully`);
            } else {
                reject(`${user.name} couldn't login!`);
            }
        }, 5000)
    });
}

delay()
.then(message=>{
    const name = message.split(' ')[0];
    console.log(`Hello ${name} after 5 Milliseonds `);
})
.catch(error=>{
    const name = error.split(' ')[0];
    console.log(`${name} your name taking too much time to laod...`);
})
.finally(()=>{
    console.log(`My promise Completed`)
});

// 2. Promise with Random Number: Write a function getRandomNumber() that return s 
// a promise. The Promise should resolve with a random number between 0 and 10 after
// a random delay(1 to 3)

let getRandomNumber = () => {
    return new Promise( (resolve, reject) => {
        let randomnUmber = 101
        setTimeout((randomnUmber)=>{
            if (randomnUmber > 100){
                resolve(`The numbers is greater than 10`);
            } else{
                reject('The number is not greater than 10')
            }
        }, 5000);
    });
}

getRandomNumber()
.then(msg=>{
    console.log(`${msg}`);
})
.catch(err=>{
    console.log(`${err}`);
})
.finally(()=>{
    console.log('Promise completed');
})


// 3. Write a promise that resolves with "Hello World" after 2 seconds

const helloWorld = () => {
    return new Promise((resolve, reject)=> {
        let text = "Hello World!";
        setTimeout(()=>{
            if(text) {
                resolve(`${text}`);
            } else {
                reject(`There is no text`);
            }
        }, 2000);
    });
}

helloWorld()
.then((text)=>{
    console.log(`We have a text : ${text}`);
})
.catch((error)=>{
    console.log(`We couldn't find any text, ${error}`);
})
.finally(()=>{
    console.log(`Text searching completed`);
});


// 4. 