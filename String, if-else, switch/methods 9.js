let ticket = 500;
let discount;
let totalPrice;
let age = 22;
let student = false;

if (age <= 2) {
    totalPrice = "бесплатно"
    console.log(`Стоимость билета: ${totalPrice}`);
} else if (age >= 3 && age <= 10) {
    discount = 50;
    totalPrice = ticket - (ticket * discount / 100);
    console.log(`Стоимость билета: ${totalPrice}`);
} else if (age >= 65) {
    discount = 15;
    totalPrice = ticket - (ticket * discount / 100);
    console.log(`Стоимость билета: ${totalPrice}`);
} else if (student == true) {
    discount = 10;
    totalPrice = ticket - (ticket * discount / 100);
    console.log(`Стоимость билета: ${totalPrice}`);
} else {
    console.log(`Стоимость билета: ${ticket}`);
}