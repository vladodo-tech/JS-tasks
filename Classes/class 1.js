class Song {
    constructor(name, author) {
        this._name = name;
        this._author = author;
    }
    get author() {
        return this._author;
    }
    set author(writer) {
        this._author = writer;
    }
}
const creator = new Song("Deb", "Vlad");
console.log(creator.author);