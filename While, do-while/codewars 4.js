function betterThanAverage(classPoints, yourPoints) {
    const total = classPoints.reduce((sum, p) => sum + p, 0) + yourPoints;
    const average = total / (classPoints.length + 1);
    return yourPoints > average;
}
console.log(betterThanAverage([2, 3], 5));