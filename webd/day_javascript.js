var Name = 'Divanshu'
console.log(Name);
console.log(` `)


let Age = 20
Age=21
console.log(Age)
console.log(` `)


const pi = 3.14
console.log(pi)
console.log(` `)


const name = 'DIVANSHU'
const message = 'Hello World'
const template = `My name is ${name} and my message is ${message}`

console.log(template)
console.log(` `)

const age = 20;
const height = 5.9;
const result = 42;

console.log(`My age is ${age} with height ${height} and result ${result}`)
console.log(` `)

const isStudent = true;
const isGraduated = false;

console.log( `bool val for isGraduated is ${isGraduated} and isStudent is ${isStudent}`)

console.log(` `)
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, { name: "Divanshu" }];
console.log(`Fruits: ${fruits} 
Numbers : ${numbers}
Mixed : ${mixed}`)
console.log(` `)

console.log(`${fruits[1]} ${numbers[2]} ${mixed[3].name}`)
console.log(` `)

const person = {
    name: "Divanshu",
    age: 20,
    college: "NIT Bhopal",
    isStudent: true
};

console.log(person.college)
console.log(` `)

const empty = null
let notDefined

console.log(`Empty: ${empty} && NotDefined: ${notDefined}`)
console.log(` `)

console.log(typeof name)
console.log(` `)

console.log(typeof age)
console.log(` `)

console.log(typeof isStudent)
console.log(` `)

console.log(Array.isArray(fruits))
console.log(` `)

console.log(10+5)
console.log(10-5)
console.log(10*5)
console.log(10/5)
console.log(10%3)
console.log(2**3)
console.log(` `)

console.log(true && true);   
console.log(true && false);  
console.log(true || false);  
console.log(!true);  
console.log(` `)

console.log(10 > 5);   
console.log(10 < 5);   
console.log(10 === 10);  //for same data type
console.log(10 == "10"); //for diff type
console.log(10 !== 5);   //not equal
console.log(` `)

const firstName = "Divanshu";
const lastName = "Sharma";
const fullName = firstName + " " + lastName;
console.log(fullName)
const temp=`${firstName} ${lastName}`
console.log(temp)