let firstUser = "Алиса";
let secondUser = "Карл";
let AliceResult = 17;
let CarlResult = 22;
const maxResult = 25;

console.log("Добрый день");
console.log("Результаты теста:");
let procentAlice = (AliceResult / maxResult) * 100;
let procentCarl = (CarlResult / maxResult) * 100;
console.log(`Процент Алисы: ${procentAlice.toFixed(2)}%`);
console.log(`Процент Карла: ${procentCarl.toFixed(2)}%`);

if (AliceResult < 20) {
    console.log(`${firstUser} тест не пройден`);
} else {
    console.log(`${firstUser} тест пройден`);
}
if (CarlResult < 20) {
    console.log(`${secondUser} тест не пройден`);
} else {
    console.log(`${secondUser} тест пройден`);
}