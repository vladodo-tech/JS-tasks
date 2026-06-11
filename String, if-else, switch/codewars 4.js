function arithmetic(a, b, operator){
    const operations = {
        add: a + b,
        subtract: a - b,
        multiply: a * b,
        divide: a / b
    };
    
    return operations[operator];
}

console.log(arithmetic(5, 2, "add"));
console.log(arithmetic(5, 2, "subtract"));
console.log(arithmetic(5, 2, "multiply"));
console.log(arithmetic(5, 2, "divide"));