// FOR LOOP (Classic)
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// Loop through array
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// NESTED LOOPS (Important for DSA!)
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

// FOR...OF LOOP (Better for arrays)
for (const fruit of fruits) {
    console.log(fruit);  // "apple", "banana", "orange"
}

// FOR...IN LOOP (For objects & indexes)
for (const index in fruits) {
    console.log(index, fruits[index]);  // 0 "apple", 1 "banana", etc.
}
// WHILE LOOP
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// DO...WHILE (Executes at least once)
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// Break & Continue
for (let k = 0; k < 10; k++) {
    if (k === 5) break;  // Exit loop
    if (k === 2) continue;  // Skip this iteration
    console.log(k);  // 0, 1, 3, 4
}
// MAP - Transform each element
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// FILTER - Keep only matching elements
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4]

// REDUCE - Combine into single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15

// FIND - Get first matching element
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);  // 2

// SOME - Check if ANY element matches
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);  // true

// EVERY - Check if ALL elements match
const allPositive = numbers.every(num => num > 0);
console.log(allPositive);  // true

// INCLUDES - Check if element exists
console.log(numbers.includes(3));  // true

// SORT - Sort array
const unsorted = [3, 1, 4, 1, 5, 9];
const sorted = unsorted.sort((a, b) => a - b);
console.log(sorted);  // [1, 1, 3, 4, 5, 9]

// REVERSE - Reverse array
console.log(numbers.reverse());  // [5, 4, 3, 2, 1]

// SLICE - Get portion (doesn't modify original)
console.log(numbers.slice(1, 3));  // [4, 3]

// SPLICE - Remove/add elements (modifies original)
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 99);  // Remove 1 element at index 2, add 99
console.log(arr);  // [1, 2, 99, 4, 5]

// JOIN - Combine array into string
const words = ["hello", "world"];
console.log(words.join(" "));  // "hello world"

// SPLIT - String to array
console.log("hello,world".split(","));  // ["hello", "world"]

// PUSH - Add to end
arr.push(6);  // Adds 6 to end

// POP - Remove from end
arr.pop();  // Removes last element

// SHIFT - Remove from start
arr.shift();  // Removes first element

// UNSHIFT - Add to start
arr.unshift(0);  // Adds 0 at start

// CONCAT - Join arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2));  // [1, 2, 3, 4]

// SPREAD OPERATOR (Modern way)
console.log([...arr1, ...arr2]);  // [1, 2, 3, 4]

// STRING METHODS
const str = "Hello World";

console.log(str.length);  // 11
console.log(str.toUpperCase());  // "HELLO WORLD"
console.log(str.toLowerCase());  // "hello world"
console.log(str.charAt(0));  // "H"
console.log(str.indexOf("World"));  // 6
console.log(str.substring(0, 5));  // "Hello"
console.log(str.slice(0, 5));  // "Hello"
console.log(str.split(" "));  // ["Hello", "World"]
console.log(str.replace("World", "JavaScript"));  // "Hello JavaScript"
console.log(str.includes("World"));  // true
console.log(str.startsWith("Hello"));  // true
console.log(str.endsWith("World"));  // true
console.log(str.trim());  // Removes whitespace
console.log(str.repeat(3));  // Repeats 3 times