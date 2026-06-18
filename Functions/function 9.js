
function coffee (coffeeName) {
    if (coffeeName === "latte") {
        recipe = "30 мл кофе + 200 мл молока + молочная пенка";
        console.log("Название: латте");
        console.log("Рецепет: " + recipe);
    } else if (coffeeName === "espresso") {
        recipe = "30 мл кофе, без молока";
        console.log("Название: эспрессо");
        console.log("Рецепт: " + recipe);
    } else if (coffeeName === "cappuccino") {
        recipe = "30 мл кофе + 150 мл молока + густая пенка";
        console.log("Название: каппучинно");
        console.log("Рецепт " + recipe);
    } 
}

function sizeOfCoffee (size) {
    if (size === "маленький") {
        price = 150;
        console.log("Размер: " + size);
        console.log("Цена: " + price);
    } else if (size === "стандартный") {
        price = 200;
        console.log("Размер: " + size);
        console.log("Цена: " + price);
    } else if (size === "большой") {
        price = 250;
        console.log("Размер: " + size);
        console.log("Цена: " + price);
    }
}
coffee("latte");
sizeOfCoffee("стандартный");