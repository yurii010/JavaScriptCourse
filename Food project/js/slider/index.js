// Slider
export default function initSlider() {
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

            showCurrentAndTotal();
        });
    });

    // Old slider
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
}
