/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
    };
    //1
    const promo__adv = document.querySelector(".promo__adv");
    const imagesInPromoAdv = promo__adv.getElementsByTagName("img");
    const arrOfImg = new Array(...imagesInPromoAdv);
    arrOfImg.forEach((item) => {
        item.remove();
    });
    //2
    document.querySelector(".promo__genre").innerHTML = "ДРАМА";
    //3
    const promoBg = document.querySelector(".promo__bg");
    promoBg.style.backgroundImage = 'url("img/bg.jpg")';

    //4 + 5
    function renderAndSortMovies(db) {
        const sortedMovies = db.movies.sort();

        const promoInteractiveChildrens = new Array(...document.querySelector(".promo__interactive-list").children);
        promoInteractiveChildrens.map((item, index) => {
            item.innerText = sortedMovies[index];
            item.innerText = `${index + 1}. ${item.innerText}`;
        });
    }
    renderAndSortMovies(movieDB);

    // інші задачі
    // 1 + 2
    function submitForm(db) {
        const input = document.querySelector(".adding__input");
        let value = input.value;
        if (value.length < 1) return;
        if (value.length > 20) value = value.slice(0, 20) + "...";
        db.movies.push(value);
        db.movies.sort();
        renderAndSortMovies(db);
        value = "";
    }

    // 3
    

    // 4
    function checkFavoriteFilm() {
        const checkbox = document.querySelector(".add").querySelector("input[type=checkbox]");

        if (checkbox.checked) {
            console.log("Додаєм улюблений фільм");
        }
    }

    // 5

    document
        .querySelector(".add")
        .querySelector("button")
        .addEventListener("click", (e) => {
            e.preventDefault();
            checkFavoriteFilm();
            submitForm(movieDB);
            console.log(movieDB);
        });
});
