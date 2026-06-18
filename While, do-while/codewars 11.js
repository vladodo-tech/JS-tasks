function number(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 3) {
        result.push(arr[i] + arr[i + 1] + arr[i + 2]);
    }
    return result;
}
console.log(number([1, 2, 3]));