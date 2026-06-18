const desserts = [
    {name : "Пирожное", price : 65},
    {name : "Мороженое", price : 35},
    {name : "Торт Наполеон", price : 250},
    {name : "Песочное Печенье", price : 50},
    {name : "Пудинг", price : 80},
    {name : "Фруктовый Тарт", price : 40},
    {name : "Желе Земляничное", price : 40},
    {name : "Вафли Шоколадные", price : 36},
    {name : "Булочка с Изюмом", price : 28}
];
const minPrice = Math.min(...desserts.map(item => item.price));
const maxPrice = Math.max(...desserts.map(item => item.price));

const cheapest = desserts.find(item => item.price === minPrice);
const mostExpensive = desserts.find(item => item.price === maxPrice);

console.log("Самый дешёвый:" , cheapest);
console.log("Самый дорогой:" , mostExpensive);