function howMuchILoveYou(nbPetals) {
    const remainder = nbPetals % 6;
    
    if (remainder === 1) return "I love you";
    if (remainder === 2) return "a little";
    if (remainder === 3) return "a lot";
    if (remainder === 4) return "passionately";
    if (remainder === 5) return "madly";
    return "not at all";
}
console.log(howMuchILoveYou(1));