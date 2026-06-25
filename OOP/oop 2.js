class Shape {
    constructor (name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        const perimeter = this.sides * this.sideLength;
        return perimeter;
    }
}
const square = new Shape("square", 4, 5);
//const result = square.calcPerimeter();
//console.log(result);

//const triangle = new Shape("triangle", 3, 3);
//console.log(triangle.calcPerimeter());

class Square extends Shape {
    constructor (sideLength, name = square, sides = 4) {
        super(name, sides, sideLength);
    }
    calcArea() {
        const squareResult = this.sideLength * this.sideLength;
        return squareResult;
    }
}
const area = new Square(2);
console.log(area.calcArea());
console.log(area.calcPerimeter());