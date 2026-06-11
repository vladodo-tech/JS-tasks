let size = 3;  // Размер (количество строк в верхней половине)

// Верхняя половина ромба (включая середину)
for (let i = 1; i <= size; i++) {
    let line = "";
    
    // Пробелы перед звёздочками
    for (let j = 1; j <= size - i; j++) {
        line = line + " ";
    }
    
    // Звёздочки
    for (let k = 1; k <= 2 * i - 1; k++) {
        line = line + "*";
    }
    
    console.log(line);
}

// Нижняя половина ромба
for (let i = size - 1; i >= 1; i--) {
    let line = "";
    
    // Пробелы перед звёздочками
    for (let j = 1; j <= size - i; j++) {
        line = line + " ";
    }
    
    // Звёздочки
    for (let k = 1; k <= 2 * i - 1; k++) {
        line = line + "*";
    }
    
    console.log(line);
}