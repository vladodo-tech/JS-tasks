let index = ["0 ", "1 ", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", "8 ", "9 ", "0 " ];
let maxNum = 9;

let row = 1;
while (row <= maxNum + 1) {
    let line = "";

    let spaces = maxNum + 1 - row;
    while (spaces > 0) {
        line += "  ";
        spaces--;
    }

    let left = 1;
    while (left <= row) {
        line += index[left];
        left++;
    }
    let right = row - 1;
    while (right >= 1) {
        line += index[right];
        right--;
    }
    console.log(line);
    row++;
}
    
    row = maxNum;
    while (row >= 1) {
        let line = "";

        let spaces = maxNum + 1 - row;
        while (spaces > 0) {
            line += "  ";
            spaces--;
        }

        let left = 1;
        while (left <= row) {
            line += index[left];
            left++;
        }

        let right = row - 1;
        while (right >= 1) {
            line += index[right];
            right--;
        }
        console.log(line);
        row--;
    }