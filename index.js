// // // const shops = [
// // //     {
// // //         rice: 500,
// // //     },
// // //     { grechka: 700 },
// // //     { potato: 900 },
// // // ];
// // // const budget = [10, 20, 30];

// // // const map = new Map();
// // // shops.forEach((shop, i) => {
// // //     map.set(shop, budget[i]);
// // // });

// // // console.log(map);

// // let id = setTimeout(function log() {
// //     console.log("hello");
// //     id = setTimeout(log, 1000);
// // }, 1000);

// // function Car(marka, model) {
// //     this.marka = marka;
// //     this.model = model;
// //     this.wheels = true;
// //     this.saySomething = (total) => {
// //         total ? console.log("не тотал бо є колеса") : console.log("тотал нема колес");
// //     };
// // }
// // Car.prototype.whelewhele = () => {
// //     console.log("whelewhele");
// // };
// // const logan = new Car("renault", "logan");
// // console.log(logan.marka);
// // console.log(logan.model);
// // logan.saySomething(logan.wheels);
// // logan.wheels = false;
// // logan.saySomething(logan.wheels);
// // logan.whelewhele();

// function asdf() {
//     console.log(this.box);
// }

// const content = {
//     box: "box box",
// };

// const jimicho = (numb) => {
//     return numb + this;
// };

// asdf.call(content);
// asdf.apply(content);

// const res = jimicho.bind(2);
// console.log(res(2));
// console.log(res(4));

let lines = 3;
let result = "";
let symb = "*";
let space_symb = " ";
let space = lines;
let bool = false;

for (let i = 0, j = 1; i - 1 < lines; i++, space--) {
    result += space_symb.repeat(space);
    bool ? (result += symb.repeat(j)) : (result += symb);
    result += space_symb.repeat(space);
    result += "\n";
    bool = true;
    j += 2;
}

console.log(result);
