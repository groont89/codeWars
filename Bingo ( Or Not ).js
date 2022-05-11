//Bingo ( Or Not )
function bingo(a) {
    let arrBingo = [2, 7, 9, 14, 15];
    let arr = [];
    let result = a.sort((a, b) => a - b);
    let answer = (result.filter((item) => arrBingo.indexOf(item) != -1));
    answer.map((item) => {
        (arr.indexOf(item) === -1) ? arr.push(item): 1;
    });
    if (arrBingo.join("") == arr.join("")) {
        return "WIN";
    } else {
        return "LOSE";
    }
}
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]));