class Food {
    getFood (...args) {
        const total = args.length;

        if (total === 0) {
            console.log("All dogs love to eat!");
            return;
        }
        const [foodType, count, brand] = args;

        if (total === 3) {
            console.log("Corgi Henry eats 3 bowls a day of dry food by Royal Canin");
        }
        else if (total === 2) {
            console.log("Poodle Demi eats 2 bowl a day of wet food");
        }
        else if (total === 1) {
            console.log("Shepherd Masha eats dry food");
        }
    }
}

const feed = new Food();
feed.getFood();
feed.getFood("Сухой корм");
feed.getFood("Влажный корм", 5);
feed.getFood("Сухой корм", 5, "Педигри");
