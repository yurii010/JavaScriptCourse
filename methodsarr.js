const films = [
    {
        name: "Titanic",
        rating: 9,
    },
    {
        name: "Die hard 5",
        rating: 5,
    },
    {
        name: "Matrix",
        rating: 8,
    },
    {
        name: "Some bad film",
        rating: 4,
    },
];

// function showListOfFilms(arr) {
//     let initialState = "";
//     return arr.reduce((acc, item, index, array) => {
//         return acc + item.name + (array.length === index) ? "" : ", ";
//     }, initialState);
// }

// function setFilmsIds(arr) {
//     return arr.map((item, index) => {
//         return Object.assign({ id: index }, item);
//     });
// }
// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//     const checkKeys = arr.map((item) => {
//         return Object.keys(item).some((item) => item === "id");
//     });
//     return checkKeys.some((item) => item === false) ? false : true;
// }

// console.log(checkFilms(tranformedArray));

const funds = [{ amount: -1400 }, { amount: 2400 }, { amount: -1000 }, { amount: 500 }, { amount: 10400 }, { amount: -11400 }];

const getPositiveIncomeAmount = (data) => {
    return data.reduce((acc, item) => {
        return item.amount > 0 ? acc + item.amount : acc + 0;
    }, 0);
};

const getTotalIncomeAmount = (data) => {
    const arrData = data.some((item) => {
        return item > 0;
    });
    return arrData
        ? getPositiveIncomeAmount(data)
        : data.reduce((acc, item) => {
              return acc + item.amount;
          }, 0);
};

// // Место для первой задачи
// function sayHello(name) {
//     return `Hello ${name}`;
// }

// // Место для второй задачи
// function returnNeighboringNumbers(number) {
//     return [number - 1, number, number + 1];
// }

// Место для третьей задачи
function getMathResult(numbOne, numbTwo) {
    let res = ``;
    if (isNaN(numbTwo) || numbTwo <= 0) return numbOne;
    let lastNumb = numbOne;
    if (typeof numbTwo !== "number" && numbTwo < 0) return numbOne;
    for (let i = 0; i < numbTwo; i++) {
        res += i + 1 === numbTwo ? lastNumb : lastNumb + `---`;
        lastNumb = lastNumb + numbOne;
    }
    return res;
}

console.log(getMathResult(5, ''));
