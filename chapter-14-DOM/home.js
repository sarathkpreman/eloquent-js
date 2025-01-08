// let doc = document.getElementsByTagName("h1")
// console.log(doc)

// let link = document.getElementById("sarath")
// if(link){
//     link.innerHTML="I'm Changed";
// } else{
//     console.log("Nothing changed");
// }

const contentChange = () => {
    let element = document.getElementsByClassName("todo");
    if(element.length>0){
        for(let i=0; i<element.length; i++){
            element[i].innerHTML="All tasks are completed";
        }
    } else {
        element.innerHTML = "Now 2025, So all the Tasks are pending";
    }
}

const addTask = () => {
    let taskInput = document.getElementById("task-input")

}