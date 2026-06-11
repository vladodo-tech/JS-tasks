function findStrangeValue() {
    let x = 0 / 0;
    console.log(x === x);
}
findStrangeValue(); // Выведется false, так как NaN не равен самому себе.