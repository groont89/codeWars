//Turn with a Compass
function direction(facing, turn) {
    let directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    let turns = turn / 45;
    let start = directions.indexOf(facing);
    let end = (start + turns) % directions.length;
    if (end >= 0) {
        return directions[end];
    } else {
        let n = end * (-1);
        return directions[directions.length - n];
    }
}
console.log(direction("S", 180));