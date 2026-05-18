function calculate ( a,b, operation){
    switch(operation){
        case 'add':
            return a+b
        
        case 'subtract':
            return a-b
        
        case 'multiply':
            return a*b
        
        case 'divide':
            return a/b
            
        default:
            return'Invalid Operation'
    }
}

console.log(calculate(10, 5, 'add'));       
console.log(calculate(10, 5, 'subtract'));  
console.log(calculate(10, 5, 'multiply'));  
console.log(calculate(10, 5, 'divide'));


class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
        return this;
    }

    subtract(num) {
        this.result -= num;
        return this;
    }

    multiply(num) {
        this.result *= num;
        return this;
    }

    getResult() {
        return this.result;
    }
}
const calc=new Calculator()
console.log(calc.add(20).subtract(10).multiply(5))