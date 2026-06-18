function simplifyPath(path) {
    // Разбиваем путь по косым чертам
    let parts = path.split("/"); 
    // Создаём стек для хранения частей пути
    let stack = [];
    // Проходим по каждой части
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        // Пустая строка (от двойных слешей) - пропускаем
        if (part === "") {
            continue;
        }
        
        // Одна точка - текущий каталог, пропускаем
        if (part === ".") {
            continue;
        }
        
        // Две точки - родительский каталог
        if (part === "..") {
            // Если стек не пуст - убираем последний элемент (поднимаемся)
            if (stack.length > 0) {
                stack.pop();
            }
            // Если стек пуст - уже в корне, ничего не делаем
            continue;
        }
        // Обычное имя файла или каталога - добавляем в стек
        stack.push(part);
    }
    
    // Собираем результат
    let result = "/" + stack.join("/");
    return result;
}
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/home/user/Documents/../Pictures"));