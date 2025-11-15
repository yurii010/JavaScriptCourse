// let numberString = "123456";
// function sumOfNumber(data) {
//     if (data.length === 0) return 0;
//     const numb = Number(data[0]);
//     return numb + sumOfNumber(data.slice(1));
// }

// console.log(sumOfNumber(numberString));

let arr = [1, 2, 3, [1, 2, [1, 3, [1, 2, [1, 2, [1, 2, 1, [1, 2, []]]]]]]];
function sumOfArr(data) {
    if (data.length === 0) return 1;
    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i])) {
            return 1 + sumOfArr(data[i]);
        }
    }
}

console.log(sumOfArr(arr));
