function abbrevName(name) {
    let space = name.indexOf(" ");
    let first = name[0].toUpperCase();
    let second = name[space + 1].toUpperCase();
    return first + "." + second;
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("patrick feeney"));
console.log(abbrevName("P Favuzzi"));