const animal = {
    name : "dog",
    legs : 4,
    color : "yellow"
}
function dog(animal) {
    return `This ${animal.color} ${animal.name} has ${animal.legs} legs`;
}
console.log(dog(animal));