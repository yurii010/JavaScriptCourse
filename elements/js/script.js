"use strict";

const box = document.getElementById("box");
const buttons = document.getElementsByName("button");
const circle = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const onHearts = document.querySelector(".heart");

const wrapper = document.querySelector(".wrapper");

const div = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");

div.style.backgroundColor = "blue";
div.style.width = '300px';
div.style.height = '300px';

document.body.append(div);
wrapper.append(div1);
wrapper.prepend(div2);
