let maxNum = 9;
let totalRows = maxNum + 1;
let currentMax = maxNum;

while (currentMax >= 0) {
    let line = "";

    let spaces = maxNum - currentMax;
while (spaces > 0) {
    line += "  ";
    spaces--;
}

    let left = currentMax;
while (left >= 0) {
    line += left + " ";
    left--;
}

    let right = 1;
while (right <= currentMax) {
    line += right + " ";
    right++;
}
console.log(line);
currentMax--;
}