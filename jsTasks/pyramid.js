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
