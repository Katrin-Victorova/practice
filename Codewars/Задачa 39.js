// String sverage
// среднее арефметическое, сложить и вернуть
function averageString(string) {
    if (!string) return "n/a"; //для пустой строки

    let date = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
    }

    let dateNumber = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    } // скорость

    const da = string.split(" ")
    console.log(da)
    let sum = 0;

    // for (let i = 0; i < da.length; i++) {
    //     if (date[da[i]] !== undefined) {
    //         console.log(date[da[i]])
    //         sum += date[da[i]];
    //     } else {
    //         return "n/a";
    //     }
    // }
    da.forEach(el => {
        if (date[el] !== undefined) {
            sum += date[el];
        } else {
            return "n/a";
        }
    })

    const avg = Math.floor(sum / da.length);

    return dateNumber[avg];
 }

console.log(averageString("zero nine five two")) // "four"
console.log(averageString("zero zero zero zero"))