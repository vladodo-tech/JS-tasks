function XO(str) {
    str = str.toLowerCase();
    
    // Считаем x: убираем все 'x' и смотрим, на сколько уменьшилась строка
    let countX = str.length - str.replaceAll("x", "").length;
    
    // Считаем o: убираем все 'o' и смотрим, на сколько уменьшилась строка
    let countO = str.length - str.replaceAll("o", "").length;
    
    return countX === countO;
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("zpzpzp"));