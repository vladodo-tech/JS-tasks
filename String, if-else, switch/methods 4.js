let day = "Monday";             // Переменной присвоенно значение monday вместо Monday
let message;

if (day === "Monday") {
     message = "It's Monday!";
} 
else if (day === "Tuesday") {    // Опечатка в сравнении - TUesday вместо Tuesday
     message = "It's Tuesday!";
} 
else if (day === "Wednesday") {
     message = "It's Wednesday!";
} 
else if (day === "Thursday") {   // Опечатка в сравнении - thursday вместо Thursday
     message = "It's Thursday!";
} 
else if (day === "Friday") {
     message = "It's Friday!";
} 
else if (day === "Saturday") {
     message = "Its Saturday!";   // Ошибка в присвоении должно быть Its Saturday! вместо Its Sunday!
} 
else if (day === "Sunday") {
     message = "It's Sunday!";
} 
else {
     message = "Invalid day!";
}

console.log(message);
