import initTabs from "./tabs/index.js";
import initCalc from "./calc/index.js";
import initModal from "./modal/index.js";
import initSlider from "./slider/index.js";
import initTimer from "./timer/index.js";
import initClass from "./class/index.js";

document.addEventListener("DOMContentLoaded", async () => {
    initTabs();
    initCalc();
    await initModal();
    initSlider();
    initTimer("2026-11-08");
    await initClass();
});
