let library = [
    // Стивен Кинг
    {
        isbn: "978-0-385-12167-5",
        title: "Оно",
        author: "Стивен Кинг",
        year: 1986,
        genre: "Ужасы",
        pages: 1138,
        popularity: 5,
        firstSentence: "Городок Дерри, штат Мэн, был основан в 1741 году."
    },
    {
        isbn: "978-0-385-08695-0",
        title: "Сияние",
        author: "Стивен Кинг",
        year: 1977,
        genre: "Ужасы",
        pages: 447,
        popularity: 5,
        firstSentence: "Джек Торранс подумал: отсюда, с этой высоты, отель выглядит совсем не так угрожающе."
    },
    {
        isbn: "978-0-451-16071-5",
        title: "Зелёная миля",
        author: "Стивен Кинг",
        year: 1996,
        genre: "Фэнтези",
        pages: 432,
        popularity: 4,
        firstSentence: "Это случилось в 1932 году, когда тюрьма штата ещё носила название Холодная Гора."
    },
    {
        isbn: "978-0-670-22026-7",
        title: "Мизери",
        author: "Стивен Кинг",
        year: 1987,
        genre: "Триллер",
        pages: 370,
        popularity: 4,
        firstSentence: "Число 41 было несчастливым, начиная с самого его детства."
    },
    {
        isbn: "978-0-743-28941-4",
        title: "Тёмная башня: Стрелок",
        author: "Стивен Кинг",
        year: 1982,
        genre: "Фэнтези",
        pages: 224,
        popularity: 3,
        firstSentence: "Стрелок шёл по пустыне, и пустыня шла за ним."
    },

    // Марк Твен
    {
        isbn: "978-0-486-28061-5",
        title: "Приключения Тома Сойера",
        author: "Марк Твен",
        year: 1876,
        genre: "Приключения",
        pages: 274,
        popularity: 5,
        firstSentence: "Том!"
    },
    {
        isbn: "978-0-486-61126-1",
        title: "Приключения Гекльберри Финна",
        author: "Марк Твен",
        year: 1884,
        genre: "Приключения",
        pages: 366,
        popularity: 5,
        firstSentence: "Вы не знаете меня, если вы не прочли книгу под названием «Приключения Тома Сойера»."
    },
    {
        isbn: "978-0-14-043711-2",
        title: "Принц и нищий",
        author: "Марк Твен",
        year: 1881,
        genre: "Исторический роман",
        pages: 288,
        popularity: 3,
        firstSentence: "В старинном городе Лондоне однажды осенним утром холодного дня XVI века родился мальчик из бедной семьи по имени Том Кенти."
    },
    {
        isbn: "978-0-486-40883-7",
        title: "Янки из Коннектикута при дворе короля Артура",
        author: "Марк Твен",
        year: 1889,
        genre: "Фантастика",
        pages: 450,
        popularity: 3,
        firstSentence: "В моём положении мало что может удивить человека."
    },
    {
        isbn: "978-0-19-955236-6",
        title: "Сто тысяч долларов",
        author: "Марк Твен",
        year: 1893,
        genre: "Рассказ",
        pages: 35,
        popularity: 2,
        firstSentence: "Я был в Сан-Франциско, когда получил письмо."
    },

    // Александр Пушкин
    {
        isbn: "978-5-389-04915-3",
        title: "Евгений Онегин",
        author: "Александр Пушкин",
        year: 1833,
        genre: "Роман в стихах",
        pages: 224,
        popularity: 5,
        firstSentence: "Мой дядя самых честных правил, когда не в шутку занемог, он уважать себя заставил и лучше выдумать не мог."
    },
    {
        isbn: "978-5-389-06147-6",
        title: "Капитанская дочка",
        author: "Александр Пушкин",
        year: 1836,
        genre: "Исторический роман",
        pages: 192,
        popularity: 4,
        firstSentence: "Батюшка мой Андрей Петрович Гринёв в молодости своей служил при графе Минихе."
    },
    {
        isbn: "978-5-389-07412-4",
        title: "Дубровский",
        author: "Александр Пушкин",
        year: 1833,
        genre: "Роман",
        pages: 128,
        popularity: 4,
        firstSentence: "Недавно в одном из уездов Б. была сделана вот какая покупка."
    },
    {
        isbn: "978-5-389-08001-9",
        title: "Пиковая дама",
        author: "Александр Пушкин",
        year: 1834,
        genre: "Повесть",
        pages: 64,
        popularity: 3,
        firstSentence: "Играли в карты у конногвардейца Нарумова."
    },
    {
        isbn: "978-5-389-09234-0",
        title: "Медный всадник",
        author: "Александр Пушкин",
        year: 1833,
        genre: "Поэма",
        pages: 48,
        popularity: 3,
        firstSentence: "На берегу пустынных волн стоял он, дум великих полн."
    }
];

console.log("Все книги:");
for (let i = 0; i < library.length; i++) {
    console.log((i + 1) + "." + library[i].title);
}

function findMostPopularByAuthor(authorName) {
    let maxPopularity = 0;
    let bestBook = null;
    
    for (let i = 0; i < library.length; i++) {
        if (library[i].author === authorName) {
            if (library[i].popularity > maxPopularity) {
                maxPopularity = library[i].popularity;
                bestBook = library[i];
            }
        }
    }
    
    return bestBook;
}

console.log("\nСамые популярные книги:");

let kingBest = findMostPopularByAuthor("Стивен Кинг");
console.log("Стивен Кинг: " + kingBest.title + "");

let twainBest = findMostPopularByAuthor("Марк Твен");
console.log("Марк Твен: " + twainBest.title + "");

let pushkinBest = findMostPopularByAuthor("Александр Пушкин");
console.log("Александр Пушкин: " + pushkinBest.title + "");

let sortedByYear = [];

for (let i = 0; i < library.length; i++) {
    sortedByYear[i] = library[i];
}

for (let i = 0; i < sortedByYear.length - 1; i++) {
    for (let j = 0; j < sortedByYear.length - 1 - i; j++) {
        if (sortedByYear[j].year > sortedByYear[j + 1].year) {
            let temp = sortedByYear[j];
            sortedByYear[j] = sortedByYear[j + 1];
            sortedByYear[j + 1] = temp;
        }
    }
}

console.log("\nКниги по году выпуска:");
for (let i = 0; i < sortedByYear.length; i++) {
    console.log(sortedByYear[i].year + " - " + sortedByYear[i].title + " (" + sortedByYear[i].author + ")");
}