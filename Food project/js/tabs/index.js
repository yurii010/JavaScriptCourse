// Tabs
export default function initTabs() {
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
}
