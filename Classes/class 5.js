class Book {
    constructor (isbn, title, author, year, genre, pages, popularity, firstSentence) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.pages = pages;
        this.popularity = popularity;
        this.firstSentence = firstSentence;
    }
    getInfo() {
        return `${this.title} (${this.author}, ${this.year}) — ${this.genre}, ${this.pages} стр.`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getAllBooks() {
        return this.books;
    }

    findMostPopularByAuthor(authorName) {
        const authorBooks = this.books.filter(book => book.author === authorName);
        
        if (authorBooks.length === 0) return null;

        return authorBooks.reduce((best, current) => 
            current.popularity > best.popularity ? current : best
        );
    }

    sortByYear() {
        return [...this.books].sort((a, b) => a.year - b.year);
    }

    printAllBooks() {
        console.log("Все книги:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title}`);
        });
    }

    printMostPopularByAuthor(authorName) {
        const bestBook = this.findMostPopularByAuthor(authorName);
        if (bestBook) {
            console.log(`${authorName}: ${bestBook.title}`);
        } else {
            console.log(`${authorName}: книги не найдены`);
        }
    }

    printSortedByYear() {
        const sorted = this.sortByYear();
        console.log("\nКниги по году выпуска:");
        sorted.forEach(book => {
            console.log(`${book.year} — ${book.title} (${book.author})`);
        });
    }
}

// Создаём библиотеку
const library = new Library();

// Добавляем книги
library.addBook(new Book("978-0-385-12167-5", "Оно", "Стивен Кинг", 1986, "Ужасы", 1138, 5, "Городок Дерри, штат Мэн, был основан в 1741 году."));
library.addBook(new Book("978-0-385-08695-0", "Сияние", "Стивен Кинг", 1977, "Ужасы", 447, 5, "Джек Торранс подумал: отсюда, с этой высоты, отель выглядит совсем не так угрожающе."));
library.addBook(new Book("978-0-451-16071-5", "Зелёная миля", "Стивен Кинг", 1996, "Фэнтези", 432, 4, "Это случилось в 1932 году, когда тюрьма штата ещё носила название Холодная Гора."));
library.addBook(new Book("978-0-670-22026-7", "Мизери", "Стивен Кинг", 1987, "Триллер", 370, 4, "Число 41 было несчастливым, начиная с самого его детства."));
library.addBook(new Book("978-0-743-28941-4", "Тёмная башня: Стрелок", "Стивен Кинг", 1982, "Фэнтези", 224, 3, "Стрелок шёл по пустыне, и пустыня шла за ним."));


library.addBook(new Book("978-0-486-28061-5", "Приключения Тома Сойера", "Марк Твен", 1876, "Приключения", 274, 5, "Том!"));
library.addBook(new Book("978-0-486-61126-1", "Приключения Гекльберри Финна", "Марк Твен", 1884, "Приключения", 366, 5, "Вы не знаете меня, если вы не прочли книгу под названием «Приключения Тома Сойера»."));
library.addBook(new Book("978-0-14-043711-2", "Принц и нищий", "Марк Твен", 1881, "Исторический роман", 288, 3, "В старинном городе Лондоне однажды осенним утром холодного дня XVI века родился мальчик из бедной семьи по имени Том Кенти."));
library.addBook(new Book("978-0-486-40883-7", "Янки из Коннектикута при дворе короля Артура", "Марк Твен", 1889, "Фантастика", 450, 3, "В моём положении мало что может удивить человека."));
library.addBook(new Book("978-0-19-955236-6", "Сто тысяч долларов", "Марк Твен", 1893, "Рассказ", 35, 2, "Я был в Сан-Франциско, когда получил письмо."));


library.addBook(new Book("978-5-389-04915-3", "Евгений Онегин", "Александр Пушкин", 1833, "Роман в стихах", 224, 5, "Мой дядя самых честных правил, когда не в шутку занемог, он уважать себя заставил и лучше выдумать не мог."));
library.addBook(new Book("978-5-389-06147-6", "Капитанская дочка", "Александр Пушкин", 1836, "Исторический роман", 192, 4, "Батюшка мой Андрей Петрович Гринёв в молодости своей служил при графе Минихе."));
library.addBook(new Book("978-5-389-07412-4", "Дубровский", "Александр Пушкин", 1833, "Роман", 128, 4, "Недавно в одном из уездов Б. была сделана вот какая покупка."));
library.addBook(new Book("978-5-389-08001-9", "Пиковая дама", "Александр Пушкин", 1834, "Повесть", 64, 3, "Играли в карты у конногвардейца Нарумова."));
library.addBook(new Book("978-5-389-09234-0", "Медный всадник", "Александр Пушкин", 1833, "Поэма", 48, 3, "На берегу пустынных волн стоял он, дум великих полн."));


library.printAllBooks();

console.log("\nСамые популярные книги:");
library.printMostPopularByAuthor("Стивен Кинг");
library.printMostPopularByAuthor("Марк Твен");
library.printMostPopularByAuthor("Александр Пушкин");

library.printSortedByYear();