function sumNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {  
        if (typeof arr[i] === "number") {
            sum = sum + arr[i];
        }
        // Если не число - просто пропускаем (ничего не делаем)
    }
    
    return sum;
}
console.log(sumNumbers([1, "hello", 3, true, 5]));