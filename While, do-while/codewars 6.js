function findAverage(array) {
    if (array.length === 0) return 0;
    return array.reduce((sum, num) => sum + num, 0) / array.length;
}
console.log(findAverage([1, 2, 3]));