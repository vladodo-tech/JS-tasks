function highAndLow(numbers) {
    // Разбиваем строку по пробелам в массив строк
    let arr = numbers.split(" ");
    
    // Преобразуем строки в числа
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
        nums[i] = Number(arr[i]);
    }
    
    // Находим максимум и минимум
    let max = nums[0];
    let min = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    
    // Возвращаем результат строкой
    return max + " " + min;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));