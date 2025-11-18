document.addEventListener("DOMContentLoaded", async () => {
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
    class Menu {
        constructor({ src, alt, title, description, price }) {
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

    const getResource = async () => {
        const res = await axios.get("http://localhost:3000/menu");
        return res.data;
    };
    const data = await getResource();

    data.forEach((item) => {
        new Menu({ ...item }).render();
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
        const res = await axios.post(url, data);
        return res;
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

    // Slider

    const slides = document.querySelectorAll(".offer__slide");
    const slider = document.querySelector(".offer__slider");
    const prev = document.querySelector(".offer__slider-prev");
    const next = document.querySelector(".offer__slider-next");
    const slidesWrapper = document.querySelector(".offer__slider-wrapper");
    const slidesField = document.querySelector(".offer__slider-inner");
    const width = window.getComputedStyle(slidesWrapper).width;
    const dots = [];

    let i = 1;
    let offset = 0;

    function deleteNoDigits(value) {
        return +value.replace(/\D/g, "");
    }

    function showCurrentAndTotal() {
        if (i < 1) {
            i = slides.length;
        }
        if (i > slides.length) {
            i = 1;
        }
        dots.forEach((dot) => {
            dot.style.opacity = ".5";
        });
        dots[i - 1].style.opacity = 1;
        document.querySelector("#current").textContent = `${i}`;
        document.querySelector("#total").textContent = `${slides.length}`;
    }

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";

    slidesWrapper.style.overflow = "hidden";
    slides.forEach((slide) => {
        slide.style.width = width;
    });

    slider.style.position = "relative";
    const indicators = document.createElement("ol");
    indicators.classList.add("carousel-indicators");
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);
        dot.classList.add("dot");
        indicators.append(dot);
        if (i == 0) dot.style.opacity = 1;
        dots.push(dot);
    }

    showCurrentAndTotal();

    next.addEventListener("click", () => {
        i++;
        showCurrentAndTotal();
        if (offset == deleteNoDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNoDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener("click", () => {
        i--;
        showCurrentAndTotal();
        if (offset == 0) {
            offset = deleteNoDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNoDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");
            i = slideTo;
            offset = deleteNoDigits(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach((dot) => {
                dot.style.opacity = ".5";
            });
            dots[i - 1].style.opacity = 1;
        });
    });

    // showSlides(i);
    // prev.addEventListener("click", () => {
    //     i--;
    //     if (i < 1) i = slides.length;
    //     showSlides(i);
    // });
    // next.addEventListener("click", () => {
    //     i++;
    //     if (i > slides.length) i = 1;
    //     showSlides(i);
    // });

    // function showSlides(n) {
    //     slides.forEach((item) => (item.style.display = "none"));
    //     slides[n - 1].style.display = "block";
    //     document.querySelector("#current").innerHTML = `${n}`;
    //     document.querySelector("#total").innerHTML = `${slides.length}`;
    // }
});
