let coffeeType = "latte";    // espresso, latte, cappuccino
let size = "Стандартный";          // Маленький, Стандартный, Большой

let coffeeName, recipe, price;


if (coffeeType === "espresso") {
    coffeeName = "Эспрессо";
    recipe = "30 мл кофе, без молока";
} else if (coffeeType === "latte") {
    coffeeName = "Латте";
    recipe = "30 мл кофе + 200 мл молока + молочная пенка";
} else if (coffeeType === "cappuccino") {
    coffeeName = "Капучино";
    recipe = "30 мл кофе + 150 мл молока + густая пенка";
} else {
    coffeeName = "Неизвестный напиток";
    recipe = "Рецепт не найден";
}


if (size === "Маленький") {
    price = 150;
} else if (size === "Стандартный") {
    price = 200;
} else if (size === "Большой") {
    price = 250;
} else {
    price = 0;
}


console.log("Название: " + coffeeName);
console.log("Рецепт: " + recipe);
console.log("Размер: " + size);
console.log("Стоимость: " + price + " руб.");