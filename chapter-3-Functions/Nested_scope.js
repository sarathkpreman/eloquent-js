const humans = function(factor) {
    const ingredient = function(amount, unit, name) {
        
    }
}

// 1. Write a function that declares a variable and then defines another
// function inside it. Access the outer variable from the inner function

function outerFunction() {
    let cartItems = [];
    function innerFunction() {
       cartItems.push("Smart Phone"); 
       return cartItems;
    }
}

let purchase = outerFunction();
console.log(purchase);