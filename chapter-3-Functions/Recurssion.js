// a function calling itself

const factorial = function(number) {
    let result = 1;
    if (number == 0) {
        return 1;
    } 
    for (let i = 2; i<=number; i++) {
        result = result * i;
    }
    return result;
}

const readString = function(str) {
    let arr = []
    for (let char of str){
      arr.push(char)
    }
    let reverse = arr.reverse()
    return reverse;
}

const result = readString("Hello")
console.log(result)