const person = { name: "Nikhil", age: 30 };
// console.log(person.age);
// console.log(person["name"]);

// Objects can have methods have properties.
let calculator = {
    add: function (a,b) {
        return a + b;
    },
};


// Create an object car with properties make, model, and year. Access and log each property.
let car = { make: "Tesla", model: "x200", year: 2022 }
// console.log(car.make, car.model, car.year);


let student = { name: "Alice", grade: "A", age: 20 };
// Log the student's name.
// Update the grade to "B".
// Add a new property major with value "Computer Science".
console.log(student["name"])
student.grade = "B"
student.major = "Computer Science"
console.log(student["name"], student["age"], student["grade"], student.major);