class Car {
    constructor ({model, color, year}) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
}

class Zhiga extends Car {
    constructor (params) {
        super (params);
        this.place = params.place;
        this.maxSpeed = params.maxSpeed;
    }

    showInfo() {
        console.log(`Модел: ВАЗ-${this.model}`);
        console.log(`Цвет: ${this.color}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`Место выпуска: ${this.place}`);
        console.log(`Максимальная скорость: ${this.maxSpeed}`);
    }
}

const zhiguli = new Zhiga({
    model: "2106",
    color: "Белый",
    year: 1988,
    place: "Тольятти (ВАЗ)",
    maxSpeed: 150
});
zhiguli.showInfo();