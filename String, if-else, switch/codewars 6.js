function isOdd(n) {
    // Проверяем, целое ли число
    // Если есть дробная часть — сразу возвращаем false
    if (n !== Math.floor(n)) {
        return false;
    }
    
    // Делаем число положительным (берём модуль)
    if (n < 0) {
        n = -n;
    }
    
    // Проверяем остаток от деления на 2
    // Если остаток 1 — число нечётное
    if (n % 2 === 1) {
        return true;
    } else {
        return false;
    }
}

console.log(isOdd(5));
console.log(isOdd(4));
console.log(isOdd(-7.1));