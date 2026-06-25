class Human {
    constructor({name, age, interest}) {
        if (new.target === Human) {
            throw new Error ("Нельзя создать экземпляр абстрактного класса");
        }
        this.name = name;
        this.age = age;
        this.interest = interest;
    }
    info() {
        console.log(`Меня зовут ${this.name}, мне ${this.age}. Интерес: ${this.interest}`);
    }
}
class Yura extends Human {
    constructor(params) {
        super(params);
    }
    info() {
        console.log(`Меня зовут ${this.name}, мне ${this.age}. Интерес: ${this.interest}`);
    }
}
class Katya extends Human {
    constructor(params) {
        super(params);
    }
    info() {
        console.log(`Меня зовут ${this.name}, мне ${this.age}. Интерес: ${this.interest}`);
    }
}

const boy = new Yura ({name: "Юра", age: 20, interest: "путешествия"});
boy.info();

const girl = new Katya ({name: "Катя", age: 21, interest: "верховая езда"});
girl.info();