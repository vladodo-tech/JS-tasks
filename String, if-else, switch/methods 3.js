const monthNumber = 1;
let result3 = "";     // Переменная была объявлена как const, что не позволяло ей изменяться

switch (monthNumber) {
     case 1:                    // С case 1 по case 4 monthnumber сравнивали со строкой, а не с числом
          result3 = "January";
          break;
     case 2:
          result3 = "February";
          break;
     case 3:
          result3 = "March"; // Здесь отсутствовал оператор break
          break;
     case 4:
          result3 = "April";
          break;
     case 5:               
          result3 = "May"; // Здесь была опечатка в имени переменной
          break;
     case 6:                  // Здесь отсутвовало двоеточие после case 6
          result3 = "June"; // Здесь была опечатка в операторе присваивания
          break;
}

console.log(result3);
