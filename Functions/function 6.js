function calculate (a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return b === 0 ? "Ошибка: деление на ноль" : a / b;
    } else {
        return "Ошибка: неизвестный оператор";
    }
}
console.log(calculate(5, 5, "*"));