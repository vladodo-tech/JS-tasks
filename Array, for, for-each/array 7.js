let arr = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    // Если элемент — массив, проходим по его элементам
    if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j++) {
            sum = sum + arr[i][j];
        }
    }
    // Если элемент — число, просто добавляем
    else if (typeof arr[i] === "number") {
        sum = sum + arr[i];
    }
    // Строки и другие типы пропускаем
}

console.log(sum);