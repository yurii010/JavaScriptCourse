// 1е практичне заняття

// const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const watchedFilm = prompt('Один з останніх фільмів, які ви подивились?', '');
// const filmRate = +prompt('На скільки ви його оціните?', '');

// personalMovieDB.movies[watchedFilm] = filmRate;

// console.log(personalMovieDB);

// 2е практичне завдання, більше для практики

// console.log(NaN || 2 || undefined); // виведе 2, тобто true
// console.log(NaN && 2 && undefined); // виведе NaN, тобто false
// console.log(1 && 2 && 3); // виведе 3, тобто true
// console.log(!1 && 2 || !3); // виведе -1, тобто false
// console.log(25 || null && !3); // виведе 25, тобто true
// console.log(NaN || null || !3 || undefined || 5); // виведе 5, тобто true
// console.log(NaN || null && !3 && undefined || 5); // виведе false ! не правильно вгадав, виведе 5
// console.log(5 === 5 && 3 > 1 || 5); // виведе true

// чи виконається?
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
// if (hamburger || fries || cola || nuggets) {
//   console.log("done"); // і воно виконається бо є нагетси
// }

// 3е задачка з пірамідкою
// let str = "";
// for (let i = 1; i < 6; i++) {
//   let res = str + "*";
//   console.log(res);
//   str = res;
// }

// let string = "";
// let length = 10;
// first: for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     if(j===3) continue first;
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// 4е завдання практика циклів і умов

// const numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");

// if (numberOfFilms > 0 && numberOfFilms <= 10) {
//     console.log("Мало");
// } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
//     console.log("Дефолт");
// } else if (numberOfFilms > 30 && numberOfFilms <= 50) {
//     console.log("Кіноман");
// } else {
//     console.log("Помилка");
// }

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// for (let i = 0; i < 2; i++) {
//     const watchedFilm = prompt("Один з останніх фільмів, які ви подивились?", "");
//     const filmRate = +prompt("На скільки ви його оціните?", "");
//     if (watchedFilm && filmRate && watchedFilm.length > 0 && watchedFilm.length < 50 && filmRate > 0 && filmRate <= 10) {
//         personalMovieDB.movies[watchedFilm] = filmRate;
//     } else {
//         console.log('Ще раз!');
//         i--;
//     }
// }

// let i = 0;

// while (i < 2) {
//     const watchedFilm = prompt("Один з останніх фільмів, які ви подивились?", "");
//     const filmRate = +prompt("На скільки ви його оціните?", "");
//     if (watchedFilm && filmRate && watchedFilm.length > 0 && watchedFilm.length < 50 && filmRate > 0 && filmRate <= 10) {
//         personalMovieDB.movies[watchedFilm] = filmRate;
//         i++;
//     } else {
//         console.log("Ще раз!");
//         i--;
//     }
//     if (i < 0) i = 0;
// }

// let i = 0;

// do {
//     const watchedFilm = prompt("Один з останніх фільмів, які ви подивились?", "");
//     const filmRate = +prompt("На скільки ви його оціните?", "");
//     if (watchedFilm && filmRate && watchedFilm.length > 0 && watchedFilm.length < 50 && filmRate > 0 && filmRate <= 10) {
//         personalMovieDB.movies[watchedFilm] = filmRate;
//         i++;
//     } else {
//         console.log("Ще раз!");
//         i--;
//     }
//     if (i < 0) i = 0;
// } while (i < 2);

// console.log(personalMovieDB);

// власна задачка вивести такий малюнок
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

// const string = "     ";
// let arr = string.split("");
// let point = false;

// for (let i = 0; i < 9; i++) {
//     if (i === 5) point = true;
//     if (point) {
//         arr.pop();
//         arr.unshift(" ");
//     } else {
//         arr.shift();
//         arr.push("*");
//     }
//     console.log(arr.join(''));
// }

// 5е практичне завдання

// let numberOfFilms;

// function start() {
//     numberOfFilms = prompt("Скільки фільмів ви вже подивились?", "").trim();

//     while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt("Скільки фільмів ви вже подивились?", "").trim();
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const watchedFilm = prompt("Один з останніх фільмів, які ви подивились?", "").trim();
//         const filmRate = +prompt("На скільки ви його оціните?", "").trim();
//         if (watchedFilm && filmRate && watchedFilm.length > 0 && watchedFilm.length < 50 && filmRate > 0 && filmRate <= 10) {
//             personalMovieDB.movies[watchedFilm] = filmRate;
//         } else {
//             console.log("Ще раз!");
//             i--;
//         }
//     }
// }

// // rememberMyFilms();

// function detectPersonalLevel() {
//     if (numberOfFilms > 0 && numberOfFilms <= 10) {
//         console.log("Мало");
//     } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
//         console.log("Дефолт");
//     } else if (numberOfFilms > 30) {
//         console.log("Кіноман");
//     } else {
//         console.log("Помилка");
//     }
// }

// // detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Впишіть назву вашого улюбленого жанру? Жанр №${i}:`, "").trim();
//         while (genre === null || genre === "") {
//             genre = prompt(`Впишіть назву вашого улюбленого жанру? Жанр №${i}:`, "").trim();
//         }
//         personalMovieDB.genres[i - 1] = genre;
//     }

//     console.log(personalMovieDB);
// }

// writeYourGenres();

// let counter = 0;

// for (let key in phone){
//     counter++;
// }

// const phone = {
//     model: "iphone 12",
//     brand: "apple",
//     color: "black",
//     storage: "64gb",
//     size: {
//         width: "6cm",
//         height: "20cm",
//     },
//     skebob: {
//         ahlelele: {
//             ahlelas: {
//                 oreshki: () => {
//                     console.log("skibi toilet?");
//                 },
//             },
//         },
//     },
//     1: () => {
//         console.log("abchihba");
//     },
//     2: {
//         skebob: {
//             ahlelele: {
//                 ahlelas: {
//                     oreshki: () => {
//                         console.log("big bob");
//                     },
//                 },
//             },
//         },
//     },
// };

// phone[2].skebob["ahlelele"].ahlelas.oreshki();
// phone["skebob"]["ahlelele"].ahlelas.oreshki();

// const arrayOfVlastivosty = Object.keys(phone);
// console.log(arrayOfVlastivosty, arrayOfVlastivosty.length);

// console.log(counter);

// console.log(phone["skebob"]["ahlelele"]["ahlelas"]["oreshki"]);
// console.log(phone.skebob.ahlelele.ahlelas.oreshki);

// for (let key in phone) {
//     if (typeof phone[key] === "object") {
//         for (let i in phone[key]) {
//             console.log(`Властивість ${i} має значення ${phone[key][i]}`);
//         }
//     } else {
//         console.log(`Властивість ${key} має значення ${phone[key]}`);
//     }
// }

// const phone = {
//     model: "iphone 12",
//     brand: "apple",
//     color: "black",
//     storage: "64gb",
//     size: {
//         width: "6cm",
//         height: "20cm",
//     },
// };

// const copy = (obj) => {
//     let resObj = {};
//     for (let key in obj) {
//         resObj[key] = obj[key];
//     }
//     return resObj;
// };

// const copiedObj = copy(phone);

// phone.a = "a";

// copiedObj.b = "b";

// console.log(phone);
// console.log(copiedObj);

// const arr = [1, 2, [3, 8]];
// const arrTwo = arr.slice();
// arrTwo[1] = 5;
// arrTwo[2][1] = 10;
// console.log(arr, arrTwo);

// const f = {
//     a: 1,
//     b: 2,
//     c: {
//         h: 1,
//         j: "f",
//     },
// };

// const b = structuredClone(f);
// b.c.h = 123;
// console.log(f);
// console.log(b);

// structuredClone

let numberOfFilms;
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?", "");
        while (personalMovieDB.count === null || personalMovieDB.count === "" || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?", "");
        }
    },

    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const watchedFilm = prompt("Один з останніх фільмів, які ви подивились?", "");
            const filmRate = prompt("На скільки ви його оціните?", "");
            if (watchedFilm && watchedFilm.length > 0 && watchedFilm.length < 50 && filmRate && filmRate > 0 && filmRate <= 10) {
                personalMovieDB.movies[watchedFilm] = filmRate;
            } else {
                console.log("Ще раз!");
                if (i < 0) i = 0;
                i--;
            }
        }
    },

    detectPersonalLevel: () => {
        if (numberOfFilms > 0 && numberOfFilms <= 10) {
            console.log("Мало");
        } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
            console.log("Дефолт");
        } else if (numberOfFilms > 30) {
            console.log("Кіноман");
        } else {
            console.log("Помилка");
        }
    },

    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibileMyDBL: () => {
        personalMovieDB.privat = !personalMovieDB.privat;
    },

    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Впишіть назву вашого улюбленого жанру? Жанр №${i}:`, "");
            while (genre === null || genre === "") {
                genre = prompt(`Впишіть назву вашого улюбленого жанру? Жанр №${i}:`, "");
            }
            personalMovieDB.genres[i - 1] = genre;
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Улюблений жанр №${index + 1} - це ${item}`);
        });
    },
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibileMyDBL();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();
// console.log(personalMovieDB);
