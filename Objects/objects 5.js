const person = {
    name : "John",
    age : 30,
    occupation : "Engineer",
    sayHello : function() {
        console.log(`Hello, my name is ${this.name} and i am ${this.age} years old.`);
    }
};
person.sayHello(); // Выведется "Hello, my name is John and i am 30 years old."