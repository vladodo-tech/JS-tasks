let year = 2040;

switch (true) {
    case (year % 400 === 0):
        console.log(year + " - високосный год");
        break;
    case (year % 100 === 0):
        console.log(year + " - не високосный год");
        break;
    case (year % 4 === 0):
        console.log(year + " - високосный год");
        break;
    default:
        console.log(year + " - не високосный год");
}