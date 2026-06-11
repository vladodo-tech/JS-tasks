let height = 5;
let up = 3;
let down = 2;
let position = 0;
let day = 1;

// День 1
position = position + up;
switch (true) {
    case (position >= height):
        console.log("Улитка на вершине! Всего дней: " + day);
        break;
    default:
        position = position - down;
        day++;
}

// День 2
position = position + up;
switch (true) {
    case (position >= height):
        console.log("Улитка на вершине! Всего дней: " + day);
        break;
    default:
        position = position - down;
        day++;
}

// День 3
position = position + up;
switch (true) {
    case (position >= height):
        console.log("Улитка на вершине! Всего дней: " + day);
        break;
    default:
        position = position - down;
        day++;
}