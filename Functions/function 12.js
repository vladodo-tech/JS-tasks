function longStrings(array) {
    return array.filter(function(str) {
        return str.length > 5;
    })
}

let words = ["дерево", "небо", "земля", "высота"];
let result = longStrings(words);
console.log(result);