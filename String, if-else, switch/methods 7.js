let a = -5;
let b = 2.5;
let operator = "*";
let result;

if (operator === "+") {
    result = a + b;
} else if (operator === "-") {
    result = a - b;
} else if (operator === "*") {
    result = a * b;
} else if (operator === "/") {
    result = b === 0 ? "Ошибка: деление на ноль" : a / b;
} else {
    result = "Ошибка: неизвестный оператор";
}

console.log(`${a} ${operator} ${b} = ${result}`);