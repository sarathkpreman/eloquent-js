const timeOutSetted = setTimeout(()=>{
    console.log("This is a sample timeout setted for excecuting aftter 5 sec..");
}, 5000)

// cancelling User-Initiated actions
let timeoutID;
function startTimer(){
    timeoutID = setTimeout(()=>{
        console.log("Action excecuted!");
    }, 3000)
}
function cancelTimeout(){
    clearTimeout(timeoutID);
    console.log("Timer canceled");
}


