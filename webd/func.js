function greet(name){
    return `Hello, ${name}!`
}
console.log(greet("Divanshu"))

function add(a,b){
    return a+b
}
console.log(add(5,3))

const subtract=(a,b) => {
    return a-b
}
console.log(subtract(5,3))

const multiply = (a,b) =>  a*b
console.log(multiply(2,3))

function greetUser(name='Friend'){
    return `Hello, ${name}`
}
console.log(greetUser());           
console.log(greetUser("Divanshu"));

function getStudentInfo(student) {
    return `${student.name} is ${student.age} years old`;
}

const student = { name: "Divanshu", age: 20 };
console.log(getStudentInfo(student));

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
const arr = [1, 2, 3, 4, 5];

arr.map(x => x * 2);  // [2, 4, 6, 8, 10]

arr.filter(x => x > 2);  // [3, 4, 5]

arr.reduce((sum, x) => sum + x, 0);  // 15

// forEach() - Do something for each element
arr.forEach(x => console.log(x));  // Prints 1,2,3,4,5

// find() - Get first element that matches
arr.find(x => x > 3);  // 4

// includes() - Check if element exists
arr.includes(3);  // true

// IF STATEMENT
const age = 20;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// IF-ELSE IF-ELSE
const score = 75;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

// TERNARY OPERATOR (Shorthand)
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"

// SWITCH STATEMENT
const day = "Monday";

switch(day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    default:
        console.log("Regular day");
}