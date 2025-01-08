let thisIsArray = [10, 70, 50, 39, 300, 48_8, 23]
console.log(thisIsArray)
// creates a new piece outof the original array.
let sliceOFArray = thisIsArray.slice(1, 5)
console.log(sliceOFArray)
console.log(thisIsArray.indexOf(300));

// splice method, directly changes the origianl array.
// array.splice(start, deleteCount, item1, item2, ...);
// start: The index at which to start modifying the array.
thisIsArray.splice(3, 3)
console.log(thisIsArray)