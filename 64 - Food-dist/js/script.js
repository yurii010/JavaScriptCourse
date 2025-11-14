document.addEventListener("DOMContentLoaded", () => {
    // Tabs
    const tabs = document.querySelectorAll(".tabheader__item");
    const tabsContent = document.querySelectorAll(".tabcontent");

    tabs.forEach((item, key) => {
        if (!item.classList.contains("tabheader__item_active")) {
            tabsContent[key].style.display = "none";
        }
    });

    tabs.forEach((item, key) => {
        item.addEventListener("click", () => {
            if (!item.classList.contains("tabheader__item_active")) {
                tabs.forEach((newItem, newKey) => {
                    tabsContent[newKey].style.display = "none";
                    newItem.classList.remove("tabheader__item_active");
                });
            }
            tabsContent[key].style.display = "";
            item.classList.add("tabheader__item_active");
        });
    });

    // Timer

    const deadline = "2026-11-08";

    const getTimeRemaining = (endTime) => {
        const time = Date.parse(endTime) - Date.now() - 2 * 60 * 60 * 1000;
        return {
            total: time,
            days: time < 0 ? 0 : Math.floor(time / (1000 * 60 * 60 * 24)),
            hours: time < 0 ? 0 : Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes: time < 0 ? 0 : Math.floor((time / (1000 * 60)) % 60),
            seconds: time < 0 ? 0 : Math.floor((time / 1000) % 60),
        };
    };

    function setZero(timerNumber) {
        if (timerNumber >= 0 && timerNumber < 10) {
            return `0${timerNumber}`;
        } else {
            return timerNumber;
        }
    }

    function setClock(endTime) {
        const timer = document.querySelector(".timer"),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining(endTime);
            days.innerHTML = t.days;
            hours.innerHTML = setZero(t.hours);
            minutes.innerHTML = setZero(t.minutes);
            seconds.innerHTML = setZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
        updateClock();
    }
    setClock(deadline);

    // Modal
    const modal = document.querySelector(".modal");

    function openModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerID);
    }

    // const modalTimerID = setTimeout(openModal, 10000);

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }

    document.querySelectorAll("[data-modal]").forEach((item) => {
        item.addEventListener("click", openModal);
    });

    document.querySelector("[data-close]").addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });

    function openModalAfterScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
        }
        window.removeEventListener("scroll", openModalAfterScroll);
    }

    window.addEventListener("scroll", openModalAfterScroll); // { once: true } можна додати

    // Class

    const data = [
        [
            "img/tabs/vegy.jpg",
            "vegy",
            'Меню "Фитнес"',
            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            5.7,
        ],
        [
            "img/tabs/elite.jpg",
            "elite",
            'Меню "Премиум"',
            "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
            13.75,
        ],
        [
            "img/tabs/post.jpg",
            "post",
            'Меню "Постное"',
            "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
            10.75,
        ],
    ];

    class Menu {
        constructor(src, alt, title, description, price) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.transfer = 42;
            this.changeToUAH();
        }

        changeToUAH() {
            return (this.price = this.price * this.transfer);
        }

        render() {
            const menu = document.querySelector(".menu .menu__field .container");
            const div = document.createElement("div");
            div.innerHTML = `                
                <div class="menu__item">
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> UAH/день</div>
                    </div>
                </div>`;
            menu.appendChild(div);
        }
    }

    data.forEach((item) => {
        new Menu(...item).render();
    });

    // Fetch modal

    // const message = {
    //     loading: "img/form/spinner.svg",
    //     success: "Спасибо! Скоро мы с вами свяжемся",
    //     failure: "Что-то пошло не так...",
    // };

    const forms = document.querySelectorAll("form");

    forms.forEach((item) => {
        postData(item);
    });

    const postDataToDB = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: data,
        });
        return await res.json();
    };

    function postData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = JSON.stringify(Object.fromEntries(formData.entries()));
            postDataToDB("http://localhost:3000/requests", data).then((response) => {
                console.log(response);
            });
        });
    }
});
