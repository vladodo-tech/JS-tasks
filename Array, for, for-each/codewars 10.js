function repeatStr(n, s) {
    // Пустая строка, к которой будем добавлять
    let result = "";
    
    // Повторяем n раз
    for (let i = 0; i < n; i++) {
        result = result + s;  // Добавляем строку s
    }
    
    return result;
}

console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));