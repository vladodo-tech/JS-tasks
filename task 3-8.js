let firstTestResult = 85;
let secondTestResult = 92;
let activityStatus = true;
let difficultyLevel = 0.95;
let average = (firstTestResult + secondTestResult) / 2;
let gpa = average * difficultyLevel;
let successStatus;
let finalMark;

if (gpa >= 90 && activityStatus === true) {
    successStatus = "успех";
} else {
    successStatus = "неудача";
}

switch (true) {
    case (gpa >= 95):
        finalMark = "A";
        break;
    case (gpa >= 85):
        finalMark = "B";
        break;
    case (gpa >= 75):
        finalMark = "C";
        break;
    case (gpa < 75):
        finalMark = "D";
        break; 
}
console.log(`Средний балл: ${average}`);
console.log(`ОСБ: ${gpa.toFixed(2)}`);
console.log(`Статус успеха: ${successStatus}`);
console.log(`Итоговая оценка: ${finalMark}`);