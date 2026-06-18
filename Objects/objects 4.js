const person = {
    name : "John",
    age : 30,
    city : "New York"
};
for (let key in person) {
    console.log(key); // Будут выведены все ключи свойств объекта person
}