// ASYNC AND AWAIT
// async
// A async function returns a Promise implicitly
async function check_string() {
  let number = 10;
    return 
}
check_string()
.then((number)=>{
    console.log(`String returned : ${number}`)
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('Excecution completed');
});


// JUST TO UNDERSTAND WHAT IS HOC

function greet(name, callback) {
    let wish = callback();
    console.log(`Hello, ${name} ${wish}`,);
}

function sayGoodBye() {
   return "GoodBye";
}


const n = () => {
    return new Promise((resolve, reject)=>{
        let num= 10;
        if(num> 5){
            resolve()
        } else {
            reject()
        }
    })
}

n 

