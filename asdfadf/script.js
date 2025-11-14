"use strict";

const box = document.querySelector(".box");

const observer = new MutationObserver((changes) => {
    console.log(changes);
});

observer.observe(box, { childList: true });
