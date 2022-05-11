//Make the Deadfish Swim
function parse(data) {
    let count = [0];
    let result = [];
    data.split("").map((item) => {
        item === "i" ? count[0] = count[0] + 1 :
            item === "d" ? count[0] = count[0] - 1 :
            item === "s" ? count[0] = Math.pow(count[0], 2) :
            item === 'o' ? result.push(count[0]) :
            console.log();
    });
    return (result);
}
console.log(parse("iiisxxxdoso"));