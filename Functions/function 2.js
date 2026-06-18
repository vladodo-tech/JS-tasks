function greet(name) {
    if (name === undefined) {
        return "Hello, stranger!";
    }
    else {
        return "Hello, " + name + "!";
    }
}
console.log(greet()); // В результате проверки выведется "Hello, stranger!", потому что переменная name не определена