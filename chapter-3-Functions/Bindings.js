// Each binding has a scope
let x = 10;
if(true){
    let y = 20;
    const m = 5.6;
    var z = 30;
    console.log(x + y + z + m);
}

// var is Function scoped
function example () {
    if(true){
        var k = "Not available";
    }
    console.log(k)
}

example();

// let, const are block scoped
function block_scope() {
    if(true){
        let name = "Sarath"
        const id = 711
    }
    let status = "No"
    console.log(status)
}

block_scope();

const halve = function(n) {
    return n / 2 ;
}
console.log(halve(100))

