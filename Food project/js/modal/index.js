// Modal
export default async function initModal() {
    const modal = document.querySelector(".modal");

    function openModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerID);
    }

    const modalTimerID = setTimeout(openModal, 10000);

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
                const inputs = [...form.getElementsByTagName("input")];
                inputs.forEach((input) => {
                    input.value = "";
                });
            });
        });
    }
}
