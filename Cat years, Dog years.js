//Cat years, Dog years
var humanYearsCatYearsDogYears = function (humanYears) {
    let result = [0, 0, 0];
    result[0] = humanYears;
    if (humanYears == 1) {
        result[1] = 15;
        result[2] = 15;
    } else {
        if (humanYears == 2) {
            result[1] = 24;
            result[2] = 24;
        } else {
            if (humanYears >= 3) {
                result[1] = ((humanYears - 2) * 4) + 24;
                result[2] = ((humanYears - 2) * 5) + 24;
            }
        }
    }
    return result;
};
console.log(humanYearsCatYearsDogYears(10));