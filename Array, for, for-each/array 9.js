let height = 5;
let up = 3;
let down = 2;
let position = 0;

for (let day = 1; position < height; day++) {
    position += up;
    
    if (position >= height) {
        console.log("Улитка на вершине! Всего дней: " + day);
    } else {
        position -= down;
    }
}