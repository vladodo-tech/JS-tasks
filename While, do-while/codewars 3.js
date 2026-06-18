let n = 7;
let i = 0;

while (i < n) {
    let row = "";
    let j = 0;

    while (j < i) {
        row += " ";
        j++;
    }
    row += "I";
    console.log(row);
    i++;
}