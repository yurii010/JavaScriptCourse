const students = ["Peter", "Andrew", "Ann", "Mark", "Josh", "Sandra", "Cris", "Bernard", "Takesi", "Sam"];

function sortStudentsByGroups(arr) {
    const sortedArr = arr.sort();
    let resultArr = [];
    if (sortedArr.length % 3 !== 0) {
        for (let i = 0; i < sortedArr.length; i++) {
            resultArr.push(sortedArr.splice(0, 3));
        }
        if (sortedArr.length > 0 && sortedArr.length < 3) {
            resultArr.push(`Оставшиеся студенты: ${sortedArr.join(", ")}`);
        }
    } else {
        for (let i = 0; i < sortedArr.length; i++) {
            resultArr.push(sortedArr.splice(0, 3));
            if (sortedArr.length === 3) i--;
        }
        resultArr.push("Оставшиеся студенты: -");
    }
    return resultArr;
}

console.log(sortStudentsByGroups(students));
