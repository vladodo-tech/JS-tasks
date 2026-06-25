class Employee {
    constructor (name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }
    get age() {
       return this._age;
    }
    set age(years) {
        this._age = years;
    }
    get position() {
        return this._position;
    }
    set position(role) {
        this._position = role;
    }
    get salary() {
        return this._salary;
    }
    set salary(cash) {
        this._salary = cash;
    }
}