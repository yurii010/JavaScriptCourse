// Class
export default async function initClass() {
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
}
