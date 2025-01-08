let timer;
const greet = function(){
    timer = setTimeout(()=>{
        console.log("Hello World!");
    }, 5000)
}

const cancelGreet = function(){
    clearTimeout(timer);
    console.log("Timer Canceled")
}