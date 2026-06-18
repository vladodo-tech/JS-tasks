function simulateSnail() { 
    function climb(pos, up) {
        return pos + up;
    }
    function slide(pos, down) {
        return pos - down;
    }
    function isAtTop(pos, height) {
        return pos >= height;
    }
    function doDay(pos, height, up, down, day) {
        pos = climb(pos, up);
        if (isAtTop(pos, height)) {
            return { finished: true, day: day };
        }
        pos = slide(pos, down);
        return { position: pos, finished: false };
    }
    
    let height = 5, up = 3, down = 2, position = 0;
    for (let day = 1; ; day++) {
        let result = doDay(position, height, up, down, day);
        if (result.finished) {
            console.log("Улитка на вершине! Всего дней: " + result.day);
            break;
        }
        position = result.position;
    }
}
simulateSnail();